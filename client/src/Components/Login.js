import { GoogleLogin } from "react-google-login";
import { Card, Col, Container, Row } from "react-bootstrap";

const Login = ({ setUserStat }) => {
  const baseURL = process.env.REACT_APP_API_BASEURL;

  const handleSuccess = (res) => {
    console.log("Login successfull! ", res.profileObj, res.tokenId);

    localStorage.setItem("name", res.profileObj.name);
    localStorage.setItem("email", res.profileObj.email);
    localStorage.setItem("tokenId", res.tokenId);
    const robj = {};
    robj.loggedIn = false;
    robj.present = false;

    fetch(`${baseURL}user/check/`, {
      method: "POST",
      headers: {
        Authorization: res.tokenId,
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => {
        console.log("From check api", obj);
        robj.present = obj.body[0];
      })
      .catch(() => {
        console.log("Error signing in");
      });
    console.log("At end of handleSuccess");

    robj.loggedIn = true;
    console.log(robj);
    setUserStat(robj);
    // return <Redirect to="/home" />
  };

  const handleFailure = (res) => {
    console.log("Login Failed!");
  };
  return (
    <Container className="mt-5 align-content-center">
      {
        <Row>
          <Col md="6">
            <Card className="card-image" style={{ backgroundColor: "black" }}>
              <div className="text-white text-center rounded border border-dark d-flex align-items-center justify-content-center rgba-black-strong py-5 px-4">
                <div>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      }
    </Container>
  );
};

export default Login;
