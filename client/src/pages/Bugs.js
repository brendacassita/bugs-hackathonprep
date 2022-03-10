import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Bugs = ()=>{
    useEffect(()=>{
        getBugs()
    },[])
    const getBugs = async()=>{
        let res = await axios.get('/api/bugs')
        setBugs(res.data)
    }
    const [bugs, setBugs] = useState([])
    return (
        <div>
            <h1>Bugs</h1>
            <p>{JSON.stringify(bugs)}</p>
        </div>
    )
}

export default Bugs
