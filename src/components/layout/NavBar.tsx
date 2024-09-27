"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LuLogOut } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../ui/Button";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-primary">
      <div className="flex justify-between items-center px-4 h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            className="h-8"
            src="/logo/logo_w.svg"
            alt="logo"
            width={100}
            height={48}
          />
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 text-white">
            <Link href="/">قوالب</Link>
            <Link href="/">خدمات</Link>
            <Link href="/">تواصل</Link>
            <Link href="/">نحن</Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="text-white w-6 h-6" />
            ) : (
              <HiMenu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center">
          <SignedOut>
            <Link href="/sign-in">
              <Button>تسجيل</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-white text-primary" variant="outline">
                انشاء حساب
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Open chat"
                  labelIcon={<LuLogOut />}
                  onClick={() => alert("init chat")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-primary transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col h-full p-4 text-white">
          <button
            className="self-end text-white"
            onClick={() => setMenuOpen(false)}
          >
            <HiX className="w-6 h-6" />
          </button>
          <SignedIn>
            <UserButton>
        
            </UserButton>
          </SignedIn>
          <nav className="mt-4">
            <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>
              قوالب
            </Link>
            <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>
              خدمات
            </Link>
            <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>
              تواصل
            </Link>
            <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>
              نحن
            </Link>
          </nav>

          {/* Action Buttons in Drawer */}
          <div className="mt-6">
            <SignedOut>
              <Link href="/sign-in">
                <Button className="mt-4 w-full">تسجيل</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-white text-primary mt-2 w-full" variant="outline">
                  انشاء حساب
                </Button>
              </Link>
            </SignedOut>

          </div>
        </div>
      </div>

      {/* Overlay for closing the drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default NavBar;
