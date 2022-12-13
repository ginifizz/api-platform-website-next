import dayjs from "dayjs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import glob from "tiny-glob";
import { Conference } from "./types";

export const sortByStartDate: (
  conference1: Conference,
  conference2: Conference
) => 1 | -1 | 0 = (conference1, conference2) => {
  const date1 = conference1.start
    ? dayjs(`${conference1.date}T${conference1.start}`)
    : dayjs();
  const date2 = conference2.start
    ? dayjs(`${conference2.date}T${conference2.start}`)
    : dayjs();
  if (date1.isBefore(date2)) return -1;
  if (date1.isAfter(date2)) return 1;
  return 0;
};
export const toLocaleDate: (date: string) => string = (date) =>
  dayjs(date).format("ll");

export const convertTime: (date: string, time: string) => string = (
  date,
  time
) => dayjs(`${date}T${time}`).format("HH:mm A");

export const isMorningTime: (time?: string) => boolean = (time) =>
  time && 12 >= parseInt(time.split(":")[0], 10);

export const getConferenceTimes: (
  date: string,
  start?: string,
  end?: string
) => string = (date, start, end) =>
  start && end
    ? `${convertTime(date, start)} - ${convertTime(date, end)}`
    : toLocaleDate(date);

export const getConferenceDate: (
  date: string,
  start?: string,
  end?: string
) => string = (date, start, end) =>
  start && end
    ? `${toLocaleDate(date)} · ${getConferenceTimes(date, start, end)}`
    : toLocaleDate(date);

const fs = require("fs");

export const getAllSpeakers = async (edition: string) => {
  const paths = await glob(path.join(`./con/data/${edition}/speakers`, "*.md"));
  return Promise.all(
    paths.map(async (path) => {
      const fileContents = await fs.readFileSync(path, "utf8");
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      /*const processedContent = await remark()
        .use(remarkHtml)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();*/

      // Combine the data with the id and contentHtml
      return {
        // contentHtml,
        ...matterResult.data,
      };
    })
  );
};
