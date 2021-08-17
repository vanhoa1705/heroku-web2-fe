import React, { useEffect } from "react";
// import Courses from "../Courses/Courses";
import { useDispatch, useSelector } from 'react-redux';
import { listRelatedAcademys } from "../actions/academyActions";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import Courses from "../Courses/Courses";
import Icons from "../common/Icons";
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";


export default function MoreCourses({academy}) {
  const academyId = academy.academy_id;
  // console.log("academyId: " + academyId);
  const dispatch = useDispatch();
  const academyListRelated = useSelector((state) => state.academyListRelated);
  const { loading, error, academys } = academyListRelated; 
  // console.log(academyListRelated);
  useEffect(() => {
    dispatch(listRelatedAcademys(academyId));
  }, [dispatch, academyId]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  return (
    <Container className="mt-5">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          <div className="course-item">
          <h3 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="fire" className="mr-2 text-danger" />
            Most-sold related courses:
          </h3>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
          >
            {
              academys.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>
        </>
      )}
    </Container>
  );
}
