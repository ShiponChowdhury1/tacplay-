/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = ({ dict, navDict }: { dict?: any; navDict?: any }) => {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";

  return (
    <footer id="contact" className=" bg-transparent py-4 md:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: Logo + Tagline centered */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link href={`/${currentLocale}/#home`} className="flex items-center gap-3">
            <Image
              src="/Tacplay-logo-2.png"
              alt="Tacplay"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          <p className="max-w-xl text-sm text-secondary">
            {dict?.tagline ||
              "Bringing together players and field owners to create a stronger, more competitive paintball community through technology-driven solutions and seamless experiences"}
          </p>
        </div>
        {/* contact information */}
        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6 text-center">
          <a href="mailto:info@tacplay.eu" className="text-sm text-secondary hover:text-primary">
            info@tacplay.eu
          </a>
          <span className="hidden sm:inline-block text-secondary">|</span>
          <a href="tel:+34623295692" className="text-sm text-secondary hover:text-primary">
            +34 623 295 692
          </a>
        </div>

        {/* Nav links centered */}
        <nav className="mt-8 flex flex-wrap justify-center gap-8">
          <Link href={`/${currentLocale}/#home`} className="text-secondary hover:text-primary">
            {navDict?.home || "Home Page"}
          </Link>
          <Link href={`/${currentLocale}/#features`} className="text-secondary hover:text-primary">
            {navDict?.features || "Features"}
          </Link>
          <Link
            href={`/${currentLocale}/#how-it-works`}
            className="text-secondary hover:text-primary"
          >
            {navDict?.how_it_works || "How it works"}
          </Link>
          <Link href={`/${currentLocale}/#about`} className="text-secondary hover:text-primary">
            {navDict?.about || "About"}
          </Link>
          <Link href={`/${currentLocale}/#contact`} className="text-secondary hover:text-primary">
            {navDict?.contact || "Contact Us"}
          </Link>
        </nav>

        {/* Divider */}
        <div className="mt-10 border-t border-background/60" />

        {/* Bottom row: logo + copyright left, social + legal links right */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/Tacplay-logo-2.png"
              alt="Tacplay"
              width={120}
              height={34}
              className="object-contain"
            />
            <p className="text-sm text-secondary">
              {dict?.copyright || "© 2026 TACPLAY. All rights reserved."}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/channel/UCox1qpxBLSIP5YutkjxS3BQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaYoutube className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/tacplayeu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.tiktok.com/@tacplayeu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href={`/${currentLocale}/privacy`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.privacy || "Privacy Policy"}
              </Link>
              <Link href={`/${currentLocale}/terms`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.terms || "Terms of Service"}
              </Link>
              <Link href={`/${currentLocale}/owner`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.owner_agreement || "Owner Agreement"}
              </Link>
              <Link href={`/${currentLocale}/cookies`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.cookies || "Cookie Settings"}
              </Link>
              <Link href={`/${currentLocale}/website-disclaimer`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.disclaimer || "Website Disclaimer"}
              </Link>
              <Link href={`/${currentLocale}/use-policy`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.use_policy || "Acceptable Use Policy"}
              </Link>
              <Link href={`/${currentLocale}/return-policy`} className="text-sm text-secondary underline hover:text-primary">
                {dict?.return_policy || "Return Policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
