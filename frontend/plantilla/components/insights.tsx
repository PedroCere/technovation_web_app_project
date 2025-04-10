import Link from "next/link";

export default function Insights() {
  return (
    <section className="mt-2 text-center px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Unlock the Future of Market Predictions
      </h2>
      <p className="text-indigo-200/70 mb-12 max-w-2xl mx-auto">
        Stay ahead with real-time data analysis and insights. Our platform empowers you to make informed decisions based on accurate market trend predictions.
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

      <div className="mt-10 mb-10">
        <Link
          href="#"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-lg transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
