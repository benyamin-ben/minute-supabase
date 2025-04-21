/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class' ,
  content: ["./src/**/*.{tsx,jsx,js}"],
  theme: {
    screens: {
      xxl: { max: "1400px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "992px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "576px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "450px" },
    },
    extend: {
      boxShadow: {
        "3xl": " 0px 0px 7px black",
        "3xlw": " 3px 3px 6px #000000, -3px -3px 6px  #b8b9be",
        "3xlhover": "inset 4px 5px 4px #b8b9be , inset -3px -3px 4px #fff",
        bevel:
          "inset 0.2em 0.2em 0.2em 0 rgba(255,255,255,0.5), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5)",
        gold: "1px 2px 3px #d4af37",
        "3xldigi": "0px 0px 10px #b8b5b5",
        advanatge: "2px -5px 1px #d4af37",
      },
      colors: {
        gold1: "#f2c649",
        gold2: "#d4af37",
        gold3: "#",
        gold4: "#b38728",
        gold5: "#a57938",
        orange1: "#f96a01",
        blue1 : '#50cbda' , 
        green1: "#00dc82",
        Navyblue: "#030619",
        Navyblue2: "#0f172a",
        tosi1: "#e8e8e8",
        tosi2: "#eaeaea",
        maindark: "#111827",
        // 'tosi3' : 'bg-slate-600',
        // 'tosi4' : 'bg-slate-900'
      },
      fontFamily: {
        Dana: "Dana",
        MorabbaMedium: "Morabba Medium",
        vazir: "vazir",
        nast: "nast",
        nast2: "nast2",
        yekan: "yekan",
      },
    },
  },
  plugins: [],
};
