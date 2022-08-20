import { Link } from "react-router-dom";
import { PostCardContainer } from "./styles";

interface PostCardProps {
  title: string;
  number: string;
  updated_at: string;
  body: string;
}

export function PostCard({ title, number, updated_at, body }: PostCardProps) {
  return (
    <Link to="/post" style={{ textDecoration: "none" }}>
      <PostCardContainer>
        <header>
          <h1>{title}</h1>
          <span>Há 1 dia</span>
        </header>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in. Programming languages
          all have built-in data structures, but these often differ from one
          language to another. This article attempts to list the built-in data
          structures available in
        </p>
      </PostCardContainer>
    </Link>
  );
}
