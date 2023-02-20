import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

const Index = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            src="https://www.pngmart.com/files/10/Need-For-Speed-Logo-PNG-Transparent.png"
            alt="Logo"
            width="160"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ width: "90%" }}>
            <Nav.Item>
              <Nav.Link as={NavLink} exact to="/" activeClassName="active">
                Index
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" activeClassName="active">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div
        className="container-index"
        style={{ height: "100vh", position: "relative" }}
      >
        <img
          className="bg-image-index"
          src="https://i.ibb.co/pz2Rcy9/crop1.jpg"
          alt="background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            position: "relative",
          }}
        >
          <Card
            style={{
              width: "90%",
              height: "fit-content",
              maxWidth: "500px",
              borderRadius: "30px",
              backgroundColor: "#FFFFFFB6",
              boxShadow: "0px 0px 20px rgba(1, 1, 1, 1)",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card.Text
                style={{
                  fontSize: "4vh",
                  fontWeight: "bold",
                  marginTop: "0vh",
                  textAlign: "center",
                  color: "#424242",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                กรุณาเข้าสู่ระบบ หรือ ลงทะเบียน
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "5vh",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "2vh",
                }}
              >
                <Link to="/login">
                  <Button
                    variant="primary"
                    style={{
                      width: "fit-content",
                      padding: "10px 30px",
                      borderRadius: "15px",
                      fontSize: "16px",
                      backgroundColor: "#4CAF50",
                      border: "none",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    ลงชื่อเข้าใช้
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="primary"
                    style={{
                      width: "fit-content",
                      padding: "10px 30px",
                      borderRadius: "15px",
                      fontSize: "16px",
                      backgroundColor: "#1976D2",
                      border: "none",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    ลงทะเบียน
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;