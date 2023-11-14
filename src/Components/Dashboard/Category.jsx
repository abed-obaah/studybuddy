import Navbar from '../sidebar/navbar'

export default function Category(){
    return(
        <div>
            <Navbar/>
            <main className="-mt-24 pb-8 bg-Neutral">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="flex flex-col gap-y-10 p-5 bg-gray-100">
  <div className="flex flex-col gap-y-10 font-openSans">
    <h2 className="text-2xl font-extrabold text-main-purple mb-2">
      Get Started With Frontend Development
    </h2>
    <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-lg p-6 gap-6">
      <div className="w-full md:w-1/3">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/orralearnsocial.appspot.com/o/htm%20(2).png?alt=media&token=d43bc7e1-f201-4278-95c2-a79e80073188&_gl=1*24myuj*_ga*NzAyMjAwODk0LjE2OTcxNDQwOTE.*_ga_CW55HF8NVT*MTY5NzMxNzM5MS4xMC4xLjE2OTczMTgwNDMuMTcuMC4w"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h6 className="font-bold text-2xl mb-3">
            Mastering HTML: Learn HTML from Scratch
          </h6>
          <p className="text-[16px] text-black  text-opacity-70 font-openSans mb-3">
            Unlock the power of HTML and learn to build web pages from scratch.
            This comprehensive course is designed to take you from beginner to
            pro.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="relative w-full mb-3 md:mb-0 md:w-1/2">
            <div className="flex mb-1 items-center justify-between">
              <div>
                <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-purple-600">
                  73%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                style={{ width: "73%" }}
              />
            </div>
          </div>
          <a
            className="py-[8px] px-[16px] bg-[#5E00D0] button-box-shadow rounded-[47px] shrink-0 text-white  sm:text-[15px] flex items-center justify-center hover:bg-white hover:text-[#5E00D0] transition ease-out  duration-300 w-full md:w-auto mt-3 md:mt-0"
            href="/courseDetail/course_1697136222318"
          >
            Start Learning
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-lg p-6 gap-6">
      <div className="w-full md:w-1/3">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/orralearnsocial.appspot.com/o/css%20(1).png?alt=media&token=1f43ad1c-d214-47d9-83ed-59d8c6943e06&_gl=1*h9c8of*_ga*NzAyMjAwODk0LjE2OTcxNDQwOTE.*_ga_CW55HF8NVT*MTY5NzMxNzM5MS4xMC4xLjE2OTczMTc5NzQuMjYuMC4w"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h6 className="font-bold text-2xl mb-3">
            Mastering CSS for Web Development
          </h6>
          <p className="text-[16px] text-black  text-opacity-70 font-openSans mb-3">
            Become a CSS pro and make stunning websites.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="relative w-full mb-3 md:mb-0 md:w-1/2">
            <div className="flex mb-1 items-center justify-between">
              <div>
                <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-purple-600">
                  0%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                style={{ width: "0%" }}
              />
            </div>
          </div>
          <a
            className="py-[8px] px-[16px] bg-[#5E00D0] button-box-shadow rounded-[47px] shrink-0 text-white  sm:text-[15px] flex items-center justify-center hover:bg-white hover:text-[#5E00D0] transition ease-out  duration-300 w-full md:w-auto mt-3 md:mt-0"
            href="/courseDetail/course_1697317348502"
          >
            Start Learning
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </main>
        </div>
    )
}