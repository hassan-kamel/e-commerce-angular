export interface PaginationResults<T> {
  data: T[];
  paginationResults: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  };
  results: number;
}
