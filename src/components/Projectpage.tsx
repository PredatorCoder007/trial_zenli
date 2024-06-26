
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Projectpage() {
  return (
    <>
     <div className="mt-20 py-20 mx-10 px-10">
      <div className="container grid max-w-6xl items-start gap-4 px-4 py-6 space-y-0 md:gap-8 md:px-6 lg:grid-cols-12 lg:gap-10 lg:space-y-4">
        
        <div className="grid w-full gap-4 col-span-12 md:grid-cols-2 lg:col-span-10 lg:grid-cols-4 xl:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-200 border-gray-100 overflow-hidden shadow-sm dark:border-gray-800 dark:shadow-md dark:border-gray-800">
            <Link className="flex-shrink-0" href="#">
              <img
                alt="Course cover"
                className="aspect-[16/9] object-cover"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Link>
            <div className="p-4 flex-1">
              <Link className="block text-xl font-semibold hover:underline" href="#">
                Introduction to Python Programming
              </Link>
              <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                Learn the basics of Python programming in this comprehensive course. No prior experience required.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t text-sm dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <img
                  alt="Avatar"
                  className="rounded-full object-cover"
                  height="24"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width="24"
                />
                <span className="font-medium">John Doe</span>
              </div>
              <span className="font-medium">$49</span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 border-gray-100 overflow-hidden shadow-sm dark:border-gray-800 dark:shadow-md dark:border-gray-800">
            <Link className="flex-shrink-0" href="#">
              <img
                alt="Course cover"
                className="aspect-[16/9] object-cover"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Link>
            <div className="p-4 flex-1">
              <Link className="block text-xl font-semibold hover:underline" href="#">
                Introduction to Python Programming
              </Link>
              <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                Learn the basics of Python programming in this comprehensive course. No prior experience required.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t text-sm dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <img
                  alt="Avatar"
                  className="rounded-full object-cover"
                  height="24"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width="24"
                />
                <span className="font-medium">John Doe</span>
              </div>
              <span className="font-medium">$49</span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 border-gray-100 overflow-hidden shadow-sm dark:border-gray-800 dark:shadow-md dark:border-gray-800">
            <Link className="flex-shrink-0" href="#">
              <img
                alt="Course cover"
                className="aspect-[16/9] object-cover"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Link>
            <div className="p-4 flex-1">
              <Link className="block text-xl font-semibold hover:underline" href="#">
                Introduction to Python Programming
              </Link>
              <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                Learn the basics of Python programming in this comprehensive course. No prior experience required.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t text-sm dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <img
                  alt="Avatar"
                  className="rounded-full object-cover"
                  height="24"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width="24"
                />
                <span className="font-medium">John Doe</span>
              </div>
              <span className="font-medium">$49</span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 border-gray-100 overflow-hidden shadow-sm dark:border-gray-800 dark:shadow-md dark:border-gray-800">
            <Link className="flex-shrink-0" href="#">
              <img
                alt="Course cover"
                className="aspect-[16/9] object-cover"
                height="225"
                src="/placeholder.svg"
                width="400"
              />
            </Link>
            <div className="p-4 flex-1">
              <Link className="block text-xl font-semibold hover:underline" href="#">
                Introduction to Python Programming
              </Link>
              <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                Learn the basics of Python programming in this comprehensive course. No prior experience required.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 border-t text-sm dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <img
                  alt="Avatar"
                  className="rounded-full object-cover"
                  height="24"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width="24"
                />
                <span className="font-medium">John Doe</span>
              </div>
              <span className="font-medium">$49</span>
            </div>
          </div>
        </div>
       
      </div>
      </div>
    </>
  )
}

export default Projectpage