const Skill = ({skill}) => {
    console.log(skill, "dans compo skill")
      return (
        <li>
          {skill.title}
          <span className="votes">{skill.votes}</span>
        </li>
      );
    };
    
    export default Skill;