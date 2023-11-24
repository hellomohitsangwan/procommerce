// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../actions/userActions";
// import Message from "../components/Message";
// import Loader from "../components/Loader";

// const Register = ({history}) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [message, setMessage] = useState(null);
//     const dispatch = useDispatch();
//     const userLogin = useSelector((state) => state.userLogin);
//     const { loading, error, userInfo } = userLogin;
//     useEffect(() => {
//         if (userInfo) {
//             history.push("/");
//         }
//     }, [history, userInfo]);

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setMessage("password do not match");
//         } else {
//             dispatch(register(name, email, password));
//         }
//     };

//     return (
//         <>
//         <div className="container">
//             <div>
//             <h1>Sign Up</h1>
//             {message && <Message variant="danger" children={message} />}
//             {error && <Message variant="danger" children={error} />}
//             {loading && <Loader />}
//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId="name">
//                     <Form.Label>name</Form.Label>
//                     <Form.Control
//                         type="name"
//                         placeholder="Enter name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     ></Form.Control>
//                 </Form.Group>
//                 <Form.Group controlId="email">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control
//                         type="email"
//                         placeholder="Enter email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     ></Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId="password">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="Enter Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     ></Form.Control>
//                 </Form.Group>
//                 <Form.Group controlId="confirmPassword">
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                     ></Form.Control>
//                 </Form.Group>
//                 <div className="form-gap"></div>
//                 <Button className="signUp" type="submit" variant="primary">
//                     Sign Up
//                 </Button>
//             </Form>
//             <Row className="py-3">
//                 <Col>
//                     Already Have an account?
//                     <Link to={"/login"}>
//                         <span className="login">Log in</span>
//                     </Link>
//                 </Col>
//             </Row>
//             </div>
//         </div>
//         </>
//     );
// };

// export default Register;



import React from 'react'

function RegisterScreen() {
  return (
    <div>RegisterScreen</div>
  )
}

export default RegisterScreen