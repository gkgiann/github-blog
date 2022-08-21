import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 864px;
  padding: 0 2.4rem;
  margin: auto;
`;
export const FormContainer = styled.form`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: ${(p) => p.theme["base-subtitle"]};
      font-size: 1.8rem;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  input {
    flex: 1;
    border: 1px solid ${(p) => p.theme["base-border"]};
    border-radius: 6px;
    padding: 1.2rem 1.6rem;
    background: ${(p) => p.theme["base-input"]};
    color: ${(p) => p.theme["base-text"]};
    outline: none;

    &::placeholder {
      color: ${(p) => p.theme["base-label"]};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(p) => p.theme.blue};
    }
  }

  button {
    cursor: pointer;
    border: 1px solid ${(p) => p.theme["base-border"]};
    color: ${(p) => p.theme["base-text"]};
    background: ${(p) => p.theme["base-profile"]};
    border-radius: 6px;
    padding: 1.2rem 1.6rem;

    transition: 0.2s;

    &:hover {
      background: ${(p) => p.theme["base-input"]};
    }
  }
`;

export const PostCardsContainer = styled.div`
  margin: 4.8rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
`;
