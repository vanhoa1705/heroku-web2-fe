import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const MyCourses = ({ academy }) => {
  const history = useHistory();
  function linkTo(academy_id) {
    history.push(`/coursedetail/${academy_id}`);
  }

  return (
    <>
      <Container key={academy.academy_id}>
        <div className="card" key={academy.academy}>
          <div className="card-body">
            <Row>
              <Col
                xs={3}
                onClick={() => linkTo(academy.academy_id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="card-img"
                  src={academy.avatar}
                  style={{ maxWidth: "150px", maxHeight: "100px" }}
                  alt=""
                />
              </Col>
              <Col
                xs={9}
                style={{ textAlign: "left", cursor: "pointer" }}
                onClick={() => linkTo(academy.academy_id)}
              >
                <div>
                  <b className="card-title">{academy.academy_name}</b>
                </div>
                <div className="instructor">
                  <FontAwesomeIcon className="user-icon" icon={faUserAlt} />
                  {" " + academy.teacher.name}
                </div>
                <div className="instructor">
                  Status:{" "}
                  {academy.status == 1 ? "Đã Hoàn Thành" : " Chưa hoàn thành"}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyCourses;
