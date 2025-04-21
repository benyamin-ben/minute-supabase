import { useEffect, useState } from "react";
import { TaskType } from "../Types/types";
type DailyAnalysType = {
  day: number;
  alltasks: TaskType[];
  completed: TaskType[];
  uncompletedTask: TaskType[];
};



const DailyAnalys:React.FC<DailyAnalysType> = (props):JSX.Element => {

  const [percentage, setPercentage] = useState(0);
  const [delayedCompletedTasks, setDelayedCompletedTasks] = useState(0);
  const [onTimeCompletedTasks, setOnTimeCompletedTasks] = useState(0);

  useEffect(() => {
    const percent =
      props.completed.length /
      (props.completed.length + props.uncompletedTask.length);

    const todayTaskWithDelay = props.alltasks.filter((item) => {
      return item.whatsDay === props.day && item.timeDifference > 0;
    });

    const todayTaskWithOutDelay = props.alltasks.filter(
      (item) =>{ 
        return item.whatsDay === props.day && item.timeDifference < 0}
    );
    setDelayedCompletedTasks(todayTaskWithDelay.length);
    setOnTimeCompletedTasks(todayTaskWithOutDelay.length);
    if (props.completed.length === 0) {
      setPercentage(0);
    } else {
      setPercentage(Math.floor(percent * 100));
    }
  });

  return (
    <div className="border-[1px]  dark:border-slate-700  grow rounded-tl-lg mb-10 rounded-tr-lg  ">
      <p className="text-center dark:bg-[#0f172a] rounded-tl-lg rounded-tr-lg  bg-green1  text-white py-2">
        daily analys
      </p>
      {/* mini sections */}
      <div className="bg-white dark:text-gray-300  px-5 dark:bg-Navyblue text-sm p-2">
        <div>
          <p className="text-[12px]  text-gray-500">
            {" "}
            Percentage of completed tasks
          </p>
          <div className="h-3 rounded-md w-[100%] mr-2 dark:border dark:bg-Navyblue2 dark:border-green1 bg-gray-300">
            <div
              style={{ width: `${percentage}%` }}
              className="bg-green-500 text-gray-700  dark:text-gray-800 rounded-md dark:bg-green1  h-full text-right text-[10px] flex items-center justify-end "
            >
              {percentage}%
            </div>
          </div>
        </div>
        {/*  */}
        <div className="   dark:bg-Navyblue dark:text-gray-300  mt-4 ">
          <div className="flex gap-y-1  items-center gap-x-5 text-sm  flex-wrap">
            <div className="dark:bg-Navyblue2  dark:rounded-md flex items-center">
              <p>Completed tasks </p>
              <p>:</p>
              <p className="dark:text-green1 p-1 rounded-md">
                {" "}
                {props.completed.length}
              </p>
            </div>
            <div className="dark:bg-Navyblue2 px-1 dark:rounded-md flex items-center">
              <p> Delayed completed tasks </p>
              <p>: </p>
              <p className=" p-1 dark:text-green1 rounded-md">
                {onTimeCompletedTasks}
              </p>
            </div>
            <div className="dark:bg-Navyblue2 px-1 dark:rounded-md flex items-center">
              <p> On-time tasks </p>
              <p> : </p>
              <p className=" p-1 dark:text-green1 rounded-md">
                {delayedCompletedTasks}
              </p>
            </div>
            <div className="dark:bg-Navyblue2 px-1 dark:rounded-md flex items-center">
              <p>notcompleted tasks</p>
              <p>: </p>
              <p className="text-red-600 p-[2px] rounded-md">
                {props.uncompletedTask.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyAnalys;
