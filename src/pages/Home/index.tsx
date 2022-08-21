import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { api } from "../../lib/axios";
import {
  FormContainer,
  HomeContainer,
  InputContainer,
  Loader,
  PostCardsContainer,
} from "./styles";

interface Post {
  title: string;
  number: string;
  updated_at: string;
  body: string;
}

interface FormInput {
  search: string;
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();
  const handleSearchPosts: SubmitHandler<FormInput> = async (data) => {
    await getPosts(data.search);
  };

  async function getPosts(search = "") {
    const res = await api.get("/search/issues", {
      params: {
        q: `${search}repo:gian-lucas/github-blog`,
        sort: "updated",
      },
    });

    setPosts(res.data.items);
    reset();
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer>
      <Profile />

      <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <div>
          <strong>Publicações</strong>
          <span>
            {posts.length === 0
              ? "Nenhuma publicação"
              : posts.length > 1
              ? `${posts.length} publicações`
              : "1 publicação"}
          </span>
        </div>

        <InputContainer>
          <input {...register("search")} placeholder="Buscar conteúdo" />
          <button type="submit" disabled={isSubmitting}>
            Buscar
          </button>
        </InputContainer>
      </FormContainer>

      {isSubmitting && <Loader />}
      <PostCardsContainer>
        {posts.map((post) => {
          return <PostCard key={post.number} {...post} />;
        })}
      </PostCardsContainer>
    </HomeContainer>
  );
}
