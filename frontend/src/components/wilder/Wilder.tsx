import profilePic from "../../assets/profilepicture.png";
import Skill from "../skill/Skill"
import DeleteWilder from "../deletewilder/Deletewilder"

export interface IWilderProps {
    name: string;
    city: string;
    wilderId: number;
    skills: number;
}

const Wilder = ({name, skills, city, wilderId}: IWilderProps) => {
  console.log(skills, "skill")
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
        {skills.map((skill) => {
          console.log(skill, "dans wilder");
         return <Skill skill={skill}/>
        }
        )}

      </ul>
      <DeleteWilder wilderId={wilderId}/>
    </article>
  );
};

export default Wilder;