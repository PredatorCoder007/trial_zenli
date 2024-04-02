
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "./ui/background-beams";

export function OurPartner() {
  return (
    <>
      
      <section className="grid-in-container py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-2">
            <CreditCardIcon className="w-12 h-12" />
            <h3 className="text-lg font-semibold">IIT Bombay</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <StoreIcon className="w-12 h-12" />
            <h3 className="text-lg font-semibold">IIT Delhi</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <CreditCardIcon className="w-12 h-12" />
            <h3 className="text-lg font-semibold">IIT Madras</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
          </div>
        </div>
        {/* <BackgroundBeams/> */}
      </section>
      
    </>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}
