


export default function Assignment(){
    return(
        <div className="px-4 sm:px-6 lg:px-8 ">
  <div className="overflow-hidden rounded-lg bg-white shadow">
    <div className="px-4 py-5 sm:p-6">
      <div className="text-sm font-medium leading-6 text-gray-900 w-full mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-[#5E00D0] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
            >
              Opened
            </button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="ml-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M3 3h18v2H3z" />
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p className="px-3">Participants: 1.23k</p>
          </div>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center rounded-full bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800"
            >
              Related Ebooks
            </button>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center rounded-full border bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Related Courses
            </button>
          </div>
        </div>
        <div className="mt-2 px-4 text-2xl font-bold">
          <h1>HTML Challenge</h1>
        </div>
        <fieldset>
          <div className="relative flex items-start border p-3 rounded-full mb-3 border-gray-300">
            <div className="flex-1 text-sm leading-6">
              <a href="/challenges/0/0">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  User Interface Optimization Challenge
                </label>
              </a>
            </div>
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span
                id="comments-description"
                className="text-gray-500 flex-1 pr-2"
              >
                Mark as completed.
              </span>
            </div>
          </div>
          <div className="relative flex items-start border p-3 rounded-full mb-3 border-gray-300">
            <div className="flex-1 text-sm leading-6">
              <a href="/challenges/0/1">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Handling Efficiency Challenge
                </label>
              </a>
            </div>
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span
                id="comments-description"
                className="text-gray-500 flex-1 pr-2"
              >
                Mark as completed.
              </span>
            </div>
          </div>
          <div className="relative flex items-start border p-3 rounded-full mb-3 border-gray-300">
            <div className="flex-1 text-sm leading-6">
              <a href="/challenges/0/2">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Security and User Privacy Challenge
                </label>
              </a>
            </div>
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span
                id="comments-description"
                className="text-gray-500 flex-1 pr-2"
              >
                Mark as completed.
              </span>
            </div>
          </div>
          <div className="relative flex items-start border p-3 rounded-full mb-3 border-gray-300">
            <div className="flex-1 text-sm leading-6">
              <a href="/challenges/0/3">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Scalability Planning Challenge
                </label>
              </a>
            </div>
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span
                id="comments-description"
                className="text-gray-500 flex-1 pr-2"
              >
                Mark as completed.
              </span>
            </div>
          </div>
          <div className="relative flex items-start border p-3 rounded-full mb-3 border-gray-300">
            <div className="flex-1 text-sm leading-6">
              <a href="/challenges/0/4">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Community Engagement Challenge
                </label>
              </a>
            </div>
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span
                id="comments-description"
                className="text-gray-500 flex-1 pr-2"
              >
                Mark as completed.
              </span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>

    )
}