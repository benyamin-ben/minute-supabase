import {  useNavigate, useParams } from "react-router-dom";
import DashboardCards from "../component/DashboardCards.tsx";
import DailyAnalys from "../component/DailyAnalys.tsx";
import {

  ChevronDown,
 
} from "lucide-react";
import "./home.css";
// [&>*]:bg-red-400
import AddNewTask from "../component/AddNewTask.tsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TaskType, TodoState } from "../Types/types.ts";
import { AppDispatch } from "../Redux/store.ts";
import { removeAllTodos } from "../Redux/reducers/todos.js";
import {
  getTasksThunk,
  convertToCompletedThunk,
  removeTaskThunk,

} from "../Redux/middleware/asyncActions.js";
import {
  getTotalMinute,
  minutesToHours,
  
} from "../utils/time.js";
import EditTask from "../component/EditTask.tsx";
import { editInfo } from "../Types/types.ts";
import CustomTimer from "../component/CustomTimer.tsx";
import { remainTimeForDoingTask } from "../utils/time.js";
import { convertNumberToDay } from "../utils/time.js";
import LiveClock from "../component/Clock.tsx";
import Setting from "../component/Setting.tsx";
import { putTexts, getTexts } from "../Redux/reducers/texts.js";
import { currentDay } from "../utils/time.js";
const days = [
  { id: 0, name: "Saturday" },
  { id: 1, name: "Sunday" },
  { id: 2, name: "Monday" },
  { id: 3, name: "Tuesday" },
  { id: 4, name: "Wednesday" },
  { id: 5, name: "Thursday" },
  { id: 6, name: "Friday" },
];

// remainTimeForDoingTask();

