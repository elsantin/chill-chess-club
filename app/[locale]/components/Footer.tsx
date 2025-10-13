"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-400 text-center md:text-left">
            {t("copyright").replace("2025", currentYear.toString())}
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-pink-500 transition-colors text-sm"
            >
              {t("privacy")}
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-pink-500 transition-colors text-sm"
            >
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
