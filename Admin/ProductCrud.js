import React, { useState } from 'react'
import AddProduct from './Addproduct'
import axios from 'axios'
import ProductList from './ProductList'

function ProductCrud() {
    const[editProduct,setEditProduct]=useState(null)
    const handleAdd=async (product) => {
         try {
            await axios.post("addapi",product)
            setMessage(" product add successful!")
         } catch (error) {
            setMessage("error product add")
         }


    }

    const handleEdit=async (product) => {
        try {
            await axios.put("updateApi",product)
            setMessage("product update successful!") 
        } catch (error) {
           setMessage("error product update") 
        }
    }

    const handelDelete= async (id) => {
           try {
            await axios.delete("delete api")
            setMessage("product delete succeful") 
            
           } catch (error) {
            setMessage("error product delete") 
           }
    }
  return (
    <div>ProductCrud


        <AddProduct onSubmit={editProduct?handleEdit:handleAdd}/>
        <ProductList onEdit={(product)=>setEditProduct(product)}
            
            onDelete={handelDelete}/>
    </div>
  )
}

export default ProductCrud