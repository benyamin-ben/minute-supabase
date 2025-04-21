import  { useEffect, useState } from "react";
import { colors } from "../constants/constant.js";
import ColorPalette from "../component/ColorPalette.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewNoteThunk,
  getNoteThunk,
  deleteNoteThunk,
} from "../Redux/middleware/asyncActions.js";
import EditNote from "../component/EditNote.js";
import { AppDispatch } from "../Redux/store.js";
import { RootState } from "../Redux/store.js";
import { SquareX } from "lucide-react";
function Notes() {
  const [show, setShow] = useState("none");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState<string>("");
  const [allText, setAllText] = useState<string>("");
  const [isShowEditNote, setIsShowEditNote] = useState<boolean>(false);
  const [mainId, setMainId] = useState<number>(1);

  const allNote = useSelector((state:RootState) => state.notes);
  const dispatch = useDispatch<AppDispatch>();

  

  useEffect(() => {
    dispatch(getNoteThunk());
  }, []);

  ///////// func
  const change = () => {
    setShow("flex");
    if (color === "") {
      setColor("rgb(178,242,216)");
    }
  };

  const addNoteFunc = () => {
    const note = {
      color,
      description,
    };

    dispatch(addNewNoteThunk(note));
  };

  const resetValue = () => {
    setShow("none");
    setColor("");
    setDescription("");
    setIsShowEditNote(false);
  };

  const deleteNote = (id:number) => {
    dispatch(deleteNoteThunk(id));
  };

  console.log('allstate note', allNote)

  return (
    <div className=" pt-[75px] w-[100%] md:h-[100vh] dark:bg-Navyblue grow dark:text-gray-300  md:pl-0  pb-8  text-center">
      <div
        style={{ display: `${show}` }}
        className="fixed  inset-0 z-[39] bg-opacity-30 "
        onClick={() => {
          resetValue();
        }}
      ></div>
      {/* big */}
      <div
        style={{ backgroundColor: `${color}` }}
        className="mt-2   dark:bg-Navyblue dark:border-slate-700 dark:border rounded-md sm:w-[95%] w-[85%] bg-white relative p-2 shadow-md inline-block z-[40]"
      >
        <p
          style={{ display: `${show}` }}
          className="text-[12px] pl-2 text-gray-600  text-left "
        >
          concept of text
        </p>
        <textarea
          onClick={change}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="text-sm duration-300 text-black dark:border-[0px] pl-1 flex justify-start items-start dark:bg-Navyblue2 my-6 text-left border-b-[1px] border-gray-100 outline-none  rounded-md p-[8px]  w-[100%]"
          placeholder="Put down your notes ..."
          value={description}
          style={{
            height: `${show === "none" ? "auto" : "6rem"}`,
            backgroundColor: `${color}`,
          }}
        />
        <div
          style={{ display: `${show}` }}
          className=" justify-between xs:gap-y-3 flex-wrap"
        >
          <div className="flex ">
            {colors.map((item) => (
              <ColorPalette {...item} onSubmit={setColor} key={item.id} />
            ))}
          </div>
          <div className="text-sm gap-x-2 flex">
            <button
              onClick={() => {
                resetValue();
              }}
              className="text-gray-500 duration-300 hover:bg-gray-100  p-[4px] rounded-md"
            >
              cancel
            </button>
            <button
              onClick={() => {
                resetValue();
                addNoteFunc();
              }}
              className="bg-[#2196f3] dark:bg-green1 dark:text-black  duration-[400ms] text-white p-[4px] rounded-md"
            >
              create
            </button>
          </div>
        </div>
        {isShowEditNote && (
          <EditNote
            id={mainId}
            color={color}
            description={description}
            func={setIsShowEditNote}
            func2={resetValue}
          />
        )}
      </div>
      {/* boxes */}

      <div className="text-[12px] w-[100%] gap-y-8  flex items-center justify-center flex-wrap  mt-5 gap-x-4">
        <div
          id="note_card"
          className="w-[85%]  flex  sm:w-[95%]  justify-center   items-start flex-wrap gap-3"
        >
          {allNote.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: `${item.color}`,
                  fontSize: `${item.description.length < 30 ? "20px" : "12px"}`,
                }}
                className={`p-2 sm:grow flex flex-col  justify-between text-black h-[134px]   w-[200px]  group dark:border-slate-600 dark:border overflow-hidden    dark:hover:text-black hover:shadow-3xl xs:grow duration-300  shadow-xl text-left `}
              >
                <p className="">
                  
                  {item.description.length > 100 ? (
                    <div >
                      <p className="h-[58px] overflow-hidden">{item.description.slice(0, 100)} </p>
                      <p className="text-gray-400  inline">
                        To be continued...
                      </p>
                    </div>
                  ) : (
                    item.description
                  )}
                </p>
                {/* icons */}
                <div className="mt-2 flex opacity-0 group-hover:opacity-100 items-center ">
                  <div className="flex gap-x-3 items-center">
                    <div
                      onClick={() => {
                        deleteNote(item.id);
                      }}
                      className="dark:hover:text-red-300 cursor-pointer group relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="gray"
                        className="size-6 stroke-gray-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      <div className="text-[11px] w-[50px] text-center hidden right-[-12px] group-hover:block absolute z-50 top-10 bg-gray-500 text-white p-1 rounded-md">
                        delete
                      </div>
                    </div>
                    <div
                      style={{
                        display: `${
                          item.description.length < 100 ? "none" : ""
                        }`,
                      }}
                      onClick={() => {
                        setAllText(item.description);
                        setColor(item.color);
                      }}
                      className="cursor-pointer  group relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="gray"
                        className="size-6 stroke-gray-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      <div className="text-[11px] w-[50px] text-center hidden right-[-11px] group-hover:block absolute z-50 top-10 bg-gray-500 text-white p-1 rounded-md">
                        all text
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        {
                          setMainId(item.id);
                          setShow("flex");
                          setColor(item.color);
                          setIsShowEditNote(true);
                          setDescription(item.description);
                          setColor(item.color);
                        }
                      }}
                      className="cursor-pointer  group relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="gray"
                        className="size-5 stroke-gray-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                      <div className="text-[11px] w-[50px] text-center hidden right-[-11px] group-hover:block absolute z-50 top-10 bg-gray-500 text-white p-1 rounded-md">
                        edit
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>

        {allText.length > 0 && (
          <>
            <div
              style={{ backgroundColor: `${color}` }}
              className={`fixed  dark:text-black left-0 flex items-center justify-center p-1 bottom-0 top-0 text-[18px] right-0 z-[400]`}
            >
              <p>{allText}</p>
              <button
                onClick={() => {
                  setAllText("");
                  setColor("");
                }}
                className="bg-white absolute  left-0 top-0 p-1 "
              >
                <SquareX color="red" size={50} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Notes;
