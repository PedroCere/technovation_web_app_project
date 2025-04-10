import Image from "next/image";
export default function Article3() {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Using Predictive Analytics to Your Advantage
        </h1>
          <Image
            src="/images/arti3.png"
            alt="AI and investment illustration"
            width={800}
            height={400}
            className="rounded-xl mb-8 shadow-lg"
          />
        <p className="text-indigo-200/70 mb-8">
          Predictive analytics gives investors a competitive edge by identifying patterns and forecasting trends with impressive accuracy.
        </p>
        <p className="mb-4">
          With MarketVision.AI, predictive models analyze millions of data points to anticipate price movements and highlight growth opportunities.
        </p>
        <p>
          When combined with your expertise, predictive analytics becomes a powerful ally — guiding your decisions and increasing your ROI over time.
        </p>
      </section>
    );
  }
  