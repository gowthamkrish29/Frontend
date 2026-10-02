
const Student = () => {


    const details = [
        {name:"Gowtham" , age:20, course:"Full Stack Development", place:"Chennai"},
        {name:"Victor", age:30, course:"AI/Ml", place:"Madurai"},
        {name:"Author", age:36, course:"Cyber Security", place:"Trichy"},
        {name:"Jesse" ,age:34, course:"Analyst", place:"Kerala"},
        {name:"Mike" ,age:54, course:"Developer", place:"Ooty"},
        {name:"Gowtham" , age:20, course:"Full Stack Development", place:"Chennai"},
        {name:"Victor", age:30, course:"AI/Ml", place:"Madurai"},
        {name:"Author", age:36, course:"Cyber Security", place:"Trichy"},
        {name:"Jesse" ,age:34, course:"Analyst", place:"Kerala"},
       
    ];

  return (<>
  
  <div className="grid grid-cols-3 gap-5 bg-black">
    {details.map((e,i)=>(
    <div key={i} className="bg-red-400 w-110 border border-black rounded-xl p-5 shadow-lg mx-auto font-bold text-2xl mb-5 mt-10">
      <p>Name: {e.name}</p>
      <p>Age: {e.age}</p>
      <p>Course: {e.course}</p>
      <p>Location: {e.place}</p>
      <button className="bg-amber-300 p-2 rounded-xl font-medium mt-3 cursor-pointer">Click</button>
    </div>
  ))}
  </div>
  </>)
}

export default Student