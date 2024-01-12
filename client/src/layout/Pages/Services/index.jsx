import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import './index.scss'
import axios from 'axios'

const Services = () => {
    const [data, setdata] = useState([])

    const getMyDatas = async () => {
        const res = await axios.get('http://localhost:8002/api/')
        setdata(res.data)
    }

    useEffect(() => {
        getMyDatas()
    }, [])
    
    console.log(data.map(x => console.log(x.title)));

    
  return (
    <section id='services'>
        <Navbar/>
        <div className="section-content">
        <h1>Services</h1>
        <div className="boxes">

            {data && data.map(x => (
            <ul>
            <h2>Service</h2>
            <li>
                <span>title:{x.title}
                </span>
                </li>
                <span>price:{x.price}</span>
            <li>
                <img src="https://www.bing.com/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&w=173&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
            </li>
        </ul>
        
            ))}

           
        </div>
        </div>
    </section>
  )
}

export default Services