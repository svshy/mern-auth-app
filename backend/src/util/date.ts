export const fifteenMinutesBeforeNow = () =>
  new Date(Date.now() - 15 * 60 * 1000);

export const thirtyMinutesFromNow = () => new Date(Date.now() + 30 * 60 * 1000);

export const thirtyDaysFromNow = () =>
  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
