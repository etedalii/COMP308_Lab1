/*
    Mohammad Etedali 301056465
    COMP 308 - Lab 1
    Date: 2022-02-04
*/
import React, {useState , useEffect } from "react";
import auth from "../../auth/auth";

export default function Thankyou(props) {

  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
  const [courseCode, setCourseCode] = useState();
  const [courseName, setCourseName] = useState();
  const [semester, setSemester] = useState();
  const [section, setSection] = useState();

  useEffect(() => {
    const data = auth.getDataToLocalStorage();
    setComment(data.comment);
    setEmail(data.email)
    setCourseCode(data.courseCode)
    setCourseName(data.courseName)
    setSemester(data.semester)
    setSection(data.section)
  }, []);

  return (
    <div className="container">
      <h1>Thank you {email}</h1>
      <p>Your Course Name: <strong>{courseName}</strong></p>
      <p>Your Course Code: <strong>{courseCode}</strong></p>
      <p>Your Section: <strong>{section}</strong></p>
      <p>Semester: <strong>{semester}</strong></p>
      <p>We appreciate your comment: <strong>{comment}</strong></p>
    </div>
  );
}