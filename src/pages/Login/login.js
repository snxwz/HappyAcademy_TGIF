import React, { useState } from "react";
import "./login.css";
import swal from "sweetalert";
import axios from "axios";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Login() {
  // React States
  const [isSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(data) {
    return await axios
      .post("/login", data)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          swal({
            title: "เข้าสู่ระบบสำเร็จ",
            icon: "success",
            button: true,
          }).then((confrimed) => {
            if (confrimed) {
              const accessToken = response.data.token;
              console.log(accessToken);
              localStorage.setItem("accessToken", accessToken);
              window.location.href = "/home";
            }
          });
        }
      })
      .catch((error) =>
        swal({
          title: "เกิดข้อผิดพลาด",
          text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!",
          icon: "error",
          dangerMode: true,
        })
      );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      swal({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาป้อนข้อมูลผู้ใช้หรือรหัสผ่าน!",
        icon: "error",
        dangerMode: true,
      });
      return;
    }

    const response = await loginUser({
      username: username,
      password: password,
    });
  };

  // JSX code for login form
  const renderForm = (

      <form style={{}} onSubmit={handleSubmit}>
        <label
          htmlFor="username"
          style={{
            fontSize: "2vh",
            fontWeight: "normal",
            marginTop: "0vh",
            textAlign: "center",
            color: "#424242",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Username:
        </label>

        <input
          style={{
            backgroundColor: "#FFFFFFB6",
            transition: "background-color 0.5s",
          }}
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          inputStyle="box"
          onFocus={(e) => (e.target.style.backgroundColor = "#CECECEDE")}
          onBlur={(e) => (e.target.style.backgroundColor = "#FFFFFFB6")}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br></br>

        <label
          htmlFor="password"
          style={{
            fontSize: "2vh",
            fontWeight: "normal",
            marginTop: "0vh",
            textAlign: "center",
            color: "#424242",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Password:
        </label>
        <input
          style={{
            backgroundColor: "#FFFFFFB6",
            transition: "background-color 0.5s",
          }}
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onFocus={(e) => (e.target.style.backgroundColor = "#CECECEDE")}
          onBlur={(e) => (e.target.style.backgroundColor = "#FFFFFFB6")}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <button
            type="submit"
            variant="primary"
            style={{
              color: "white",
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
            เข้าสู่ระบบ
          </button>
        </div>
      </form>

  );

  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
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

      <div className="app">
        <div style={{ backgroundColor: "#FFFFFFB6" }} className="login-form">
          <img
            className="bg-image-index"
            src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
            className="title"
            style={{
              fontSize: "4vh",
              fontWeight: "bold",
              marginTop: "0vh",
              textAlign: "center",
              color: "#424242",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            เข้าสู่ระบบ
          </div>


          

          

          {isSubmitted ? renderForm() : renderForm}
        </div>
      </div>
    </div>
  );
}
export default Login;
