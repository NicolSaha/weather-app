// GET DAYS OF THE WEEK
export default function getNameOfDayByNumber(day) {
  switch (day) {
    case 1:
    case 8:
      return "Monday";
    case 2:
    case 9:
      return "Tuesday";
    case 3:
    case 10:
      return "Wednesday";
    case 4:
    case 11:
      return "Thursday";
    case 5:
    case 12:
      return "Friday";
    case 6:
    case 13:
      return "Saturday";
    case 7:
    case 14:
      return "Sunday";
    default:
      console.log("Day is invalid");
      break;
  }
}
