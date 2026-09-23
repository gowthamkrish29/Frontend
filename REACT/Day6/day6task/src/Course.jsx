
const Course = () => {

    const course = ["Full Stack Development", "Data Analyst", "Machine Learning", "Cyber Security", "DeveOps"];


    return (<>

        <h1 className="bg-black text-white m-3 p-3 text-4xl font-bold">Courses</h1>
        <ul className="bg-pink-400 p-3 m-3 text-xl font-medium">
            {course.map((course, index) => (
                <li key={index} className="mb-5">{course}</li>
            ))}
        </ul>
    </>)
}

export default Course
