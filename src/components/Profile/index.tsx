import { ProfileContainer } from "./styles";
import { HiExternalLink, HiOfficeBuilding } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  login: string;
  followers: number;
  bio: string;
  avatar_url: string;
  company: string | null;
}

export function Profile() {
  const [user, setUser] = useState({} as User);

  async function getGithubUser() {
    const res = await api.get("/users/gian-lucas");
    const data: User = res.data;

    setUser(data);
  }

  useEffect(() => {
    getGithubUser();
  }, []);

  if (!user.name) {
    return <h1>Carregando dados do usuário...</h1>;
  }

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <header>
          <strong>{user.name}</strong>
          <a href={`https://github.com/${user.login}`} target="_blank">
            GITHUB <HiExternalLink size={14} />
          </a>
        </header>

        <p>{user.bio}</p>

        <footer>
          <span>
            <AiFillGithub size={18} /> {user.login}
          </span>
          {user.company && (
            <span>
              <HiOfficeBuilding size={18} />
              {user.company}
            </span>
          )}
          <span>
            <FaUserFriends size={18} />
            {user.followers} seguidores
          </span>
        </footer>
      </div>
    </ProfileContainer>
  );
}
