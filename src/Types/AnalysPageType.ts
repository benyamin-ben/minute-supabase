export type  BarChartDataType = {
    name : string , last_week : number , this_week : number
}

export type  PieChartData = { 
    name : string , value : number , color : string
}

export  type AnalysBoxData = { 
   title : string , svg : string , count :number 
}

export type DaysData = {
    day: string;
    workingHour: number;
    totalTask: number;
    completedTask: number;
    remainingTask: number;
    score: number;
  };