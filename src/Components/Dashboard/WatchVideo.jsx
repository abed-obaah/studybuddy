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
import pic1 from '../../assets/pic-1.jpg'
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
import post1 from '../../assets/post-1-1.png'
import post2 from '../../assets/post-1-2.png'
import post3 from '../../assets/post-1-3.png'
import post4 from '../../assets/post-1-4.png'
import post5 from '../../assets/post-1-5.png'
import post6 from '../../assets/post-1-6.png'
import { Link } from 'react-router-dom';

import post11 from '../../assets/post-1-1.png'
import vid1 from '../../assets/vid-1.mp4'
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

export default function PlayLists() {
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
                <div className="px-4 sm:px-6 lg:px-8">
                <>
  <section className="watch-video">
    <div className="video-container">
      <div className="video">
        <video
          src={vid1}
          controls
          poster={post11}
          id="video"
        />
      </div>
      <h3 className="title">complete HTML tutorial (part 01)</h3>
      <div className="info">
        <p className="date">
          <i className="fas fa-calendar" />
          <span>22-10-2022</span>
        </p>
        <p className="date">
          <i className="fas fa-heart" />
          <span>44 likes</span>
        </p>
      </div>
      <div className="tutor">
        <img src={pic2} alt="" />
        <div>
          <h3>john deo</h3>
          <span>developer</span>
        </div>
      </div>
      <form action="" method="post" className="flex">
        <a href="playlist.html" className="inline-btn">
          <Link to='/PlayLists'>
          view playlist
          </Link>
          
        </a>
        <button>
          <i className="far fa-heart" />
          <span>like</span>
        </button>
      </form>
      <p className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore
        ratione, hic exercitationem mollitia obcaecati culpa dolor placeat
        provident porro. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor
        fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere
        cumque nemo!
      </p>
    </div>
  </section>
  <section className="comments">
    <h1 className="heading">5 comments</h1>
    <form action="" className="add-comment">
      <h3>add comments</h3>
      <textarea
        name="comment_box"
        placeholder="enter your comment"
        required=""
        maxLength={1000}
        cols={30}
        rows={10}
        defaultValue={""}
      />
      <button
        type="submit"
        className="inline-btn bg-Primary"
        defaultValue="add comment"
        name="add_comment"
      >
        add comment
      </button>
    </form>
    <h1 className="heading">user comments</h1>
    <div className="box-container">
      <div className="box">
        <div className="user">
          <img src={pic1} alt="" />
          <div>
            <h3>shaikh anas</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">this is a comment form shaikh anas</div>
        <form action="" className="flex-btn">
          <button
        type="submit"
        defaultValue="edit comment"
        name="edit_comment"
        className="inline-option-btn bg-orange"
      >
        edit comment
      </button>
      <button
       type="submit"
       defaultValue="delete comment"
       name="delete_comment"
       className="inline-delete-btn bg-red"
      >
        delete comment
      </button>
        </form>
      </div>
      <div className="box">
        <div className="user">
          <img src={pic2} alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">awesome tutorial! keep going!</div>
      </div>
      <div className="box">
        <div className="user">
          <img src={pic2} alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          amazing way of teaching! thank you so much!
        </div>
      </div>
      <div className="box">
        <div className="user">
          <img src={pic4} alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">loved it, thanks for the tutorial!</div>
      </div>
      <div className="box">
        <div className="user">
          <img src={pic5} alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          this is what I have been looking for! thank you so much!
        </div>
      </div>
      <div className="box">
        <div className="user">
          <img src={pic6} alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          thanks for the tutorial! how to download source code file?
        </div>
      </div>
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
