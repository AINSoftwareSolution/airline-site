import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'


import CookieCard from "./layout/cookieCard";
import Footer from "./layout/footer";
import FooterCall from "./layout/footerCall";
import Header from "./layout/header";

import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReservationKart.com",
  keywords: "Flight Booking, Cheap Flight, International Flights at Lowest Price, Air Ticket Booking Bookings, cheap flight agency, airoplane reservation, airoplan ticket booking, Cheap flight ticket, traveller agency, Airoplane, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, flight booking, cheap plane tickets, air tickets, cheap air, cheap air tickets, airline flights, air ticket booking, fly tickets, air line tickets, multi city flights, cheap international flights, book flights online, cheap airline flights",
  description: 'Reserve your cheap airline flights with ReservationKart. Your top traveller agency for airplane reservation and ticket booking.Your go-to traveler agency for affordable air travel. Fly smart, save more!',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <GoogleTagManager gtmId='AW-16615907817' />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16615907817 "></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16615907817');
            `,
          }}
        />
        <link rel="canonical" href="https://reservationkart.com/" key='canonical' />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=AW-16615907817"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        <Header />
        {children}
        <CookieCard />
        <FooterCall />
        <Footer />
        <Script async src="https://api.cronbot.ai/v1/widgets/app/app_tilrrkroyu43"></Script>
      </body>
    </html>
  );
}
