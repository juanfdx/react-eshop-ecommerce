
/*========================================================
  CAPITALIZE FIRST LETTER OF PARAGRAPH
========================================================*/
export const capitalizeFirstLetter = (paragraph: string): string => {
  if (!paragraph) return paragraph; // handle empty string
  return paragraph.charAt(0).toUpperCase() + paragraph.slice(1);
}


/*========================================================
  SLUGIFY
========================================================*/
export const slugify = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};


/*========================================================
  DESLUGIFY
========================================================*/
export const deslugify = (text: string): string => {
  return text.replace(/-/g, ' ').toLowerCase();
};