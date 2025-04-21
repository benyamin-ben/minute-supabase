import { useEffect, useState } from "react";

type CustomTimerType = {
  hour : number , 
  minute : number , 
  second : number 
}

const CustomTimer:React.FC<CustomTimerType> = (props):JSX.Element => {


  const [hour, setHour] = useState(props.hour);
  const [minute, setMinute] = useState(props.minute);
  const [second, setSecond] = useState(props.second);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (hour === 0 && minute === 0 && second === 0) {
        return;
      }
      if (second === 0) {
        setSecond(59);

        if (minute === 0) {
          setMinute(59);
          setHour((prev) => prev - 1);
        } else {
          setMinute((prev) => prev - 1);
        }
      } else {
        setSecond((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timeoutId);
    };
  });

  useEffect(() => {
    setHour(props.hour);
    setMinute(props.minute);
    setSecond(props.second);
  }, [props.hour, props.minute, props.second]);
  

  return (
    <div className="flex text-green text-[14px] justify-center">
      <p>
        {hour < 10 ? 0 : ""}
        {hour}
      </p>{" "}
      :
      <p>
        {minute < 10 ? 0 : ""}
        {minute}
      </p>{" "}
      :<p>{second<10 ? 0 : ''}{second}</p>
    </div>
  );
}

export default CustomTimer;
