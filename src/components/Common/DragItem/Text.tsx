import styled from "styled-components";

interface IProps {
  text: string;
}

function Text({ text }: IProps) {
  return (
    <StyledWrapper>
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
}
export default Text;

const StyledWrapper = styled.div`
  background: radial-gradient(
    65.10000000000001% 65.10000000000001% at 50% 50%,
    #f72279 0%,
    #f72279 100%
  );
  box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.6666666666666666px #00000014,
    0 1.8065619053231785px 1.8065619053231785px -1.3333333333333333px #00000013,
    0 3.6217592146567767px 3.6217592146567767px -2px #00000013,
    0 6.8655999097303715px 6.8655999097303715px -2.6666666666666665px #0001,
    0 13.646761411524492px 13.646761411524492px -3.3333333333333335px #0000000d,
    0 30px 30px -4px #00000005;

  padding: 0.6rem 1.4rem;
  border-radius: ${({ theme }) => theme.borderRadius.button};
`;

const StyledText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 0.8rem;
  letter-spacing: 0.5px;
`;
