import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  background: ${(p) => p.theme["base-profile"]};

  padding: 3.2rem 4rem;
  margin-top: -8rem;

  border-radius: 10px;

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    strong {
      color: ${(p) => p.theme["base-title"]};
      font-size: 2.4rem;
    }

    a {
      display: flex;
      align-items: center;

      gap: 0.4rem;

      color: ${(p) => p.theme.blue};
      font-size: 1.2rem;
      text-decoration: none;
      padding-bottom: 0.1rem;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom-color: ${(p) => p.theme.blue};
      }
    }
  }

  p {
    margin-top: 0.8rem;
    line-height: 2.56rem;
  }

  footer {
    display: flex;
    gap: 2.4rem;
    margin-top: 2.4rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${(p) => p.theme["base-subtitle"]};

      svg {
        color: ${(p) => p.theme["base-label"]};
      }
    }
  }
`;
