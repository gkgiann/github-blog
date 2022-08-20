import styled from "styled-components";

export const PostCardContainer = styled.div`
  max-width: 416px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 10px;
  padding: 3.2rem;
  background: ${(p) => p.theme["base-post"]};
  border: 2px solid transparent;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${(p) => p.theme["base-label"]};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.6rem;

    h1 {
      font-size: 2rem;
      color: ${(p) => p.theme["base-title"]};
      line-height: 3.2rem;
    }

    span {
      white-space: nowrap;
      font-size: 1.4rem;
      color: ${(p) => p.theme["base-span"]};
      line-height: 2.24rem;
    }
  }

  p {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${(p) => p.theme["base-text"]};
  }
`;
