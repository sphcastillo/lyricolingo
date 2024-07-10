import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ClientProviders from "@/components/ClientProviders";


export const metadata: Metadata = {
  title: "LyricoLingo",
  description: "Embark on an exhilarating language-learning journey with our groundbreaking app! Immerse yourself in the captivating world of music as you master new languages effortlessly. Powered by Spotify's Web API, our app transforms your favorite songs into dynamic learning tools. Explore diverse genres and artists while delving into the rich tapestry of lyrics, presented in both their original language and translated versions. With seamless integration, you can groove to the beat, follow along with the lyrics, and enhance your understanding through interactive quizzes and engaging exercises. Say goodbye to traditional language learning methods and join us on a thrilling adventure where every melody becomes a stepping stone towards fluency!",
};

export default function Home({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {


  return (
    <ClientProviders>
      <html lang="en">
        <body className='bg-black'>
          <Header />
          {children}
        </body>
      </html>
    </ClientProviders>
  );
}
