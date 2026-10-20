import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Treescape Living',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto prose prose-neutral">
      <h1 className="text-4xl font-serif text-neutral-900 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-neutral-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-serif text-neutral-900">1. Information Collection</h2>
        <p>Treescape Living collects information you provide directly to us when you fill out a contact form, request a quote, or communicate with us via WhatsApp, email, or phone. This may include your name, contact details, and project requirements.</p>

        <h2 className="text-2xl font-serif text-neutral-900">2. Use of Information</h2>
        <p>We use the information we collect to respond to your inquiries, provide our services, and communicate with you about your projects.</p>

        <h2 className="text-2xl font-serif text-neutral-900">3. Cookies</h2>
        <p>Our website may use cookies and similar tracking technologies to track the activity on our website and hold certain information to improve your browsing experience.</p>

        <h2 className="text-2xl font-serif text-neutral-900">4. Third-Party Services</h2>
        <p>We do not sell your personal data. We may use third-party services (such as WhatsApp for communication) which have their own privacy policies governing data usage.</p>

        <h2 className="text-2xl font-serif text-neutral-900">5. Data Security</h2>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>

        <h2 className="text-2xl font-serif text-neutral-900">6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: treescapeliving@gmail.com<br/>Phone: 7665554027</p>
      </div>
    </main>
  );
}
