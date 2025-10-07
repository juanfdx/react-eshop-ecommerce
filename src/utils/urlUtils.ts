
/**
 * Updates a single search param in the URL and resets the page param.
 *
 * @param key The query key to update (e.g., 'brand')
 * @param value The new value for the param (e.g., 'Apple' or null to remove)
 * @param currentParams The current URLSearchParams instance
 * @param setSearchParams React Router's setSearchParams function
 */


export const updateFilterQueryParam = (
  key: string,
  value: string | null,
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void
) => {
  const newParams = new URLSearchParams(searchParams.toString());

  if (value === null || value === 'all' || value === '') {
    newParams.delete(key);
  } else {
    newParams.set(key, value);
  }

  // Always reset pagination on filter changes
  newParams.delete('page');

  setSearchParams(newParams);
};
