import { YEAR, MONTH, DAY, HOUR, MINUTE } from "@/constants";
import { TimeFormat } from "@/types/date";

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
