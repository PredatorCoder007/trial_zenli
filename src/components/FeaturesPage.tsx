/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HQHagHCHZKi
 */
import Link from "next/link"

export function FeaturesPage() {
  return (
<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Join Our Platfrom.</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform offers unparalleled opportunities for personal and professional growth through innovative projects and mentorship.
                {/* Join us to unlock your potential and connect with a vibrant community of like-minded individuals. */}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Collabartion</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Your Own Accomplished Mentors Whom You Know!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Projects</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Choose from a Wide Range Latest Technologies for Projects 
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Authenticity</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Get Authentified After Successfull Project Completion
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}