import React  from 'react'
import HeaderFunction from './HeaderFunction'
import Footer from './Footer'
import FuntionState from './FuntionState'
import FunProps from './FunProps'
// import ClassState from './ClassState'
// import ClassProp from './ClassProp'


function Home() {
  return (
    <div>
      <HeaderFunction/>
    
     <FunProps name="Home"/>
   
<Footer/>
    {/* {/* <Parent/> */}
     <FuntionState/> 
     {/* <ClassState/> */}
     {/* <ClassProp Fname="Parth"/> */}
 
    </div>
  )
}

export default Home