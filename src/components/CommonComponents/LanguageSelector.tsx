"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "es", name: "Spanish", nativeName: "Español" },
];

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract current locale from pathname (e.g., "/en/about" -> "en")
  const segments = pathname?.split("/") || [];
  const currentLocale = segments[1] || "en";

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageSelect = (code: string) => {
    if (!pathname) return;
    const newSegments = [...segments];
    newSegments[1] = code;
    const newPath = newSegments.join("/");
    setIsOpen(false);
    router.push(newPath);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left shrink-0" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="h-4.5 w-4.5 text-secondary" />
        <span className="flex items-center gap-1.5">
          <span className="text-button-bg text-[14px]">Language</span>
          <span className="font-semibold text-white text-[14px]">
            {currentLanguage.name}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-2xl border border-white/10 bg-[#121420]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-0.5" role="menu" aria-orientation="vertical">
            {languages.map((lang) => {
              const isSelected = lang.code === currentLocale;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-white/10 text-button-bg"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                  role="menuitem"
                >
                  <span>{lang.name}</span>
                  {lang.nativeName !== lang.name && (
                    <span className="text-xs text-secondary font-normal">
                      {lang.nativeName}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
