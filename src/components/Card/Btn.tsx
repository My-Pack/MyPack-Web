import ShareIcon from "@mui/icons-material/Share";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Link from "next/link";
import styled from "styled-components";

//Todo : share 링크 추가

interface IProps {
  cardId?: number;
}

function Btn({ cardId }: IProps) {
  return (
    <StyledWrapper>
      <Link href={`/Detail/${cardId}`}>
        <ZoomInIcon />
      </Link>
      <Link href="/">
        <ShareIcon />
      </Link>
    </StyledWrapper>
  );
}

export default Btn;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;

  width: fit-content;
  margin: 0.7rem 0;
  padding: 0.2rem 0.5rem 0 0.5rem;
  cursor: pointer;

  border-radius: 5px;
  backdrop-filter: blur(2px) brightness(120%);
  box-shadow: 0px 0px 40px 10px rgb(57, 58, 64, 0.1);
`;
