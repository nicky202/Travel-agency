import moment from "moment";

interface getAllDateBetweenProps {
  start: string;
  end: string;
}

export const getAllDateBetween = (start: any, end: any) => {
  const dateArray = [];
  let currentDate = moment(start);
  let endDate = moment(end);

  while (currentDate.isSameOrBefore(endDate)) {
    dateArray.push(currentDate.format("DD MM YYYY"));
    currentDate.add(1, "days");
  }
  return dateArray;
};
