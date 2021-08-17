import React, { useEffect } from "react";
import Video from "../components/CourseVideo/Video";
import CardDescription from "../components/CourseVideo/CardDescription";
import CourseMap from "../components/SingleCourse/CourseMap";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { detailAcademyOutline } from "../components/actions/academyActions";
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const CourseVideo = () => {
  const { academyId = "", outlineId = "1" } = useParams();
  const userToken = localStorage.token;

  const dispatch = useDispatch();

  const outlineDetail = useSelector((state) => state.outlineDetail);
  const { loading, error, outline } = outlineDetail;
  useEffect(() => {
      dispatch(detailAcademyOutline(outlineId, userToken));
  }, [dispatch, outlineId, userToken]);

  return (
    <>
      <div style={{ minHeight: "75vh" }}>
        <Container fluid={true}>
          <Row>
            {loading ? <LoadingBox />
            : error ? <MessageBox>{error}</MessageBox>
            : (
              <>
              <Col xs={9}>
                <Video url={outline.url_video} />
                <CardDescription outlineDetail={outline} />
                
              </Col>
              <Col xs={3}>
                <CourseMap academyId={academyId} currentId={outlineId} />
              </Col>
              </>
            )
            }
            
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CourseVideo;
