interface IComment {
  cardId: number;
  userName: string;
  comment: ICommentData[];
}

interface ICommentData {
  id: string;
  text: string;
}
