import styled from "styled-components";

function Card() {
  return <StyledCardWrapper>card</StyledCardWrapper>;
}

export default Card;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 18.75rem;
  height: 25rem;
  border-radius: 20px;
  padding: 1rem 2rem;
  border: 1px solid rgba(200 200 200 / 0.2);
  
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
