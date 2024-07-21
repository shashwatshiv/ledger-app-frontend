export default function Dashboard() {
  return (
    <>
      <div className="m-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-center">Overview</h2>
          <button className="bg-slate-50 border w-auto px-3 py-1 text-lg text-slate-600 rounded-lg h-full flex items-center">
            This Month
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 m-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex-row md:flex items-start mt-4">
          <div className=" md:flex-1 text-slate-50 rounded-xl m-3  bg-sky-600 mx-3">
            <div className="col-span-1 rounded-xl  p-5">
              <h3>Next Payout</h3>
              <div className="flex justify-between ">
                <h4 className="font-semibold text-2xl">₹92,312.20</h4>
                <a href="">13 Orders</a>
              </div>
            </div>
            <div className=" flex justify-between px-3 py-2 hover:bg-inherit  bg-sky-900 rounded-lg ">
              <p>Next Payment Date:</p>
              <p>Today, 23 July, 2024</p>
            </div>
          </div>

          <div className="  md:flex-1 bg-slate-50 rounded-xl h-auto p-5 m-3 ">
            <h3>Amount Pending</h3>
            <div className="flex justify-between mt-4 ">
              <h4 className="font-semibold text-2xl">₹92,312.20</h4>
              <a href="">13 Orders</a>
            </div>
          </div>
          <div className=" md:flex-1 bg-slate-50  rounded-xl p-5 m-3">
            <h3>Amount Processed</h3>
            <div className="mt-4">
              <h4 className="font-semibold text-2xl">₹23,92,312.19</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
