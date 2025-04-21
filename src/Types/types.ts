export type TaskType = {
  hourEnd: number;
  hourStart: number;
  id?: number;
  priority: number;
  isComplete: number;
  minuteEnd: number;
  minuteStart: number;
  timeDifference: number;
  title: string;
  tomorrowDelayCount: number;
  userID?: number;
  whatsDay: number;
  description:string;
};


export type Text = {
  description: string;
  whatsDay: number;
};

export type TodoState = {
  todos: TaskType[]; // مشخص کردن نوع TodoType
  texts: Text[];
  
};

export type colorType = { id: number; name: string; code: string };



export type editInfo = {
  title :string ;
  description : string ; 
  priority : number ; 
  whatsDay : number ;
  hourStart : number ;
  minuteStart : number ; 
  hourEnd : number ;
  minuteEnd : number ;
}


export type WeekDayStatus = {
  score: number ;
  day: string;
  workingHour: number;
  totalTask: number;
  remainingTask: number;
  completedTask: number;
  id?:number ;

};
