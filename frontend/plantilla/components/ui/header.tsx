"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between bg-[#1F1B23] rounded-2xl px-6">

          {/* Logo y navegación */}
          <div className="flex items-center space-x-8">
            <Image
              src="/images/logo.png"
              alt="MarketVision Logo"
              width={210}
              height={10}
              priority
            />

            <nav>
              <ul className="flex space-x-6 text-sm text-gray-300">
                {[
                  { label: "Market Trends", href: "#" },
                  { label: "Predictions Now", href: "#" },
                  { label: "Insight Hubs", href: "#" },
                  { label: "Resources", href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="relative transition-colors duration-200 hover:text-white after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full hover:after:-translate-x-1/2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Botón Join */}
          <div className="flex items-center">
            <Link
              href="/signup"
              className="btn-sm relative px-5 py-1.5 text-sm text-white rounded-lg
                bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200
                shadow-[0_0_4px_rgba(255,255,255,0.1)]
                before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
                before:border before:border-white/10"
            >
              Join
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
