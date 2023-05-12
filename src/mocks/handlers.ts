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
  rest.post("http://lcoalhost:3000/user", async (req, res, ctx) => {
    return res();
  }),
];
