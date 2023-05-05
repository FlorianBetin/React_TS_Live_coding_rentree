import { ISkills } from "../../Interfaces";


const Skill = ({title, votes} :ISkills) => {
      return (
        <li>
          {title}
          <span className="votes">{votes}</span>
        </li>
      );
    };
    
    export default Skill;