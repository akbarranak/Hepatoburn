"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import ShineButton from "@/components/shine-button"

export default function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      const scrollY = window.scrollY
      setIsVisible(scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateToOrderPage = () => {
    window.open("https://www.premierdiscountlink.com/JD2XQCJ/FMRP24H/?source_id=offweb", "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
      <ShineButton
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 rounded-full shadow-lg flex items-center justify-center gap-2 font-oswald"
        onClick={navigateToOrderPage}
      >
        <ShoppingCart className="h-5 w-5" />
        ORDER NOW
      </ShineButton>
    </div>
  )
}
