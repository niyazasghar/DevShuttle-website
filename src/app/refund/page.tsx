export default function RefundPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 pb-32 font-light">
      <section className="container-wide mb-24 lg:mb-32">
        <div className="max-w-4xl">
          <span className="eyebrow">Service Assurance</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-10 leading-none tracking-tighter">
            Refund <br />
            <span className="text-brand-gray-700">Policy.</span>
          </h1>
          <p className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed">
            Please review our refund and cancellation policies regarding engineering services and prebuilt software assets.
          </p>
        </div>
      </section>

      <section className="container-wide">
        <div className="max-w-3xl prose prose-invert prose-lg text-brand-gray-400 font-light leading-relaxed">
          <div className="space-y-16">
             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">1. Custom Engineering Services</h2>
                <p>
                  As custom software engineering is a service-based labor-intensive process, we do not offer refunds once a project milestone has been successfully signed off and delivered. We ensure transparency through bi-weekly sprint demos.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">2. Prebuilt Software Assets</h2>
                <p>
                  For prebuilt solutions where source code access is provided, all sales are final. Once the digital asset (code repository) has been shared with the client, refunds cannot be processed due to the digital nature of the product.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">3. Project Cancellation</h2>
                <p>
                  Clients may cancel a project engagement at any given milestone stage with a written 14-day notice. We will settle final payments for any work completed up to the date of notice.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">4. Quality Assurance</h2>
                <p>
                  If a significant technical bug is discovered in our delivered custom code within the first 30 days post-launch, we will fix it at no additional cost as part of our technical guarantee.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-10">5. Exceptional Cases</h2>
                <p>
                   Any exceptional refund requests due to proven technical negligence will be reviewed by our senior leadership on a case-by-case basis within 30 days of the request.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
