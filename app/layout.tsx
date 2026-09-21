
import Provider from "../components/Hoc/provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Home/Footer/Footer";

const font = Inter({
  weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']

})

export const metadata: Metadata = {
  title: "Ayesha DevPortfolio",
  description: "Portfolio website using next js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
       suppressHydrationWarning
      className={`${font.className} h-full antialiased`} 
      >
      <body className="min-h-full flex flex-col"
      >
        <Provider>
           <ResponsiveNav/>
          {children} 
          <Footer/>
          </Provider> 
      </body>
    </html>
  );
}
