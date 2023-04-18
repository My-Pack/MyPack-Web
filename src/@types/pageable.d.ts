interface IPageable {
  offset: number;
  sort: ISort;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}
