import { SIDEBAR_DATA, wallet } from "../data/sidebar";
import MenuOptions from "./MenuOptions";
export default function Sidebar() {
  return (
    <div className="text-slate-50 2">
      <div className="">
        {SIDEBAR_DATA.map((option) => {
          return (
            <MenuOptions name={option.name} icon={option.icon}></MenuOptions>
          );
        })}
      </div>
      <div className="flex bg-sky-800 m-4 px-4 rounded-lg ">
        <img src={wallet} className="" alt="" />
        <div className="m-3">
          <p>Available Credits</p>
          <p className="font-bold">₹6969</p>
        </div>
      </div>
    </div>
  );
}
