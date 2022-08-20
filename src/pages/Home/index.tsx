import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import {
  FormContainer,
  HomeContainer,
  InputContainer,
  PostCardsContainer,
} from "./styles";

export function Home() {
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
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardsContainer>
    </HomeContainer>
  );
}
