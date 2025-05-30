"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQAccordionProps {
  darkMode?: boolean
}

const faqs = [
  {
    question: "How Does HepatoBurn Work?",
    answer:
      "HepatoBurn works by supporting optimal liver function, which plays a crucial role in metabolism and fat burning. Our proprietary blend of natural ingredients helps detoxify the liver, boost metabolism, and support healthy weight management.",
  },
  {
    question: "How Long Does It Take to See Results?",
    answer:
      "Many customers report feeling increased energy and improved digestion within the first week. For weight management results, most users begin to see noticeable changes within 2-4 weeks of consistent use, with optimal results typically seen after 2-3 months.",
  },
  {
    question: "Is HepatoBurn Safe to Use?",
    answer:
      "HepatoBurn is made with 100% natural ingredients in an FDA-approved, GMP-certified facility. It contains no artificial additives, stimulants, or harmful chemicals. However, as with any supplement, we recommend consulting with your healthcare provider before starting, especially if you have any medical conditions or are taking medications.",
  },
  {
    question: "How Do I Take HepatoBurn?",
    answer:
      "For optimal results, take two capsules daily with a glass of water, preferably with a meal. Consistency is key for best results.",
  },
  {
    question: "What If HepatoBurn Doesn't Work for Me?",
    answer:
      "We stand behind our product with a 60-day, 100% money-back guarantee. If you're not completely satisfied with your results, simply contact our customer service team within 60 days of purchase for a full refund, no questions asked.",
  },
  {
    question: "Is There a Subscription or Recurring Charges?",
    answer:
      "No. HepatoBurn is available as a one-time purchase only. There are no hidden fees, subscriptions, or recurring charges.",
  },
  {
    question: "How Long Will Shipping Take?",
    answer:
      "Orders are typically processed within 24-48 hours. Domestic (US) shipping takes 3-5 business days, while international shipping may take 7-14 business days depending on the destination.",
  },
  {
    question: "Can I Take HepatoBurn With Other Medications?",
    answer:
      "While HepatoBurn is made with natural ingredients, we always recommend consulting with your healthcare provider before combining it with medications, especially if you have existing health conditions or are taking prescription drugs that affect liver function.",
  },
  {
    question: "Is HepatoBurn Suitable for Vegetarians or Vegans?",
    answer:
      "Yes, HepatoBurn is formulated to be vegetarian-friendly. All our capsules are made with plant-based ingredients and do not contain any animal products or by-products.",
  },
  {
    question: "Can I Take HepatoBurn if I Have Liver Problems?",
    answer:
      "If you have existing liver conditions or concerns, we strongly recommend consulting with your healthcare provider before starting HepatoBurn or any supplement. While our ingredients are selected to support liver health, individual medical conditions require personalized medical advice.",
  },
  {
    question: "Will HepatoBurn Interfere With My Sleep or Cause Jitters?",
    answer:
      "No, HepatoBurn does not contain stimulants like caffeine that could interfere with sleep or cause jitters. Many users actually report improved sleep quality as their liver function and overall health improve.",
  },
  {
    question: "Can I Take HepatoBurn While Pregnant or Breastfeeding?",
    answer:
      "We do not recommend taking HepatoBurn during pregnancy or while breastfeeding. Always consult with your healthcare provider regarding any supplements during these important times.",
  },
  {
    question: "Are There Any Age Restrictions for Taking HepatoBurn?",
    answer:
      "HepatoBurn is formulated for adults 18 years and older. It is not recommended for children or adolescents under 18 years of age.",
  },
  {
    question: "How Is HepatoBurn Different From Other Weight Management Supplements?",
    answer:
      "HepatoBurn takes a unique approach by focusing on liver health as the foundation for effective metabolism and weight management. Unlike many supplements that rely on stimulants or appetite suppressants, HepatoBurn works by optimizing your body's natural fat-processing systems through improved liver function.",
  },
]

export default function FAQAccordion({ darkMode = false }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#8A1C1C]/20">
          <AccordionTrigger className="text-left font-semibold text-[#8A1C1C] hover:text-[#8A1C1C]/80 font-heading text-xl py-4 normal-case">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 font-body text-lg md:text-xl py-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
