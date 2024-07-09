"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LyricoLingoLogo from "@/images/logo.png";
import UserButton from "./UserButton";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center p-5 pl-2">
        <Link href="/" prefetch={false} className="overflow-hidden">
          <span className="sr-only">LyricoLingo</span>
          <Image
            className="h-[72px] w-auto z-25"
            src={LyricoLingoLogo}
            alt="LyricoLingo Logo"
            width={250}
            height={250}
          />
        </Link>

        <div className="flex-1 flex items-center justify-end space-x-4">
          <Link
            href="/discover"
            className="flex justify-center items-center space-x-1"
            prefetch={false}
          >
            <span className="text-sm font-semibold leading-6 text-white">
              Discover
            </span>
          </Link>

          <UserButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
