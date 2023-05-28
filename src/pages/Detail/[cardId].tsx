import { useRouter } from "next/router";
import { FormEvent } from "react";
import CardEffectItem from "src/components/Card/CardEffectItem";
import Nav from "src/components/Nav";
import useComment from "src/hooks/api/useComment";
import useTextArea from "src/hooks/useTextArea";
import styled from "styled-components";

function Detail() {
  const {
    query: { cardId },
  } = useRouter();

  const { value, onChange, clearValue } = useTextArea({});
  const { createComment, deleteComment, comments } = useComment({ cardId });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createComment(value);
    clearValue();
  }

  function onClickDeleteBtn(id: string) {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      deleteComment(id);
    }
  }

  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledItemWrapper>
          <StyledCardWrapper>
            {/* 디테일 카드가 들어갈 곳 */}
            <CardEffectItem
              width="25"
              height="37"
              title="한강간 날"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
              date="2023.06.03"
              color="pink"
              img="https://github.com/My-Pack/MyPack-Web/assets/63100352/958a401b-6560-4ef5-aae3-0c234eab44c2"
            />
          </StyledCardWrapper>
          <StyledCommentWrapper>
            <StyledCommentItem>
              <StyledUser>카드 주인 user 명</StyledUser>
              <StyledCommentList>
                <StyledCommentUl>
                  {/* {comments.map((comment) => (
                    <li>
                      <StyledUserImgWrapper>
                        <Image src={comment.profileImage} alt="user_img" fill />
                      </StyledUserImgWrapper>
                      <div>
                        <span>{comment.userId}</span>
                        <p>{comment.comment}</p>
                      </div>
                      <StyledBtn onClick={() => onClickDeleteBtn(comment.id)}>
                        X
                      </StyledBtn>
                    </li>
                  ))} */}
                </StyledCommentUl>
              </StyledCommentList>

              <StyledForm onSubmit={onSubmit}>
                <textarea
                  placeholder="댓글 달기..."
                  value={value}
                  onChange={onChange}
                />
                <StyledBtn>게시</StyledBtn>
              </StyledForm>
            </StyledCommentItem>
          </StyledCommentWrapper>
        </StyledItemWrapper>
      </StyledWrapper>
    </>
  );
}

export default Detail;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding: 1rem 3rem;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;

  height: 100%;
`;

const StyledCommentWrapper = styled.div`
  width: 40rem;
  min-height: 40rem;
  background-color: #212121;
`;

const StyledCommentItem = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  div {
    border: 1px solid rgb(38, 38, 38);
    border-bottom: none;
  }
`;

const StyledUser = styled.div`
  padding: 0.9rem 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.6px;
  cursor: pointer;
`;

const StyledCommentList = styled.div`
  margin: 0 0 auto;
  padding: 0 1rem;
  height: 30rem;
`;

const StyledCommentUl = styled.ul`
  position: relative;
  box-sizing: content-box;
  font-size: 100%;
  height: 100%;
  left: 0;
  margin: 0;
  overflow-y: scroll;
  padding: 1rem;

  scrollbar-width: none;

  li {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0.75rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.light};

    div {
      display: flex;
      flex-direction: column;
      border: none;

      span {
        cursor: pointer;
        font-size: 0.81rem;
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
      }

      p {
        width: 29rem;
        height: auto;
        min-height: 30px;
        font-size: 0.87rem;
      }
    }
  }
`;

const StyledBtn = styled.button`
  all: unset;
  position: absolute;
  padding: 0.8rem 2rem;
  right: 0px;
  font-size: 0.9rem;

  :hover {
    color: ${({ theme }) => theme.color.neonMint};
    transition: 0.5s;
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: fit-content;
  margin-top: 2rem;
  border: 1px solid rgb(38, 38, 38);

  textarea {
    all: unset;
    display: flex;
    flex-wrap: wrap;
    width: 28rem;
    height: 100%;
    padding: 0.8rem 2rem;

    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: 0.95rem;
    letter-spacing: 0.2px;

    overflow: auto;
  }
`;

const StyledUserImgWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.9rem;
  cursor: pointer;
`;
