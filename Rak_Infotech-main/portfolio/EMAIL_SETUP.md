# Email Setup Guide for RAK Infotech Portfolio

## Using EmailJS for Email Functionality

This portfolio uses **EmailJS** to handle email sending directly from React without requiring a backend server.

### Setup Steps:

#### 1. Create a Free EmailJS Account
- Visit: https://www.emailjs.com/
- Sign up for a free account
- Confirm your email

#### 2. Create Email Service
In the EmailJS dashboard:
- Go to **Email Services**
- Click **Add Service**
- Select your email provider (Gmail, Outlook, etc.) or use Default Service
- Note your **Service ID** (e.g., `service_xxxxxxx`)

#### 3. Create Email Templates
Create two templates in **Email Templates**:

**Template 1: Contact Form Template**
- Name: "Contact Form"
- Template ID will be something like: `template_xxxxxxx`
- In the template editor, add these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{phone}}` - Sender's phone
  - `{{subject}}` - Message subject
  - `{{message}}` - Message content

**Template 2: Newsletter Subscription (Optional)**
- Name: "Newsletter"
- Template ID: `template_xxxxxxx`

#### 4. Get Your Public Key
- Go to **Account** settings
- Copy your **Public Key**

#### 5. Configure Environment Variables
Create a `.env` file in the project root with:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE_ID=template_xxxxxxx
REACT_APP_COMPANY_EMAIL=info@rakinfotech.com
```

#### 6. Install EmailJS Package
```bash
npm install @emailjs/browser
```

#### 7. Test the Contact Form
- Run the development server: `npm start`
- Navigate to the Contact section
- Fill in the form and submit
- Check that emails are received

### Email Features

✅ **Contact Form Emails**
- Sends inquiry to company inbox
- Sends confirmation email to user

✅ **Newsletter Subscription**
- Sends welcome email to subscriber

✅ **No Backend Required**
- Works entirely on the frontend
- No server setup needed
- Cost-effective (EmailJS has a free tier with 200 emails/month)

### Troubleshooting

**Emails not sending:**
1. Check that `.env` variables are set correctly
2. Verify Service ID and Template ID in EmailJS dashboard
3. Check browser console for error messages
4. Ensure your email service is verified in EmailJS

**CORS Issues:**
- EmailJS handles CORS automatically
- No additional configuration needed

### Notes

- The `server.js` file created earlier is not needed and can be deleted
- The application is now fully React-based
- No database or backend server required
- Perfect for static hosting (Netlify, Vercel, GitHub Pages, etc.)

### Deployment

When deploying:
1. Set environment variables in your hosting platform
2. No special server configuration needed
3. Works with any static hosting service
