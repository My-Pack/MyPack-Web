import styled from "styled-components";

function CardItem() {
  return <StyledCard>card</StyledCard>;
}

export default CardItem;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;
  height: 25.7rem;
  border-radius: 20px;
  padding: 1rem 2rem;
  border: 1px solid rgba(200 200 200 / 0.2);
  
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
