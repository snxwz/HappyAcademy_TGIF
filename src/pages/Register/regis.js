import React from "react";
import { useState } from "react";
import axios from "axios";
import "./regis.css";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import swal from "sweetalert";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [surname, setSurname] = useState("");
  const [t_address, setT_address] = useState("");
  const [a_address, setA_address] = useState("");
  const [p_address, setP_address] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [formErrors] = useState({});

  const validateForm = () => {
    const error = {};
    var count = 0;

    if (!username.trim()) {
      // error.username = "Username is empty";
      swal({
        title: "กรุณากรอกชื่อผู้ใช้",
        icon: "error",
        dangerMode: true,});
      count += 1;
    }
    if (!password.trim()) {
      error.password = "Password is empty";
      swal({
        title: "กรุณากรอกรหัสผ่าน",
        icon: "error",
        dangerMode: true,});
      count += 1;
    }
    if (!confirmPassword.trim()) {
      error.confirmPassword = "confirmPassword is empty";
      swal({
        title: "กรุณายืนยันรหัสผ่าน",
        icon: "error",
        dangerMode: true,});
      count += 1;
    } else if (confirmPassword.trim() !== password.trim()) {
      error.confirmPassword = "Password and Confirm Password do not match";
      swal({
        title: "รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน",
        icon: "error",
        dangerMode: true,});
      count += 1;
    }

    return count;
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    console.log("Date : " + Date().toLocaleString());

    var date = Date().toLocaleString();

    if (validateForm() <= 0) {
      console.log("Work!");
      var data = JSON.stringify({
        username: username,
        name: name,
        surname: surname,
        password: password,
        address: address,
        t_address: t_address,
        a_address: a_address,
        p_address: p_address,
        zipcode: zipcode,
        tel: tel,
        dateofregis: date,
      });

      const response = await axios.post("/customers", data).then((res) => {
        if (res.status === 201) {
          swal({
            title: "สมัครสมาชิกสำเร็จ",
            icon: "success",
            dangerMode: true,}).then(function () {
            window.location.href = "/";
          });
        }
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    }
  };

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

      <div className="register-page">
        <img
          className="bg-image-index"
          src="https://images.unsplash.com/photo-1600352706622-cb5221ea6c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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

        <div className="card-register" style={{ backgroundColor: "#FFFFFFB6" }}>
          <h1>สมัครสมาชิก</h1>
          <br />
          <form onSubmit={handleRegister} noValidate>
            <br />
            <div className="inputBox">
              <input
                type="text"
                label="Username"
                required
                value={username}
                inputStyle="box"
                onChange={(e) => setUsername(e.target.value)}
              />
              <span>Username (ชื่อผู้ใช้)</span>
              {formErrors.username && (
                <span className="error-message">{formErrors.username}</span>
              )}
            </div>

            <div className="divRow">
              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={password}
                  passwordToggle="true"
                  inputStyle="box"
                  labelStyle="floating"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>Password (รหัสผ่าน)</span>
                {formErrors.password && (
                  <label className="error-message">{formErrors.password}</label>
                )}
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  label="Confirm Password"
                  required
                  value={confirmPassword}
                  passwordToggle="true"
                  inputStyle="box"
                  labelStyle="floating"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span>Confirm Password (ยืนยันรหัสผ่าน)</span>
                {formErrors.confirmPassword && (
                  <label className="error-message">
                    {formErrors.confirmPassword}
                  </label>
                )}
              </div>
            </div>

            <div className="divRow">
              <div className="inputBox">
                <input
                  type="text"
                  label="Name"
                  required="required"
                  value={name}
                  inputStyle="box"
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Name (ชื่อ)</span>
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  label="Surname"
                  required="required"
                  value={surname}
                  inputStyle="box"
                  onChange={(e) => setSurname(e.target.value)}
                />
                <span>Surname (นามสกุล)</span>
                {formErrors.surname && (
                  <span className="error-message">{formErrors.surname}</span>
                )}
              </div>
            </div>

            <div className="inputBox">
              <input
                type="text"
                label="Address"
                value={address}
                required="none"
                inputStyle="box"
                onChange={(e) => setAddress(e.target.value)}
              />
              <span>Address (ที่อยู่)</span>
              {formErrors.address && (
                <span className="error-message">{formErrors.address}</span>
              )}
            </div>

            <div className="divRow">
              <div className="inputBox">
                <input
                  type="text"
                  label="t_address"
                  value={t_address}
                  required
                  inputStyle="box"
                  onChange={(e) => setT_address(e.target.value)}
                />
                <span>ตำบล</span>
                {formErrors.t_address && (
                  <span className="error-message">{formErrors.t_address}</span>
                )}
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  label="a_address"
                  value={a_address}
                  required
                  inputStyle="box"
                  onChange={(e) => setA_address(e.target.value)}
                />
                <span>อำเภอ</span>
                {formErrors.a_address && (
                  <span className="error-message">{formErrors.a_address}</span>
                )}
              </div>
            </div>

            <div className="divRow">
              <div className="inputBox">
                <input
                  type="text"
                  label="p_address"
                  value={p_address}
                  required
                  inputStyle="box"
                  onChange={(e) => setP_address(e.target.value)}
                />
                <span>จังหวัด</span>
                {formErrors.p_address && (
                  <span className="error-message">{formErrors.p_address}</span>
                )}
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  label="Zipcode"
                  value={zipcode}
                  required
                  inputStyle="box"
                  onChange={(e) => setZipcode(e.target.value)}
                />
                <span>รหัสไปรษณีย์</span>
                {formErrors.zipcode && (
                  <span className="error-message">{formErrors.zipcode}</span>
                )}
              </div>
            </div>

            <div className="inputBox">
              <input
                type="tel"
                label="Telphone"
                value={tel}
                required
                inputStyle="box"
                onChange={(e) => setTel(e.target.value)}
              />
              <span>เบอร์โทรศัพท์</span>
              {formErrors.tel && (
                <span className="error-message">{formErrors.tel}</span>
              )}
            </div>

            <br />
            <div className="btn-row">
              <button className="btn_style" type="submit">
                สมัครสมาชิก
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
