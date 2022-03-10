import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Bug from '../components/Bug'

const Bugs = ()=>{
    const navigate = useNavigate()
    const [bugs, setBugs] = useState([])
    useEffect(()=>{
        getBugs()
    },[])
    const getBugs = async()=>{
        let res = await axios.get('/api/bugs')
        setBugs(res.data)
    }
    const renderBugs = () => {
       return bugs.map(b=> {
           return <Bug key={b.id} {...b}/>
       })
    }
    return (
        <div>
            <h1>Bugs</h1>
            <button onClick={()=>navigate('/bugs/new')}>new</button>
            <div>
                {renderBugs()}
            </div>
            <p>{JSON.stringify(bugs)}</p>
        </div>
    )
}

export default Bugs
