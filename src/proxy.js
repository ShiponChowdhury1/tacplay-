import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ['en', 'de', 'es', 'fr'];
const defaultLocale = 'en';

function getLocale(request) {
  const headers = {
    'accept-language':
      request.headers.get('accept-language') || ''
  };

  const languages = new Negotiator({ headers }).languages();

  return match(
    languages,
    locales,
    defaultLocale
  );
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;
  console.log("Proxy matched path:", pathname);

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) ||
      pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = getLocale(request);

  request.nextUrl.pathname =
    `/${locale}${pathname}`;

  return NextResponse.redirect(
    request.nextUrl
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - Any path with a file extension (e.g. .png, .jpg, .svg, .ico)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|.*\\..*).*)',
  ],
};
