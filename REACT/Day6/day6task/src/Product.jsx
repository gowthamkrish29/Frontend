
const Product = () => {

    const pro = [
        {id:1, name:"Iphone18", price:"2,04,900", category:"Electronics"},
        {id:2, name:"Bike", price:"3,00,000", category:"Vehicle"},
        {id:3, name:"Whey Protein", price:3000, category:"Supplements"},
        {id:4, name:"Chelsea Boots", price:2500, category:"Fashion"}
    ];
  return (<>
  
  <h1 className="bg-black text-white m-3 p-3 font-bold text-2xl">Product List</h1>

  {pro.map((Product)=>(
        <div key={pro.id} className="bg-pink-400 m-3 p-3">
            <h2 className="text-white font-bold text-xl">Product Name: {Product.name}</h2>
            <p>Price: ₹{Product.price}</p>
            <p>Category: {Product.category}</p>
        </div>
  ))}
  
  </>)
}

export default Product;