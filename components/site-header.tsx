"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingCart, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import ShineButton from "@/components/shine-button"

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section with offset for header height
  const scrollToSection = useCallback((sectionId: string) => {
    setIsSheetOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  // Function to navigate to order page
  const navigateToOrderPage = () => {
    window.open("https://www.premierdiscountlink.com/JD2XQCJ/FMRP24H/?source_id=offweb", "_blank")
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Benefits", href: "benefits" },
    { name: "Ingredients", href: "ingredients" },
    { name: "How It Works", href: "how-it-works" },
    { name: "Reviews", href: "testimonials" }, // Changed from "Testimonials" to "Reviews" for shorter text
    { name: "Pricing", href: "pricing" },
    { name: "FAQ", href: "faq" },
  ]

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#8A1C1C] shadow-md py-2" : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 z-20">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image src="/hepatoburn-bottle.png" alt="HepatoBurn Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl md:text-2xl text-white font-heading">HepatoBurn</span>
          </Link>

          {/* Desktop Navigation - only show on large screens */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-yellow-300 transition-colors text-base xl:text-lg font-heading cursor-pointer relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button (Desktop) - only show on large screens */}
          <div className="hidden lg:block">
            <ShineButton
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-6 py-3 rounded-md whitespace-nowrap font-oswald"
              onClick={navigateToOrderPage}
            >
              Order Now
            </ShineButton>
          </div>

          {/* Mobile Navigation - show on medium and small screens */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={navigateToOrderPage}
              aria-label="Order Now"
              className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full flex items-center justify-center"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white" aria-label="Open Menu">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#8A1C1C] text-white border-[#8A1C1C]/50 p-0 w-[85vw] max-w-[350px]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-[#8A1C1C]/30">
                    <Link href="/" className="flex items-center gap-3" onClick={() => setIsSheetOpen(false)}>
                      <div className="relative w-8 h-8">
                        <Image src="/hepatoburn-bottle.png" alt="HepatoBurn Logo" fill className="object-contain" />
                      </div>
                      <span className="font-bold text-xl font-heading">HepatoBurn</span>
                    </Link>
                    <SheetClose className="rounded-full bg-[#8A1C1C]/50 hover:bg-[#8A1C1C]/70 p-2 transition-colors">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>

                  <nav className="flex flex-col p-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="text-xl font-medium hover:text-yellow-300 transition-colors font-heading py-4 border-b border-[#8A1C1C]/30 text-left flex items-center justify-between"
                      >
                        {link.name}
                        <ArrowRight className="h-4 w-4 opacity-50" />
                      </button>
                    ))}
                  </nav>

                  <div className="mt-auto p-4 border-t border-[#8A1C1C]/30">
                    <ShineButton
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl py-4 font-oswald"
                      onClick={() => {
                        setIsSheetOpen(false)
                        navigateToOrderPage()
                      }}
                    >
                      Order Now
                    </ShineButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
