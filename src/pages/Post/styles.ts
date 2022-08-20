import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 864px;
  margin: auto;
`;

export const PostInfoContainer = styled.div`
  padding: 3.2rem;
  background: ${(p) => p.theme["base-profile"]};
  margin-top: -7rem;
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;

      gap: 0.4rem;

      color: ${(p) => p.theme.blue};
      font-size: 1.2rem;
      text-decoration: none;
      padding-bottom: 0.1rem;
      border-bottom: 1px solid transparent;

      &:first-child {
        border: none;
      }

      &:hover {
        border-bottom-color: ${(p) => p.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 2rem;
    color: ${(p) => p.theme["base-title"]};
    font-size: 2.4rem;
  }

  footer {
    display: flex;
    gap: 2.4rem;
    margin-top: 0.8rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      line-height: 2.56rem;
      color: ${(p) => p.theme["base-span"]};
    }
  }
`;
