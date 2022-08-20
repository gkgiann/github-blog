import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { api } from "../../lib/axios";
import {
  FormContainer,
  HomeContainer,
  InputContainer,
  PostCardsContainer,
} from "./styles";

interface Post {
  title: string;
  number: string;
  updated_at: string;
  body: string;
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const res = await api.get("/search/issues", {
      params: {
        q: "repo:gian-lucas/github-blog",
      },
    });

    setPosts(res.data.items);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer>
      <Profile />

      <FormContainer>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <InputContainer>
          <input placeholder="Buscar conteúdo" />
          <button type="submit">Buscar</button>
        </InputContainer>
      </FormContainer>

      <PostCardsContainer>
        {posts.map((post) => {
          return <PostCard key={post.number} {...post} />;
        })}
      </PostCardsContainer>
    </HomeContainer>
  );
}
