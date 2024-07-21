import { tableData } from "../data/table";
import TableData from "./TableData";
export default function Table() {
  return (
    <>
      <div className=" mx-6 ">
        <h2 className="text-2xl font-semibold my-4">
          Transactions | This Month
        </h2>
        <button className="bg-slate-300 w-auto rounded-3xl h-auto m-3 p-3 text-slate-600">
          Payouts(22)
        </button>
        <button className="bg-sky-600  rounded-3xl w-auto h-auto m-3  p-3 text-slate-50">
          Refunds(6)
        </button>
      </div>

      <div className="bg-slate-50 rounded-xl m-6">
        <div className="flex justify-between p-1 ">
          <div className=" w-1/4 flex items-center m-3 ">
            <div className="relative flex items-center w-full h-8 rounded-sm bg-slate-50 outline-none outline-slate-300 ">
              <div className="grid place-items-center h-full w-12 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className=" h-full w-full text-gray-700 outline-none bg-inherit rounded-lg text-sm"
                type="text"
                id="search"
                placeholder="Order ID or Transaction ID"
              />
            </div>
          </div>
          <div className="flex h-12 items-center ">
            <button className="p-1 m-2 flex outline-slate-300 outline-none rounded-sm text-sm">
              Sort
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 ml-1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>
            <button className="p-1 flex m-2 outline-slate-300 outline-none rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="m-3 ">
          <table class="md:table-auto table-fixed md:text-base text-xs w-full text-center">
            <thead className="bg-slate-200 text-slate-500 rounded-lg ">
              <tr>
                <th className="p-2">Order ID</th>
                <th className="p-2">Status</th>
                <th className="p-2">Transaction ID</th>
                <th className="p-2">Refund Date</th>
                <th className="p-2">Order Amount</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {tableData.map((table) => {
                return (
                  <TableData
                    orderId={table.orderId}
                    status={table.status}
                    transactionId={table.transactionId}
                    date={table.refundDate}
                    amount={table.orderAmount}></TableData>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
