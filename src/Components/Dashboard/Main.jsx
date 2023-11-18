import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import pic2 from '../../assets/pic-2.jpg'
import thumb1 from '../../assets/thumb-1.png'
import pic3 from '../../assets/pic-3.jpg'
import thumb2 from '../../assets/thumb-2.png'
import pic4 from '../../assets/pic-4.jpg'
import thumb3 from '../../assets/thumb-3.png'
import pic5 from '../../assets/pic-5.jpg'
import thumb4 from '../../assets/thumb-4.png'
import pic6 from '../../assets/pic-6.jpg'
import thumb5 from '../../assets/thumb-5.png'
import pic7 from '../../assets/pic-7.jpg'
import thumb6 from '../../assets/thumb-6.png'
import { Link } from 'react-router-dom';
import { FaCode,FaHtml5, FaCss3,FaReact,FaPhp,FaBootstrap  } from "react-icons/fa";
import { FaChartSimple,FaChartLine } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import MainLogo from '../../assets/studyBuddy.png'
import logo from '../../assets/5-removebg-preview (1).png'



const navigation = [
  { name: 'Dashboard', href: '/Dashboard', icon: HomeIcon, current: true },
  { name: 'Category', href: '/Category', icon: UsersIcon, current: false },
  { name: 'Assignments', href: '/Assignments', icon: FolderIcon, current: false },
  { name: 'PlayLists', href: '/PlayLists', icon: CalendarIcon, current: false },
  { name: 'Messages', href: '/Messages', icon: DocumentDuplicateIcon, current: false },
  { name: 'Courses', href: '/Courses', icon: ChartPieIcon, current: false },
] 
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '/Profile' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Top Tutors</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={MainLogo}
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Top Tutors</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
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
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8"><>
  <section className="home-grid">
    <h1 className="heading">quick options</h1>
    <div className="box-container">
      
      <div className="box">
        <div className="justify-between">
            <h3 className="title">top categories</h3>
            <Link to="/Category">
                <h2 className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>View all</h2>
            </Link>
        </div>
        
        
        <div className="flex">
          <a href="#" className='flex'>
            {/* <i className="fas fa-code" /> */}
            <FaCode className="fas fa-code" />
            <span>development</span>
          </a>
          <a href="#" className='flex'>
            {/* <i className="fa fa-chart-simple" /> */}
            <FaChartSimple className="fas fa-chart-simple"/>
            <span>business</span>
          </a>
          <a href="#" className='flex'>
            {/* <i className="fas fa-pen" /> */}
            <MdOutlineDesignServices className="fas fa-pen"  />
            <span>design</span>
          </a>
          <a href="#" className='flex'>
            <FaChartLine className="fas fa-chart-line" />
            <span>marketing</span>
          </a>
          <a href="#" className='flex'>
            <IoMusicalNotesOutline className="fas fa-music" />
            <span>music</span>
          </a>
          <a href="#" className='flex'>
            <MdAddAPhoto className="fas fa-camera" />
            <span>photography</span>
          </a>
          <a href="#" className='flex'>
            <SiPaloaltosoftware className="fas fa-cog" />
            <span>software</span>
          </a>
          <a href="#" className='flex'>
            <GiMaterialsScience className="fas fa-vial" />
            <span>science</span>
          </a>
        </div>
      </div>
      <div className="box">
        <h3 className="title">popular topics</h3>
        <div className="flex">
          <a href="#" className="flex">
            <FaHtml5  className="fab fa-html5" />
            <span>HTML</span>
          </a>
          <a href="#" className='flex'>
            < FaCss3  className="fab fa-css3" />
            <span>CSS</span>
          </a>
          <a href="#" className='flex'>
            <IoLogoJavascript className="fab fa-js" />
            <span>javascript</span>
          </a>
          <a href="#" className='flex'>
            <FaReact className="fab fa-react" />
            <span>react</span>
          </a>
          <a href="#" className='flex'>
            <FaPhp className="fab fa-php" />
            <span>PHP</span>
          </a>
          <a href="#" className='flex'>
            <FaBootstrap  className="fab fa-bootstrap" />
            <span>bootstrap</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="courses">
    <h1 className="heading">our courses</h1>
    <div className="box-container">
      <div className="box">
        <div className="tutor">
        <img src={pic2} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb1} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete HTML tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
              view playlist
           </Link>
          
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={pic3} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb2} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete CSS tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
              view playlist
           </Link>
          
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={pic4} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb3} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete JS tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
              view playlist
           </Link>
          
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={pic5} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb4} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete Boostrap tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
              view playlist
           </Link>
          
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={pic6} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb5} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete JQuery tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
              view playlist
           </Link>
          
        </a>
      </div>
      <div className="box">
        <div className="tutor">
          <img src={pic7}alt="" />
          <div className="info">
            <h3>john deo</h3>
            <span>21-10-2022</span>
          </div>
        </div>
        <div className="thumb">
          <img src={thumb6} alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete SASS tutorial</h3>
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
              view playlist
           </Link>
          
        </a>
      </div>
    </div>
    <div className="more-btn">
      <a href="courses.html" className="inline-option-btn">
        <Link to='/Courses'>
          view all courses
        </Link>
      </a>
    </div>
  </section>
</>
</div>
          </main>
        </div>
      </div>
    </>
  )
}
