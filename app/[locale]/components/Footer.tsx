"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warmGray-950 border-t border-sunset-500/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-sunset-400">
              Chill Chess Club
            </h3>
            <p className="text-warmGray-300 text-sm">{t("description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-sunset-400 mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-warmGray-300 hover:text-sunset-400 text-sm"
                >
                  {tNav("about")}
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-warmGray-300 hover:text-sunset-400 text-sm"
                >
                  {tNav("courses")}
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="text-warmGray-300 hover:text-sunset-400 text-sm"
                >
                  {tNav("method")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-warmGray-300 hover:text-sunset-400 text-sm"
                >
                  {tNav("faq")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-warmGray-300 hover:text-sunset-400 text-sm"
                >
                  {tNav("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-sunset-400 mb-4">
              {t("quickContact")}
            </h4>
            <p className="text-warmGray-300 text-sm mb-4">
              santiago.narvaez.84@gmail.com
            </p>
            <div className="space-y-2">
              <p className="text-warmGray-400 text-xs">
                {t("securePayments")}:
              </p>
              <div className="flex gap-2">
                <span className="bg-warmGray-800 px-2 py-1 rounded text-blue-400 text-xs">
                  PayPal
                </span>
                <span className="bg-warmGray-800 px-2 py-1 rounded text-blue-500 text-xs">
                  Payoneer
                </span>
                <span className="bg-warmGray-800 px-2 py-1 rounded text-yellow-500 text-xs">
                  Binance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Links */}
        <div className="border-t border-warmGray-800 pt-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-warmGray-500 text-xs">
              © {currentYear} Chill Chess Club.{" "}
              {t("copyright").replace(
                `© ${currentYear} Chill Chess Club. `,
                ""
              )}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-warmGray-500 hover:text-sunset-400 text-xs"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-warmGray-500 hover:text-sunset-400 text-xs"
              >
                {t("terms")}
              </Link>
            </div>
          </div>

          {/* Agency Credit - SunsetLabs Branding */}
          <div className="text-center pt-6 border-t border-warmGray-800/50">
            <a
              href="https://sunsetlabs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {/* Opening Bracket */}
                <span
                  className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
                  style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
                >
                  {"{"}
                </span>

                {/* Sunset - Orange */}
                <span
                  className="text-[#FDAD1F] font-bold text-base tracking-wide group-hover:text-[#FDAD1F] transition-all duration-300"
                  style={{
                    textShadow: "0 0 15px rgba(253, 173, 31, 0.4)",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Sunset
                </span>

                {/* Labs - Pink */}
                <span
                  className="text-[#C682B1] font-bold text-base tracking-wide group-hover:text-[#FE1784] transition-all duration-300"
                  style={{
                    textShadow: "0 0 15px rgba(198, 130, 177, 0.4)",
                    fontFamily: "var(--font-roboto)",
                  }}
                >
                  Labs
                </span>

                {/* Closing Bracket */}
                <span
                  className="text-[#C682B1] text-lg font-mono group-hover:text-[#FE1784] transition-all duration-300"
                  style={{ textShadow: "0 0 10px rgba(198, 130, 177, 0.3)" }}
                >
                  {"}"}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-warmGray-400 text-xs group-hover:text-warmGray-300 transition-colors">
                {t("madeBy")}
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
