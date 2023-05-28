import { MouseEvent } from "react";
import { howTo } from "src/constants/howto";
import styled from "styled-components";

interface IProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function HowTo({ onClick }: IProps) {
  return (
    <StyledWrapper>
      <StyledExitBtn onClick={onClick}>X</StyledExitBtn>
      <StyledItemWrapper>
        <StyledSizeWrapper>
          <StyledItemInWrapper>
            <StyledTitle>HowTo</StyledTitle>
            <ol>
              {howTo.map((data) => (
                <li>
                  <div>{data.num}</div>
                  {data.content}
                </li>
              ))}
            </ol>

            <p>
              시즌 별 테마 프레임은 곧 출시될 예정입니다. 이미지로 저장하고
              싶으신 분은 <b>로그인 후</b> 마이페이지에서 카드를 클릭하면 이미지
              저장 및 공유버튼이 나오게 됩니다.
            </p>
          </StyledItemInWrapper>
        </StyledSizeWrapper>
      </StyledItemWrapper>
    </StyledWrapper>
  );
}

export default HowTo;

const StyledWrapper = styled.div`
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  padding: 0 7rem;

  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  color: rgb(255, 255, 255, 0.92);
  z-index: 1001;
  overflow: auto;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledSizeWrapper = styled.div`
  height: 100%;
  margin: 0px auto;
`;

const StyledItemInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 1.8rem;

  ol,
  li {
    margin-bottom: 2.5rem;
    font-size: 1.4rem;
  }

  li {
    letter-spacing: 0.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 1px;
      padding-bottom: 0.5px;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;

      border: 4px solid ${({ theme }) => theme.color.neonPink};
      color: ${({ theme }) => theme.color.neonPink};
      font-size: 1.4rem;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      :hover {
        cursor: pointer;
      }
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 2rem;
    margin: 2rem 0;

    b {
      color: ${({ theme }) => theme.color.neonMint};
    }
  }
`;

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-style: italic;
  margin-bottom: 3rem;
  border-bottom: 5px solid ${({ theme }) => theme.color.neonMint};
  width: fit-content;
`;

const StyledExitBtn = styled.button`
  all: unset;
  position: absolute;
  left: 2rem;
  top: 1rem;

  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.grey100};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.buttonHoverBlack};
    transition: 0.4s;
  }
`;
