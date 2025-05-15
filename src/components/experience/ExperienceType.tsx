import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";

interface ExperienceTypeProps {
  ExpName: string;
}

function ExperienceType({ExpName}: ExperienceTypeProps) {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <h4>{ExpName}</h4>
    </article>
  )
}

export default ExperienceType