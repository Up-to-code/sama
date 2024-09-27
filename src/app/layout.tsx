import type { Metadata } from "next";
import "./globals.css";
import { Mada } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { ClerkProviderClient } from "@/components/providers/ClerkProviderClaint";
const mada = Mada({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mada",
});

export const metadata: Metadata = {
  title: "سما | تحقيق أحلامك ونجاحك هو هدفنا",
  description:
    "في سما، نجاحك ليس مجرد هدف، بل هو حلم نعمل على تحقيقه. انضم إلينا لتحقيق طموحاتك وأحلامك مع أفضل الخدمات والدعم المتكامل.",
  keywords:
    "سما, نجاح, تحقيق الأحلام, دعم الأعمال, خدمات متكاملة, نجاحك هو هدفنا, استشارات الأعمال, حلول أعمال, دعم ريادة الأعمال",
  openGraph: {
    title: "سما | نجاحك هو هدفنا",
    description:
      "في سما، نسعى لتحقيق أحلامك وطموحاتك من خلال تقديم أفضل الحلول والخدمات المخصصة لنجاحك.",
    url: "https://www.yourwebsite.com",
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: "/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "سما | نجاحك هو هدفنا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سما | نجاحك هو هدفنا",
    description:
      "في سما، نعمل لتحقيق أحلامك وطموحاتك. اكتشف خدماتنا المتميزة الآن.",
    site: "@sama",
  },
 
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProviderClient>
      <html lang="ar" dir="rtl">
        <body className={` antialiased ${mada.className}`}>
          <NavBar />
          {children}
          <Footer
            companyName="سما"
            links={[
              { label: "الرائيسية", url: "/" },
              { label: "الخدمات", url: "/services" },
              { label: "عنا", url: "/about" },
              { label: "اتصل بنا", url: "/contact" },
            ]}
          />
        </body>
      </html>
    </ClerkProviderClient>
  );
}
