
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Dream Asia',
  description: 'Theme park adventure',
  icons: {
    icon: '/images/logo-img.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
