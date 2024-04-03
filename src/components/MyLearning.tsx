
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MyLearning() {
  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-6 items-start max-w-5xl mx-auto lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] mt-[120px]">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Introduction to Computer Science</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to the Introduction to Computer Science course! This comprehensive course is designed to provide you
            with a solid foundation in computer science and programming. You will learn about the key concepts of
            computer science, including algorithms, data structures, programming languages, and more. By the end of this
            course, you will have the knowledge and skills to write programs, solve problems, and think like a computer
            scientist.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Latest Announcements</h2>
          <div className="grid gap-2">
            <div className="flex items-start gap-4">
              <CalendarIcon className="w-6 h-6 flex-shrink-0" />
              <div className="space-y-1.5">
                <h3 className="font-bold">Welcome to the Course!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Posted on: September 10, 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CalendarIcon className="w-6 h-6 flex-shrink-0" />
              <div className="space-y-1.5">
                <h3 className="font-bold">Introduction to Programming</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Posted on: September 15, 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CalendarIcon className="w-6 h-6 flex-shrink-0" />
              <div className="space-y-1.5">
                <h3 className="font-bold">Midterm Exam Information</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Posted on: October 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Resources</h3>
          <div className="grid gap-2">
            <Link
              className="flex items-center gap-2 text-sm underline hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              <span>1. Introduction to Computer Science Slides</span>
              <ExternalLinkIcon className="w-4 h-4 fill-current" />
            </Link>
            <Link
              className="flex items-center gap-2 text-sm underline hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              <span>2. Programming in Python Tutorial</span>
              <ExternalLinkIcon className="w-4 h-4 fill-current" />
            </Link>
            <Link
              className="flex items-center gap-2 text-sm underline hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              <span>3. Data Structures and Algorithms Book</span>
              <ExternalLinkIcon className="w-4 h-4 fill-current" />
            </Link>
            <Link
              className="flex items-center gap-2 text-sm underline hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              <span>4. Practice Problems</span>
              <ExternalLinkIcon className="w-4 h-4 fill-current" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-4 min-h-[300px]">
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/70">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1 grid gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Alice Johnson</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hi everyone! I'm excited to start this course. Looking forward to learning with all of you!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/70">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1 grid gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Bob Smith</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hello! I'm a beginner in programming. I hope to learn a lot from this course.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/70">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1 grid gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Ella Brown</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">10 minutes ago</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hi everyone! I'm looking forward to the course. Let's help each other out and have a great learning
                  experience!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 border-t border-gray-200 border-gray-200 bg-gray-950 shadow-sm px-4 gap-2 justify-end">
            <Input className="max-w-md flex-1 text-sm border-0 h-10" placeholder="Type your message..." type="text" />
            <Button className="h-10 w-20 shrink-0 text-sm" variant="outline">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ExternalLinkIcon(props) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}
