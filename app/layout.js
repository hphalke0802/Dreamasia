import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script"; // ✅ import Script

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export const metadata = {
  title: "Dreamasiaworld.com",
  description: "Dream Asia World",
  icons: {
    icon: "/Assets/logo-img.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
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
