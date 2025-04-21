import { ClipboardList, CheckCheck ,ListTodo } from "lucide-react";

type AnalysBoxType = {
  title : string ,
  svgName :  string , 
  count : number
}

const AnalysBox:React.FC<AnalysBoxType> = (props):JSX.Element => {

console.log('analys props' , props)



  const iconProduction = () => {
    if (props.svgName === "ClipboardList") {
      return <ClipboardList size="50" color="#00dc82" />;
    } else if (props.svgName === "CheckCheck") {
      return <CheckCheck   size="50" className="" color="#00dc82"/>;
    } else if (props.svgName === "ListTodo") {
        return <ListTodo  size="50" color="#00dc82" />
    } else {
    }
  };

  return (
    <div className="text-center  flex flex-col items-center sm:grow justify-center sm:w-au mb-1 dark:bg-Navyblue2 grow dark:hover:text-black dark:hover:bg-green1 dark:text-gray-300 lg:w-[150px] w-[170px] duration-300 xs:w-[130px]  gap-x-1 bg-gray-200 p-2 ">
      <div className="flex items-center justify-center h-17 w-17 rounded-full dark:bg-Navyblue bg-gray-300 p-2">{iconProduction()}</div>
      <div className="mt-3">
        <p className="text-[13px]">{props.title}</p>
        <p className="text-[20px]">{props.count}</p>
      </div>
    </div>
  );
}

export default AnalysBox;
