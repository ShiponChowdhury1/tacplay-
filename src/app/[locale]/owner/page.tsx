/** @format */

import Link from "next/link";
import React from "react";

const Owner = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="mb-6 inline-block text-primary hover:text-primary/80">
            ← Back
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">Field Owner Agreement</h1>
          <p className="text-secondary">Last Updated: 01st May 2026</p>
          <p className="mt-2 text-secondary">Company: TACPLAY EUROPE S.L.</p>
          <p className="text-secondary">Registered Address: Avenida de la Encarnacion 13, Bloque1, 6C</p>
          <p className="text-secondary">
            Email: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
          </p>
        </div>

        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">1. PARTIES</h2>
            <p>This Agreement is entered into between:</p>
            <p className="mt-4">TACPLAY EUROPE S.L. (&ldquo;TACPLAY&rdquo;)</p>
            <p className="mt-4">and</p>
            <p className="mt-4">The Field Owner (&ldquo;Field Owner&rdquo;, &ldquo;You&rdquo;)</p>
            <p className="mt-4">By registering as a Field Owner on TACPLAY, you agree to be bound by this Agreement.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">2. PURPOSE</h2>
            <p>TACPLAY provides a digital platform enabling Field Owners to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>List paintball fields</li>
              <li>Create and manage game slots</li>
              <li>Accept bookings from Players and Teams</li>
              <li>Create and manage Paintball Events and Tournaments</li>
            </ul>
            <p className="mt-4">TACPLAY acts solely as an intermediary marketplace.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">3. PLATFORM ROLE (CRITICAL LIABILITY CLAUSE)</h2>
            <p>You acknowledge and agree that:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>TACPLAY does NOT own, operate, or control any field</li>
              <li>TACPLAY does NOT organise or supervise games</li>
              <li>TACPLAY is NOT responsible for player safety, injuries, or incidents</li>
            </ul>
            <p className="mt-4">The Field Owner is solely responsible for all on-site operations and safety.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">4. FIELD OWNER OBLIGATIONS</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.1 Legal Compliance</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Operate in full compliance with all applicable laws and regulations</li>
                  <li>Maintain all required licenses and permits</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.2 Safety & Insurance</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Provide a safe playing environment</li>
                  <li>Ensure proper supervision and trained staff</li>
                  <li>Maintain adequate public liability insurance</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.3 Accuracy of Information</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Provide accurate field details, pricing, and availability</li>
                  <li>Keep all information updated</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.4 Booking Fulfilment</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Honour all confirmed bookings</li>
                  <li>Provide the agreed services to Players</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">4.5 Equipment & Standards</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Ensure all equipment is safe and compliant</li>
                  <li>Follow industry safety standards</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">5. BOOKINGS & GAME SLOT RULES</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">5.1 Game Slots</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Date and time</li>
                  <li>Minimum and maximum player capacity</li>
                  <li>Price per player</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">5.2 Minimum Player Requirement</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Game slots may require a minimum number of players</li>
                  <li>If not reached, the booking may be cancelled (see Section 7)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">5.3 Team Bookings</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Teams may book collectively via a captain</li>
                  <li>Field Owner must accommodate confirmed team bookings as agreed</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">6. PRICING & COMMISSION</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.1 Pricing</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Field Owners set their own pricing</li>
                  <li>Pricing must be transparent and include applicable taxes</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.2 TACPLAY Commission</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>TACPLAY may charge a commission (e.g., 20%) on bookings</li>
                  <li>Commission structure may vary based on subscription or agreements</li>
                  <li>Commission will not affect the price set by the field owners, as it will be charged directly to the booking party.</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.3 Payments</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Payments are processed via Stripe</li>
                  <li>TACPLAY may collect payments on behalf of Field Owners</li>
                  <li>TACPLAY may deduct commission before payout</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">6.4 Payouts</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Payouts are made to the Field Owner after game completion</li>
                  <li>Deduction of applicable fees</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">7. CANCELLATIONS & REFUNDS</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.1 Minimum Not Reached</h3>
                <p>If a slot does not meet the minimum number of players:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>The booking is cancelled</li>
                  <li>Players receive a full refund</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.2 Field Owner Cancellation</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Full refund must be issued</li>
                  <li>Repeated cancellations may result in penalties or suspension</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.3 No-Shows</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>No refunds for player no-shows unless required by law</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">7.4 Force Majeure</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Extreme weather</li>
                  <li>Safety risks</li>
                  <li>Unexpected closures</li>
                </ul>
                <p className="mt-4">Refund handling must be reasonable and compliant with consumer law.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">8. REVIEWS & RATINGS</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Players may leave reviews after participation</li>
              <li>Field Owners may respond</li>
              <li>TACPLAY may remove inappropriate or abusive content</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">9. DATA PROTECTION</h2>
            <p>Both parties agree to comply with:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>General Data Protection Regulation</li>
            </ul>
            <p className="mt-4">Field Owners:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>May only use Player data for booking-related purposes</li>
              <li>Must not store or misuse personal data</li>
              <li>Must implement appropriate security measures</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">10. PROHIBITED CONDUCT</h2>
            <p>Field Owners must not:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Circumvent TACPLAY to avoid commission</li>
              <li>Accept off-platform payments for platform bookings</li>
              <li>Provide misleading information</li>
              <li>Engage in fraudulent or unsafe practices</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">11. SUSPENSION & TERMINATION</h2>
            <p>TACPLAY may suspend or terminate access if:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>This Agreement is breached</li>
              <li>Safety concerns arise</li>
              <li>Fraud or abuse is detected</li>
            </ul>
            <p className="mt-4">Immediate termination may occur in serious cases.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">12. LIABILITY & INDEMNIFICATION</h2>
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">12.1 Field Owner Liability</h3>
                <p>The Field Owner is solely liable for:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Injuries, accidents, or damages occurring at the field</li>
                  <li>Staff conduct and operations</li>
                  <li>Compliance with safety regulations</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">12.2 Indemnification</h3>
                <p>The Field Owner agrees to indemnify and hold TACPLAY harmless from any claims, damages, or liabilities arising from:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Field operations</li>
                  <li>Player injuries</li>
                  <li>Legal violations</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">12.3 Limitation of TACPLAY Liability</h3>
                <p>To the maximum extent permitted by law:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>TACPLAY is not liable for indirect or consequential damages</li>
                  <li>Liability is limited to fees received from the Field Owner</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">13. INSURANCE REQUIREMENT</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Maintain valid public liability insurance</li>
              <li>Provide proof upon request</li>
            </ul>
            <p className="mt-4">Failure to maintain insurance may result in suspension.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">14. INTELLECTUAL PROPERTY</h2>
            <p>Field Owners grant TACPLAY a non-exclusive license to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Use field images, logos, and descriptions</li>
              <li>Promote listings on the Platform and marketing channels</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">15. GOVERNING LAW</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Spain.</p>
            <p className="mt-4">
              If you are a consumer residing in the European Union or European Economic Area, you will also benefit from any mandatory consumer protection laws in your country of residence.
            </p>
            <p className="mt-4">
              Any disputes shall be subject to the exclusive jurisdiction of the courts of Málaga, Spain, unless otherwise required by applicable consumer protection laws.
            </p>
            <div className="mt-4 rounded-lg border border-background/60 bg-background/40 p-6">
              <p className="font-semibold text-white">Alternative Dispute Resolution (ADR)</p>
              <p className="mt-2">Consumers may also use the European Commission’s Online Dispute Resolution platform:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>European Consumer Redress Platform</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">16. AMENDMENTS</h2>
            <p>TACPLAY may update this Agreement.</p>
            <p className="mt-4">Field Owners will be notified of material changes.</p>
            <p className="mt-4">Continued use constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">17. CONTACT</h2>
            <p>TACPLAY EUROPE S.L.</p>
            <p className="mt-4">
              Email: <a href="mailto:info@tacplay.eu" className="text-primary hover:underline">info@tacplay.eu</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Owner;
