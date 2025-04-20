import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shrikant Rathod | Portfolio",
  description: `Frontend developer, one year of experience as a Frontend developer with a focus on Next.js and
  React.js. Currently leading and overseeing three projects in my role as frontend
  developer at a seeded startup. I've also finished two personal projects, which
  demonstrate my commitment to lifelong learning and technological exploration.
  I am dedicated to improving my knowledge of technology and cloud computing.
  I am skilled at taking charge of projects and providing excellent solutions.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2PER0WK02N"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PER0WK02N');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
