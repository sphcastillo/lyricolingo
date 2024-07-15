import Image from "next/image";
// import LyricoLingoLogo from "@/images/logo.png";
import UserButton from "./UserButton";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import CreateExperienceButton from "./CreateExperienceButton";
import { DarkModeToggle } from "./DarkModeToggle";
import localFont from 'next/font/local';
import UpgradeBanner from "./UpgradeBanner";

const rosamila = localFont({
  src: './fonts/Rosamila_Regular.otf'
})

const tough = localFont({
  src: './fonts/Tough_Regular.otf'
});

const bilingual = localFont({
  src: './fonts/Bilingual_Serif_Font.ttf'
})


async function Header() {
  const session = await getServerSession(authOptions);
  // console.log("session: ", session);

  return (
    <header className="absolute inset-x-0 top-0 z-50 h-[72px] bg-transparent">
      <UpgradeBanner />
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center p-5 pl-2">
        <Link href="/" prefetch={false} className="overflow-hidden">
          <span className="sr-only">LyricoLingo</span>
          <div className={rosamila.className}>
          <span className="text-white tracking-widest text-3xl px-2">LyricoLingo</span>
          </div>
          {/* <Image
            className="h-[72px] w-auto z-25"
            src={LyricoLingoLogo}
            alt="LyricoLingo Logo"
            width={250}
            height={250}
          /> */}
        </Link>

        <div className=" flex-1 flex items-center justify-end space-x-4">
          {session ? (
            <>
              <Link
                href={"/discover"}
                className="flex justify-center items-center space-x-1"
                prefetch={false}
              >
                <div className={tough.className}>
                <span className="text-[15px] font-bold tracking-wider leading-6 text-white">
                  What&apos;s New
                </span>
                </div>
              </Link>
              <Link
                href={"/discover"}
                className="flex justify-center items-center space-x-1"
                prefetch={false}
              >
                <span className="text-sm font-semibold leading-6 text-white">
                  Search for Lyrics
                </span>
              </Link>
              <CreateExperienceButton />
            </>
          ) : (
            <Link
              href={"/discover"}
              className="flex justify-center items-center space-x-1"
              prefetch={false}
            >
              <span className="text-sm font-semibold leading-6 text-white">
                Discover
              </span>
            </Link>
          )}
          <UserButton session={session} />
          <DarkModeToggle />

        </div>
      </nav>
    </header>
  );
}

export default Header;
