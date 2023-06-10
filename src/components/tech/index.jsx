import React from "react";

import { BallCanvas } from "../animation";
import { SectionWrapper } from "../../tools/core";
import { technologies } from "../../tools/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center p-[-50] gap-5">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
