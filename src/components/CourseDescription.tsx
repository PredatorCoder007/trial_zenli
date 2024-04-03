
import Link from "next/link"

export function CourseDescription() {
  return (
    <>
      <div className="w-full p-6 mt-[120px]">
        <div className="container grid max-w-3xl px-4 gap-6 md:px-6 md:gap-12 lg:grid-cols-2 lg:max-w-5xl xl:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl">Introduction to Python for Machine Learning</h1>
              <p className="text-gray-500 dark:text-gray-400">Mentored by Vishal</p>
            </div>
            <div className="space-y-4 text-base">
              <p>
              Introduction to Python for Machine Learning is a beginner-friendly project designed to teach the fundamentals of Python programming
              and its application in machine learning. Participants will learn essential Python libraries such as NumPy, Pandas, and scikit-learn 
              and will work on hands-on exercises to build simple machine learning models. This project aims to provide a solid foundation for further
              exploration in the field of machine learning and data science. No prior programming experience is required, making it ideal for those new to the subject.
              </p>
            </div>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                <span>Starts on March 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4 flex-shrink-0" />
                <span>4 weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserIcon className="w-4 h-4 flex-shrink-0" />
                <span>Mentor: Vishal</span>
              </div>
            </div>
            <div className="flex gap-4 min-[400px]:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Add to Cart
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <div className="grid gap-4">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <img
                  alt="Course Image"
                  className="object-cover object-center"
                  height="338"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/338",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 lg:py-16">
        <div className="container grid max-w-3xl px-4 gap-6 md:px-6 md:gap-12 lg:grid-cols-2 lg:max-w-5xl xl:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">Project Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Introduction to Python for Machine Learning is a beginner-friendly project designed to teach the fundamentals of Python programming
              and its application in machine learning. Participants will learn essential Python libraries such as NumPy, Pandas, and scikit-learn 
              and will work on hands-on exercises to build simple machine learning models. This project aims to provide a solid foundation for further
              exploration in the field of machine learning and data science. No prior programming experience is required, making it ideal for those new to the subject.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">Project Mentor</h2>
            <div className="grid gap-1 text-sm">
              <p>
                <strong>John Doe</strong>
              </p>
              <p>Head of Digital Marketing, Acme Inc.</p>
              <p>
                John is an experienced digital marketer with over a decade of experience in the industry. He has helped
                numerous companies improve their online presence and reach their target audience through effective
                digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 lg:py-16">
        <div className="container grid max-w-3xl px-4 gap-6 md:px-6 md:gap-12 lg:grid-cols-2 lg:max-w-5xl xl:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">Project Details</h2>
            <div className="grid gap-1 text-sm">
              <div className="flex items-start space-y-1">
                <CheckIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                <p>Python Basics: Learn the syntax, data types, and basic operations of Python, the language of choice for machine learning.</p>
              </div>
              <div className="flex items-start space-y-1">
                <CheckIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                <p>Data Manipulation: Master the use of Pandas for data manipulation and data cleaning, essential skills for any machine learning project.</p>
              </div>
              <div className="flex items-start space-y-1">
                <CheckIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                <p>Scientific Computing: Explore NumPy for numerical and scientific computing, including operations on arrays and matrices.</p>
              </div>
              <div className="flex items-start space-y-1">
                <CheckIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                <p>Machine Learning Fundamentals: Gain an understanding of core machine learning concepts and algorithms using scikit-learn.</p>
              </div>
              <div className="flex items-start space-y-1">
                <CheckIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                <p>Practical Application: Apply your knowledge to real-world datasets, building and evaluating simple machine learning models like linear regression and classification trees.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">Mentor Reviews</h2>
            <div className="grid gap-4">
              <div className="flex items-start space-y-1">
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden dark:bg-gray-800" />
                  <div className="flex items-center space-x-1 text-sm">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <span className="font-semibold">4.2</span>
                  </div>
                </div>
                <p>
                This project was a fantastic introduction to Python for Machine Learning. It was well-structured, with clear explanations and practical exercises that helped me grasp 
                the basics of Python and its application in machine learning. The hands-on approach with real-world datasets made the learning experience engaging and rewarding. Highly recommended for beginners!
                </p>
              </div>
              <div className="flex items-start space-y-1">
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden dark:bg-gray-800" />
                  <div className="flex items-center space-x-1 text-sm">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <span className="font-semibold">3.2</span>
                  </div>
                </div>
                <p>
                As someone new to both Python and machine learning, I found this project incredibly helpful. The step-by-step guidance through Python
                libraries like NumPy and Pandas, along with the fundamentals of machine learning, provided a solid foundation. The interactive exercises
                were particularly beneficial in reinforcing the concepts. Overall, a great starting point for anyone looking to dive into the world of machine learning with Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
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


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function UserCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
