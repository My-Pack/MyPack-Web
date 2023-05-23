interface IGetCard {
  status: number;
  data: IGetCardData;
}

interface IGetCardData {
  content: IGetCardDataContent[];
}

interface IGetCardDataContent {
  id: number;
  title: string;
  content: string;
  cardImage: IImage;
  theme: ITheme;
  memberId: string;
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
