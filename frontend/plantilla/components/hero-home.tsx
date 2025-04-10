import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-[gradient_6s_linear_infinite]">
              Discover Powerful Market Tools
            </h1>
            <p className="mt-4 text-xl text-indigo-200/70 max-w-3xl mx-auto">
              Explore tools and insights designed to help you understand trends, analyze data, and make smarter decisions with AI.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Market Analysis", icon: "📊", link: "#" },
              { title: "Trend Report", icon: "📈", link: "#" },
              { title: "Data Insights", icon: "🔍", link: "#" },
              { title: "User Guide", icon: "📘", link: "#" },
            ].map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className="flex flex-col items-center justify-center text-center bg-[#1F1B23] p-6 rounded-xl transition duration-300 hover:bg-indigo-700 hover:shadow-xl"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
              </Link>
            ))}
          </div>

          {/* Latest articles */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Latest Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  href: "/articles/article1",
                  title: "How AI is Changing the Investment Game",
                  summary:
                    "Artificial Intelligence (AI) has become an essential tool for modern investors. With real-time analytics and predictive algorithms, AI empowers users to anticipate market shifts and make smarter decisions.",
                  image: "/images/arti1.jpg",
                },
                {
                  href: "/articles/article2",
                  title: "The Power of Real-Time Market Insights",
                  summary:
                    "In fast-moving financial markets, timing is everything. Real-time insights allow investors to respond to market fluctuations with precision and confidence.",
                  image: "/images/arti2.jpg",
                },
                {
                  href: "/articles/article3",
                  title: "Using Predictive Analytics to Your Advantage",
                  summary:
                    "Predictive analytics gives investors a competitive edge by identifying patterns and forecasting trends with impressive accuracy.",
                  image: "/images/arti3.png",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="bg-[#1F1B23] rounded-xl overflow-hidden shadow-md transition hover:shadow-xl hover:ring-2 hover:ring-indigo-400 hover:bg-indigo-600"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{article.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-[#1F1B23] rounded-2xl p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:text-left text-center md:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Unlock Market Insights with AI precision
                </h2>
                <p className="text-indigo-200/70 mb-6">
                  MarketVision.AI empowers you to stay ahead of the curve with real-time predictions of market trends. Harness the power of AI to make informed investment decisions and maximize your financial potential.
                </p>
                <Link
                  href="#"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg transition"
                >
                  Learn More
                </Link>
              </div>
              <div className="w-full max-w-md">
                <Image
                  src="/images/mwew.png"
                  alt="Insight Visual"
                  width={400}
                  height={375}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