const Dashboard = (): JSX.Element => {
  const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState<boolean>(false);
  const [showCompleteTasks, setShowCompleteTasks] = useState<boolean>(true);
  const [editedTaskInfo, setEditedTaskInfo] = useState<editInfo>({
    title: "",
    description: "",
    priority: 2,
    whatsDay: 0,
    hourStart: 1,
    minuteStart: 3,
    hourEnd: 4,
    minuteEnd: 5,
  });
  const [text, setText] = useState<string>("");
  const [mainID, setmainId] = useState<number>(0);
  const [sortBy, setsortBy] = useState<number>(0);
  const [remainTimeEndDay, setRemainTimeEndDay] = useState([0, 0, 0]);
  const [seeAllId, setSeeAllId] = useState<number>(0);
  const [isShowSaved, setIsShowSaved] = useState<boolean>(false);

  const [completeTodos, setcompleteTodos] = useState<TaskType[]>([]);
  const [notCompleteTodos, setnotCompleteTodos] = useState<TaskType[]>([]);

  /////////////////////////
  const state11 = useSelector((state: TodoState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const param =useParams();
  const specialId = +(param.ID ?? 0)
  ///////////////////////////////////
  useEffect(() => {
    dispatch(removeAllTodos(undefined));
    dispatch(getTasksThunk());
    dispatch(getTexts());
  }, []);


  useEffect(() => {
  

      filterworks();
    
  }, [state11.todos , state11.texts, specialId, sortBy]);


  /////////////////////////////////////////// funcs
  const filterworks = (): void => {
    // remain time end day
    setRemainTimeEndDay(remainTimeForDoingTask(specialId));

    // tasks
    const todayTask: TaskType[] = state11.todos.filter(
      (item) => item.whatsDay === specialId
    );

    const completeTasks = todayTask.filter((item) => item.isComplete === 1);
    const notCompleteTasks: TaskType[] = todayTask.filter(
      (item) => item.isComplete === 0
    );
    // texts

    const todayText = state11.texts.find((item) => {
      return +item.whatsDay === specialId;
    });
    if(todayText?.description){

      setText(todayText?.description);
    }


    // sort tasks by time , priority
    const sortTasksByTime = [...notCompleteTasks].sort((a, b) => {
      if (a.hourStart === b.hourStart) {
        return a.minuteStart - b.minuteStart; // اگر ساعت‌ها برابر باشند، دقیقه‌ها بررسی می‌شوند
      }
      return a.hourStart - b.hourStart; // مرتب‌سازی بر اساس ساعت
    });

    const sortTasksByPriority = notCompleteTasks.sort(
      (a: TaskType, b: TaskType) => b.priority - a.priority
    );

    // setstate funcs
    setcompleteTodos(completeTasks);
    if (sortBy) {
      setnotCompleteTodos(sortTasksByPriority);
    } else {
      setnotCompleteTodos(sortTasksByTime);
    }
  };
  //

  const changeToCompleted = (
   
    hourEnd:number ,
    minuteEnd:number,
    Day:number,
    itemID:number
  ): void => {
    // اینا واسه امروزه
    const today = new Date();
    const dayOfWeek = today.getDay() + 1;
    const hour = today.getHours();
    const minute = today.getMinutes();

    const allMinuteNow = getTotalMinute(dayOfWeek, hour, minute);
    const allMinuteTodo = getTotalMinute(Day, hourEnd, minuteEnd);

    const timeDifference = +allMinuteTodo - allMinuteNow;

    dispatch(convertToCompletedThunk(itemID, timeDifference));
  };

  // delete tasks =>
  const deleteTodo = (id: number): void => {
    dispatch(removeTaskThunk(id));
  };

  const putText = (value:string) => {
    const text1 = {
      whatsDay: specialId,  
      description: value,
    };
    setText(value);
    dispatch(putTexts(text1));
  };

  // ////

  
  const handleSave = () => {
    // انجام عملیات ذخیره (اگر لازم باشه)
    setIsShowSaved(true);
    setTimeout(() => {
      setIsShowSaved(false);
    }, 1300);
  };


  return (
    <>
    <p style={{right:`${isShowSaved  ? '-4px' :'-60px'}`}} className="fixed duration-300 right-0 top-20 z-[300] p-[2px] pr-[10px] text-sm bg-green-200 text-green-600 ">
      saved
    </p>
      <Setting />
      {isShowAddTaskModal && (
        <div>
          <div
            className="fixed   inset-0 z-[113] bg-black bg-opacity-30 "
            onClick={() => setIsShowAddTaskModal(false)}
          ></div>
          <AddNewTask
            func={setIsShowAddTaskModal}
            day={specialId}
            alltask={state11.todos}
          />
        </div>
      )}
      <div className="dark:bg-Navyblue  mt-[60px] md:pl-1 sm:p-0  font-vazir p-2 w-[100%] ">
        <div className="flex sm:block  items-center gap-x-5 justify-between">
          {/*daily texts  */}
          <div
            className=" sm:pl-2 sm:pb-8 sm:order-1 sm:w-full sm:items-start relative dark:bg-Navyblue2 bg-green-100 self-stretch min-w-[250px]
  inline-block  w-[40%]  sm:bg-green-100 sm:py-2 items-center gap-x-2 order-4   sm:flex text-center   right-0 top-0 bottom-0 "
          >
            <div className=" dark:text-green1">
              <LiveClock />
            </div>
            <div className="sm:w-full">
              <textarea
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="write here ... "
                className="w-full sm:p-0 sm:pl-1  bg-green-100  caret-green1 text-black dark:text-gray-300  dark:caret-green1 focus:outline-none p-2 dark:bg-Navyblue2"
                name=""
                id=""
                value={text}
              ></textarea>
            </div>
            <div>
              <button onClick={() => {putText(text); handleSave()}} className="absolute left-1 dark:bottom-2 bottom-1 bg-green1 text-white dark:text-black sm:left-4 sm:right-4 sm:bottom-1 right-0 p-[2px] px-2 text-[11px] dark:hover:bg-green1 duration-300  dark:bg-green-200">save</button>
            </div>
          </div>

          {/* weeks and icons => */}
          <div className=" flex-wrap   w-[60%] sm:order-2 lg:w-[74%] sm:w-full gap-x-1 sm:gap-x-0">
            <div
              id="weekdays"
              className="flex gap-x-0 gap-y-1  text-[10px] sm:p-2  "
            >
              {days.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundColor: `${
                        +specialId === item.id ? "#00dd80" : ""
                      }`,
                      color: `${+specialId === item.id ? "white" : ""}`,
                      borderBottom: `${
                        index === currentDay() ? "2px solid #00dd80" : ""
                      }`,
                    }}
                    onClick={() => {
                      navigate(`/Dashboard/${item.id}`);
                    }}
                    key={index}
                    className="hover:bg-green-500 dark:border-t-0  dark:border-slate-700  dark:bg-Navyblue2 dark:text-gray-300 bg-white p-[3px] hover:text-white border duration-[300ms] my-1 text-[10px] text-center cursor-pointer  rounded-md"
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {/* icons  */}
            <div
              id="icons-container"
              className="sm:justify-center   justify-start  mt-6 sm:p-2 "
            >
              <DashboardCards title=" My personal messages " count={23}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="purple"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  className="size-6 duration-300 rounded-full w-9 h-9 p-1  group-hover:bg-green-300 group-hover:-translate-y-[6px] inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </DashboardCards>
              <DashboardCards
                title=" number of today's tasks"
                count={notCompleteTodos.length + completeTodos.length}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="blue"
                  className="size-6 duration-300 rounded-full w-9 h-9 p-1  group-hover:bg-green-300 group-hover:-translate-y-[6px] inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
              </DashboardCards>
              <DashboardCards title="Productive times" count={21}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#f96a01"
                  className="size-6 duration-300 rounded-full w-9 h-9 p-1  group-hover:bg-green-300 group-hover:-translate-y-[6px] inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </DashboardCards>

              <div className="border-[1px] dark:bg-green1 dark:border-none flex flex-col items-center justify-between  h-[150px]  mt-2 dark:drop-shadow-sm drop-shadow-[0_0_10px_#ffd25a] border-yellow-300 bg-[#fff8de]   group cursor-pointer   p-2 rounded-[35px] text-center">
                <div>
                  <div className="pb-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="green"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      className="size-6 duration-300 rounded-full w-9 h-9 p-1  group-hover:bg-green-300 group-hover:-translate-y-[6px] inline-block"
                    >
                      <g>
                        <g>
                          <g>
                            <path d="M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.629,123.332,0,187.62,0,256     s26.629,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512c64.518,0,126.15-24.077,173.541-67.796l-10.312-11.178     c-44.574,41.12-102.544,63.766-163.229,63.766c-64.317,0-124.786-25.046-170.266-70.527     C40.254,380.786,15.208,320.317,15.208,256S40.254,131.214,85.734,85.735C131.214,40.254,191.683,15.208,256,15.208     s124.786,25.046,170.266,70.527c45.48,45.479,70.526,105.948,70.526,170.265c0,60.594-22.587,118.498-63.599,163.045     l11.188,10.301C487.986,381.983,512,320.421,512,256C512,187.62,485.371,123.332,437.019,74.981z" />
                            <path d="M282.819,263.604h63.415v-15.208h-63.415c-1.619-5.701-5.007-10.662-9.536-14.25l35.913-86.701l-14.049-5.82     l-35.908,86.688c-1.064-0.124-2.142-0.194-3.238-0.194c-15.374,0-27.881,12.508-27.881,27.881s12.507,27.881,27.881,27.881     C268.737,283.881,279.499,275.292,282.819,263.604z M243.327,256c0-6.989,5.685-12.673,12.673-12.673     c6.989,0,12.673,5.685,12.673,12.673c0,6.989-5.685,12.673-12.673,12.673C249.011,268.673,243.327,262.989,243.327,256z" />
                            <path d="M451.168,256c0-107.616-87.552-195.168-195.168-195.168S60.832,148.384,60.832,256S148.384,451.168,256,451.168     S451.168,363.616,451.168,256z M76.04,256c0-99.231,80.73-179.96,179.96-179.96S435.96,156.769,435.96,256     S355.231,435.96,256,435.96S76.04,355.231,76.04,256z" />
                            <rect
                              x="248.396"
                              y="366.511"
                              width="15.208"
                              height="56.776"
                            />
                            <path d="M61.672,336.501l-14.05,5.82c23.059,55.668,66.416,99.026,122.085,122.085l5.82-14.049     C123.61,428.851,83.176,388.416,61.672,336.501z" />
                            <path d="M450.397,175.485l14.049-5.82c-23.059-55.669-66.417-99.027-122.085-122.084l-5.82,14.049     C388.457,83.135,428.891,123.569,450.397,175.485z" />
                            <path d="M256,45.624V30.416c-60.256,0-116.904,23.465-159.512,66.071C53.881,139.095,30.416,195.744,30.416,256h15.208     c0-56.194,21.883-109.024,61.617-148.759C146.976,67.507,199.807,45.624,256,45.624z" />
                            <path d="M481.584,256h-15.208c0,56.193-21.883,109.024-61.617,148.759c-39.734,39.735-92.566,61.617-148.759,61.617v15.208     c60.256,0,116.904-23.465,159.513-66.071C458.119,372.904,481.584,316.256,481.584,256z" />
                            <rect
                              x="248.396"
                              y="88.713"
                              width="15.208"
                              height="56.776"
                            />

                            <rect
                              x="183.845"
                              y="106.019"
                              transform="matrix(0.3827 0.9239 -0.9239 0.3827 226.5988 -111.8865)"
                              width="26.361"
                              height="15.208"
                            />

                            <rect
                              x="301.78"
                              y="390.75"
                              transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 67.4626 841.7849)"
                              width="26.361"
                              height="15.207"
                            />

                            <rect
                              x="100.445"
                              y="189.43"
                              transform="matrix(0.9239 0.3827 -0.3827 0.9239 84.0528 -28.4842)"
                              width="26.36"
                              height="15.207"
                            />

                            <rect
                              x="385.201"
                              y="307.351"
                              transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 645.9084 758.3894)"
                              width="26.361"
                              height="15.207"
                            />

                            <rect
                              x="106.028"
                              y="301.792"
                              transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 -133.8779 540.4901)"
                              width="15.207"
                              height="26.36"
                            />

                            <rect
                              x="390.765"
                              y="183.851"
                              transform="matrix(0.3827 0.9239 -0.9239 0.3827 427.9489 -246.4146)"
                              width="15.207"
                              height="26.361"
                            />

                            <rect
                              x="189.433"
                              y="385.188"
                              transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 226.6226 841.8156)"
                              width="15.208"
                              height="26.361"
                            />

                            <rect
                              x="307.381"
                              y="100.448"
                              transform="matrix(0.9239 0.3827 -0.3827 0.9239 67.4614 -111.8911)"
                              width="15.207"
                              height="26.361"
                            />

                            <rect
                              x="129.389"
                              y="150.181"
                              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 157.7713 380.9216)"
                              width="56.776"
                              height="15.208"
                            />

                            <rect
                              x="325.825"
                              y="346.62"
                              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 354.2049 855.1643)"
                              width="56.776"
                              height="15.208"
                            />
                            <rect
                              x="88.713"
                              y="248.396"
                              width="56.776"
                              height="15.208"
                            />
                            <rect
                              x="366.511"
                              y="248.396"
                              width="56.776"
                              height="15.208"
                            />

                            <rect
                              x="150.157"
                              y="325.829"
                              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.8444 716.2403)"
                              width="15.208"
                              height="56.776"
                            />

                            <rect
                              x="346.602"
                              y="129.395"
                              transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.3148 -204.2485)"
                              width="15.208"
                              height="56.776"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className=" text-[11px] text-black">
                    Time remaining today{" "}
                    <p className="text-[8px] inline">
                      {convertNumberToDay(specialId)}
                    </p>
                  </div>
                </div>

                <div className="    ">
                  {+specialId >= currentDay() ? (
                    <CustomTimer
                      hour={remainTimeEndDay[0]}
                      minute={remainTimeEndDay[1]}
                      second={remainTimeEndDay[2]}
                    />
                  ) : (
                    <div className="text-red-600">end</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2  */}

        <div className=" flex-wrap sm:p-[2px]  items-start gap-x-2 my-8">
          {/* notcompelete */}
          <div className=" grow w-[100%] relative rounded-tl-lg  rounded-tr-lg">
            <div
              onClick={() => {
                setIsShowAddTaskModal(true);
              }}
              className="dark:text-black bg-green1 inline-block p-1 mb-2 text-white  cursor-pointer rounded-md"
            >
              <p>add new task + </p>
            </div>
            {/* my tasks */}
            <div className=" ">
              <div className="flex justify-start gap-x-6 px-2 bg-gray-300 dark:border-t dark:border-slate-700 text-white dark:bg-Navyblue2 py-2 rounded-tl-lg rounded-tr-lg text-center ">
                <div className="flex dark:text-green-600 flex-col  text-gray-600 mx-1 [&>*]:cursor-pointer   items-center gap-x-2 text-[9px]">
                  <div className=" flex mx-1  dark:text-gray-300  text-gray-600 [&>*]:cursor-pointer   items-center gap-x-2 text-[10px]">
                    <p
                      onClick={() => {
                        setsortBy(0);
                      }}
                      className={` ${
                        sortBy === 0
                          ? "bg-green1 text-white dark:text-black"
                          : "bg-white dark:bg-black"
                      } hover:bg-green1  p-[2px] duration-200 rounded-md`}
                    >
                      time
                    </p>

                    <p
                      onClick={() => {
                        setsortBy(1);
                      }}
                      className={` ${
                        sortBy === 1
                          ? "bg-green1 text-white dark:text-black"
                          : "bg-white dark:bg-black"
                      } hover:bg-green1  p-[2px] duration-200 rounded-md`}
                    >
                      Priority
                    </p>
                  </div>
                </div>
                <div className="text-[10px] dark:text-gray-300  flex-col items-center">
                  <p>number of important tasks : </p>
                  <p>
                    {
                      notCompleteTodos.filter((item) => item.priority === 3)
                        .length
                    }
                  </p>
                </div>
              </div>

              <div className=" ">
                {/* first */}
                {notCompleteTodos.map((item) => (
                  <div key={item.id}>
                    <div
                      className={`flex items-center ${
                        seeAllId === +item.id! ? "border-b-0" : ""
                      }  border-b dark:border-b-slate-700  dark:hover:bg-Navyblue2  dark:text-gray-300 hover:bg-gray-300 dark:duration-0 duration-[400ms] justify-between`}
                    >
                      <div className=" relative z-[2] flex px-1 justify-between w-full items-center ">
                        <div
                          onClick={() => {
                            setmainId(item.id!);
                            setEditedTaskInfo({
                              title: item.title,
                              description: item.description,
                              priority: item.priority,
                              whatsDay: item.whatsDay,
                              hourStart: item.hourStart,
                              minuteStart: item.minuteStart,
                              hourEnd: item.hourEnd,
                              minuteEnd: item.minuteEnd,
                            });
                            setIsShowEditModal(true);
                          }}
                          className="transition-all  w-full flex items-center justify-start gap-x-4 xs:gap-x-2  p-[6px]  cursor-pointer  "
                        >
                          {/* SQURE */}
                          <div
                            onClick={(e) => {
                              e.stopPropagation();

                              setmainId(item.id!);
                              changeToCompleted(
                                item.hourEnd,
                                item.minuteEnd,
                                item.whatsDay,
                                item.id!
                              );
                            }}
                            className="border-[1px] hover:bg-green-500 duration-500 cursor-pointer border-gray-500 rounded-[2px] w-[15px] h-[15px]"
                          ></div>
                          <div className="  items-center  gap-x-1">
                            <p className="xs:text-[10px]">{item.title}</p>
                            <p className="text-[10px] dark:text-gray-400 text-gray-600">
                              {item.description.length > 20
                                ? item.description.slice(0, 20) + " ..."
                                : item.description}
                            </p>
                          </div>
                          <div className="flex  text-gray-400 px-2 gap-x-1 text-[12px] items-center dark:text-slate-500">
                            {item.description.length > 20 ? (
                              // see all
                              <div
                                style={{
                                  backgroundColor: `${
                                    seeAllId === +item.id! ? "#00dc82" : ""
                                  }`,
                                  color: `${
                                    seeAllId === +item.id! ? "black" : ""
                                  }`,
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (seeAllId === +item.id!) {
                                    setSeeAllId(0);
                                  } else {
                                    setSeeAllId(item.id!);
                                  }
                                }}
                                className="flex p-[2px] dark:hover:bg-green1 dark:hover:text-black  hover:bg-white dark:bg-Navyblue2 dark:border-none dark:text-gray-300  bg-white border items-center  rounded-md "
                              >
                                <p className="  text-[10px]">see all</p>
                                <div
                                  style={{
                                    transform: `${
                                      seeAllId === +item.id!
                                        ? "rotate(180deg)"
                                        : ""
                                    }`,
                                  }}
                                  className={`${
                                    seeAllId === +item.id!
                                      ? "rotate-180 text-white"
                                      : ""
                                  } duration-300`}
                                >
                                  <ChevronDown size={13} />
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex ${
                          item.description.length > 0 ? "py-4" : "py-2"
                        }  gap-x-6 py-2  bg-gray-300 dark:bg-Navyblue2 px-2  order-0`}
                      >
                        <div>
                          <div className="flex  xs:justify-center gap-x-2  items-center">
                            <div className="flex  xs:flex-col text-[11px] xs:text-[9px]  gap-x-1 items-center">
                              <div className="flex  items-center">
                                <p>
                                  {item.hourStart > 9
                                    ? item.hourStart
                                    : "0" + item.hourStart}
                                </p>
                                :
                                <p>
                                  {item.minuteStart > 9
                                    ? item.minuteStart
                                    : "0" + item.minuteStart}
                                </p>
                              </div>
                              <p className="xs:hidden">-</p>
                              <div className="flex items-center">
                                <p>
                                  {item.hourEnd > 9
                                    ? item.hourEnd
                                    : "0" + item.hourEnd}
                                </p>
                                :
                                <p>
                                  {item.minuteEnd > 9
                                    ? item.minuteEnd
                                    : "0" + item.minuteEnd}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" ">
                            {item.priority === 1 ? (
                              <div className="flex items-center   gap-x-2 xs:gap-x-1">
                                <p className="w-2 h-1 bg-green1 grow"></p>
                                <p className="w-2 h-1  border border-black dark:border dark:border-slate-700 grow"></p>
                                <p className="w-2 h-1  border border-black dark:border dark:border-slate-700 grow"></p>
                              </div>
                            ) : item.priority === 2 ? (
                              <div className="flex items-center xs:gap-x-1 gap-x-2 ">
                                <p className="w-2 h-1  bg-green1 grow"></p>
                                <p className="w-2 h-1 bg-green1 grow"></p>
                                <p className="w-2 h-1  border border-black dark:border dark:border-slate-700 grow"></p>
                              </div>
                            ) : (
                              <div className="flex items-center xs:gap-x-1 gap-x-2 ">
                                <p className="w-2 h-1 bg-green1 grow"></p>
                                <p className="w-2 h-1 bg-green1 grow"></p>
                                <p className="w-2 h-1 bg-green1 grow"></p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        height: `${+item.id! === seeAllId ? "auto" : "0"}`,
                      }}
                      className="overflow-hidden duration-500"
                    >
                      <div className=" dark:bg-Navyblue overflow-hidden  pl-2 border-green1 bg-green-100  border-0 border-b dark:text-gray-300  text-sm p-1">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}

                {isShowEditModal && (
                  <>
                    <div
                      className="fixed  inset-0 z-[113] bg-black bg-opacity-30 "
                      onClick={() => setIsShowEditModal(false)}
                    ></div>
                    <EditTask
                      {...{ ...editedTaskInfo ,isComplete:0 } }
                      func={setIsShowEditModal}
                      id={mainID}
                      alltask={state11.todos}
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* complete */}
          <div className="  mt-10 dark:border-t-[1px]  rounded-t-md dark:border-slate-600  text-white  rounded-tr-lg">
            <div
              onClick={() => {
                setShowCompleteTasks((prev) => !prev);
              }}
              className={`flex ${
                showCompleteTasks === true
                  ? "bg-green1 dark:bg-green1 "
                  : "bg-gray-300"
              } dark:bg-Navyblue2 hover:bg-green1 rounded-t-md items-center cursor-pointer gap-x-2`}
            >
              <p
                className={` pl-2  ${
                  showCompleteTasks === true ? "text-white dark:text-black" : ""
                }   text-left p-1`}
              >
                completed tasks
              </p>
              <div
                style={{
                  transform: `${`${
                    showCompleteTasks === true ? "rotate(180deg)" : ""
                  }`}`,
                }}
              >
                <ChevronDown />
              </div>
              <div className="flex items-center text-[10px] ">
                <p>Count : </p>
                <p> {completeTodos.length}</p>
              </div>
            </div>

            <div
              style={{
                height: `${showCompleteTasks === true ? "auto" : "0"}`,
                padding: `${showCompleteTasks === false ? "0px" : ""}`,
              }}
              className="text-black overflow-hidden duration-300  flex-wrap  flex justify-center p-6 gap-4"
            >
              {completeTodos.map((item) => (
                <div
                  key={item.id}
                  className="flex relative text-[12px] group cursor-pointer bg-green-100 dark:border-slate-600 w-[220px]  dark:border dark:bg-Navyblue2 rounded-md dark:text-gray-300   items-center justify-between "
                  onClick={() => {
                    deleteTodo(item.id!);
                  }}
                >
                  <div className="transition-all  p-[6px] duration-[400ms] ">
                    {item.title.slice(1, 40)}
                  </div>
                  <div className="absolute left-0 right-0 top-0 bottom-0  group-hover:dark:bg-red-600 group-hover:bg-red-400 rounded-md p-[2px] group-hover:flex justify-center items-center hidden">
                    delete
                  </div>

                  <div
                    dir="ltr"
                    className={`${
                      item.timeDifference > 0 ? "bg-green-600" : "bg-red-600"
                    } text-[10px] mr-2 rounded-md  dark:text-gray-300  relative text-white p-[2px]`}
                  >
                    <p> {item.timeDifference}</p>
                    <p
                      className={`absolute flex items-center justify-center  top-0 bottom-0 text-[7px]    left-0 right-0 text-center ${
                        Math.abs(item.timeDifference) > 60
                          ? "bg-white dark:bg-Navyblue  items-center group-hover:flex hidden dark:text-gray-300 border-[1px]"
                          : "hidden"
                      }  rounded-md dark:text-gray-300 text-black p-[2px] `}
                    >
                      {Math.abs(item.timeDifference) > 60
                        ? `${minutesToHours(item.timeDifference)[0]}:${
                            minutesToHours(item.timeDifference)[1]
                          }`
                        : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* secition 3  daily analys*/}
        <DailyAnalys
          alltasks={state11.todos}
          day={specialId}
          completed={completeTodos}
          uncompletedTask={notCompleteTodos}
        />
      </div>
    </>
  );
};

export default Dashboard;
