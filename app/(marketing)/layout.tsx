import Footer from "@/components/marketing/Footer";
import Header from "@/components/marketing/Header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="page-landing">
        <Header />
        {children}
        <Footer />
    </div>
  );
}
