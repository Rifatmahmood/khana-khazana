import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import dbConnect from "@/services/dbConnect";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
});

export const metadata = {
  title: "Khana Khazana - Home",
  description: "Explore a world of culinary delights at Khana Khazana! Whether you're a seasoned chef or a beginner in the kitchen, our website offers a treasure trove of mouthwatering recipes from around the globe. From savory mains to decadent desserts, our collection caters to every taste and occasion. Join our culinary community, discover new flavors, and embark on a delicious journey with Khana Khazana.",
  openGraph: {
    title: "Khana Khazana - Home",
    description: "Explore a world of culinary delights at Khana Khazana! Whether you're a seasoned chef or a beginner in the kitchen, our website offers a treasure trove of mouthwatering recipes from around the globe.",
    url: NEXT_PUBLIC_SITE_URL + '/',
    siteName: "Khana Khazana",
    type: 'website',
    images: [
      {
        url: 'https://github.com/Rifatmahmood/weather-dashboard/blob/main/cover.png?raw=true',
        width: 1200,
        height: 630,
        alt: 'Preview image for Khanakhazana',
      }
    ]
  },
};

export default async function RootLayout({ children }) {
  await dbConnect()
  return (
    <html lang="en">
      <body className={poppins.className}>

        <AuthProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html >
  );
}
