import  { useState } from "react";
import { AlarmClock, CalendarDays } from "lucide-react";
import { convertNumberToDay } from "../utils/time";
import { canAddNewTask, isEndTimeGreater } from "../utils/limitations.js";
import { useDispatch } from "react-redux";
import { editTaskThunk } from "../Redux/middleware/asyncActions";
import { removeTaskThunk } from "../Redux/middleware/asyncActions";
import { TaskType } from "../Types/types.js";
import { AppDispatch } from "../Redux/store.js";

type EditTaskType = { 
   alltask : TaskType[]
   description : string ;
   hourEnd : number ; 
   hourStart : number ;
   minuteEnd : number ; 
   minuteStart : number;
   whatsDay : number ;
   title : string ;
   id:number;
   func: React.Dispatch<React.SetStateAction<boolean>>;
   priority:number;

}


const EditTask: React.FC<EditTaskType> = (props): JSX.Element => {


  const [title, setTitle] = useState<string>(props.title);
  const [description, setDescription] = useState<string>(props.description);
  const [priority, setPriority] = useState<number>(props.priority);
  const [day, setDay] = useState<number>(props.whatsDay);
  const [hourStart, sethourStart] = useState<number>(props.hourStart);
  const [minuteStart, setminuteStart] = useState<number>(props.minuteStart);
  const [hourEnd, sethourEnd] = useState<number>(props.hourEnd);
  const [minuteEnd, setminuteEnd] = useState<number>(props.minuteEnd);

  const [isShowTimeModal, setIsShowTimeModa] = useState<boolean>(false);
  const [isShowSelectdayModal, setIsShowSelectdayModal] =
    useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const formValidation = () => {
    if (title.length === 0) {
      setValidationMessage("title is not filled");
    } else if (
      !canAddNewTask(
        props.alltask.filter(
          (item) =>
            item.whatsDay === day &&
            item.isComplete === 0 &&
            item.id !== props.id
        ),// @ts-ignore
        { hourStart, minuteStart, hourEnd, minuteEnd }
      )
    ) {
      setValidationMessage("Time overlap with other tasks");
    } else if (!isEndTimeGreater(hourStart, hourEnd, minuteStart, minuteEnd)) {
      setValidationMessage("End time cannot be earlier than start time");
    } else {
      props.func(false);
      updateTodo();
    }
  };

  const updateTodo = (): void => {
    const updatedTodo: TaskType = {
      id: props.id,
      title,
      description,
      isComplete: 0,
      hourStart,
      minuteStart,
      hourEnd,
      minuteEnd,
      whatsDay: day,
      timeDifference: 0,
      priority,
      tomorrowDelayCount: 0,
      userID: 1,
    };

    dispatch(editTaskThunk(updatedTodo));
  };

  const deleteTodo = (id: number): void => {
    dispatch(removeTaskThunk(id));
  };

  return (
    <div className="w-[50%] block sm:w-[85%] md:w-[70%] dark:border-slate-700 dark:border text-[13px] rounded-sm  z-[114] shadow-xl  fixed dark:bg-Navyblue  bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <p className="text-[16px]   bg-green1 dark:bg-Navyblue2 text-center   text-white ">
        edit task
      </p>

      <div className="p-2">
        <div className="my-4">
          <p className="text-[11px] text-gray-600 mb-2"> Activity Title</p>
          {/* title */}
          <input
            className="text-sm sm:w-[100%] sm:text-[15px] sm:p-2 border-b-[1px] caret-green1 dark:text-gray-300  dark:bg-Navyblue2 border-red-400 outline-none w-[50%]  "
            type="text"
            placeholder="title ..."
            value={title}
            onChange={(e) => {
              if (e.target.value.length < 27) {
                setTitle(e.target.value);
              }
            }}
            style={{ borderColor: `${title.length > 0 ? "gray" : "red"}` }}
          />
          <p
            style={{ display: `${title.length > 0 ? "none" : "block"}` }}
            className="text-[10px] text-red-500 "
          >
            This field is required
          </p>
          <p
            style={{ display: `${title.length >= 26 ? "block" : "none"}` }}
            className="text-[10px] text-red-500 "
          >
            The title cannot be more than 20 characters
          </p>
        </div>
        {/* descritpion */}
        <div>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            placeholder="write here ..."
            name=""
            className="bg-green-100 caret-green1 sm:h-20 dark:text-gray-300  dark:bg-Navyblue2 border-0 focus:outline-none focus:border-white focus:bg-green-100  w-full rounded-md p-2"
            id=""
          ></textarea>
        </div>

        {/* time and importance */}
        <div className="my-4 flex gap-x-1  flex-wrap items-center">
          {/* importance */}
          <div className="flex gap-x-[3px]  text-[11px]  dark:bg-Navyblue2 hover:bg-green-100 duration-500 p-[5px]  items-center  border rounded-[18px] border-green1 w-auto">
            <div className="flex mx-1 dark:text-gray-300  [&>*]:cursor-pointer   items-center gap-x-2 text-[9px]">
              <p
                onClick={() => {
                  setPriority(1);
                }}
                style={{
                  backgroundColor: `${priority === 1 ? "#00dd80" : ""}`,
                  color: `${priority === 1 ? "black" : ""}`,

                }}
                className="hover:bg-green-300 p-[2px] rounded-md"
              >
                Low
              </p>
              <p
                onClick={() => {
                  setPriority(2);
                }}
                style={{
                  backgroundColor: `${priority === 2 ? "#00dd80" : ""}`,
                  color: `${priority === 2 ? "black" : ""}`,

                }}
                className="hover:bg-green-300 p-[2px] rounded-md"
              >
                Medium{" "}
              </p>
              <p
                onClick={() => {
                  setPriority(3);
                }}
                style={{
                  backgroundColor: `${priority === 3 ? "#00dd80" : ""}`,
                  color: `${priority === 3 ? "black" : ""}`,

                }}
                className="hover:bg-green-300 p-[2px] rounded-md"
              >
                High{" "}
              </p>
            </div>
          </div>
          {/* time  */}
          <div className="inline-block relative text-green-700 ">
            <div
              onClick={() => {
                setIsShowTimeModa(true);
              }}
              className="flex gap-x-[5px] justify-between dark:bg-Navyblue2 dark:text-green1  text-[11px] cursor-pointer hover:bg-green-100 duration-500 p-[5px]  items-center my-2 border rounded-[18px] border-green1 w-[6rem]"
            >
              <div className="flex items-center ">
                <div className="flex items-center">
                  <div>{hourStart}</div>
                  <div>:</div>
                  <div>
                    {minuteStart < 10 ? "0" + minuteStart : minuteStart}
                  </div>
                </div>
                <p>-</p>
                <div className="flex items-center">
                  <div>{hourEnd}</div>
                  <div>:</div>
                  <div>{minuteEnd < 10 ? "0" + minuteEnd : minuteEnd}</div>
                </div>
              </div>
              <div>
                <AlarmClock size={18} />
              </div>
            </div>
            {/* clock modal */}
            {isShowTimeModal && (
              <>
                <div
                  className="fixed  inset-0 z-[10] bg-black bg-opacity-5 "
                  onClick={() => setIsShowTimeModa(false)}
                ></div>
                <div className="z-11 dark:bg-Navyblue2 absolute text-[10px] right-[1.7rem] z-[21]  top-[-1rem] bg-white  border-green1 border-[1px] p-1 rounded-md">
                  <div className="flex  justify-between items-center">
                    <p className="mx-2 dark:text-green1 font-vazir">start</p>

                    <input
                      min={0}
                      max={24}
                      type="number"
                      value={hourStart}
                      onChange={(e) => sethourStart(+e.target.value)}
                      placeholder="ساعت"
                      className="mx-1 w-[60px] dark:text-green1 h-[2rem] bg-gray-200 dark:bg-slate-800 p-3 text-lg focus:border-[1px]  rounded-lg focus:outline-none  focus:border-green1  appearance-none"
                    />
                    <p>:</p>
                    <input
                      min={0}
                      max={59}
                      type="number"
                      value={minuteStart}
                      onChange={(e) => {
                        setminuteStart(+e.target.value);
                      }}
                      placeholder="دقیقه "
                      className="mx-1 w-[60px] dark:text-green1 h-[2rem] bg-gray-200 dark:bg-slate-800 p-3 text-lg focus:border-[1px]  rounded-lg focus:outline-none  focus:border-green1  appearance-none"
                    />
                  </div>
                  {/* end  clock*/}
                  <div className="flex justify-between mt-2 items-center">
                    <p className="mx-2 dark:text-green1 font-vazir"> end</p>

                    <div className="flex items-center">
                      <input
                        min={0}
                        max={24}
                        type="number"
                        value={hourEnd}
                        onChange={(e) => sethourEnd(+e.target.value)}
                        placeholder="ساعت"
                        className="mx-1 dark:text-green1 w-[60px] h-[2rem] bg-gray-200 dark:bg-slate-800 p-3 text-lg focus:border-[1px]  rounded-lg focus:outline-none  focus:border-green1  appearance-none"
                      />
                      <p>:</p>
                      <input
                        min={0}
                        max={59}
                        type="number"
                        value={minuteEnd}
                        onChange={(e) => {
                          setminuteEnd(+e.target.value);
                        }}
                        placeholder="دقیقه "
                        className="mx-1 dark:text-green1 w-[60px] h-[2rem] bg-gray-200 dark:bg-slate-800 p-3 text-lg focus:border-[1px]  rounded-lg focus:outline-none  focus:border-green1  appearance-none"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* week */}
          <div className="flex justify-between dark:bg-Navyblue2 rounded-2xl text-green-700 relative w-[6rem] ">
            <div
              onClick={() => {
                setIsShowSelectdayModal(true);
              }}
              className="flex dark:text-green1 gap-x-2 w-[5.9rem] justify-between px-2 text-[11px] cursor-pointer  hover:bg-green-100 duration-500 p-[5px] items-center  border rounded-[18px] border-green1"
            >
              <div>
                {day === 8 ? (
                  <p className="text-gray-500">choose ... </p>
                ) : (
                  convertNumberToDay(day)
                )}
              </div>
              <div>
                <CalendarDays size={18} />
              </div>
            </div>
            {isShowSelectdayModal && (
              <>
                <div
                  className="fixed  inset-0 z-[10] bg-black bg-opacity-70 "
                  onClick={() => setIsShowSelectdayModal(false)}
                ></div>
                <div className="z-[11] dark:bg-Navyblue2 flex sm:text-[15px] sm:gap-x-4 sm:items-center sm:p-2 sm:[&>*]:p-2 absolute sm:w-full w-[151px] rounded-md shadow-xl bg-white sm:top-0 sm:bottom-0  left-0 right-0  justify-center  sm:fixed  gap-y-1 items-start gap-x-1 flex-wrap text-[9px] ">
                  <div className="flex flex-wrap p-1 gap-x-1 gap-y-1  sm:gap-x-3 sm:gap-y-6 sm:[&>*]:p-2 justify-center">
                    {days.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            setIsShowSelectdayModal(false);
                            setDay(days.indexOf(item));
                          }}
                          className="border-[1px] dark:text-green1 dark:border-slate-600 dark:hover:text-white  p-[2px]   text-center  border-green-200 cursor-pointer hover:bg-green-500 hover:text-white duration-300  rounded-md "
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className=" mt-5 text-right flex justify-between items-center ">
          <div className="text-sm order-1 gap-x-2 flex justify-end">
            <button
              onClick={() => {
                props.func(false);
              }}
              className="text-gray-300 sm:text-[18px] dark:hover:bg-Navyblue2 duration-300 hover:bg-gray-100  p-[4px] rounded-md"
            >
              cancel
            </button>
            <button
              onClick={() => {
                formValidation();
              }}
              className="bg-[#2196f3] sm:text-[18px] duration-[400ms] dark:bg-Navyblue2 border-Navyblue hover:border-slate-600 dark:border text-white p-[4px] rounded-md"
            >
              update
            </button>
          </div>
          <div
            onClick={() => {
              deleteTodo(props.id);
              props.func(false);
            }}
            className="bg-red-600  cursor-pointer rounded-md p-1 hover:bg-red-500 duration-200 text-white"
          >
            DELETE
          </div>
          {validationMessage.length > 0 ? (
            <div className="bg-red-200 dark:bg-Navyblue2 text-center text-[11px]  text-red-600 p-[3px] rounded-md">
              {validationMessage}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default EditTask;
