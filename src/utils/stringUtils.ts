
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
  FORMAT STORAGE SIZE
========================================================*/
export const formatStorageSize = (input: string): string => {
  return input.replace(/^(\d+)\s*(gb|mb|tb|kb)$/i, (_, num, unit) => {
    return `${num} ${unit.toUpperCase()}`;
  });
}


/*========================================================
  FORMAT SIZE
========================================================*/
export const formatInches = (value: string): string => {
  return value.trim().replace(/"$/, ' inches');
}


/*========================================================
  TRUNCATE TEXT
========================================================*/
export const truncateText =(text: string, maxLength = 100): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}


