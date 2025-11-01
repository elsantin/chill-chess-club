"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function LegalFooter() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warmGray-950 border-t border-sunset-500/30 pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to Home Button */}
        <div className="text-center mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sunset-500 via-rose-500 to-pink-600 text-white font-semibold rounded-xl shadow-neumorphic-md hover:shadow-glow-sunset transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            {locale === "es" ? "Volver al Inicio" : "Back to Home"}
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mb-6">
          <p className="text-warmGray-500 text-xs">
            © {currentYear} Chill Chess Club. Todos los derechos reservados.
          </p>
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
    </footer>
  );
}
