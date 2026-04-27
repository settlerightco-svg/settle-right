# 📄 Product Requirements Document (PRD)

## Product: SettleRight Landing Page  
**Owner:** Divyansh Garg  
**Goal:** Capture early interest and validate demand for SettleRight (UAE relocation platform)

---

# 🎯 1. Objective

Create a simple, high-converting landing page to:
- Communicate SettleRight’s value proposition clearly
- Capture detailed user intent for early access
- Establish credibility and future direction

---

# 👤 2. Target Users

**Primary ICP:**
- Self-sponsored expats moving to UAE  
- Remote workers / freelancers / founders  
- Individuals confused about visa, banking, housing processes  

---

# 🧠 3. Core Value Proposition

> SettleRight simplifies relocation to the UAE through AI-powered guidance across visas, banking, housing, and compliance.

---

# 📐 4. Page Structure (Top → Bottom)

## 4.1 Hero Section (Above the Fold)

### Components
- **Logo/Text:** `SettleRight` (large, bold)
- **Tagline:**  
  `Your AI-powered relocation assistant to UAE`
- **Status Text:**  
  `Coming Soon`

---

## 4.2 Early Access Form Section (Replaces Simple Subscribe)

### Heading
**Get Early Access**

### Form Fields

1. **Name**
   - Input type: Text  
   - Required: Yes  

2. **Email Address**
   - Input type: Email  
   - Required: Yes  
   - Validation: Standard email format  

3. **Current Country**
   - Input type: Dropdown  
   - Required: Yes  
   - Options: All countries (ISO country list)  

4. **Planning to Move To**
   - Input type: Dropdown  
   - Required: Yes  
   - Options (7 Emirates):
     - Dubai  
     - Abu Dhabi  
     - Sharjah  
     - Ajman  
     - Ras Al Khaimah  
     - Fujairah  
     - Umm Al Quwain  

5. **Reason to Move**
   - Input type: Textarea  
   - Required: No (but encouraged)  
   - No character or word limit  

6. **Subscribe Option**
   - Checkbox: “Subscribe for Early Access”  
   - Required: Yes  

---

### CTA Button
**Submit / Join Waitlist**

---

### UX Requirements
- Clean, minimal form layout  
- Single-column design  
- Mobile-friendly  
- Fast interaction  

---

### Functional Requirements
- Validate required fields  
- Email validation  
- Store all responses in database (Supabase recommended)  
- Handle states:
  - Default  
  - Loading  
  - Success → “You’re on the list 🚀”  
  - Error  

---

## 4.3 About Section

### Heading
**What is SettleRight?**

### Content
SettleRight is building an AI-powered platform to simplify relocation to the UAE.  
From visas and medical tests to banking and housing, we aim to bring every step of the relocation journey into one seamless experience.

Whether you're a remote worker, founder, or moving with family, SettleRight will provide:
- Clear cost breakdowns  
- Step-by-step guidance  
- Verified service providers  
- Real-time AI-powered support  

**Goal:** Remove uncertainty, reduce friction, and make relocation predictable.

---

# ⚙️ 5. Functional Requirements

- Multi-field form capture  
- Store structured data:
  - Name  
  - Email  
  - Country  
  - Emirate  
  - Reason  
  - Subscription status  
- Prevent empty submissions  
- Optional: prevent duplicate emails  

---

# 🎨 6. Design Guidelines

- Minimal, premium (Stripe/Notion style)  
- Clean typography (Inter / SF Pro)  
- Mobile-first  
- Strong spacing between form fields  

---

# 📱 7. Responsiveness

- Desktop, tablet, mobile  
- Full-width inputs on mobile  
- Dropdowns optimized for touch  

---

# ⚡ 8. Performance Requirements

- Load time < 2 seconds  
- Minimal assets  

---

# 📊 9. Success Metrics

- Form completion rate  
- Email conversion rate  
- Drop-off rate per field  

---

# 🚀 10. MVP Scope

## Build Only
- Hero section  
- Full form (all fields above)  
- About section  

## Avoid
- Animations  
- Complex backend logic  

---

# 🧠 11. Positioning Reminder

❌ Not just a relocation service  
✅ AI-powered relocation layer
