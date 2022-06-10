export default (input: string | Date, type: "date" | "iso" | "fancy") => {
  const date = new Date(input);
  switch (type) {
    case "date":
      return date;
    case "iso":
      return date.toISOString(); // date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    case "fancy":
      return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        weekday: "long",
        year: "numeric",
      }).format(date);
  }
};

export { isBefore, isAfter } from "date-fns";
