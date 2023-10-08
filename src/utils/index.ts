import dayjs from "dayjs";

export * from "./lib/build-tree.util";
export * from "./lib/connect.util";
export * from "./lib/download.util";
export * from "./lib/to-map.util";
export * from "./lib/star.util";
export * from "./lib/dialog.util";

/**
 * @description 格式化日期
 * @param date 日期
 */
export function getDate(date: string): string {
  const [hour, am_pm] = dayjs(date).format("h,A").split(",");
  let dateOut;
  if (am_pm === "AM") {
    dateOut = `早上`;
  } else {
    if (hour === "12") {
      dateOut = "中午";
    } else {
      dateOut = "下午";
    }
  }
  return dateOut + " " + dayjs(date).format("h:mm:ss");
}
