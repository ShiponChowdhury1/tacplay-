import Link from "next/link";

export default function WebsiteDisclaimer() {
    return (
        <main className="min-h-screen bg-black">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
                        ← Back
                    </Link>
                    <h1 className="mb-2 text-4xl font-bold text-white">Disclaimer</h1>
                    <p className="text-secondary">Last Updated: May 07, 2026</p>
                </div>

                <div className="space-y-10 text-secondary">
                    {/* Website Disclaimer */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-white">WEBSITE DISCLAIMER</h2>

                        <p className="mb-6">
                            The information provided by TACPLAY EUROPE S.L. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) on
                            <a href="https://www.tacplay.eu" className="text-primary hover:underline"> https://www.tacplay.eu </a>
                            (the &ldquo;Site&rdquo;) and our mobile application is for general informational purposes only.
                        </p>

                        <p className="mb-6">
                            All information on the Site and our mobile application is provided in good faith, however we make no
                            representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
                            reliability, availability, or completeness of any information on the Site or our mobile application.
                        </p>

                        <p className="mb-8 font-medium text-red-400">
                            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
                            AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED
                            ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR
                            RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
                        </p>
                    </section>

                    {/* Testimonials Disclaimer */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-white">TESTIMONIALS DISCLAIMER</h2>

                        <p className="mb-4">
                            The Site may contain testimonials by users of our products and/or services. These testimonials reflect
                            the real-life experiences and opinions of such users. However, the experiences are personal to those
                            particular users, and may not necessarily be representative of all users of our products and/or services.
                            We do not claim, and you should not assume, that all users will have the same experiences.
                            <strong>YOUR INDIVIDUAL RESULTS MAY VARY.</strong>
                        </p>

                        <p className="mb-4">
                            The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are
                            reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for
                            the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of
                            brevity where the full testimonial contained extraneous information not relevant to the general public.
                        </p>

                        <p>
                            The views and opinions contained in the testimonials belong solely to the individual user and do not
                            reflect our views and opinions. We are not affiliated with users who provide testimonials, and users
                            are not paid or otherwise compensated for their testimonials.
                        </p>
                    </section>

                    <div className="pt-10 border-t border-white/10 text-center text-xs text-secondary/60">
                        © 2026 TACPLAY EUROPE S.L. All rights reserved.
                    </div>
                </div>
            </div>
        </main>
    );
}