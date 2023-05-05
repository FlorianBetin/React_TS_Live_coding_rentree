import profilePic from "../../assets/profilepicture.png";
import Skill from "../skill/Skill"
import DeleteWilder from "../deletewilder/Deletewilder"
import { ISkills } from "../../Interfaces";
import { IWilderProps } from "../../Interfaces";



const Wilder = ({name, skills, city, wilderId}: IWilderProps) => {
  console.log(wilderId, "wilderId compo/wilder.tsx")
  return (
    <article className="card">
      <img src={profilePic} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <h4>Location: {city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill: ISkills) => {
          console.log(skill, "prop de skill dans wilder.tsx");
         return <Skill 
         votes={skill.votes}
         title = {skill.title}
          />
        }
        )}

      </ul>
      <DeleteWilder wilderId={wilderId}/>
    </article>
  );
};

export default Wilder;