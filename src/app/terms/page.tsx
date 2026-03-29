export default function TermsPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 pb-32 font-light">
      <section className="container-wide mb-24 lg:mb-32">
        <div className="max-w-4xl">
          <span className="eyebrow">Legal Framework</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-10 leading-none tracking-tighter">
            Terms & <br />
            <span className="text-brand-gray-700">Conditions.</span>
          </h1>
          <p className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed">
            Please read these terms carefully before engaging with DevShuttle Studio. By using our services, you agree to the conditions outlined below.
          </p>
        </div>
      </section>

      <section className="container-wide">
        <div className="max-w-3xl prose prose-invert prose-lg text-brand-gray-400 font-light leading-relaxed">
          <div className="space-y-16">
             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">1. Engagement Policy</h2>
                <p>
                  Engaging with DevShuttle requires a formal agreement or statement of work (SOW) signed by both parties. All projects are built on an engineering-led roadmap with clear milestones.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">2. Intellectual Property</h2>
                <p>
                  Unless otherwise specified in the project agreement, full intellectual property rights to the custom source code developed for the client are transferred upon final payment settlement.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">3. Payment & Milestones</h2>
                <p>
                  Payments are typically structured around project milestones (e.g., Discovery, Beta, Final Launch). Invoices are due within 14 days of issuance unless otherwise agreed.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">4. Limitation of Liability</h2>
                <p>
                  DevShuttle provides high-performance technical engineering, but we are not liable for business losses, data breaches on third-party hosting, or external API failures beyond our direct code control.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">5. Governing Law</h2>
                <p>
                   These terms are governed by the laws of India. Any disputes arising from these terms will be settled in the jurisdiction of the courts in [Your City/State].
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
