import axios from "axios";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

interface IProps {
  data: IComment;
}

interface IDetail {
  cardId: string | string[] | undefined;
}

const commentState = atom<ICommentData[]>({
  key: "commentState",
  default: [],
});

function useComment({ cardId }: IDetail) {
  const [comments, setComments] = useRecoilState(commentState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function refreshComments(id: string) {
    setIsLoading(true);

    const response = await axios.get<{}, IProps>(`/card/comments/${id}`);
    setComments(response.data.comment);
    setIsLoading(false);
  }

  useEffect(() => {
    if (typeof cardId === "string") refreshComments(cardId);
  }, [cardId, setComments]);

  async function createComment(value: string) {
    await axios.post("/card/comments", { fields: { comment: value } });
    refreshComments(value);
  }

  async function deleteComment(id: string) {
    await axios.delete(`/card/${id}`);
    refreshComments(id);
  }

  return { comments, createComment, deleteComment, isLoading };
}

export default useComment;
