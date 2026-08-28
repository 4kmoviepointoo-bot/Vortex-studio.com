import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Vortex Studio. Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-950 mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Last updated:</strong> August 23, 2026
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-4">
            By accessing and using Vortex Studio&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">2. Services</h2>
          <p className="text-slate-600 mb-4">
            Vortex Studio provides digital product design, development, and growth engineering services. The scope, timeline, and pricing of each project are defined in individual project agreements or proposals.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-slate-600 mb-4">
            Upon full payment, clients receive ownership of all deliverables created specifically for their project. Vortex Studio retains the right to display work in portfolios and marketing materials unless otherwise agreed.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">4. Payment Terms</h2>
          <p className="text-slate-600 mb-4">
            Payment terms are defined in individual project agreements. Late payments may incur additional fees. Retainer services are billed monthly in advance.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-slate-600 mb-4">
            Vortex Studio shall not be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
          </p>

          <h2 className="text-2xl font-bold text-slate-950 mt-8 mb-4">6. Contact</h2>
          <p className="text-slate-600 mb-4">
            For questions about these Terms, contact us at{' '}
            <a href="mailto:asgah960@gmail.com" className="text-amber-700 hover:text-amber-800">
              asgah960@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}