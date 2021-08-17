import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import api from "../../../API/listAPI";

const WatchList = ({ academy, setWatchList, watchList }) => {
  const history = useHistory();
  function linkTo(academy_id) {
    history.push(`/coursedetail/${academy_id}`);
  }

  async function removeWatchList(id) {
    try {
      await api.removeFromWatchList(id);
      alert("Xoá thành công!");
      setWatchList(watchList.filter((item) => item !== academy));
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
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
                xs={6}
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
              </Col>
              <Col xs={3}>
                <button
                  onClick={() => removeWatchList(academy.academy_id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Remove From Watch List
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WatchList;
