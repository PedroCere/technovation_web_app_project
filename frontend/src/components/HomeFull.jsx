import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeFull() {
  const [category, setCategory] = useState(1);

  return (
    <main className="bg-[#07020B] text-white">
      {/* Header */}
      <header className="z-30 mt-2 w-full md:mt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between bg-[#1F1B23] rounded-2xl px-6">
            <div className="flex items-center space-x-10">
              <img
                src="/images/logo.png"
                alt="MarketVision Logo"
                width={210}
                height={10}
                loading="eager"
              />
              <nav>
                <ul className="flex space-x-6 text-sm text-gray-300">
                  {[
                    { label: "Market Trends", href: "/markets" },
                    { label: "Predictions Now", href: "/predictions" },
                    { label: "Insight Hubs", href: "/overview" },
                    { label: "Resources", href: "/preferences" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="relative transition-colors duration-200 hover:text-white after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full hover:after:-translate-x-1/2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <Link
              to="/preferences"
              className="btn-sm relative px-5 py-1.5 text-sm text-white rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200 shadow-[0_0_4px_rgba(255,255,255,0.1)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/10"
            >
              Join
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-[gradient_6s_linear_infinite]">
          Discover Powerful Market Tools
        </h1>
        <p className="mt-4 text-xl text-indigo-200/70 max-w-3xl mx-auto">
          Explore tools and insights designed to help you understand trends, analyze data, and make smarter decisions with AI.
        </p>
      </section>

      {/* Features (Íconos) */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { title: "Market Analysis", icon: "📊" },
          { title: "Trend Report", icon: "📈" },
          { title: "Data Insights", icon: "🔍" },
          { title: "User Guide", icon: "📘" },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-[#1F1B23] p-6 rounded-xl hover:bg-indigo-700 transition"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h4 className="text-lg font-semibold">{feature.title}</h4>
          </div>
        ))}
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Latest Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              href: "/articles/article1",
              title: "How AI is Changing the Investment Game",
              summary:
                "AI has become an essential tool for modern investors with real-time analytics and predictive algorithms.",
              image: "/images/arti1.jpg",
            },
            {
              href: "/articles/article2",
              title: "The Power of Real-Time Market Insights",
              summary:
                "Timing is everything in financial markets. Real-time data lets you act with confidence.",
              image: "/images/arti2.jpg",
            },
            {
              href: "/articles/article3",
              title: "Using Predictive Analytics to Your Advantage",
              summary:
                "Predictive analytics help forecast trends with impressive accuracy.",
              image: "/images/arti3.png",
            },
          ].map((article) => (
            <Link
              key={article.href}
              to={article.href}
              className="bg-[#1F1B23] rounded-xl overflow-hidden shadow-md hover:ring-2 hover:ring-indigo-400 hover:bg-indigo-600 transition"
            >
              <img
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
      </section>

      {/* Insights */}
      <section className="mt-2 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Unlock the Future of Market Predictions
        </h2>
        <p className="text-indigo-200/70 mb-12 max-w-2xl mx-auto">
          Stay ahead with real-time data analysis and insights. Our platform
          empowers you to make informed decisions based on accurate market
          trend predictions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-Time Data Analysis for Smart Decisions",
              desc: "Leverage up-to-the-minute insights to guide your investment strategies with confidence.",
            },
            {
              title: "Accurate Market Trend Predictions at Your Fingertips",
              desc: "Utilize our AI-powered tools to forecast movements and trends with precision.",
            },
            {
              title: "Comprehensive Stock Value Tracking Made Easy",
              desc: "Easily monitor stock performance and stay updated with intuitive dashboards.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1F1B23] rounded-2xl p-6 shadow-lg flex flex-col justify-between text-left"
            >
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mb-20">
          <Link
            to="#"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-lg transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Extended Features Section */}
      <section className="mt-10 text-left px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock Your Investment Potential with MarketVision.AI's Real-Time Insights
            </h2>
            <p className="text-indigo-200/70 mb-6">
              MarketVision.AI empowers you to make informed investment decisions by analyzing real-time market trends. Experience increased returns as you navigate the complexities of the stock market with confidence.
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-3">
              <li>Stay ahead of market trends effortlessly.</li>
              <li>Maximize your investment returns with data-driven insights.</li>
              <li>Make smarter decisions with real-time analytics.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/globo.avif"
              alt="Feature Illustration"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Unmatched Precision In Market Predictions
            </h3>
            <p className="text-indigo-200/70 mb-6">
              Our predictions boast a remarkable accuracy rate, ensuring you stay ahead of market trends. Trust MarketVision.AI for reliable insights that empower your investment decisions.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-white text-2xl font-bold">95%</p>
                <p className="text-gray-400 text-sm">Proven results that drive successful investments.</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">85%</p>
                <p className="text-gray-400 text-sm mb-4">Real-time data for informed decision-making.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1F1B23] rounded-2xl p-8 text-center shadow-xl">
            <h4 className="text-xl font-semibold text-white mb-2">
              Unlock Your Market Potential Today
            </h4>
            <p className="text-indigo-200/70 mb-6">
              Experience real-time market insights with our free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition"
              >
                Learn More
              </Link>
              <Link
                to="/signup"
                className="bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-5 py-2 rounded-lg transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Testimonials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: "/images/testimonial-01.jpg",
              name: "Carlos M.",
              company: "Fintrack",
              content:
                "MarketVision.AI completely changed the way I invest. Real-time predictions give me the confidence to act fast and smart in volatile markets.",
            },
            {
              img: "/images/testimonial-02.jpg",
              name: "Samantha J.",
              company: "Equinox Group",
              content:
                "As a financial analyst, having access to reliable data is crucial. MarketVision.AI gives me everything I need to deliver results to clients.",
            },
            {
              img: "/images/testimonial-03.jpg",
              name: "Derek H.",
              company: "StockBot",
              content:
                "I used to rely on instinct. Now I rely on AI. MarketVision has helped me identify trends before they happen. That's a game changer.",
            },
            {
              img: "/images/testimonial-04.jpg",
              name: "Anya R.",
              company: "InvestEase",
              content:
                "Since using MarketVision.AI, I've seen a noticeable increase in ROI. It's like having a market strategist working 24/7 by your side.",
            },
            {
              img: "/images/testimonial-05.jpg",
              name: "Victor K.",
              company: "TrendScope",
              content:
                "We integrated MarketVision.AI into our daily workflow and it has streamlined our analysis and boosted our performance metrics significantly.",
            },
            {
              img: "/images/testimonial-06.jpg",
              name: "Linda S.",
              company: "Momentum Funds",
              content:
                "I appreciate the clean interface and actionable insights. MarketVision makes complex data approachable and understandable.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-[#1F1B23] rounded-xl p-6 h-full flex flex-col justify-between"
            >
              <p className="text-indigo-200/70 mb-4">“{t.content}”</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.img}
                  width={36}
                  height={36}
                  alt={t.name}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-gray-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-6">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
            aria-hidden="true"
          >
            <img
              src="/images/footer-illustration.svg"
              width={1076}
              height={378}
              alt="Footer illustration"
            />
          </div>
          <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
            {/* Footer links */}
            {[
              {
                title: "Product",
                links: [
                  "Features",
                  "Integrations",
                  "Pricing & Plans",
                  "Changelog",
                  "Our method",
                  "User policy",
                ],
              },
              {
                title: "Company",
                links: [
                  "About us",
                  "Diversity & Inclusion",
                  "Blog",
                  "Careers",
                  "Financial statements",
                ],
              },
              {
                title: "Resources",
                links: [
                  "Community",
                  "Terms of service",
                  "Report a vulnerability",
                ],
              },
              {
                title: "Content Library",
                links: [
                  "Templates",
                  "Tutorials",
                  "Knowledge base",
                  "Learn",
                  "Cookie manager",
                ],
              },
            ].map((block, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-sm font-medium text-gray-200">
                  {block.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {block.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#0"
                        className="text-indigo-200/65 transition hover:text-indigo-500"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
              <div className="mb-3">
                <img
                  src="/images/logo.png"
                  alt="MarketVision Logo"
                  width={1000}
                  height={40}
                />
              </div>
              <p className="mb-3 text-indigo-200/65 text-sm">
                © MarketVision.com ·{" "}
                <a href="#0" className="hover:text-indigo-500">
                  Terms
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
