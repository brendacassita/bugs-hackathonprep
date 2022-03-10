import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const BugForm = ()=>{
    const params = useParams()
    const location = useLocation()
    return (
        <div>
            <h1>{params.id ? 'Edit' :'New'} BugForm</h1>
            <p>id: {params.id ? params.id :'no id' }</p>
            <p>{JSON.stringify(location)}</p>
        </div>
    )
}

export default BugForm