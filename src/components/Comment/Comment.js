import React, { useState, useEffect } from "react";
import auth from "../../auth/auth";
import "./Comment.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Comment(props) {
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
  const [courseCode, setCourseCode] = useState();
  const [courseName, setCourseName] = useState();
  const [semester, setSemester] = useState();
  const [section, setSection] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();

    if (loggedInUser !== "") {
      setEmail(loggedInUser);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      comment ,
      courseCode,
      courseName,
      semester,
      section
    };

    auth.saveDataToLocalStorage(data);

    setComment('');
    setCourseCode('')
    setCourseName("");
    setSemester("")
    setSection('')

    props.history.push("/thankyou");
  };

  return (
    <div className="Comment">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h4>Enter Your Comments</h4>
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" defaultValue={email} disabled={true} />
        </Form.Group>

        <Form.Group size="lg" controlId="courseCode">
          <Form.Label>Course Code</Form.Label>
          <Form.Control type="text" onChange={e => setCourseCode(e.target.value)} />
        </Form.Group>

        <Form.Group size="lg" controlId="courseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" onChange={e => setCourseName(e.target.value)} />
        </Form.Group>

        <Form.Group size="lg" controlId="section">
          <Form.Label>Section</Form.Label>
          <Form.Control type="text" onChange={e => setSection(e.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="semester">
          <Form.Label>Semester</Form.Label>
          <Form.Control type="text" onChange={e => setSemester(e.target.value)} />
        </Form.Group>

        <Form.Group size="lg" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" onChange={e => setComment(e.target.value)}></Form.Control>
        </Form.Group>

        <Button block size="lg" className="mt-2" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
