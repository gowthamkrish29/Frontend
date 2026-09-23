const Student = () => {

    const studentName = "Gowtham Krishnan R";
    const age = 20;
    const course = "Full Stack Development";
    const isActive = true;
    const fees = 39000;


    return (<>

        <div className="details">
            <h2><b>Student Name:</b> {studentName}</h2>
            <p><b>Age:</b> {age}</p>
            <p><b>Course:</b> {course}</p>
            <p><b>Status:</b> {isActive ? "Active" : "Inactive"}</p>
            <p><b>Fees:</b> {fees}</p>
        </div>
    </>)
}

export default Student;