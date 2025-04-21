import  { useState } from "react";
import { Pencil } from "lucide-react";
import { colors } from "../constants/constant";
import ColorPalette from "./ColorPalette";
import { useDispatch } from "react-redux";
import { editNoteThunk } from "../Redux/middleware/asyncActions";
import { AppDispatch } from "../Redux/store";
type EditNoteType = { 
  id : number , 
  color : string , 
  description : string , 
  func: React.Dispatch<React.SetStateAction<boolean>>;
  func2: () => void;
}




const EditNote: React.FC<EditNoteType> = (props): JSX.Element => {



  const dispatch = useDispatch<AppDispatch>();

  const [color, setColor] = useState<string>(props.color);
  const [description, setDescription] = useState<string>(props.description);

  const editNote = () => {
    const note = {
      id: props.id,
      color,
      description,
    };

    dispatch(editNoteThunk(note));
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=" absolute right-0 top-0 rounded-md left-0 bottom-0  md:w-[100%] dark:border-slate-700 dark:border text-[13px]   z-[114] shadow-xl   dark:bg-Navyblue  bg-white  "
    >
      <div className="flex gap-x-1 pl-2 py-[2px]  text-gray-500 items-center justify-start">
        <p>edit</p>
        <Pencil size={14} />
      </div>
      <div className="p-2">
        <div className="">
          <textarea
            style={{ backgroundColor: `${color}` }}
            className="text-sm h-24 mb-4 bg-slate-700 dark:border-b-white dark:border-b-[1px] duration-300 text-black dark:border-[0px] pl-1 flex justify-start items-start dark:bg-Navyblue2 my-3 text-left border-b-[1px] border-gray-100 outline-none  rounded-md p-[8px]  w-[100%]"
            name=""
            id=""
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="flex flex-wrap  pt-2 items-center justify-between">
          <div className="flex mt-2">
            {colors.map((item) => (
              <ColorPalette {...item} onSubmit={setColor} key={item.id} />
            ))}
          </div>
          <div className="text-sm xs:mt-2 order-1 gap-x-2 flex justify-end">
            <button
              onClick={() => {
                props.func2();
              }}
              className="text-gray-500  duration-300 hover:bg-gray-100 xs:p-[2px] p-[4px] rounded-md"
            >
              cancel
            </button>
            <button
              onClick={() => {
                props.func2();
                editNote();
              }}
              className="bg-[#2196f3]  duration-[400ms] xs:p-[2px] dark:bg-Navyblue2 border-Navyblue hover:border-slate-600 dark:border text-white p-[4px] rounded-md"
            >
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
