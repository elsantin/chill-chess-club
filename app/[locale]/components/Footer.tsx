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
              santiago.narvaez.l64@gmail.com
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

        {/* Agency Credit */}
        <div className="border-t border-warmGray-800 pt-8 mb-6 text-center">
          <a
            href="https://elsantinlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-warmGray-500 text-xs">{"{"}</span>
              <span className="text-warmGray-500 text-xs">elsantin</span>
              <span className="text-sunset-500 font-bold text-sm hover:text-sunset-400">
                Labs
              </span>
              <span className="text-warmGray-500 text-xs">{"}"}</span>
            </div>
            <p className="text-warmGray-400 text-xs">{t("madeBy")}</p>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-warmGray-800">
          <p className="text-warmGray-500 text-xs">
            © {currentYear} Chill Chess Club.{" "}
            {t("copyright").replace(`© ${currentYear} Chill Chess Club. `, "")}
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
      </div>
    </footer>
  );
}
