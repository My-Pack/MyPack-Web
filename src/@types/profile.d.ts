interface IQuantity {
  card: number;
  cardPack: number;
  follower: number;
  follow: number;
}

interface IInfo {
  name: string;
  profileImage: string;
  backgroundImage: string;
  quantity: IQuantity;
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
