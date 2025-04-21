import { NavLink } from "react-router-dom";
import { NotebookPen } from "lucide-react";
import { PersonStanding } from "lucide-react";

type LeftBarType = {
  isShowLeftBar : boolean ;
  setIsShowLeftBar: React.Dispatch<React.SetStateAction<boolean>>;
 }

function LeftBar({ isShowLeftBar, setIsShowLeftBar }:LeftBarType) {
  return (
    <>
      {isShowLeftBar && (
        <div
          className="fixed  md:fixed hidden md:block inset-0 z-[80] bg-black bg-opacity-30 "
          onClick={() => {
            setIsShowLeftBar(false);
          }}
        ></div>
      )}

      <div
        className={`${
          isShowLeftBar ? "ml-0" : "ml-[-11.8rem] "
        }  top-[55px] duration-300 relative p-3 w-[190px] md:z-[89] md:fixed  dark:bg-Navyblue min-h-[100vh] dark:text-gray-300 border-[1px] border-b-0  dark:border-slate-800 border-gray-200  font-bold bg-white    bottom-0  `}
      >
        <div className="">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? " dark:bg-Navyblue2 bg-green-100 dark:text-white block"
                : "text-gray-400    block";
            }}
            to="Dashboard/0"
          >
            <div className="flex hover:bg-green-100 hover:dark:bg-Navyblue2 cursor-pointer p-1 rounded-sm my-3 items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.99"
                stroke="#00dd80"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p className="">Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
            ? " dark:bg-Navyblue2 bg-green-100 dark:text-white block"
                : "text-gray-400    block"
            }
            to="Notes"
          >
            <div className="flex  hover:dark:bg-Navyblue2 cursor-pointer p-1 rounded-sm my-3 items-center gap-x-2">
              <NotebookPen color="" className="stroke-blue-300"/>

              <p>Notes</p>
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                 ? " dark:bg-Navyblue2 bg-green-100 dark:text-white block"
                : "text-gray-400    block"
            }
            to="Analysis"
          >
            <div className="flex  hover:dark:bg-Navyblue2 cursor-pointer p-1 rounded-sm my-3 items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#f96a01"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>

              <p>Monitoring</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " dark:bg-Navyblue2 bg-green-100 dark:text-white block"
                : "text-gray-400    block"
            }
            to="me"
          >
            <div className="flex  hover:dark:bg-Navyblue2 cursor-pointer p-1 rounded-sm my-3 items-center gap-x-2">
              <PersonStanding size={23}/>

              <p> me </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
