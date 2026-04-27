import nodemailer from "nodemailer";

const smtpHost = process.env.EMAIL_SMTP_HOST;
const smtpPort = process.env.EMAIL_SMTP_PORT;
const smtpUser = process.env.EMAIL_SMTP_USER;
const smtpPass = process.env.EMAIL_SMTP_PASSWORD;
const emailRecipient = process.env.EMAIL_TO;

function hasEmailConfig() {
  return Boolean(smtpHost && smtpPort && smtpUser && smtpPass && emailRecipient);
}

export async function sendWaitlistNotification(data: {
  name: string;
  email: string;
  country: string;
  emirate: string;
  reason?: string;
  subscribe: boolean;
}) {
  if (!hasEmailConfig()) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const { name, email, country, emirate, reason, subscribe } = data;

  const textBody = [
    "New early access signup from SettleRight.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Country: ${country}`,
    `Emirate: ${emirate}`,
    `Subscribe: ${subscribe ? "Yes" : "No"}`,
  ];

  if (reason) {
    textBody.push(`Reason: ${reason}`);
  }

  await transporter.sendMail({
    from: `"SettleRight Notifications" <${smtpUser}>`,
    to: emailRecipient!,
    subject: `New SettleRight waitlist signup: ${name}`,
    text: textBody.join("\n"),
  });
}
