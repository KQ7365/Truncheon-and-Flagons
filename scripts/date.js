export const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = String(date.getYear()).slice(-2);
  const currentDate = `${month}/${day}/${year}`;

  return currentDate;
};
