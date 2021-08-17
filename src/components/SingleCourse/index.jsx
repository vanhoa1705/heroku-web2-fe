import React from "react";
import Banner from "./Banner";
import CourseReview from "./CourseReview";
import Description from "./Description";
import MoreCourses from "./MoreCourses";


export default function SingleCourse({academy}) {
  return (
    <>
      <Banner academy={academy}/>
      <Description academy={academy}/>
      <MoreCourses academy={academy}/>
      <CourseReview academy={academy}/>
    </>
  );
}
