import { HiExternalLink } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { ContentContainer, PostContainer, PostInfoContainer } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { FaCalendarDay, FaComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from "react-markdown";

interface Post {
  user: {
    login: string;
  };
  html_url: string;
  comments: number;
  title: string;
  body: string;
  updated_at: string;
}

export function Post() {
  const { number } = useParams();
  const [post, setPost] = useState({} as Post);

  async function getPost() {
    const res = await api.get(`/repos/gian-lucas/github-blog/issues/${number}`);

    const { user, html_url, comments, title, body, updated_at } = res.data;

    const data: Post = {
      body,
      comments,
      title,
      updated_at,
      html_url,
      user,
    };

    setPost(data);
  }

  useEffect(() => {
    getPost();
  }, []);

  if (!post.title) {
    return (
      <PostContainer>
        <h1>Carregando post...</h1>
      </PostContainer>
    );
  }

  const updatedAtFormatted = formatDistanceToNow(new Date(post.updated_at), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <PostContainer>
      <PostInfoContainer>
        <header>
          <Link to="/">
            <BsChevronLeft />
            VOLTAR
          </Link>
          <a href={post.html_url} target="_blank">
            VER NO GITHUB
            <HiExternalLink size={14} />
          </a>
        </header>

        <h1>{post.title}</h1>

        <footer>
          <span>
            <AiFillGithub size={18} />
            {post.user.login}
          </span>
          <span>
            <FaCalendarDay size={18} />
            {updatedAtFormatted}
          </span>
          <span>
            <FaComment size={18} />
            {post.comments} comentários
          </span>
        </footer>
      </PostInfoContainer>

      <ContentContainer>
        <ReactMarkdown children={post.body} linkTarget="_blank" />
      </ContentContainer>
    </PostContainer>
  );
}
