import React from 'react'
import { useParams } from 'react-router-dom'

const BugForm = ()=>{
    const params = useParams()
    return (
        <div>
            <h1>{params.id ? 'Edit' :'New'} BugForm</h1>
            <p>id: {params.id ? params.id :'no id' }</p>
        </div>
    )
}

export default BugForm