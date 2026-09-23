
const Student = () => {

  const details = { name: "Gowtham", age: 20, course: "Full Stack Development", city: "Chennai" };

  return (<>

    <h1 className="bg-black text-white m-3 p-3 font-bold text-2xl">Student Details</h1>

    <div className="bg-pink-400 text-black font-semibold m-3 p-3 mt-3">
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>
      <p>Course: {details.course}</p>
      <p>City: {details.city}</p>
    </div>

  </>)
}

export default Student