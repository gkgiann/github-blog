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
    position: relative;
    cursor: pointer;
    border: 1px solid ${(p) => p.theme["base-border"]};
    color: ${(p) => p.theme["base-text"]};
    background: ${(p) => p.theme["base-profile"]};
    border-radius: 6px;
    padding: 1.2rem 1.6rem;

    transition: 0.2s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(p) => p.theme["base-input"]};
    }
  }
`;

export const Loader = styled.div`
  margin: 2.4rem auto;
  border: 1px solid transparent;
  border-top: 1px solid ${(p) => p.theme["base-text"]};
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  color: transparent;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PostCardsContainer = styled.div`
  margin: 4.8rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
`;
