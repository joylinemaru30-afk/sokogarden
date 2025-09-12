import React, { useState } from 'react'
import axios from "axios";

const Addproduct = () => {
  const[productname,setproductname]=useState("")
  const[productdescription,setproductdescription]=useState("")
  const[productcost,setproductcost]=useState("")
  const[productphoto,setproductphoto]=useState("")

  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");



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


  const submit =async (e) =>{
    e.preventDefault();
    setloading(true);
    setsuccess("");
    seterror("");

    try {
      const data = new FormData();
      data.append("product_name",productname);
      data.append("product_description",productdescription);
      data.append("product_cost",productcost);
      data.append("product_photo",productphoto);
      await axios.post("https://joykosgei.pythonanywhere.com/api/addproduct", data);

      setloading(false);
      setsuccess("✅ product added successful");
      setproductname("");
      setproductdescription("");
      setproductcost("");
      setproductphoto("");

    } catch{
      setloading(false)
      seterror("product not added")

    }


  };
    

  
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>

      
        <h1> Addproduct page</h1>


        {loading && <Loader />}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={submit}>
          <input type="text" 
          className='form-control'
          placeholder='enter your productname here'
          value={productname}
          onChange={(e)=>setproductname(e.target.value)}


          />
          {/* {productname} */}
          <br />
          <input type="text" 
          className='form-control'
          placeholder='enter your product description here'
          value={productdescription}
          onChange={(e)=>setproductdescription(e.target.value)}
          />
          {/* {productdescription} */}
          <br />
          <input type="number" 
          className='form-control'
          placeholder='enter your product cost here'
          value={productcost}
          onChange={(e)=>setproductcost(e.target.value)}
          
          />
          {/* {productcost} */}
          <br />
          <label>productphoto</label> <br />
          <input type="file" 
          className='form-control'
          accept='image/*'
          placeholder='enter your photo here'
          onChange={(e)=>setproductphoto(e.target.files[0])}
          />
          
          <br />
          <button className='btn btn-success'>Addproduct</button>

        </form>
    </div>
    </div>
  )
}

export default Addproduct