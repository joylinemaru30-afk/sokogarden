import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesapayment = () => {

    const[products,setproduct]=useState([]);
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState("");
    const[success,setsuccess]=useState("")

  

    // we shall use the uselocation hook to retrive the details(properties) passed from the previous component
    const{product}=useLocation().state ||{}

    const[phone,setphone]=useState("")

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

    console.log(product)
    // implement the mpesa payment function
    const submit=(e)=>{
        e.preventDefault()
        setloading(true)

        const data=new FormData()
        data.append("phone",setphone)
        data.append("amount",product.product_cost)

        const response= axios.post("https://joykosgei.pythonanywhere.com/api/mpesa_payment",data)
        

        setsuccess("mpesa prompt has been sent ")
        setloading(false)
    }

  return (
    <div className='row justify-content-center mt-3'>
                {loading && <Loader />}
                {success && <p className="text-success">{success}</p>}


        <h2>Welcome to the mpesa payment channel</h2>
        {/* {product.product_cost} <br />
        {product.product_description} <br />
        {product.product_id} <br />
        {product.product_name} <br /> */}
        <div className='col-md-6'>
        <img src={img_url+product.product_photo} alt="product image" className='card-img product_img mt-3' />
        <h4>product name: <span className='text-danger'>{product.product_name}</span></h4>
       <h4>price of the product:<span className='text-primary'>{product.product_cost}</span></h4>
       
       

        


        </div>
        <div className="col-md-6">
        <div className='card shadow p-4'>
        <form onSubmit={submit}>
            <label>Fill in the details to complete the transaction</label>
            <input type="number" className='form-control' value={product.product_cost} readOnly/>
            <br />

            <input type="number"
            placeholder='enter phone numberhere.format 2547..'
            value={phone}
            onChange={(e)=>{
                setphone(e.target.value)
            }

            }
            className='form-control'
             /><br />
             {/* {phone} */}
             
             <button className='btn btn-success'>complete payment</button>
        </form>
        </div>
        </div>




    

        </div>
  )
}


export default Mpesapayment