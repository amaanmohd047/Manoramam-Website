import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import Providers from "./_context/Providers";
import { raleway } from "./_components/ui/fonts";

export const metadata = {
  title: {
    template: "%s | Manoramam Hotel",
    default: "Welcome to Manoramam Hotel",
  },
  description:
    "Manoramam offers an exclusive luxury experience in the heart of the world. Enjoy elegant rooms, world-class dining, and premium amenities. Book your stay today and indulge in unparalleled comfort and sophistication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-primary-50 text-primary-900 min-h-screen flex flex-col antialiased scroll-smooth`}
      >
        <Header />
        <div className="flex-1 px-8 py-10 h-full grid">
          <main className="max-w-7xl mx-auto w-full">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
