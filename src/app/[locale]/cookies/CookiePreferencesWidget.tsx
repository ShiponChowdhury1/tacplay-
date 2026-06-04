"use client";

import React, { useState, useEffect } from "react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookiePreferencesWidgetProps {
  dict: {
    preferences_title: string;
    pref_necessary_title: string;
    pref_necessary_desc: string;
    pref_analytics_title: string;
    pref_analytics_desc: string;
    pref_functional_title: string;
    pref_functional_desc: string;
    pref_marketing_title: string;
    pref_marketing_desc: string;
    btn_reject_all: string;
    btn_accept_all: string;
    btn_save_pref: string;
    alert_saved: string;
    alert_updated: string;
    alert_accepted: string;
  };
}

export default function CookiePreferencesWidget({ dict }: CookiePreferencesWidgetProps) {
  const [cookies, setCookies] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookiePreferences");
      if (saved) {
        setCookies(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cookie preferences", e);
    }
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key !== "necessary") {
      setCookies((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  const handleSave = () => {
    try {
      localStorage.setItem("cookiePreferences", JSON.stringify(cookies));
      alert(dict.alert_saved);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookies(preferences);
    try {
      localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
      alert(dict.alert_updated);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookies(preferences);
    try {
      localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
      alert(dict.alert_accepted);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-8 space-y-6 rounded-lg border border-background/60 bg-background/40 p-6">
      <h3 className="text-lg font-semibold text-white">{dict.preferences_title}</h3>

      <div className="space-y-4">
        {/* Strictly Necessary */}
        <div className="p-4 rounded-lg border border-background/60 bg-black/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{dict.pref_necessary_title}</h4>
              <p className="text-sm text-secondary">{dict.pref_necessary_desc}</p>
            </div>
            <input
              type="checkbox"
              checked={cookies.necessary}
              disabled
              className="w-6 h-6 accent-primary cursor-not-allowed"
              readOnly
            />
          </div>
        </div>

        {/* Performance & Analytics */}
        <div className="p-4 rounded-lg border border-background/60 bg-black/20 hover:border-primary/30 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{dict.pref_analytics_title}</h4>
              <p className="text-sm text-secondary">{dict.pref_analytics_desc}</p>
            </div>
            <input
              type="checkbox"
              checked={cookies.analytics}
              onChange={() => handleToggle("analytics")}
              className="w-6 h-6 accent-primary cursor-pointer"
            />
          </div>
        </div>

        {/* Functional */}
        <div className="p-4 rounded-lg border border-background/60 bg-black/20 hover:border-primary/30 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{dict.pref_functional_title}</h4>
              <p className="text-sm text-secondary">{dict.pref_functional_desc}</p>
            </div>
            <input
              type="checkbox"
              checked={cookies.preferences}
              onChange={() => handleToggle("preferences")}
              className="w-6 h-6 accent-primary cursor-pointer"
            />
          </div>
        </div>

        {/* Marketing */}
        <div className="p-4 rounded-lg border border-background/60 bg-black/20 hover:border-primary/30 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{dict.pref_marketing_title}</h4>
              <p className="text-sm text-secondary">{dict.pref_marketing_desc}</p>
            </div>
            <input
              type="checkbox"
              checked={cookies.marketing}
              onChange={() => handleToggle("marketing")}
              className="w-6 h-6 accent-primary cursor-pointer"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-4 pt-4 border-t border-background/60 sm:flex-row">
        <button
          onClick={handleRejectAll}
          className="flex-1 rounded-lg border border-secondary px-6 py-3 text-secondary transition-colors hover:border-primary hover:text-primary"
        >
          {dict.btn_reject_all}
        </button>
        <button
          onClick={handleAcceptAll}
          className="flex-1 rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-colors hover:bg-primary/90"
        >
          {dict.btn_accept_all}
        </button>
        <button
          onClick={handleSave}
          className="flex-1 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
        >
          {dict.btn_save_pref}
        </button>
      </section>
    </div>
  );
}
