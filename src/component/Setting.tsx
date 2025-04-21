import React from "react";

const Setting: React.FC = () => {
  return (
    <div className="bg-gray-200 hidden dark:bg-Navyblue2 dark:text-gray-300 fixed  p-2 right-0 z-20 ">
      <div className=" border-b border-white pb-3">
        <p className="mb-1">The approximate time for having </p>
        <div>
          {/* braekgfast */}
          <div className=" mb-2 justify-between items-center">
            <p className="text-[11px] text-gray-500 ">breakfast</p>
            <div className="flex  [&>*]:bg-white  [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>30</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>45</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>60</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>75</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>90</p>
                <p className="text-[9px]">min</p>
              </button>
            </div>
          </div>
          {/* lunch */}
          <div className=" mb-2  justify-between items-center">
            <p className="text-[11px] text-gray-500">lunch</p>
            <div className="flex  [&>*]:bg-white  [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>30</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>45</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>60</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>75</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>90</p>
                <p className="text-[9px]">min</p>
              </button>
            </div>
          </div>
          <div className="  items-center">
            <p className="text-[11px] text-gray-500">dinner</p>
            <div className="flex  [&>*]:bg-white  [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>30</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>45</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>60</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>75</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>90</p>
                <p className="text-[9px]">min</p>
              </button>
            </div>
          </div>
        </div>
        {/* rest time  */}

        <div></div>
      </div>


      <div className="pb-3 border-b border-white">
        <p className="text-left">The what hour for having </p>
        <div>
          {/* breakfast */}
          <div className=" mb-2 justify-between items-center">
            <p className="text-[11px] text-gray-500">breakfast</p>
            <div className="flex  [&>*]:bg-white   [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>6</p>
                <p className="text-[9px]">am</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>7</p>
                <p className="text-[9px]">am</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>8</p>
                <p className="text-[9px]">am</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>9</p>
                <p className="text-[9px]">am</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>10</p>
                <p className="text-[9px]">am</p>
              </button>
            </div>
          </div>
          {/* lunch */}
          <div className=" mb-2  justify-between items-center">
            <p className="text-gray-500 text-[11px]">lunch</p>
            <div className="flex  [&>*]:bg-white   [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>12</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>1</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>3</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>3</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>4</p>
                <p className="text-[9px]">pm</p>
              </button>
            </div>
          </div>
          <div className=" justify-between items-center">
            <p className="text-[11px] text-gray-500">dinner</p>
            <div className="flex  [&>*]:bg-white   [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>6</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>7</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>8</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>9</p>
                <p className="text-[9px]">pm</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>10</p>
                <p className="text-[9px]">pm</p>
              </button>
            </div>
          </div>
        </div>
        {/* rest time  */}
        <div></div>
      </div>

      {/* break */}
      <div>
        <div>
          {/* braekgfast */}
          <div className=" mb-2 justify-between items-center">
            <p className="text-[14px] mb-[2px]">Break for every hour of work</p>
            <div className="flex  [&>*]:bg-white   [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>5</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>10</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>15</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>30</p>
                <p className="text-[9px]">min</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>45</p>
                <p className="text-[9px]">min</p>
              </button>
            </div>
          </div>
          <div className=" mb-2 justify-between items-center">
            <p className="text-[14px] mb-[2px]">Daily amount of sleep :</p>
            <div className="flex  [&>*]:bg-white   [&>*]:px-1 [&>*]:rounded-md items-center justify-between gap-x-2">
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>5</p>
                <p className="text-[9px]">h</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>6</p>
                <p className="text-[9px]">h</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>7</p>
                <p className="text-[9px]">h</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>8</p>
                <p className="text-[9px]">h</p>
              </button>
              <button className="flex w-[40px] justify-between dark:hover:bg-green1 dark:hover:text-black duration-300 hover:bg-green1 dark:text-gray-300 dark:bg-Navyblue2 dark:border dark:border-gray-500 hover:text-white">
                <p>9</p>
                <p className="text-[9px]">h</p>
              </button>
            </div>
          </div>
          {/* lunch */}
        </div>
        {/* rest time  */}
        <div></div>
      </div>
    </div>
  );
};

export default Setting;
