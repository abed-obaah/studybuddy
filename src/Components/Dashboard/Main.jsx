


import sec from '../../assets/secschool.jpeg'
import Navbar from '../sidebar/navbar'



export default function Main() {
  return (
    <>
      <div className="min-h-full">
        <Navbar/>
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
