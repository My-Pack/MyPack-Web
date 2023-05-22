import { rest } from "msw";

export const handlers = [
  rest.get(`http://localhost:3000/design`, async (req, res, ctx) => {
    return res(
      ctx.json({
        content: [
          {
            id: 1,
            title: "카드제목",
            content: "음마하하",
            cardImage: {
              s3Url:
                "https://hyunsoo-bucket.s3.ap-northeast-2.amazonaws.com/mypack/c2e9ece0-0608-465e-8ad8-9903d43c4946",
            },
            theme: { img: "/assets/images/frame.png", color: "pink" },
            memberId: "1",
            createdAt: "생성 시간",
            modifiedAt: "수정 시간",
          },
          {
            id: 2,
            title: "제목",
            content: "내용",
            cardImage: {
              s3Url:
                "https://hyunsoo-bucket.s3.ap-northeast-2.amazonaws.com/mypack/c2e9ece0-0608-465e-8ad8-9903d43c4946",
            },
            theme: { img: "/assets/images/frame.png", color: "blue" },
            memberId: "1",
            createdAt: "생성 시간",
            modifiedAt: "수정 시간",
          },
        ],
      }),
    );
  }),
];
