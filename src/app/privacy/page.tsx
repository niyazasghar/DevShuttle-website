export default function PrivacyPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 pb-32 font-light">
      <section className="container-wide mb-24 lg:mb-32">
        <div className="max-w-4xl">
          <span className="eyebrow">Data Governance</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-10 leading-none tracking-tighter">
            Privacy <br />
            <span className="text-brand-gray-700">Policy.</span>
          </h1>
          <p className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed">
            At DevShuttle, we take data privacy and intellectual property with the highest degree of technical seriousness.
          </p>
        </div>
      </section>

      <section className="container-wide">
        <div className="max-w-3xl prose prose-invert prose-lg text-brand-gray-400 font-light leading-relaxed">
          <div className="space-y-16">
             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">1. Data Storage</h2>
                <p>
                  We do not store client data on our own internal servers. All client-specific software development, including production databases, is hosted on the client's own cloud infrastructure (AWS/Vercel/etc.) with secure VPC configurations.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">2. Information Collection</h2>
                <p>
                  We only collect minimum information necessary for project engagement, including names, business email addresses, and project requirement documents. We use this strictly for communication and project management.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">3. Third-Party Access</h2>
                <p>
                  We do not sell or share client information with third-party marketing companies. Access to project repositories is restricted to authorized DevShuttle engineering team members only.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">4. Encryption Standards</h2>
                <p>
                  Any passwords or technical keys shared via secure communication channels are encouraged to be stored in industry-standard vaults (LastPass/Dashlane). We implement end-to-end encryption in our internal team communications.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">5. Updates</h2>
                <p>
                   We may update this policy periodically to reflect changes in global data regulations. The date of the latest update will always be visible on this page.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
