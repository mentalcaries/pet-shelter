const ONE_MONTH_IN_MILLISECONDS = 2629746000;
const ONE_WEEK_IN_MILLISECONDS = 604800000;
const MONTHS_IN_ONE_YEAR = 12;

export const calculateCurrentAge = (dateString: string) => {
  const dateStringWithDay = `01, ${dateString}`
  const dateOfBirth = Date.parse(dateString) || Date.parse(dateStringWithDay);
  const today = new Date().getTime();

  const ageInMilliseconds = today - dateOfBirth;
  const ageInWeeks = Math.round(ageInMilliseconds / ONE_WEEK_IN_MILLISECONDS);
  const ageInMonths = Math.floor(ageInMilliseconds / ONE_MONTH_IN_MILLISECONDS);
  const ageInYears = Math.floor(ageInMonths / MONTHS_IN_ONE_YEAR);
  const remainderMonths = ageInMonths % MONTHS_IN_ONE_YEAR;
  if (ageInMilliseconds < 0) return;
  if (ageInWeeks < 9) return `${ageInWeeks} wks`;
  if (ageInMonths < 12) return `${ageInMonths} mo`;
  if (remainderMonths === 0) return `${ageInYears} y`;
  else return `${ageInYears} y, ${remainderMonths} mo`;
};
