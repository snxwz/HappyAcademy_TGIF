import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import swal from "sweetalert";

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);

  const fetchSearch = (searchText) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    console.log(searchText);

    if (!token) {
      window.location.href = "/";
      return;
    }

    axios
      .get(`/customers?search=${searchText}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(axios.get);
  };

  useEffect(() => {
    fetchSearch(searchText);
  }, [searchText]);


  
  const handleLogout = (e) => {
    swal({
      title: "ยืนยันการออกจากระบบ!",
      icon: "warning",
      buttons: [true, "ออกจากระบบ"],
      dangerMode: true,
    })
    .then((confrimed) => {
      if (confrimed) {
        localStorage.removeItem("accessToken");
        window.location.href = "/";
      }
    })
  };

  // Get current customers
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Page numbers calculation
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customers.length / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center mt-5" >
      <img
        className="bg-image-index"
        src="https://www.cafworldwide.com/hubfs/CAF-Blog-What-Is-Freight-Forwarding.jpg"
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
      <Card className="w-75 mb-3 p-3" style={{backgroundColor: "#FFFFFFD9",}}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button className="btn btn-secondary ms-2" onClick={handleLogout}>
            Log Out
          </button>
        </div>

        <Card.Title>แสดงรายชื่อผู้ลงทะเบียน</Card.Title>
        <br />
        <Row className="mb-3">
          <Col xs>
            <div className="d-flex justify-content-center align-items-center">
              <input
                className="form-control"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
              />
            </div>
          </Col>
        </Row>
        <div style={{ overflowX: "auto" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Tel</th>
                <th>Address</th>
                <th>Sub-District</th>
                <th>District</th>
                <th>Province</th>
                <th>Zip Code</th>
                <th>Username</th>
                <th>Date of Register</th>
              </tr>
            </thead>

            <tbody>
              {currentCustomers.map((customer, index) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.surname}</td>
                  <td>{customer.tel}</td>
                  <td>{customer.address}</td>
                  <td>{customer.t_address}</td>
                  <td>{customer.a_address}</td>
                  <td>{customer.p_address}</td>
                  <td>{customer.zipcode}</td>
                  <td>{customer.username}</td>
                  <td>{customer.dateofregis}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination className="justify-content-center">
            {pageNumbers.map((number) => (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => paginate(number)}
              >
                {number}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </Card>
    </div>
  );
};

export default Home;
