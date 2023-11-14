
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import logo from '../../assets/study1 (1).png'
import hand from '../../assets/Humans Space-25c6a665.png'
import sec from '../../assets/secschool.jpeg'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Categories', href: '#', current: false },
  { name: 'Assignment', href: '#', current: false },
  { name: 'Messages', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Main() {
  return (
    <>
      <div className="min-h-full">
        <Popover as="header" className=" bg-green-primary pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 lg:static">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="StudyBuddy"
                      />
                    </a>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                    <button
                      type="button"
                      className="relative flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  {/* Search */}
                  <div className="min-w-0 flex-1 px-12 lg:hidden">
                    <div className="mx-auto w-full max-w-xs">
                      <label htmlFor="desktop-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-white focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="desktop-search"
                          className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                  <div className="grid grid-cols-3 items-center gap-8">
                    <div className="col-span-2">
                      <nav className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-100',
                              'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div>
                      <div className="mx-auto w-full max-w-md">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <input
                            id="mobile-search"
                            className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                    >
                      <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="pb-2 pt-3">
                          <div className="flex items-center justify-between px-4">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="Your Company"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Home
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Profile
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Resources
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Company Directory
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Openings
                            </a>
                          </div>
                        </div>
                        <div className="pb-2 pt-4">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                              <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                            </div>
                            <button
                              type="button"
                              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">View notifications</span>
                              <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                            {userNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className="-mt-24 pb-8 bg-Neutral">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="">
                        <div className=" flex flex-col w-full gap-y-10   ">
                            <div className="flex items-center font-openSans  rounded-[20px]   h-[200px] w-full bgFour p-5 ">
                            <div className="sm:w-3/5 ">
                                        <div className="">
                                            <div className="items-center mb-3">
                                                <h1 className="items-center text-black font-bold text-4xl sm:text-2xl  xl:text-4xl">
                                                    Welcome, Abed
                                                </h1>
                                            </div>
                                            <p className="text-black text-base sm:text-sm xl:text-sm tracking-[0.3]">
                                            You've just started your journey with us, and we're excited to have
                                            you on board.
                                            </p>
                                        </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="section-1-title">
                <div className="flex flex-col gap-y-5">
    <div className="flex-col gap-y-2">
        <div className='flex justify-between'>

        <h1 className="text-[18px] xl:text-[24px] font-semibold">
        Recommended Courses
      </h1>
      <a
        className="bg-[#5E00D0] hidden sm:flex    items-center justify-center rounded-3xl  gap-4 text-white font-openSans h-full w-40 "
        href="/ebooks"
      >
        <h1 className="text-[25px] ">See all</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={22}
          viewBox="0 0 28 22"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.652229 15.367C0.529423 14.8802 0.82452 14.386 1.31135 14.2632L24.1152 8.5107L14.2916 2.64489C13.8605 2.38749 13.7198 1.82937 13.9772 1.39829C14.2346 0.967216 14.7927 0.826426 15.2238 1.08383L26.9317 8.07482C27.3628 8.33223 27.5036 8.89035 27.2462 9.32142L20.2552 21.0294C19.9978 21.4605 19.4397 21.6012 19.0086 21.3438C18.5775 21.0864 18.4367 20.5283 18.6941 20.0973L24.5599 10.2737L1.75607 16.0261C1.26924 16.1489 0.775035 15.8538 0.652229 15.367Z"
            fill="white"
          />
        </svg>
      </a>
        </div>
     
      <p className="text-[#555555] text-opacity-70 text-sm">
        Here is your study overview
      </p>
    </div>
    <div className="w-full flex items-center gap-4">
      <div className="grid md:grid-cols-2 gap-4  gap-y-6 w-full  justify-items-center">
        <div className=" w-full rounded-3xl bg-white   p-6 font-openSans flex flex-col   gap-4 ">
          <div className="md:rounded-3xl w-full  h-72 ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/orralearnsocial.appspot.com/o/orralearn%20web%20app%20images%2Fweb-app-images%2Fyello%20ebook%202.png?alt=media&token=a9929545-d388-4da1-ad66-b7475c66a9a7&_gl=1*14yx0fh*_ga*MTM2ODIzMTYzMi4xNjk2OTUyODY5*_ga_CW55HF8NVT*MTY5NzAxNDAzNy4zLjEuMTY5NzAxNDMxMi42MC4wLjA."
              alt="Understanding React and Node.Js"
              className="h-64 w-full object-fill"
            />
          </div>
          <div className=" flex flex-col gap-y-4 justify-between ">
            <div className="flex flex-col ">
              <h1 className="text-[#5E00D0] text-[14px]">Programming</h1>
              <p className="font-semibold text-black text-opacity-80">
                Understanding React and Node.Js
              </p>
            </div>
            <a
              className="py-[8px] px-[16px] bg-[#5E00D0] button-box-shadow rounded-[47px] shrink-0 text-white  sm:text-[15px] flex items-center justify-center hover:bg-white hover:text-[#5E00D0] transition ease-out  duration-300 w-full md:w-32"
              href="/"
            >
              Start learning
            </a>
          </div>
        </div>
        <div className=" w-full rounded-3xl bg-white   p-6 font-openSans flex flex-col   gap-4 ">
          <div className="md:rounded-3xl w-full  h-72 ">
            <img
              src={sec}
              alt="Learn Web Development with React"
              className="h-64 w-full object-fill"
            />
          </div>
          <div className=" flex flex-col gap-y-4 justify-between ">
            <div className="flex flex-col ">
              <h1 className="text-[#5E00D0] text-[14px]">Secondary Schools</h1>
              <p className="font-semibold text-black text-opacity-80">
                Learn Web Development with React
              </p>
            </div>
            <a
              className="py-[8px] px-[16px] bg-[#5E00D0] button-box-shadow rounded-[47px] shrink-0 text-white  sm:text-[15px] flex items-center justify-center hover:bg-white hover:text-[#5E00D0] transition ease-out  duration-300 w-full md:w-32"
              href="/"
            >
              Start learning
            </a>
          </div>
        </div>
      </div>
     
    </div>
  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4 mt-10">
                <section aria-labelledby="section-2-title">
                 
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="items-center justify-between font-openSans">
                                <h1 className="font-bold text-base">Getting Started With StudyBuddy</h1>
                    </div>
                    <div className="p-6">
                    <iframe width="258" height="200" src="https://static.videezy.com/system/resources/previews/000/034/947/original/green-screen-laptop-1.mp4" title="Getting started on Orralearn" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                  
                </section>
                <section aria-labelledby="section-2-title">
                  
                <div className="">
    <div className="flex flex-col  rounded-md gap-y-4 p-4 bg-white borderThree">
      <div className="flex items-center justify-between font-openSans">
        <h1 className="font-bold text-base">Recommended Challenges</h1>
        <a className="text-[#07F] text-sm font-bold" href="/challenges">
          See all
        </a>
      </div>
      <div className="flex flex-col gap-y-10">
        <a
          className="flex gap-2 rounded-[20px] font-openSans p-8  bg-[#F0F7FF]"
          href="/challenges"
        >
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-y-2">
                <h6 className="font-bold">Python Bootcamp</h6>
                <div className="flex items-center gap-1 text-[9px] text-black text-opacity-50 font-bold">
                  <span>8th - 10th Oct 2023</span>
                  <span className="w-2 h-2 bg-[#07F] rounded-full" />
                  <span>8 A.M - 9 A.M </span>
                </div>
                <p className="text-[9px] text-black text-opacity-50 font-bold">
                  Zoom platform
                </p>
              </div>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
            </svg>
          </div>
        </a>
        <a
          className="flex gap-2 rounded-[20px] font-openSans p-8 bg-[#FFF0F7]"
          href="/challenges"
        >
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-y-2">
                <h6 className="font-bold">Java Bootcamp</h6>
                <div className="flex items-center gap-1 text-[9px] text-black text-opacity-50 font-bold">
                  <span>13th July 2023</span>
                  <span className="w-2 h-2 bg-[#07F] rounded-full" />
                  <span>8 A.M - 9 A.M </span>
                </div>
                <p className="text-[9px] text-black text-opacity-50 font-bold">
                  Google Meet
                </p>
              </div>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
            </svg>
          </div>
        </a>
        <a
          className="flex gap-2 rounded-[20px] font-openSans p-8  bg-[#F0FFF3]"
          href="/challenges"
        >
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-y-2">
                <h6 className="font-bold">Step-by-Step guide to Web Dev</h6>
                <div className="flex items-center gap-1 text-[9px] text-black text-opacity-50 font-bold">
                  <span>8th - 10th Oct 2023</span>
                  <span className="w-2 h-2 bg-[#07F] rounded-full" />
                  <span>8 A.M - 9 A.M </span>
                </div>
                <p className="text-[9px] text-black text-opacity-50 font-bold">
                  **To be submitted via Email
                </p>
              </div>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
            </svg>
          </div>
        </a>
        <a
          className="flex gap-2 rounded-[20px] font-openSans p-8 bg-[#FFF5F0]"
          href="/challenges"
        >
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-y-2">
                <h6 className="font-bold">Abed Obaah meet &amp; greet</h6>
                <div className="flex items-center gap-1 text-[9px] text-black text-opacity-50 font-bold">
                  <span>8th - 10th Oct 2023</span>
                  <span className="w-2 h-2 bg-[#07F] rounded-full" />
                  <span>8 A.M - 9 A.M </span>
                </div>
                <p className="text-[9px] text-black text-opacity-50 font-bold">
                  Google Meet
                </p>
              </div>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
                </div>
                  
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
              <span className="block sm:inline">&copy; 2021 Your Company, Inc.</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
