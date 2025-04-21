import { useState } from "react";
import { useEffect } from "react";
import { DaysData } from "../Types/AnalysPageType";
type DataTable = {
  info: DaysData[] | undefined;
};

const DataTable: React.FC<DataTable> = (props): JSX.Element => {
  const [data, setData] = useState(props.info);

  useEffect(() => {
    setData(props.info);
  });

  return (
    <div className=" dark:border-Navyblue2 sm:border-none border-white mt-2 ">
      <table className="table-auto border-separate border-spacing-y-[12px] border-spacing-x-[3px]  sm:text-[12px] w-full text-center">
        <thead>
          <tr className="dark:bg-Navyblue2 bg-gray-300  text-black dark:text-green1">
            <th className="border-b-[2.5px] border-green1 ">day </th>
            <th className=" border-b-green1 xs:text-[10px]  font-normal  border-b-2 ">
              working Hours
            </th>
            <th className="border-b-[2.5px] xs:text-[10px] font-normal border-green1   ">
              Total Tasks
            </th>
            <th className="border-b-[2.5px] xs:text-[10px] font-normal border-green1   ">
              {" "}
              Completed Tasks
            </th>
            <th className="border-b-[2.5px] xs:text-[10px] font-normal border-green1   ">
              remaining Tasks
            </th>
            <th className="border-b-[2.5px] xs:text-[10px] font-normal border-green1   ">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.day} className=" group my-2 p-2  xs:text-[11px]">
                <td className="text-[18px] px-1 xs:text-[11px] group-hover:bg-green1  bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
                  {/* مقدار پیش‌فرض هر سلول */}
                  {item.day}
                </td>
                <td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
                  {/* مقدار پیش‌فرض هر سلول */}
                  {item.workingHour}
                </td>
                <td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
                  {/* مقدار پیش‌فرض هر سلول */}
                  {item.totalTask}
                </td>
                <td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
                  {/* مقدار پیش‌فرض هر سلول */}
                  {item.completedTask}
                </td>
                <td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
                  {/* مقدار پیش‌فرض هر سلول */}
                  {item.remainingTask}
                </td>
                <td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1 dark:text-green1 dark:hover:text-black dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200   my-2 w-28 ">
                  {/* مقدار پیش‌فرض هر سلول */}
                  {item.score}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

//       <tr className=' group my-2 p-2  xs:text-[11px]'>
{
  /* <td className="text-[18px] px-1 xs:text-[11px] group-hover:bg-green1  bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
{/* مقدار پیش‌فرض هر سلول */
}
//sataurday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//9 h
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//8
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//6
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//2
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1 dark:text-green1 dark:hover:text-black dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200   my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//90
//</td>
//</tr>
//<tr className=' group my-2 p-2 '>
//<td className="text-[18px] xs:text-[11px] xs:text-[13px] px-1 group-hover:bg-green1  bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
//{/* مقدار پیش‌فرض هر سلول */}
//sunday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//8h
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//7
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//7
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//0
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:text-green1 dark:hover:text-black dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//85
//</td>
//</tr>
//<tr className=' group my-2 p-2 '>
//<td className="text-[18px] xs:text-[11px] xs:text-[13px] px-1 group-hover:bg-green1  bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
//{/* مقدار پیش‌فرض هر سلول */}
//monday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//12h
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//20
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//8
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//12
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:text-green1 dark:hover:text-black dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200    my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//6.5
//</td>
//</tr>
//<tr className=' group my-2 p-2 '>
//<td className="text-[18px] group-hover:bg-green1 px-1 xs:text-[11px] bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
//{/* مقدار پیش‌فرض هر سلول */}
//tuesday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32d
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1 dark:text-green1 dark:hover:text-black dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200    my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//6.7
//</td>
//</tr>
//<tr className=' group my-2 p-2 '>
//<td className="text-[18px] group-hover:bg-green1 px-1 xs:text-[11px] bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
//{/* مقدار پیش‌فرض هر سلول */}
//wensday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32d
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 dark:text-green1 dark:hover:text-black duration-200    my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//9.3
//</td>
//</tr>
//<tr className=' group my-2 p-2 '>
//<td className="text-[18px] group-hover:bg-green1 xs:text-[11px] bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
//{/* مقدار پیش‌فرض هر سلول */}
//thursday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32d
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:text-green1 dark:hover:text-black  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200    my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//5.3
//</td>
//</tr>
//<tr className=' group my-2 p-2 '>
//<td className="text-[18px] group-hover:bg-green1 px-1 xs:text-[11px] bg-gray-300 dark:bg-Navyblue2 border-r-[2.5px] border-green1 dark:text-gray-300 duration-200  dark:group-hover:bg-green1 dark:group-hover:text-black  py-2">
//{/* مقدار پیش‌فرض هر سلول */}
//friday
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32d
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 text-[18px] xs:text-[13px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200  dark:text-gray-300  my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//32
//</td>
//<td className=" bg-gray-300 xs:text-[13px] dark:text-green1  dark:hover:text-black text-[18px] group-hover:bg-green1  dark:group-hover:bg-green1 dark:group-hover:text-black dark:bg-Navyblue2 duration-200   my-2 w-28 ">
//{/* مقدار پیش‌فرض هر سلول */}
//10
//</td>
//</tr> */}
