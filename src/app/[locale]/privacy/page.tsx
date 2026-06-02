
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-primary/80 mb-6 inline-block">
            ← Back
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-secondary">Last Updated: 1st May 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">1. INTRODUCTION</h2>
            <p>
              This Privacy Policy explains how TACPLAY (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects your personal data when you use our website, mobile application, and services (the &ldquo;Platform&rdquo;).
            </p>
            <p className="mt-4">We are committed to protecting your personal data in accordance with:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>General Data Protection Regulation</li>
              <li>Applicable national data protection laws within the EU/EEA</li>
            </ul>
            <p className="mt-4">By using TACPLAY, you agree to the processing of your personal data as described in this Policy.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">2. DATA CONTROLLER</h2>
            <p>The data controller responsible for your personal data is:</p>
            <div className="mt-4 rounded-lg border border-background/60 bg-background/40 p-6">
              <p className="font-semibold text-white">TACPLAY EUROPE S.L.</p>
              <p>Avenida de la Encarnacion 13, 29640 Fuengirola, Spain</p>
              <p>
                Email: <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">3. PERSONAL DATA WE COLLECT</h2>
            <p>We collect the following categories of personal data:</p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">3.1 Account Information</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Username / profile details</li>
                  <li>Password (encrypted)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">3.2 Booking & Activity Data</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Game bookings and participation</li>
                  <li>Team membership and activity</li>
                  <li>Field preferences and history</li>
                  <li>Rankings and performance data</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">3.3 Payment Information</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Payment status and transaction IDs</li>
                  <li>Subscription status</li>
                </ul>
                <p className="mt-4 font-semibold text-white">Important:</p>
                <p>Payments are processed by third parties (e.g., Stripe).</p>
                <p>We do not store full card details.</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">3.4 Device & Technical Data</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>IP address</li>
                  <li>Device type and operating system</li>
                  <li>Browser type</li>
                  <li>App usage data (analytics)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">3.5 Communication Data</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Emails and messages sent via the Platform</li>
                  <li>Customer support requests</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">4. HOW WE USE YOUR DATA (LEGAL BASIS)</h2>
            <p>We process your data based on the following legal grounds under GDPR:</p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.1 Contractual Necessity</h3>
                <p>To:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Create and manage your account</li>
                  <li>Process bookings and payments</li>
                  <li>Facilitate communication between Players and Field Owners</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.2 Legitimate Interests</h3>
                <p>To:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Improve platform functionality</li>
                  <li>Prevent fraud and abuse</li>
                  <li>Analyse usage and performance</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.3 Legal Obligations</h3>
                <p>To:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Comply with tax and accounting laws</li>
                  <li>Respond to legal requests</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.4 Consent</h3>
                <p>Where required, for:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Marketing communications</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
                <p className="mt-4">You may withdraw consent at any time.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">5. HOW WE SHARE YOUR DATA</h2>
            <p>We only share your data when necessary:</p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">5.1 With Field Owners</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Booking details</li>
                  <li>Player name and contact info (where required)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">5.2 With Service Providers</h3>
                <p>Including:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>Stripe (payments)</li>
                  <li>Cloud hosting providers</li>
                  <li>Analytics providers (e.g., Mixpanel)</li>
                </ul>
                <p className="mt-4">All providers are GDPR-compliant and act under data processing agreements.</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">5.3 Legal Authorities</h3>
                <p>If required by law or to protect rights, safety, or prevent fraud.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">6. INTERNATIONAL DATA TRANSFERS</h2>
            <p>Some service providers may process data outside the EU/EEA.</p>
            <p className="mt-4">In such cases, we ensure safeguards such as:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions by the European Commission</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">7. DATA RETENTION</h2>
            <p>We retain personal data only as long as necessary:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Account data: Until account deletion</li>
              <li>Booking/payment data: Up to 6–10 years (legal/tax compliance)</li>
              <li>Marketing data: Until consent is withdrawn</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">8. YOUR RIGHTS UNDER GDPR</h2>
            <p>Under the General Data Protection Regulation, you have the right to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase your data (&ldquo;Right to be forgotten&rdquo;)</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise your rights, contact: <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">9. COOKIES AND TRACKING</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Ensure platform functionality</li>
              <li>Analyse usage</li>
              <li>Improve performance</li>
            </ul>
            <p className="mt-4">You can manage cookies via your browser or our Cookie Banner.</p>
            <p className="mt-2">(See separate Cookie Policy for full details.)</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">10. DATA SECURITY</h2>
            <p>We implement appropriate technical and organisational measures, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Encryption of sensitive data</li>
              <li>Secure servers and hosting</li>
              <li>Access control and authentication</li>
              <li>Regular monitoring for vulnerabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">11. CHILDREN&apos;S DATA</h2>
            <p>TACPLAY is not intended for children under 16 without parental consent.</p>
            <p className="mt-4">If we become aware of unlawful data collection from minors, we will delete it.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">12. THIRD-PARTY LINKS</h2>
            <p>Our Platform may contain links to third-party websites.</p>
            <p className="mt-4">We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">13. CHANGES TO THIS POLICY</h2>
            <p>We may update this Privacy Policy periodically.</p>
            <p className="mt-4">Users will be notified via:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Email</li>
              <li>Platform notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">14. CONTACT & COMPLAINTS</h2>
            <p>For privacy-related questions:</p>
            <p className="mt-4">
              Email: <a href="mailto:privacy@tacplay.eu" className="text-primary hover:underline">privacy@tacplay.eu</a>
            </p>
            <p className="mt-4">You also have the right to lodge a complaint with your local data protection authority.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
