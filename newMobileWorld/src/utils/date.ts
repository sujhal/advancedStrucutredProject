export const formatIsoDate = (isoString: string): string => {
  const d = new Date(isoString);
  return Number.isNaN(d.getTime()) ? isoString : d.toDateString();
};
