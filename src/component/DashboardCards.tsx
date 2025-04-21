import { ReactNode } from "react";
type DashboardCardsType = {
  title : string ;
  count : number ;
  children?: ReactNode; // 👈 برای محتوای داخل کامپوننت

}


function DashboardCards(props : DashboardCardsType) {

  return (
    <div className="border-[1px] dark:border-slate-700  flex  mt-2 flex-col justify-between h-[150px]  group cursor-pointer dark:hover:bg-Navyblue hover:bg-blue-100  p-2 rounded-[35px] text-center">
      <div>
        <div className="pb-3  ">{props.children}</div>
        <div className=" text-[11px]  dark:text-gray-300">{props.title}</div>
      </div>
      <div className="">
        <div className={`text-green-600 dark:text-green1 text-[14px] `}>{props.count}</div>
      </div>
    </div>
  );
}

export default DashboardCards;
