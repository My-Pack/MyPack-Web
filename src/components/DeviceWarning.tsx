import Image from "next/image";
import Link from "next/link";
import googlePlayBadge from "public/assets/images/googlePlayBadge.png";
import styled from "styled-components";

function DeviceWarning() {
  return (
    <StyledWrapper>
      <StyledItemWrapper>
        <div>
          <StyledMessage>
            Holy Moly, Guacamole! <p>모바일 환경은 지원하지 않아요</p>
          </StyledMessage>
          <StyledSubMessage>
            화면의 크기를 늘리거나, <br />
            앱을 다운로드 받아주세요
          </StyledSubMessage>
          <StyledItem>
            <StyledImgWrapper>
              <Link href="/">
                <Image
                  src={googlePlayBadge}
                  alt="googlePlayBadge_Image"
                  layout="fill"
                />
              </Link>
            </StyledImgWrapper>
          </StyledItem>
        </div>
      </StyledItemWrapper>
    </StyledWrapper>
  );
}

export default DeviceWarning;

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(32, 33, 36, 0.8);
  backdrop-filter: blur(0.3125rem);
  color: ${({ theme }) => theme.color.white};
  z-index: 100;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 100%;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding-bottom: 3rem;
`;

const StyledImgWrapper = styled.div`
  position: relative;
  object-fit: cover;

  width: 90%;
  height: 90%;
  cursor: pointer;
`;

const StyledMessage = styled.span`
  font-size: 2.1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.1px;

  p {
    margin-top: 0.3rem;
    font-size: 1.1rem;
  }
`;

const StyledSubMessage = styled.p`
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.1px;
  line-height: 1.2rem;
  margin: 0.9rem 0;
`;
