import React,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
const About = () => {
  const a = useContext(noteContext);
  useEffect(()=>{
    a.update()
    //below comment helps us to use useEffect as componenent Did Mount else it would have been used again and again
    // eslint-disable-next-line
  },[])
  return (
    <div>This is About {a.state.name} and he is in class {a.state.class} </div>
  )
}

export default About