import Image from "next/image";

export default function Article1() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        How AI is Changing the Investment Game
      </h1>

      <Image
        src="/images/arti1.jpg"
        alt="AI and investment illustration"
        width={800}
        height={400}
        className="rounded-xl mb-8 shadow-lg"
      />

      <p className="text-indigo-200/70 mb-8">
        Artificial Intelligence (AI) has become an essential tool for modern investors. With real-time analytics and predictive algorithms, AI empowers users to anticipate market shifts and make smarter decisions.
      </p>
      <p className="mb-4">
        From hedge funds to individual investors, the technology behind AI is revolutionizing the way strategies are built and executed. MarketVision.AI stands at the forefront of this innovation.
      </p>
      <p>
        Whether you're optimizing portfolios or identifying new trends, AI simplifies complexity and enhances performance. Welcome to the future of investing.
      </p>
    </section>
  );
}
