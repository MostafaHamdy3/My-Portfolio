import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";

function ExperienceType({ExpName}) {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <h4>{ExpName}</h4>
    </article>
  )
}

export default ExperienceType