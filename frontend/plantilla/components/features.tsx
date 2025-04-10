import Link from "next/link";
import Image from "next/image";
import FeatureImg from "@/public/images/globo.avif";

export default function Features() {
  return (
    <section className="mt-10 text-left px-4 sm:px-6">
      {/* Features Section */}
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
          <Image
            src={FeatureImg}
            alt="Feature Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Accuracy Section */}
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
              href="#"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition"
            >
              Learn More
            </Link>
            <Link
              href="/signup"
              className="bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-5 py-2 rounded-lg transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
