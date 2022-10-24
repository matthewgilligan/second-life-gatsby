import styled from 'styled-components';

export const InnerWrap = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;

export const TightInnerWrap = styled(InnerWrap)`
  max-width: 1100px;
`;

export const TextWrap = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
`;

export const QuoteWrap = styled.div`
  width: 100%;
  margin: 6rem 0;
  padding: 3rem 0;
  background-color: ${(props) =>
    props.color === 'sand'
      ? props.theme.colors.sand
      : props.theme.colors.green};
  p {
    width: 84rem;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Gotham Bold';
    font-size: 3rem;
    font-style: italic;
  }
`;

export const BodyWrap = styled.div`
  width: 66rem;
  max-width: 90%;
  margin: 0 auto;
  &:last-of-type {
    margin-bottom: 8rem;
  }
  h3 {
    margin: 3rem 0 1rem;
  }
`;

export const FeatureWrap = styled(InnerWrap)`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  max-width: 90%;
  margin-bottom: 8rem;
  img {
    width: 40%;
    border-radius: 2.5rem;
    object-fit: cover;
  }
  div {
    width: 50%;
  }
  /* div:first-of-type {
    order: ${(props) => (props.reverse === 1 ? 2 : 1)} !important;
  } */
  div:last-of-type {
    order: ${(props) => (props.reverse === 1 ? 1 : 2)} !important;
  }
`;
