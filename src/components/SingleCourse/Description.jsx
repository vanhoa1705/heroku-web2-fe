// import CourseMap from "components/course/CourseMap";
import React from "react";
import { Container, Row } from "react-bootstrap";
import CourseMap from "./CourseMap";

export default function Description({academy}) {
  return (
    <Container className="mt-3" style={{textAlign: "left"}}>
      <Row>
        <div className="col-12 col-md-8">
          <>
            <div className="section-title mt-4 my-2">
              <h3 className="mb-0">
                Course Details: 
              </h3>
            </div>
            {academy.description_detail}
          </>
        </div>

        <div className="col-12 col-md-4">
          <div className="section-title mt-4 my-2">
            <h3 className="mb-0">
              Course Content:
            </h3>
          </div>
          <div className="border mt-2">
            <CourseMap academyId={academy.academy_id} />
          </div>
        </div>
      </Row>
    </Container>
  );
}
