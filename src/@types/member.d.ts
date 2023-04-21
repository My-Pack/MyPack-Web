interface IGetMember {
  size: number;
  content: IGetMemberData[];
  number: number;
  sort: ISort;
  pageable: IPageable;
  first: boolean;
  numberOfElements: number;
  last: boolean;
  empty: boolean;
}

interface IGetMemberData {
  id: number;
  email: string;
  name: string;
}
