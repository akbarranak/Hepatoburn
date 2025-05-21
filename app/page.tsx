"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ShieldCheck, ArrowRight, Star } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import FAQAccordion from "@/components/faq-accordion"
import SiteHeader from "@/components/site-header"
import ShineButton from "@/components/shine-button"
import StickyOrderButton from "@/components/sticky-order-button"
import CountdownTimer from "@/components/countdown-timer"
import GuaranteeSection from "@/components/guarantee-section"
import CreativeCountdown from "@/components/creative-countdown"
import { JsonLd } from "@/components/json-ld"

export default function Home() {
  // Product schema data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "HepatoBurn",
    image: "/hepatoburn-bottle.png",
    description:
      "HepatoBurn is a revolutionary dietary supplement designed to support liver health and optimize your body's natural fat-burning processes.",
    brand: {
      "@type": "Brand",
      name: "HepatoBurn",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 49,
      highPrice: 79,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "HepatoBurn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 1247,
      bestRating: 5,
      worstRating: 1,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        "@type": "Person",
        name: "Jennifer L.",
      },
      datePublished: "2023-11-15",
      reviewBody:
        "After struggling with my weight for years, HepatoBurn has been a game-changer. I've lost 28 pounds in just 2 months!",
    },
  }

  // FAQ schema data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How Does HepatoBurn Work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HepatoBurn works by supporting optimal liver function, which plays a crucial role in metabolism and fat burning. Our proprietary blend of natural ingredients helps detoxify the liver, boost metabolism, and support healthy weight management.",
        },
      },
      {
        "@type": "Question",
        name: "How Long Does It Take to See Results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many customers report feeling increased energy and improved digestion within the first week. For weight management results, most users begin to see noticeable changes within 2-4 weeks of consistent use, with optimal results typically seen after 2-3 months.",
        },
      },
      {
        "@type": "Question",
        name: "Is HepatoBurn Safe to Use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HepatoBurn is made with 100% natural ingredients in an FDA-approved, GMP-certified facility. It contains no artificial additives, stimulants, or harmful chemicals. However, as with any supplement, we recommend consulting with your healthcare provider before starting, especially if you have any medical conditions or are taking medications.",
        },
      },
      {
        "@type": "Question",
        name: "What If HepatoBurn Doesn't Work for Me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We stand behind our product with a 60-day, 100% money-back guarantee. If you're not completely satisfied with your results, simply contact our customer service team within 60 days of purchase for a full refund, no questions asked.",
        },
      },
    ],
  }

  // Organization schema data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HepatoBurn",
    url: "/",
    logo: "/logo.png",
    sameAs: ["https://facebook.com/hepatoburn", "https://twitter.com/hepatoburn", "https://instagram.com/hepatoburn"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-1234",
      contactType: "customer service",
      availableLanguage: "English",
    },
  }

  // Scientific research data
  const researchStudies = [
    {
      title: "Randomized controlled trial testing the effects of weight loss on nonalcoholic steatohepatitis",
      authors: "Promrat, K., Kleiner, D.E., Niemeier, H.M., et al.",
      journal: "Hepatology, 51(1), 121-129 (2010)",
      url: "https://pubmed.ncbi.nlm.nih.gov/19827166/",
      key_finding: "Weight loss of 7-10% improves liver health markers and reduces liver inflammation.",
    },
    {
      title:
        "Weight Loss Through Lifestyle Modification Significantly Reduces Features of Nonalcoholic Steatohepatitis",
      authors: "Vilar-Gomez, E., Martinez-Perez, Y., Calzadilla-Bertot, L., et al.",
      journal: "Gastroenterology, 149(2), 367-378 (2015)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25865049/",
      key_finding:
        "Lifestyle changes that support liver health can lead to significant improvements in liver function.",
    },
    {
      title:
        "Diet, weight loss, and liver health in nonalcoholic fatty liver disease: Pathophysiology, evidence, and practice",
      authors: "Marchesini, G., Petta, S., Dalle Grave, R.",
      journal: "Hepatology, 63(6), 2032-2043 (2016)",
      url: "https://journals.lww.com/hep/fulltext/2016/06000/diet,_weight_loss,_and_liver_health_in.35.aspx",
      key_finding:
        "Dietary interventions supporting liver health show significant benefits for overall metabolic health.",
    },
    {
      title: "Weight-loss-independent benefits of exercise on liver steatosis and stiffness in Japanese men with NAFLD",
      authors: "Takahashi, H., Kotani, K., Tanaka, K., et al.",
      journal: "JHEP Reports, 3(3), 100200 (2021)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8059085/",
      key_finding:
        "Exercise provides liver health benefits independent of weight loss, improving overall liver function.",
    },
  ]

  // Function to navigate to external link
  const navigateToOrderPage = () => {
    window.open("https://www.premierdiscountlink.com/JD2XQCJ/FMRP24H/?source_id=offweb", "_blank")
  }

  return (
    <>
      {/* Structured Data / Schema Markup */}
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={organizationSchema} />

      <main className="flex min-h-screen flex-col items-center">
        <SiteHeader />
        {/* Hero Section */}
        <section className="w-full bg-[#8A1C1C] text-white pt-20 md:pt-32" id="home">
          <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
              {/* Left side content */}
              <div className="md:col-span-7 space-y-4 md:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-heading">
                  Boost Your Metabolism with HepatoBurn
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body">
                  Scientifically formulated to support liver health and optimize metabolism for effective weight
                  management
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white text-[#8A1C1C] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-white shadow-sm">
                    100% Natural
                  </span>
                  <span className="bg-white text-[#8A1C1C] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-white shadow-sm">
                    Made in USA
                  </span>
                  <span className="bg-white text-[#8A1C1C] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-white shadow-sm">
                    GMP Certified
                  </span>
                </div>

                <div className="pt-2">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= 4 ? "fill-yellow-500 text-yellow-500" : "fill-yellow-500/50 text-yellow-500/50"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium ml-1">4.8/5 (1,247 reviews)</span>
                  </div>

                  <p className="text-sm sm:text-base flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    60-Day Money Back Guarantee
                  </p>
                  <CreativeCountdown minutes={10} seconds={0} className="w-full max-w-md" />
                </div>
              </div>

              {/* Right side with bottle and button */}
              <div className="md:col-span-5 flex flex-col items-center mt-4 md:mt-0">
                <div className="relative w-48 h-60 sm:w-60 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[420px]">
                  <Image
                    src="/hepatoburn-bottle.png"
                    alt="HepatoBurn Supplement Bottle - Natural Liver Support Formula"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <ShineButton
                  enhanced={true}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 py-2 sm:py-3 rounded-full mt-4 sm:mt-6 w-full sm:w-auto font-oswald"
                  onClick={navigateToOrderPage}
                >
                  ORDER NOW
                </ShineButton>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges - RENAMED SECTION */}
        <section className="w-full bg-white py-6 md:py-10" aria-labelledby="trust-badges-title">
          <div className="container mx-auto px-2 sm:px-3 max-w-7xl">
            <h2
              id="trust-badges-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#8A1C1C] mb-4 md:mb-8 font-heading"
            >
              The Gold Standard in Liver Support
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
              {[
                {
                  image: "/fda-approved.png",
                  title: "FDA Approved Facility",
                  description: "Made in a facility following strict FDA guidelines for safety and quality.",
                },
                {
                  image: "/all-natural.png",
                  title: "100% Natural Formula",
                  description: "Premium natural ingredients for maximum effectiveness and results.",
                },
                {
                  image: "/made-in-usa.png",
                  title: "Made in USA",
                  description: "Proudly manufactured in the United States under strict quality standards.",
                },
                {
                  image: "/gmp-certified.png",
                  title: "GMP Certified",
                  description: "Follows Good Manufacturing Practices for consistent quality in every bottle.",
                },
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative mb-2">
                    <Image src={badge.image || "/placeholder.svg"} alt={badge.title} fill className="object-contain" />
                  </div>
                  <div className="text-center w-full px-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#8A1C1C] mb-1 font-heading">{badge.title}</h3>
                    {/* Removed line-clamp-3 and shortened descriptions */}
                    <p className="text-sm sm:text-base md:text-lg text-black font-body">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Information */}
        <section className="w-full bg-[#F3E8E8] py-6 md:py-12" id="how-it-works" aria-labelledby="how-it-works-title">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-[420px] mx-auto">
                  <Image
                    src="/hepatoburn-bottle.png"
                    alt="HepatoBurn Supplement Bottle"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4 md:space-y-6">
                <h2
                  id="how-it-works-title"
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8A1C1C] font-heading"
                >
                  What is HepatoBurn?
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body">
                  HepatoBurn is a revolutionary dietary supplement designed to support liver health and optimize your
                  body's natural fat-burning processes. Our proprietary blend of natural ingredients works
                  synergistically to help detoxify your liver, boost metabolism, and support healthy weight management.
                </p>
                <ul className="space-y-2 md:space-y-3 font-body">
                  {[
                    "100% Natural Ingredients",
                    "Non-GMO",
                    "Made in an FDA-Approved Facility",
                    "GMP Certified",
                    "No Artificial Additives",
                    "60-Day Money Back Guarantee",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <ShineButton
                    enhanced={false}
                    className="bg-[#8A1C1C] hover:bg-[#8A1C1C]/90 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-1.5 sm:py-2 rounded-full w-full sm:w-auto font-oswald"
                    onClick={navigateToOrderPage}
                  >
                    LEARN MORE
                  </ShineButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW BENEFITS SHOWCASE SECTION - with gradient background */}
        <section className="w-full bg-white py-6 md:py-12 text-[#8A1C1C]" aria-labelledby="benefits-showcase-title">
          <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
            <h2
              id="benefits-showcase-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 font-heading text-[#8A1C1C]"
            >
              The HepatoBurn Revolution
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[
                {
                  title: "Liver Detoxification",
                  description:
                    "Cleanses and rejuvenates your liver, removing harmful toxins that slow down metabolism and impair fat burning.",
                },
                {
                  title: "Metabolic Enhancement",
                  description:
                    "Activates your body's natural fat-burning mechanisms for more efficient calorie burning throughout the day.",
                },
                {
                  title: "Appetite Regulation",
                  description:
                    "Helps control cravings and reduces hunger, making it easier to maintain a healthy caloric intake.",
                },
                {
                  title: "Energy Amplification",
                  description:
                    "Boosts natural energy levels without stimulants, helping you stay active and motivated throughout the day.",
                },
                {
                  title: "All-Natural Formula",
                  description:
                    "Made with 100% natural ingredients with no artificial additives, fillers, or harmful chemicals.",
                },
                {
                  title: "Rapid Results",
                  description:
                    "Delivers noticeable improvements within weeks, with optimal results seen after consistent use.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#F3E8E8] p-4 sm:p-6 md:p-8 rounded-xl border border-[#8A1C1C]/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#8A1C1C]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 font-heading text-[#8A1C1C]">{benefit.title}</h3>
                      {/* Increased font size for benefit descriptions */}
                      <p className="text-black text-base sm:text-lg md:text-xl font-body">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Benefits */}
        <section
          className="w-full bg-[#F3E8E8] text-[#8A1C1C] py-6 md:py-12"
          id="benefits"
          aria-labelledby="benefits-title"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              id="benefits-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 font-heading"
            >
              How HepatoBurn Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-[#8A1C1C]/10 p-4 sm:p-5 md:p-6 rounded-lg text-center hover:bg-[#8A1C1C]/20 transition-colors">
                <div className="flex justify-center mb-3 md:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 font-heading">
                  Supports Liver Health
                </h3>
                {/* Increased font size for benefit descriptions */}
                <p className="font-body text-base sm:text-lg md:text-xl text-black">
                  Detoxifies and rejuvenates your liver to optimize its natural functions
                </p>
              </div>

              <div className="bg-[#8A1C1C]/10 p-4 sm:p-5 md:p-6 rounded-lg text-center hover:bg-[#8A1C1C]/20 transition-colors">
                <div className="flex justify-center mb-3 md:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 font-heading">
                  Boosts Metabolism
                </h3>
                {/* Increased font size for benefit descriptions */}
                <p className="font-body text-base sm:text-lg md:text-xl text-black">
                  Enhances your body's natural ability to convert food into energy
                </p>
              </div>

              <div className="bg-[#8A1C1C]/10 p-4 sm:p-5 md:p-6 rounded-lg text-center hover:bg-[#8A1C1C]/20 transition-colors">
                <div className="flex justify-center mb-3 md:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 font-heading">
                  Reduces Fat Storage
                </h3>
                {/* Increased font size for benefit descriptions */}
                <p className="font-body text-base sm:text-lg md:text-xl text-black">
                  Helps prevent the accumulation of fat in problem areas
                </p>
              </div>

              <div className="bg-[#8A1C1C]/10 p-4 sm:p-5 md:p-6 rounded-lg text-center hover:bg-[#8A1C1C]/20 transition-colors">
                <div className="flex justify-center mb-3 md:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 font-heading">Increases Energy</h3>
                {/* Increased font size for benefit descriptions */}
                <p className="font-body text-base sm:text-lg md:text-xl text-black">
                  Provides natural, sustained energy throughout the day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients Section - NEW DESIGN */}
        <section className="w-full bg-white py-6 md:py-12" id="ingredients" aria-labelledby="ingredients-title">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <h2
              id="ingredients-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 font-heading text-[#8A1C1C]"
            >
              Key Ingredients
            </h2>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  name: "Milk Thistle Extract",
                  description:
                    "A powerful herb for liver protection. Contains silymarin that helps regenerate liver cells and reduce inflammation.",
                  imageSrc: "/milk-thistle-extract.png",
                },
                {
                  name: "Dandelion Root",
                  description:
                    "A traditional herb used for centuries to support liver health. Acts as a natural diuretic that helps reduce water retention and supports healthy bile production.",
                  imageSrc: "/dandelion-root.png",
                },
                {
                  name: "Artichoke Leaf Extract",
                  description:
                    "Mediterranean herb that supports liver function and digestion. Stimulates bile production and helps lower cholesterol levels.",
                  imageSrc: "/artichoke-leaf.png",
                },
                {
                  name: "Berberine",
                  description:
                    "Plant compound with powerful metabolic benefits. Activates AMPK, the metabolic master switch, and helps regulate blood sugar levels.",
                  imageSrc: "/berberine.png",
                },
                {
                  name: "Turmeric Extract",
                  description:
                    "Ancient spice with potent anti-inflammatory properties. Contains curcumin, a powerful antioxidant that reduces inflammation throughout the body.",
                  imageSrc: "/turmeric-root-powder.png",
                },
              ].map((ingredient, index) => (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#8A1C1C]/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#8A1C1C]/20 shadow-md bg-white flex items-center justify-center">
                        <Image
                          src={ingredient.imageSrc || "/placeholder.svg"}
                          alt={ingredient.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#8A1C1C] mb-1 sm:mb-2 font-heading text-center sm:text-left">
                        {ingredient.name}
                      </h3>
                      {/* Increased font size for ingredient descriptions */}
                      <p className="text-black font-body text-base sm:text-lg md:text-xl text-center sm:text-left">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <ShineButton
                enhanced={false}
                className="bg-[#8A1C1C] hover:bg-[#8A1C1C]/90 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-1.5 sm:py-2 rounded-full w-full sm:w-auto font-oswald"
                onClick={navigateToOrderPage}
              >
                DISCOVER THE SCIENCE
              </ShineButton>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="w-full bg-[#F3E8E8] text-[#8A1C1C] py-6 md:py-12"
          id="testimonials"
          aria-labelledby="testimonials-title"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              id="testimonials-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 font-heading"
            >
              Real People, Real Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <TestimonialCard
                name="Jennifer L."
                location="Dallas, TX"
                rating={5}
                testimonial="After struggling with my weight for years, HepatoBurn has been a game-changer. I've lost 28 pounds in just 2 months!"
                imageSrc="/woman-portrait.png"
              />
              <TestimonialCard
                name="Michael R."
                location="Chicago, IL"
                rating={5}
                testimonial="I was skeptical at first, but the results speak for themselves. My energy levels are through the roof and I've dropped 2 pant sizes."
                imageSrc="/thoughtful-man-portrait.png"
              />
              <TestimonialCard
                name="Sarah K."
                location="Portland, OR"
                rating={5}
                testimonial="HepatoBurn helped me break through my weight loss plateau. I feel healthier and more confident than I have in years."
                imageSrc="/woman-portrait.png"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section - ENHANCED */}
        <section className="w-full bg-white py-6 md:py-16" id="pricing" aria-labelledby="pricing-title">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-6 md:mb-10">
              <h2
                id="pricing-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 font-heading text-[#8A1C1C]"
              >
                Special Limited-Time Offer
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 font-body text-black">
                Choose Your Package & Save Today!
              </p>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6 md:mb-10">
              <CountdownTimer className="text-center" />
            </div>

            {/* Alternative 1: Single bottle with quantity badge */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
              <PricingCard
                title="2 BOTTLES"
                subtitle="60 Day Supply"
                price={79}
                originalPrice={158}
                savings="SAVE $79!"
                popular={false}
                buttonText="BUY NOW!"
                bottleCount={2}
              />
              <PricingCard
                title="6 BOTTLES"
                subtitle="180 Day Supply"
                price={49}
                originalPrice={474}
                savings="SAVE $180!"
                popular={true}
                buttonText="BUY NOW!"
                bottleCount={6}
              />
              <PricingCard
                title="3 BOTTLES"
                subtitle="90 Day Supply"
                price={69}
                originalPrice={237}
                savings="SAVE $90!"
                popular={false}
                buttonText="BUY NOW!"
                bottleCount={3}
              />
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg bg-[#8A1C1C]/80 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-lg font-body text-white">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-500" />
                <span>All Packages Come With Our 60-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Money-Back Guarantee Section */}
        <section className="w-full bg-[#F3E8E8]">
          <GuaranteeSection />
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-6 md:py-12" id="faq" aria-labelledby="faq-title">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              id="faq-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 font-heading text-[#8A1C1C]"
            >
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-[#8A1C1C]/10 shadow-sm">
              <FAQAccordion darkMode={false} />
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section className="w-full bg-[#F3E8E8] text-[#8A1C1C] py-6 md:py-12" aria-labelledby="science-title">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              id="science-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 font-heading"
            >
              The Science Behind HepatoBurn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <div className="relative w-full h-40 sm:h-48 md:h-64 lg:h-80">
                  <Image
                    src="/liver-anatomy.png"
                    alt="Liver Function Diagram showing how HepatoBurn works"
                    fill
                    className="object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-heading text-[#8A1C1C]">
                  Your Liver: The Key to Effective Weight Management
                </h3>
                {/* Increased font size for science section text */}
                <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-black">
                  Recent scientific research has revealed the critical role your liver plays in metabolism and weight
                  management. When your liver is functioning optimally, it efficiently processes fats, carbohydrates,
                  and proteins, helping to maintain a healthy weight.
                </p>
                <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-black">
                  HepatoBurn's proprietary formula contains clinically-studied ingredients that support liver health and
                  function, helping to optimize your body's natural fat-burning processes.
                </p>
                <ul className="space-y-2 md:space-y-3 font-body">
                  {[
                    "Supports healthy liver function",
                    "Helps detoxify and cleanse the liver",
                    "Optimizes metabolic processes",
                    "Supports healthy fat metabolism",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-black"
                    >
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#8A1C1C] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Second CTA */}
        <section className="w-full bg-white py-6 md:py-12" aria-labelledby="cta-title">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <h2
              id="cta-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 font-heading text-[#8A1C1C]"
            >
              Start Your Transformation Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto font-body text-black">
              Join thousands of satisfied customers who have experienced the life-changing benefits of HepatoBurn. Don't
              wait - supplies are limited!
            </p>

            {/* Added bottle image */}
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <div className="relative w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-72">
                <Image
                  src="/hepatoburn-bottle.png"
                  alt="HepatoBurn Supplement Bottle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <ShineButton
              enhanced={true}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 py-1.5 sm:py-2 rounded-full w-full sm:w-auto font-oswald"
              onClick={navigateToOrderPage}
            >
              <span className="flex items-center justify-center gap-2">
                CLAIM YOUR DISCOUNT NOW
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </ShineButton>
            <p className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-body text-[#8A1C1C]">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:h-6" />
              60-Day Money Back Guarantee
            </p>
          </div>
        </section>

        {/* NEW SECTION: Scientific Research */}
        <section className="w-full bg-[#F3E8E8] py-8 md:py-16" id="research" aria-labelledby="research-title">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8 md:mb-12">
              <h2
                id="research-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 font-heading text-[#8A1C1C]"
              >
                Backed by Scientific Research
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body text-black">
                HepatoBurn's approach is supported by numerous peer-reviewed scientific studies demonstrating the
                connection between liver health and effective weight management.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-[#8A1C1C] mb-6 font-heading text-center">
                Scientific References:
              </h3>

              <ol className="list-decimal pl-6 space-y-4 md:space-y-5 font-body text-black">
                <li>
                  Promrat, K., Kleiner, D.E., Niemeier, H.M., et al. Randomized controlled trial testing the effects of
                  weight loss on nonalcoholic steatohepatitis. Hepatology, 51(1), 121-129 (2010). doi:
                  10.1002/hep.23276.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/19827166/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://pubmed.ncbi.nlm.nih.gov/19827166/
                  </a>
                </li>

                <li>
                  Vilar-Gomez, E., Martinez-Perez, Y., Calzadilla-Bertot, L., et al. Weight Loss Through Lifestyle
                  Modification Significantly Reduces Features of Nonalcoholic Steatohepatitis. Gastroenterology, 149(2),
                  367-378 (2015). doi: 10.1053/j.gastro.2015.04.005.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/25865049/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://pubmed.ncbi.nlm.nih.gov/25865049/
                  </a>
                </li>

                <li>
                  Marchesini, G., Petta, S., Dalle Grave, R. Diet, weight loss, and liver health in nonalcoholic fatty
                  liver disease: Pathophysiology, evidence, and practice. Hepatology, 63(6), 2032-2043 (2016). doi:
                  10.1002/hep.28392.{" "}
                  <a
                    href="https://journals.lww.com/hep/fulltext/2016/06000/diet,_weight_loss,_and_liver_health_in.35.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://journals.lww.com/hep/fulltext/2016/06000/diet,_weight_loss,_and_liver_health_in.35.aspx
                  </a>
                </li>

                <li>
                  Takahashi, H., Kotani, K., Tanaka, K., et al. Weight-loss-independent benefits of exercise on liver
                  steatosis and stiffness in Japanese men with NAFLD. JHEP Reports, 3(3), 100200 (2021). doi:
                  10.1016/j.jhepr.2021.100200.{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8059085/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://pmc.ncbi.nlm.nih.gov/articles/PMC8059085/
                  </a>
                </li>

                <li>
                  Hickman, I.J., Clouston, A.D., Macdonald, G.A., et al. Effect of weight reduction on liver histology
                  and biochemistry in patients with chronic hepatitis C. Gut, 51(1), 89-94 (2002). doi:
                  10.1136/gut.51.1.89.{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1773265/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://pmc.ncbi.nlm.nih.gov/articles/PMC1773265/
                  </a>
                </li>

                <li>
                  Lassailly, G., Caiazzo, R., Buob, D., et al. Bariatric Surgery Reduces Features of Nonalcoholic
                  Steatohepatitis in Morbidly Obese Patients. Gastroenterology, 149(2), 379-388 (2015). doi:
                  10.1053/j.gastro.2015.04.014.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/25917783/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://pubmed.ncbi.nlm.nih.gov/25917783/
                  </a>
                </li>

                <li>
                  Vilar-Gomez, E., Athinarayanan, S.J., Adams, R.N., et al. Post hoc analyses of surrogate markers of
                  non-alcoholic fatty liver disease (NAFLD) and liver fibrosis in patients with type 2 diabetes in a
                  digitally supported continuous care intervention: an open-label, non-randomised controlled study. BMJ
                  Open, 9(2), e023597 (2019). doi: 10.1136/bmjopen-2018-023597.{" "}
                  <a
                    href="https://bmjopen.bmj.com/content/bmjopen/9/2/e023597.full.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://bmjopen.bmj.com/content/bmjopen/9/2/e023597.full.pdf
                  </a>
                </li>

                <li>
                  Koutoukidis, D.A., Astbury, N.M., Tudor, K.E., et al. Association of Weight Loss Interventions With
                  Changes in Biomarkers of Nonalcoholic Fatty Liver Disease: A Systematic Review and Meta-analysis. JAMA
                  Internal Medicine, 179(9), 1262-1271 (2019). doi: 10.1001/jamainternmed.2019.2248.{" "}
                  <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2737321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2737321
                  </a>
                </li>

                <li>
                  Abd El-Kader, S.M., Al-Shreef, F.M., Al-Jiffri, O.H. A randomized controlled trial on the
                  effectiveness of 8-week high-intensity interval exercise on intrahepatic triglycerides, visceral
                  lipids, and health-related quality of life in diabetic obese patients with nonalcoholic fatty liver
                  disease. Medicine, 98(12), e14918 (2019). doi: 10.1097/MD.0000000000014918.{" "}
                  <a
                    href="https://journals.lww.com/md-journal/fulltext/2019/03220/a_randomized_controlled_trial_on_the_effectiveness.37.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A1C1C] hover:underline"
                  >
                    https://journals.lww.com/md-journal/fulltext/2019/03220/a_randomized_controlled_trial_on_the_effectiveness.37.aspx
                  </a>
                </li>
              </ol>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 font-body">
                  *These statements have not been evaluated by the Food and Drug Administration. This product is not
                  intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#8A1C1C] text-white py-6 md:py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <Image src="/hepatoburn-bottle.png" alt="HepatoBurn Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-lg sm:text-xl font-heading">HepatoBurn</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 font-body text-sm sm:text-base">
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
                <Link href="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-6 text-center text-xs sm:text-sm text-gray-300 font-body">
              <p>© {new Date().getFullYear()} HepatoBurn. All Rights Reserved.</p>
              <p className="mt-2 text-xs sm:text-sm md:text-base max-w-4xl mx-auto">
                *These statements have not been evaluated by the Food and Drug Administration. This product is not
                intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky Order Button (Mobile Only) */}
        <div className="md:hidden">
          <StickyOrderButton />
        </div>
      </main>
    </>
  )
}
