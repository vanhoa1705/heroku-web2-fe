import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { parseJwt } from "../../../API/axiosConfig";
import api from "../../../API/listAPI";

const CheckEmail = (props) => {
  const obj = parseJwt(localStorage.token);

  async function resend() {
    try {
      await api.resendConfirmEmail();
      alert("Đã gửi email xác nhận cho bạn!");
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
              We sent a confirmation email to:
              <div className="font-weight-bold d-inline"> {obj.email}</div>
              <div className="mt-2">
                Check your email and click on the confirmation link to continue
              </div>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-end">
              <Button variant="primary" className="mr-2" onClick={resend}>
                Resent email
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CheckEmail;
