import "./globals.css";
import { publicAsset } from '@/lib/publicAsset';
import { Poppins } from "next/font/google";
import Script from "next/script"; // ✅ import Script
import { SITE_URL } from "./_data/park";
import { organizationSchema } from "./_data/seo";
import JsonLd from "./_ui/JsonLd";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale/userScalable removed: blocking pinch-zoom fails WCAG 1.4.4 and
  // is flagged by Lighthouse mobile usability, which the brief asks us to pass.
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dream Asia World | Water Park, Theme Park & Resort in Nagpur",
    // Inner pages supply their own title; this keeps the brand on the end.
    template: "%s",
  },
  description:
    "Dream Asia World is Nagpur's complete leisure destination — water park, adventure park, amusement park, resort stays and destination wedding venues on one estate. Open 10:00 AM to 6:00 PM.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Dream Asia World | Water Park, Theme Park & Resort in Nagpur",
    description:
      "Water park, adventure park, amusement park, resort stays and destination weddings on one estate in Nagpur, Maharashtra.",
    url: SITE_URL,
    siteName: "Dream Asia World",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/Assets/dreamasia-logo.png" }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: publicAsset("/Assets/dreamasia-logo-square.png"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Entity data for search and AI engines: brand, legal name, location,
            contact and opening hours, tying the attractions to one organisation. */}
        <JsonLd data={organizationSchema()} />

        {children}

        {/* ✅ Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1493017348515638');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ✅ Fallback for no-JS browsers */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1493017348515638&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
