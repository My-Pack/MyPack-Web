import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: "제목이에요",
        content: "내용",
        type: ["pink", "blue", "yellow"],
        likeCount: 0,
        commentCount: 0,
        imageUrl: "",
        memberId: "hanseulhee",
        createdAt: "",
        modifiedAt: "",
      }),
    );
  }),
  rest.post("http://localhost:3000/user", async (req, res, ctx) => {
    return res();
  }),
  rest.post("http://localhost:3000/myprofile", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "jae_gwan_",
        profileImage: "https://avatars.githubusercontent.com/u/50162076?v=4",
        backgroundImage: "https://avatars.githubusercontent.com/u/50162076?v=4",
        quantity: {
          card: 1,
          cardPack: 1,
          follower: 1,
          follow: 1,
        },
        content: [
          {
            id: 1,
            title: "제목이에요",
            content: "내용",
            cardImage: {
              s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
            },
            theme: { img: "", color: "" },
            memberId: "1",
            createdAt: "2021-10-04T14:00:00.000Z",
            modifiedAt: "2021-10-04T14:00:00.000Z",
          },
          {
            id: 2,
            title: "제목이에요",
            content: "내용",
            cardImage: {
              s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
            },
            theme: { img: "", color: "" },
            memberId: "1",
            createdAt: "2021-10-04T14:00:00.000Z",
            modifiedAt: "2021-10-04T14:00:00.000Z",
          },
          {
            id: 3,
            title: "제목이에요",
            content: "내용",
            cardImage: {
              s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
            },
            theme: { img: "", color: "" },
            memberId: "1",
            createdAt: "2021-10-04T14:00:00.000Z",
            modifiedAt: "2021-10-04T14:00:00.000Z",
          },
          {
            id: 4,
            title: "제목이에요",
            content: "내용",
            cardImage: {
              s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
            },
            theme: { img: "", color: "" },
            memberId: "1",
            createdAt: "2021-10-04T14:00:00.000Z",
            modifiedAt: "2021-10-04T14:00:00.000Z",
          },
          {
            id: 5,
            title: "제목이에요",
            content: "내용",
            cardImage: {
              s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
            },
            theme: { img: "", color: "" },
            memberId: "1",
            createdAt: "2021-10-04T14:00:00.000Z",
            modifiedAt: "2021-10-04T14:00:00.000Z",
          },
          {
            id: 6,
            title: "제목이에요",
            content: "내용",
            cardImage: {
              s3Url: "https://avatars.githubusercontent.com/u/50162076?v=4",
            },
            theme: { img: "", color: "" },
            memberId: "1",
            createdAt: "2021-10-04T14:00:00.000Z",
            modifiedAt: "2021-10-04T14:00:00.000Z",
          },
        ],
      }),
    );
  }),
];
