"use client"

import { BookOpenIcon } from 'lucide-react';
import React, { useState } from 'react'
import BlurFade from '../ui/blur-fade';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeToggle } from '../theme-toggle';


const navItems = [
    { label: 'Ai agents', href: '/agents', icon: BookOpenIcon },
    { label: 'Examples', href: '/example', icon: BookOpenIcon },
    //{ label: 'Docs', href: 'https://docs.Zap', icon: BookOpenIcon },
  ];
  
  export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    return (
      <BlurFade delay={0.2} className="relative z-50 w-full border-b ">
        <header className=" sticky top-12">
          <div className=" mx-auto w-full max-w-5xl px-4 py-4">
            <div className="rounded-xl border border-border/50 bg-muted/70 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between px-4 py-2">
                <Link href={"/"} className="relative">
                 <h1>THE LOGO</h1>
                </Link>
  
                <nav className="hidden md:ml-auto md:mr-8 md:flex">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group relative flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Icon className="hidden h-4 w-4" />
                        {item.label}
                        <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 transition-transform duration-300 group-hover:scale-x-100" />
                      </Link>
                    );
                  })}
                  <a
                    href={'https://zenvid.gitbook.io/zap'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Docs
                    <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                 
                </nav>
  
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="h-9 rounded-lg px-4 text-sm transition-colors hover:bg-primary hover:text-primary-foreground hidden"
                    
                  >
                    Login
                  </Button>
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
  
            {isMobileMenuOpen && (
              <div className="absolute left-4 right-4 top-full mt-2 rounded-lg border border-border/50 bg-background/95 p-3 shadow-lg backdrop-blur-md md:hidden">
                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className=" hidden h-4 w-4" />
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}
          </div>
        </header>
      </BlurFade>
    );
  };
  
export default function Navbar() {
  return (
    <div className='w-full h-[70px] flex items-center justify-center border-b border-red-500 '>
 <Header />
    </div>
  )
}
