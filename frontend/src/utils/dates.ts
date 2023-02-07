const ONE_MONTH_IN_MILLISECONDS = 2629746000;
const ONE_DAY_IN_MILLISECONDS = 86400000
const MONTHS_IN_ONE_YEAR = 12;

export const calculateCurrentAge = (dateString: string) => {
  const dateOfBirth = Date.parse(dateString);
  const today = new Date().getTime();
  const ageInMonths = Math.round(
    (today - dateOfBirth) / ONE_MONTH_IN_MILLISECONDS
  );
  const ageInYears = Math.floor(ageInMonths / MONTHS_IN_ONE_YEAR);
  const remainderMonths = ageInMonths % MONTHS_IN_ONE_YEAR;

  if (ageInMonths < 12) return `${ageInMonths} mo`;

  if (remainderMonths === 0) return `${ageInYears} years`;
  else return `${ageInYears} y, ${remainderMonths} mo`;
};


