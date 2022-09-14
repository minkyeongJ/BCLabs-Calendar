let date = new Date();

// 달력 현재 연도
let calendarYear = date.getFullYear();

// 달력 현재 월
let calendarMonth = date.getMonth() + 1;

// 달력 현재 일
let calendarToday = date.getDate();

// 달력 현재 요일, 일요일 == 0
let calendarMonthTodayDay = date.getDay();

// 달력 월의 마지막 일
let monthLastDate = new Date(calendarYear, calendarMonth, 0);
let calendarMonthLastDate = monthLastDate.getDate();

// 달력 이전 월의 마지막 일
let prevMonthLastDate = new Date(calendarYear, calendarMonth - 1, 0);

// 달력 월의 시작 요일, 달력을 만들 때 1이 출력되는 위치
let monthStartDay = new Date(calendarYear, date.getMonth(), 1);
let calendarMonthStartDay = monthStartDay.getDay();

// 달력 다음 월의 시작 일
let nextMonthStartDate = new Date(calendarYear, calendarMonth, 1);

// 주 카운트
let calendarWeekCount = Math.ceil(
  (calendarMonthStartDay + calendarMonthLastDate) / 7
);

// 주간 날짜 계산
let arrWeek = [0, 0, 0, 0, 0, 0, 0];
let weekYear = calendarYear;
let weekMonth = calendarMonth;
let weekDay = calendarToday;

// 현재 요일부터 차례로 주간 배열에 날짜를 추가
for (let i = calendarMonthTodayDay; i < 7; i++) {
  // 날짜가 배열에 추가된 후 날짜가 증가
  arrWeek[i] = weekYear + "-" + weekMonth + "-" + weekDay;
  weekDay++;
  // 날짜가 현재 월의 마지막 일보다 크면 다음 월의 1일로 변경
  if (weekDay > calendarMonthLastDate) {
    weekYear = nextMonthStartDate.getFullYear();
    weekMonth = nextMonthStartDate.getMonth() + 1;
    weekDay = 1;
  }
}

weekYear = calendarYear;
weekMonth = calendarMonth;
weekDay = calendarToday;
// 현재 요일부터 꺼꾸로 주간 배열에 날짜를 추가
for (let i = calendarMonthTodayDay - 1; i >= 0; i--) {
  weekDay--;
  // 날짜가 현재 월의 1일이면 작으면 이전 월의 마지막 일로 변경
  if (weekDay === 0) {
    weekYear = prevMonthLastDate.getFullYear();
    weekMonth = prevMonthLastDate.getMonth() + 1;
    weekDay = prevMonthLastDate;
  }
  arrWeek[i] = weekYear + "-" + weekMonth + "-" + weekDay;
}

export function Year() {
  return calendarYear;
}

export function Month() {
  return calendarMonth;
}

export function WeekArr() {
  return arrWeek;
}

export function PrevWeekArr(presentWeek) {
  let presentWeekSunday = presentWeek[0].split("-")[2];
  let presentWeekYear = presentWeek[0].split("-")[0];
  let presentWeekMonth = presentWeek[0].split("-")[1];

  let prevWeekMonthLastDate = new Date(
    presentWeekYear,
    presentWeekMonth - 1,
    0
  );
  let calendarPrevWeekMonthLastDate = prevWeekMonthLastDate.getDate();

  let prevWeekArr = [0, 0, 0, 0, 0, 0, 0];
  let prevWeekYear = presentWeek[0].split("-")[0];
  let prevWeekMonth = presentWeek[0].split("-")[1];
  let prevWeekDay = presentWeekSunday;
  // 현재 요일이 해당하는 주 일요일부터 꺼꾸로 주간 배열에 날짜를 추가
  for (let i = 6; i >= 0; i--) {
    prevWeekDay--;
    // 날짜가 현재 월의 1일 보다 작으면 이전 월의 마지막 일로 변경
    if (prevWeekDay <= 0) {
      prevWeekYear = prevWeekMonthLastDate.getFullYear();
      prevWeekMonth = prevWeekMonthLastDate.getMonth() + 1;
      prevWeekDay = calendarPrevWeekMonthLastDate;
    }
    prevWeekArr[i] = prevWeekYear + "-" + prevWeekMonth + "-" + prevWeekDay;
  }
  return prevWeekArr;
}

export function NextWeekArr(presentWeek) {
  let presentWeekSaturday = presentWeek[6].split("-")[2];
  let presentWeekYear = presentWeek[0].split("-")[0];
  let presentWeekMonth = presentWeek[0].split("-")[1];

  let presentWeekMonthLastDate = new Date(presentWeekYear, presentWeekMonth, 0);

  let nextMonthDate = new Date(presentWeekYear, presentWeekMonth, 1);

  let nextWeekArr = [0, 0, 0, 0, 0, 0, 0];
  let nextWeekYear = presentWeek[6].split("-")[0];
  let nextWeekMonth = presentWeek[6].split("-")[1];
  let nextWeekDay = presentWeekSaturday;
  // 다음 주 일요일부터 차례로 주간 배열에 날짜를 추가
  for (let i = 0; i < 7; i++) {
    nextWeekDay++;
    // 날짜가 현재 월의 마지막일 보다 크면 다음 월의 1일로 변경
    if (nextWeekDay > presentWeekMonthLastDate.getDate()) {
      nextWeekYear = nextMonthDate.getFullYear();
      nextWeekMonth = nextMonthDate.getMonth() + 1;
      nextWeekDay = 1;
    }
    nextWeekArr[i] = nextWeekYear + "-" + nextWeekMonth + "-" + nextWeekDay;
  }
  return nextWeekArr;
}

export function TodayDate() {
  return `${calendarYear}-${calendarMonth}-${calendarToday}`;
}
