import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import { Helmet } from 'react-helmet-async'
import Welcome from '../../../components/Welcome'

const Home = () => {
    const [data, setdata] = useState([])

    const fetchData = async () => {
        const resp = await fetch("http://localhost:8002/api/")
        const jsonData = await resp.json()
        setdata(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Helmet>
                <title>Qakif</title>
            </Helmet>
            <Welcome></Welcome>
           
        </div>
    )
}

export default Home