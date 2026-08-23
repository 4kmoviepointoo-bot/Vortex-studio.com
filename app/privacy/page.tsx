import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Vortex Studio. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-950 mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Last updated:</strong> August 23, 2026
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 mb-4">
            When you visit Vortex Studio, we may collect certain information automatically, including your IP address, browser type, operating system, and browsing behavior. We also collect information you voluntarily provide, such as your name, email address, and project details when you fill out our contact or inquiry forms.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">
            We use the information we collect to respond to your inquiries, provide our services, improve our website, and send occasional marketing communications (with your consent). We do not sell or rent your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">3. Cookies and Tracking</h2>
          <p className="text-slate-600 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Essential cookies required for the website to function cannot be disabled.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">4. Data Security</h2>
          <p className="text-slate-600 mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">5. Your Rights</h2>
          <p className="text-slate-600 mb-4">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at{' '}
            <a href="mailto:asgah960@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              asgah960@gmail.com
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">6. Contact Us</h2>
          <p className="text-slate-600 mb-4">
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:asgah960@gmail.com" className="text-emerald-600 hover:text-emerald-700">
              asgah960@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}