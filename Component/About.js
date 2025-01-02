import React from 'react'
import ClassState from './ClassState'
import ClassProp from './ClassProp'
import HeaderFunction from './HeaderFunction'
import Footer from './Footer'
import FunProps from './FunProps'


function About() {
  return (
    <div>
      <HeaderFunction/>
     
      <FunProps name="About"/>
<ClassProp Fname="Parth"/>

     <ClassState/>
<Footer/>
    </div>
  )
}

export default About