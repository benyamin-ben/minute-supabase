import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getTodos, removeAllTodo } from "../Redux/reducers/todos";
import { TodoState } from "../Types/types";
import { removeAllTodos } from "../Redux/reducers/todos";
import { getTasksThunk } from "../Redux/middleware/asyncActions";
import { AppDispatch } from "../Redux/store";
import AnalysBox from "../component/AnalysBox";
import { PieChart, Pie, Cell } from "recharts";
import DataTable from "../component/DataTable";
import { convertNumberToDay } from "../utils/time";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChartDataType,DaysData , PieChartData , AnalysBoxData } from "../Types/AnalysPageType";





const COLORS = ["#00dc82", "#f24541", "black", "#8884d8"];


const Analysis = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const allState = useSelector((state: TodoState) => state);
  const [daysData, setDaysData] = useState<DaysData[]>();
  const [barChartData, setBarChartData] = useState<BarChartDataType[]>([]);
  const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);
  const [analysBoxData, setAnalysBoxData] = useState<AnalysBoxData[]>([]);
  console.log('barChartData' , barChartData)
  console.log('pieChartData' , pieChartData)
  console.log('analysBoxData' , analysBoxData)

  useEffect(() => {
    let finalData = [];
    for (var i = 0; i < 7; i++) {
      const ben10 = allState.todos.filter((item) => item.whatsDay === i);
      if (ben10.length === 0) {
        finalData[i] = {
          day: convertNumberToDay(i),
          workingHour: 0,
          totalTask: 0,
          remainingTask: 0,
          completedTask: 0,
          score: 0,
        };
      } else {
        finalData[i] = ben10.reduce<DaysData>(
          (prev, current, index) => {
            if (current.isComplete === 1) {
              const first = current.hourStart * 60 + current.minuteStart;
              const second = current.hourEnd * 60 + current.minuteEnd;
              var final = Math.floor((second - first) / 60);
            } else {
              final = 0;
            }

            const lg = {
              day: convertNumberToDay(i),
              workingHour: final + prev.workingHour,
              totalTask: index + 1,
              remainingTask:
                prev.remainingTask + (current.isComplete === 0 ? 1 : 0),
              completedTask: prev.completedTask + current.isComplete,
              score: 0,
            };

            if (index === ben10.length - 1) {
              const sum = Math.floor(
                lg.workingHour * 6.05 + (lg.completedTask / lg.totalTask) * 10
              );

              const newlg = {
                score: sum,
                day: convertNumberToDay(i),
                workingHour: final + prev.workingHour,
                totalTask: index + 1,
                remainingTask:
                  prev.remainingTask + (current.isComplete === 0 ? 1 : 0),
                completedTask: prev.completedTask + current.isComplete,
              };

              return newlg;
            }

            return lg;
          },
          {
            day: convertNumberToDay(i),
            workingHour: 0,
            totalTask: 0,
            completedTask: 0,
            remainingTask: 0,
            score: 0,
          }
        );
      }
    }

    setDaysData(finalData);
  }, [allState.todos]);

  // اجرا فقط یک بار هنگام لود شدن کامپوننت
  useEffect(() => {
    dispatch(removeAllTodos(undefined));
    dispatch(getTasksThunk());
  }, []);

  //
  useEffect(() => {
    // BarChart
    let barData = daysData?.map((item) => {
      return { name: item.day, last_week: 10, this_week: item.score };
    });

if (barData) {
  setBarChartData(barData);
}
    // pieChart
     daysData?.reduce((prev, current, index) => {
      let count = current.workingHour + prev;
      if (index === 6) {
        const loosTime = 168 - 49 - 14 - count;
        const data = [
          { name: "Time spent on tasks", value: count, color: "#00dc82" },
          { name: "Time lost", value: loosTime, color: "#f24541" },
          { name: "Amount of sleep", value: 49, color: "black" },
          { name: "rest time", value: 14, color: "#8884d8" },
        ];
        setPieChartData(data);
        return count;
      }
      return count;
    }, 0);

    // analysBox =>
     daysData?.reduce(
      (prev, current, index) => {
        const totalTask = current.totalTask + prev[0];
        const completedTask = current.completedTask + prev[1];
        if (index === 6) {
          const data = [
            { title: "all tasks ", svg: "ClipboardList", count: totalTask },
            {
              title: "Completed tasks ",
              svg: "CheckCheck",
              count: completedTask,
            },
            {
              title: "Incomplete tasks ",
              svg: "ListTodo",
              count: totalTask - completedTask,
            },
          ];

          setAnalysBoxData(data);
        }

        return [totalTask, completedTask];
      },
      [0, 0]
    );
  }, [daysData]);

  // all compelte todos

  return (
    <div className="  dark:bg-Navyblue w-full pt-[75px] items-stretch  text-center p-2  ">
      {/* section 1 */}
      <div className="flex gap-x-2 sm:flex-wrap">
        <div className="flex justify-evenly md:w-full  gap-x-1   flex-wrap">
          {analysBoxData.map((item) => (
            <AnalysBox
              title={item.title}
              svgName={item.svg}
              count={item.count}
            />
          ))}
        </div>
        <div className="md:grow mb-1 flex-wrap lg:items-center dark:text-gray-300 flex grow items-center bg-gray-200 justify-evenly dark:bg-Navyblue2    p-2  ">
          <div className="w-[full] lg:items-center justify-center lg:justify-center flex flex-wrap">
            <PieChart width={200} height={150} className="">
              <Pie
                data={pieChartData}
                cx={100}
                cy={70}
                innerRadius={40}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieChartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="md:mt-6">
              {pieChartData.map((item) => (
                <div className="flex  gap-x-2 items-center">
                  <p
                    style={{ backgroundColor: `${item.color}` }}
                    className="h-3 w-3  "
                  ></p>
                  <div className="flex items-center gap-x-[7px]">
                    <p>{item.name} </p>
                    <p
                      style={{ backgroundColor: `${item.color}` }}
                      className="text-white  text-sm p-[2px] rounded-md"
                    >
                      {item.value} h
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div>
        <div className="sm:mt-2  text-center rounded-md gap-x-4 gap-y-6 flex flex-wrap justify-evenly items-start md:p-0 mt-2">
          {/* chart 2 */}
          <div className="md:grow  bg-gray-200 flex bg-gray-0 items-center justify-evenly  shadow-xl lg:w-[17rem]  p-2 dark:bg-Navyblue2 grow">
            <div className="w-[50rem]">
              <ResponsiveContainer
                width="100%"
                height={280}
                className="md:mx-auto w-full"
              >
                <BarChart data={barChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="last_week" fill="#d1d4db" />
                  <Bar dataKey="this_week" fill="#00dc82" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div>
        <DataTable info={daysData} />
      </div>
    </div>
  );
};

export default Analysis;
