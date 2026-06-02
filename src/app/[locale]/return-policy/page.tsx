import Link from "next/link";

export default function ReturnPolicy() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 mb-6 inline-block"
          >
            ← Back
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">Return Policy</h1>
          <p className="text-secondary">Last updated May 07, 2026</p>
        </div>

        <div className="space-y-10 text-secondary">
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">REFUNDS</h2>

            <p className="mb-6">
              All sales are final and no refund will be issued.
            </p>

            <p className="mb-6">
              Refund Policy TACPLAY Europe S.L.: Session not filled before
              cutoff (100% refund), Field cancels (100% refund), Weather
              cancellation (credit/refund), Player cancels before cutoff
              (partial/full), No-show (no refund), Ranked dispute (no refund),
              Premium membership (non-refundable after renewal). TACPLAY booking
              fees are service fees charged by the platform and may be
              non-refundable once a booking is confirmed.
            </p>

            <p className="mb-6">
              All refund requests must be taken up with the individual Field
              Owners. TACPLAY has a <strong>no refund for no shows</strong>{" "}
              policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">QUESTIONS</h2>
            <p>
              If you have any questions concerning our return policy, please
              contact us at:
            </p>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:info@tacplay.eu"
                className="text-primary hover:underline"
              >
                info@tacplay.eu
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
