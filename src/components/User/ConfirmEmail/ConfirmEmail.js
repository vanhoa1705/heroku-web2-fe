import { Card, Col, Container, Row, Button } from "react-bootstrap";
import api from "../../../API/listAPI";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const ConfirmEmail = (props) => {
  let history = useHistory();
  let userId = props.match.params.userId;
  let code = props.match.params.code;
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let temp = await api.confirmEmail(userId, code);
        localStorage.token = temp.data.data;
        history.push("/");
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid style={{ width: "70%" }}>
      <Card border="secondary px-2 py-3">
        <Row>
          <Col md={4}>
            <img
              src="/confirmEmail.png"
              alt="Confirm Email"
              style={{ height: "230px", width: "230px" }}
            />
          </Col>
          <Col md={8}>
            <h1 className="font-weight-bold">Email Confirmation</h1>
            <h3 className="text-left">
              <div>{error}</div>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-end">
              <Button variant="primary" className="mr-2">
                Resend email
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ConfirmEmail;
