import React from "react";
import { useState } from "react";
import FrameCollapsable from "./FrameCollapsable";
import SingleSeparator from "./SingleSeparator";

// Ref: OpenAcademy
const CourseMap = ({academyId, currentId}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <SingleSeparator
        title={"Course Content"}
        currentSection={0}
        active={isOpen}
        onClick={() => setIsOpen(!isOpen) }
      />
      <FrameCollapsable active={isOpen} academyId={academyId} currentId={currentId} />
    </>
  );
};

export default CourseMap;
