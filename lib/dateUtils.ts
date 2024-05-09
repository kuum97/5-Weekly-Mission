const MINUTE: number = 60 * 1000;
const HOUR: number = 60 * MINUTE;
const DAY: number = 24 * HOUR;
const MONTH: number = 30 * DAY;
const YEAR: number = 12 * MONTH;

interface TimeFormat {
  unit: number;
  text: string;
}

export function displayCreatedTime(date: string) {
  const nowDate = new Date();
  const createdDate = new Date(date);
  const diff: number = nowDate.getTime() - createdDate.getTime();

  const times: TimeFormat[] = [
    { unit: YEAR, text: "년 전" },
    { unit: MONTH, text: "개월 전" },
    { unit: DAY, text: "일 전" },
    { unit: HOUR, text: "시간 전" },
    { unit: MINUTE, text: "분 전" },
  ];

  for (const { unit, text } of times) {
    const diffTime = Math.floor(diff / unit);
    if (diffTime !== 0) {
      return `${diffTime}${text}`;
    }
  }

  return "방금 전";
}

export function formatDateString(date: string) {
  const createdDate = new Date(date);

  const year = createdDate.getFullYear();
  const month = String(createdDate.getMonth() + 1).padStart(2, "0");
  const day = String(createdDate.getDate()).padStart(2, "0");

  return `${year}. ${month}. ${day}`;
}
