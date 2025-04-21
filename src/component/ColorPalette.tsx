import React from "react";

type ColorPaletteType = {
  id: number;
  name: string;
  code: string;
  onSubmit: (value: string) => void;
};

const ColorPalette: React.FC<ColorPaletteType> = (props):JSX.Element => {


  return (
    <div
      onClick={() => {
        props.onSubmit(props.code);
      }}
      style={{ backgroundColor: props.code }}
      className={`mx-[2px] cursor-pointer hover:border-2  border-green-500 border hover:border-green1 rounded-full  h-6 w-6 `}
    ></div>
  );
};

export default ColorPalette;
