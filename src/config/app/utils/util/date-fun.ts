import { MonthNameArray } from "../../enums/month-name.array";
import { WeekNameArray } from "../../enums/week-name.array";
import StringUtils from "./string-fun";

export default class DateUtils {
  private stringUtils = new StringUtils();
  // ---------------- functions to get names ---------------------------------------------------------------
  getDayName(date: Date = new Date()): string {
    let dayIndex = date.getDay();
    return WeekNameArray[dayIndex];
  }

  getMonthName(date: Date = new Date()): string {
    let monthIndex = date.getMonth();
    return MonthNameArray[monthIndex];
  }
  // ---------------- functions to get names ----------------------------------------------------------------

  //   ------------------ functions to get counts ---------------------------------------------------------------
  getDayCountInMonth(date: Date = new Date(), weekDay: string): number {
    let count = 0;
    let dayIndex = WeekNameArray.findIndex(
      (day) => day === this.stringUtils.toCapitalize(weekDay)
    );
    let firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    do {
      if (firstDateOfMonth.getDay() === dayIndex) {
        count++;
      }
      firstDateOfMonth.setDate(firstDateOfMonth.getDate() + 1);
    } while (lastDateOfMonth.getDate() !== firstDateOfMonth.getDate());
    return count;
  }

  getDayCountInYear(
    year: number = new Date().getFullYear(),
    weekDay: string
  ): number {
    let count = 0;
    let dayIndex = WeekNameArray.findIndex(
      (day) => day === this.stringUtils.toCapitalize(weekDay)
    );
    let firstDateOfYear = new Date(year, 0, 1);
    let lastDateOfYear = new Date(year + 1, 0, 1);
    do {
      if (firstDateOfYear.getDay() === dayIndex) {
        count++;
      }
      firstDateOfYear.setDate(firstDateOfYear.getDate() + 1);
    } while (firstDateOfYear.getFullYear() !== lastDateOfYear.getFullYear());
    return count;
  }

  getDaysCountBetweenTwoDate(
    firstDate: Date = new Date(),
    secondDate: Date = new Date()
  ): number {
    const timeDifference = secondDate.getTime() - firstDate.getTime();
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return daysDifference;
  }
  //   ------------------ functions to get counts ---------------------------------------------------------------
}
