import { ProfileContainer } from "./styles";
import { HiExternalLink, HiOfficeBuilding } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/67169105?v=4" alt="" />
      <div>
        <header>
          <strong>Gian Lucas</strong>
          <a href="https://github.com/gian-lucas" target="_blank">
            GITHUB <HiExternalLink size={14} />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <span>
            <AiFillGithub size={18} /> gian-lucas
          </span>
          {/* <span>
            <HiOfficeBuilding size={18} />
            Rockeseat
          </span> */}
          <span>
            <FaUserFriends size={18} />
            32 seguidores
          </span>
        </footer>
      </div>
    </ProfileContainer>
  );
}
