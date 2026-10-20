import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Treescape Living',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto prose prose-neutral">
      <h1 className="text-4xl font-serif text-neutral-900 mb-8">Terms of Service</h1>
      <div className="space-y-6 text-neutral-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-serif text-neutral-900">1. Use of Website</h2>
        <p>By accessing and using the Treescape Living website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>

        <h2 className="text-2xl font-serif text-neutral-900">2. Intellectual Property</h2>
        <p>The content, organization, graphics, design, and other matters related to the site are protected under applicable copyrights and intellectual property laws. The copying, redistribution, use, or publication by you of any such matters or any part of the site is strictly prohibited.</p>

        <h2 className="text-2xl font-serif text-neutral-900">3. Limitation of Liability</h2>
        <p>Under no circumstances shall Treescape Living be liable for any direct, indirect, special, incidental, or consequential damages that result from the use of, or the inability to use, the materials on this site.</p>

        <h2 className="text-2xl font-serif text-neutral-900">4. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>

        <h2 className="text-2xl font-serif text-neutral-900">5. Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at:</p>
        <p>Treescape Living<br/>Email: treescapeliving@gmail.com</p>
      </div>
    </main>
  );
}
