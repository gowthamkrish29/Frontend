import Course from "./Course"
import Product from "./Product"
import Student from "./Student"
import Employee from "./Employee"

const App = () => {

    const employee = {name:"Gowtham", role:"Full Stack Developer", salary:"45,000", city:"Chennai"}

    return (<>

        <Course />
        <Student />
        <Product />
        <Employee employee={employee} />
    </>)
}

export default App