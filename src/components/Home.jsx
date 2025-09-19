import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FooterSocial from './Footer';

const Home = () => {

  // Declare your hooks
  const[products,setproduct]=useState([]);
  const[loading,setloading]=useState(false);
  const[error,seterror]=useState("");


  const navigate=useNavigate()

  console.log(products)

  // declare the image url and store it inside of a variable
  const img_url="https://joykosgei.pythonanywhere.com/static/images/"


  const Loader = () => (
    <div className="hourglassBackground">
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
  )

  // create a function that will automatically be called when the home componenet is accessed
  const fetchproducts=async()=>{
    // update the loading hook with message
    setloading(true)
    try{
      const response =await axios.get("https://joykosgei.pythonanywhere.com/api/getproducts")

      // update the products hook with the products fetched from the API end point
      setproduct(response.data)

      // stop loading
      setloading(false)

    }
    catch (error){

      setloading(false)
      seterror("there was an error encountered...please try again later...")
    }
 
  }


    // useEffect hook:

    useEffect(()=>{
      fetchproducts()
    },[])
  return (
    <div className="m-3">
      <h3 className='text-info'>Available products</h3>
      <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">{loading && <Loader />}
        {error && <p className="text-danger">{error}</p>}
</div>
      <div className="col-md-4"></div>

        
      </div>
      
    <div className='row '>
      {products.map((product,index)=>(
      <div className='col-md-3 mb-4'>
        <div className='card shadow h -100'>
          <img src={img_url+product.product_photo} alt="product image" className='card-img product
          _img mt-3' />
        <div className="cardbody">
          <h5>{product.product_name}</h5>
          <p className='text-dark'>{product.product_description.slice(0,50)}...</p>
          <b className="text-warning">{product.product_cost}</b> <br />

           <button className=" btn btn-success mt-2" onClick={()=> navigate("/mpesapayment",{state:{product}})} >Buy now</button>
        </div>
    </div>
    </div>
    ))}
    </div>
    <FooterSocial/>
    </div>
    

    
  )
}

export default Home