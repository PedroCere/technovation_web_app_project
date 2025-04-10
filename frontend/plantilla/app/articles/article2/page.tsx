import Image from "next/image";
export default function Article2() {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-gray-200">

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          The Power of Real-Time Market Insights
        </h1>
        <Image
            src="/images/arti2.jpg"
            alt="AI and investment illustration"
            width={800}
            height={400}
            className="rounded-xl mb-8 shadow-lg"
          />
        <p className="text-indigo-200/70 mb-8">
          In fast-moving financial markets, timing is everything. Real-time insights allow investors to respond to market fluctuations with precision and confidence.
        </p>
        <p className="mb-4">
          MarketVision.AI delivers accurate data streams and visual dashboards that update instantly, helping you act before opportunities slip away.
        </p>
        <p>
          With instant analysis and alerts, you can take control of your investments and react to changes as they happen — not after the fact.
        </p>
      </section>
    );
  }
  