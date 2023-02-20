import React from "react";
import "./about.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const About = () => {
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

      <div>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          เกี่ยวกับเรา
        </h1>
        <h4
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          สมาชิก
        </h4>

        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              class="fixImg"
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/324341363_860087281970060_229809564157574707_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHA06Ss0v0Im1ZYzgdmtKQRUG7u1nqoOIJQbu7Weqg4gqBr5_sMtZdWyDLr3tBnrYcT2QDwaPQskf2xg_lz1Uly&_nc_ohc=9KQQ60ZC32IAX9mNiwp&tn=nunK1HQekm4zCqf7&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCWFT2MherkEvtoii_RzXv9qzA5kinBgllVDwfncG6Clg&oe=63F3C0FC"
            />
            <Card.Body>
              <Card.Title>Adithep Ponglong</Card.Title>
              <Card.Text>A team member.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              class="fixImg"
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/123580423_1744626519035019_6547057151458611034_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfjypWZljffwtinXDC7Gwb3kZP8J6IjX3eRk_wnoiNfYk8_2VvG34FOOfYin2PACHeKUOc-mzAceBY6Fvr9bF3&_nc_ohc=EXQI8O5_CZYAX8893EJ&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCt4gW_lJvqOuHUv0FzP34RDND8I3eDLBf1bCR9GzCsEA&oe=6415A036"
            />
            <Card.Body>
              <Card.Title>Jakkrit Faijampa</Card.Title>
              <Card.Text>A team member.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              class="fixImg"
              src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/261852480_1698076657062772_8888727059633669387_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFetDz7n-uTJHcf_RaPUU9ErNQE2FPP4Pms1ATYU8_g-QFQb-_Q3st3OW2s6TspK8Krr3hrZoTwTCcFKa3Yfihe&_nc_ohc=mm2wDr1iDxkAX_wl72y&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfAQHJ3ReFp-qGN-DcMpCWNOgwTxP2rlZR-KuuZRAI7-KQ&oe=63F37006"
            />
            <Card.Body>
              <Card.Title>Poramet Bokaew</Card.Title>
              <Card.Text>A team member.</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <h5
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม
        </h5>
      </div>
    </div>
  );
};

export default About;
