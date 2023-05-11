import Image from "next/image";
import styled from "styled-components";

interface IProps {
  title: string;
  summary: string;
  previewImage: string;
  color: string;
}

function PreviewCard({ title, summary, previewImage, color }: IProps) {
  return (
    <StyledCard>
      <StyledItemWrapper>
        <StyledTitleWrapper>{title}</StyledTitleWrapper>
        <StyledImageWrapper>
          {previewImage && (
            <StyledImage>
              <Image
                src={previewImage}
                alt="card_img"
                layout="fill"
                objectFit="cover"
              />
            </StyledImage>
          )}{" "}
        </StyledImageWrapper>

        <StyledSummaryWrapper>{summary}</StyledSummaryWrapper>
      </StyledItemWrapper>
      <StyledBottom>@2023 MyPack</StyledBottom>
    </StyledCard>
  );
}

export default PreviewCard;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23rem;
  height: 29.7rem;
  border-radius: 15px;
  background-color: ${({ color }) => color};
  color: black;
  padding: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  background-color: rgb(199, 199, 199);
  border-radius: 15px;
  overflow-wrap: break-word;
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 11rem;
`;

const StyledImage = styled.div`
  object-fit: cover;
  margin: 0.5rem 0;
`;

const StyledTitleWrapper = styled.div`
  height: auto;
  opacity: 0.9;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.4px;
`;

const StyledSummaryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.87rem;
  letter-spacing: 0.2px;
`;

const StyledBottom = styled.div`
  position: absolute;
  bottom: 0px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 2px;
`;
