import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PostContainer, PostInfoContainer } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { FaCalendarDay, FaComment } from "react-icons/fa";

export function Post() {
  return (
    <PostContainer>
      <PostInfoContainer>
        <header>
          <Link to="/">
            <BsChevronLeft />
            VOLTAR
          </Link>
          <a href="https://github.com/gian-lucas/todo-list" target="_blank">
            VER NO GITHUB
            <HiExternalLink size={14} />
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <footer>
          <span>
            <AiFillGithub size={18} />
            gian-lucas
          </span>
          <span>
            <FaCalendarDay size={18} />
            Há 1 dia
          </span>
          <span>
            <FaComment size={18} />5 comentários
          </span>
        </footer>
      </PostInfoContainer>
    </PostContainer>
  );
}
