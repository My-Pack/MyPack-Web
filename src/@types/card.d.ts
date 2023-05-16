interface IGetRestaurant {
  status: number;
  data: IGetCard;
}

interface IGetCard {
  content: IGetCardData[];
}

interface IGetCardData {
  id: number;
  title: string;
  content: string;
  cardImage: IImage;
  thene: ITheme;
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
