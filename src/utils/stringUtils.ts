
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
  return text.trim().toLowerCase().replace(/\s+/g, '-');
};


/*========================================================
  DESLUGIFY
========================================================*/
export const deslugify = (text: string): string => {
  return text.trim().replace(/-/g, ' ').toLowerCase();
};


/*========================================================
  FORMAT MEMORY
========================================================*/
export const formatMemory =(str: string): string => {
  if (str.length <= 2) return str; // no need to format
  return str.slice(0, -2) + ' ' + str.slice(-2);
}


/*========================================================
  TRUNCATE TEXT
========================================================*/
export const truncateText =(text: string, maxLength = 100): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}