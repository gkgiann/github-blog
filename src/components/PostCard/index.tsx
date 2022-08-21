import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ContentContainer, PostCardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostCardProps {
  title: string;
  number: string;
  updated_at: string;
  body: string;
}

export function PostCard({ title, number, updated_at, body }: PostCardProps) {
  const updatedAtFormatted = formatDistanceToNow(new Date(updated_at), {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <Link to={`/post/${number}`} style={{ textDecoration: "none" }}>
      <PostCardContainer>
        <header>
          <h1>{title}</h1>
          <span>{updatedAtFormatted}</span>
        </header>

        <ContentContainer>
          <ReactMarkdown children={body} />
        </ContentContainer>
      </PostCardContainer>
    </Link>
  );
}
