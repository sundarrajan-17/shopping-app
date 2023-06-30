import React,{useState,useEffect} from 'react'
import './Homepage.css'

const Homepage = ({AddtoCart}) => {

  const [data,setData]=useState([])
  const [state,setState]=useState("none")

  useEffect(()=>{
    createData()
 },[])

 const createData=async()=>{
   const res=await fetch('https://fakestoreapi.com/products');
   const datas=await res.json()
   setData(datas)
 }
  const HandleClick = () => {
    window.location.reload()
  }
  
  const Filter={
      none:{method: (a,b) => null},
      Ascending:{method: (a,b) => (a.title>b.title ? 1:-1) },
      Descending:{method: (a,b) => (a.title<b.title ? 1 : -1)},
      Rating:{method: (a,b) => (a.rating.rate<b.rating.rate ? 1:-1)},
      Price:{method:(a,b) => (a.price<b.price ? 1:-1)}
  }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3 filters'>
                <h2>FILTER BY</h2>
                <button onClick={()=>setState("Ascending")} className='btn'>Ascending Order</button>
                <button onClick={()=>setState("Descending")} className='btn'>Descending Order</button>
                <button onClick={()=>setState("Rating")} className='btn'>Rating</button>
                <button onClick={()=>setState("Price")} className='btn'>Price</button>
                <button onClick={HandleClick} className='btn'>Clear Filters</button>
            </div>
            <div className='col-9'>
                <div className='row'>
                {data.sort(Filter[state].method).map((value) => {
                    return (
                        <div className="card" key={value.id}>
                            <img src={value.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                                <p>Price: ${value.price}</p>
                                <p>Rating: {value.rating.rate}</p>
                                <button onClick={() => {
                                 return AddtoCart(value)
                                }} className="btn btn-info">Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage