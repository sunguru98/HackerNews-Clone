import moment from "moment";

export const computeDomainName = (url: string) =>
  new URL(url).hostname.replace("www.", "");

export const timeDiffInHours = (time: number) =>
  moment(new Date().getTime()).diff(moment(time * 1000), "hours");
