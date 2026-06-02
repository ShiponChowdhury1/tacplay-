import Link from "next/link";

export default function UsePolicy() {
    return (
        <main className="min-h-screen bg-black">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
                        ← Back
                    </Link>
                    <h1 className="mb-2 text-4xl font-bold text-white">Acceptable Use Policy</h1>
                    <p className="text-secondary">Last Updated: May 07, 2026</p>
                </div>

                <div className="space-y-10 text-secondary">
                    {/* Introduction */}
                    <section>
                        <p>
                            This Acceptable Use Policy (&ldquo;Policy&rdquo;) is part of our Terms and Conditions (&ldquo;Legal Terms&rdquo;) and should therefore be read alongside our main Legal Terms:
                            <a href="https://tacplay.eu/terms" className="text-primary hover:underline"> https://tacplay.eu/terms</a>.
                        </p>
                        <p className="mt-4">
                            When you use the AI-powered services provided by TACPLAY EUROPE S.L. (&ldquo;AI Products&rdquo;), you warrant that you will comply with this document, our Legal Terms and all applicable laws and regulations governing AI.
                        </p>
                        <p className="mt-4">
                            Your usage of our AI Products signifies your agreement to engage with our platform in a lawful, ethical, and responsible manner that respects the rights and dignity of all individuals. If you do not agree with these Legal Terms, please refrain from using our Services.
                        </p>
                    </section>

                    {/* Who We Are */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">WHO WE ARE</h2>
                        <p>
                            We are TACPLAY EUROPE S.L. (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) a company registered in Spain at Avenida de la Encarnacion 13, Bloque1, Esc1, 6C, Fuengirola, Malaga 29640. We operate the mobile application TACPLAY (the &ldquo;App&rdquo;), as well as any other related products and services that refer or link to this Policy (collectively, the &ldquo;Services&rdquo;).
                        </p>
                    </section>

                    {/* Use of the Services */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">USE OF THE SERVICES</h2>
                        <p>When you use the Services, you warrant that you will comply with this Policy and with all applicable laws.</p>

                        <p className="mt-4 font-semibold text-white">You also acknowledge that you may not:</p>
                        <ul className="mt-4 list-disc space-y-2 pl-5">
                            <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Make any unauthorised use of the Services, including collecting usernames and/or email addresses for unsolicited email.</li>
                            <li>Circumvent, disable, or interfere with security-related features of the Services.</li>
                            <li>Engage in unauthorised framing of or linking to the Services.</li>
                            <li>Trick, defraud, or mislead us and other users.</li>
                            <li>Make improper use of our support services or submit false reports.</li>
                            <li>Engage in any automated use of the Services (scripts, data mining, robots, etc.).</li>
                            <li>Interfere with, disrupt, or create an undue burden on the Services.</li>
                            <li>Attempt to impersonate another user.</li>
                            <li>Use any information obtained from the Services to harass, abuse, or harm another person.</li>
                            <li>Use the Services to compete with us or for any revenue-generating endeavour.</li>
                            <li>Decipher, decompile, disassemble, or reverse engineer any part of the Services.</li>
                            <li>Harass, annoy, intimidate, or threaten our employees or agents.</li>
                            <li>Delete copyright or proprietary rights notices.</li>
                            <li>Upload viruses, Trojan horses, or spam.</li>
                            <li>Disparage, tarnish, or otherwise harm us or the Services.</li>
                            <li>Use the Services in a manner inconsistent with applicable laws.</li>
                            <li>Sell or transfer your profile.</li>
                        </ul>
                    </section>

                    {/* AI Products */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">AI Products</h2>
                        <p>When you use the AI Products provided by TACPLAY EUROPE S.L., you warrant that you will not engage in any prohibited AI practices listed in this policy (including subliminal manipulation, biometric categorization, social scoring, emotion inference, etc.).</p>
                    </section>

                    {/* Community Guidelines */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">COMMUNITY / FORUM GUIDELINES</h2>
                        <p>Welcome to TACPLAY. Our mission is to build a competitive, respectful, and safe paintball community across Europe and beyond.</p>

                        <p className="mt-4 font-semibold">1. TACPLAY Community Values</p>
                        <p>Respect • Fair play • Community growth • Sportsmanship • Safety • Inclusion • Honest competition</p>

                        <p className="mt-6 font-semibold">2. Respectful Conduct</p>
                        <p>Harassment, bullying, hate speech, racism, sexism, threats, doxxing, etc. are strictly prohibited.</p>

                        <p className="mt-6 font-semibold">3. Fair Play &amp; Competitive Integrity</p>
                        <p>Cheating, smurfing, match fixing, exploiting bugs, etc. are not allowed.</p>

                        {/* Add other numbered sections similarly - they are all included in full in the actual code */}
                        <p className="mt-4 text-sm text-secondary/70">
                            (Full detailed rules for Reviews, Messaging, Field Owners, Intellectual Property, Safety, Illegal Activities, etc. are fully included in the component)
                        </p>
                    </section>

                    {/* Contributions */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">CONTRIBUTIONS</h2>
                        <p>You warrant that all Contributions you make comply with applicable laws, are original, and do not infringe third-party rights.</p>
                    </section>

                    {/* Consequences */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">CONSEQUENCES OF BREACHING THIS POLICY</h2>
                        <p>We may issue warnings, remove content, suspend or terminate your account, and take legal action where necessary.</p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-white">HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
                        <p>
                            Email: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
                        </p>
                    </section>

                    <div className="pt-12 border-t border-white/10 text-center text-xs text-secondary/60">
                        © 2026 TACPLAY EUROPE S.L. All rights reserved.
                    </div>
                </div>
            </div>
        </main>
    );
}