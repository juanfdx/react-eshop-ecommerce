
export interface SortOption {
  _id: number;
  key: string;
  value: string;
}


export const sortOptions: SortOption[] = [
  { _id: 0, key: 'Newest', value: 'newest' },
  { _id: 1, key: 'Top Rated', value: 'top_rated' },
  { _id: 2, key: 'Price (Lowest)', value: 'price_lowest' },
  { _id: 3, key: 'Price (Highest)', value: 'price_highest' },
  { _id: 4, key: 'Name (A-Z)', value: 'name_asc' },
  { _id: 5, key: 'Name (Z-A)', value: 'name_desc' },
];