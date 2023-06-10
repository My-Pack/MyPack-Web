interface IGetImageId {
  id: number;
}

interface IGetCardDataContent {
  id: number;
  title: string;
  content: string;
  color: string;
  imageUrl: string;
  theme: string;
  likeCount: number;
  commentCount: number;
  memberName: string;
  createdAt: string;
  modifiedAt: string;
}

interface IImage {
  s3Url: string;
}

interface ITheme {
  img: string;
  color: string;
}

interface ISingleCardLikeListItem {
  id: number;
  photo: string;
  name: string;
}
