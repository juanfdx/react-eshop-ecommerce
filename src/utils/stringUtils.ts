
/*========================================================
  CAPITALIZE FIRST LETTER OF PARAGRAPH
========================================================*/
export const capitalizeFirstLetter = (paragraph: string): string => {
  if (!paragraph) return paragraph; // handle empty string
  return paragraph.charAt(0).toUpperCase() + paragraph.slice(1);
}