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
      <p>Your Course Name: {courseName}</p>
      <p>Your Course Code: {courseCode}</p>
      <p>Your Section: {section}</p>
      <p>Semester: {semester}</p>
      <p> We appreciate your comment: <strong>{comment}</strong></p>
    </div>
  );
}
