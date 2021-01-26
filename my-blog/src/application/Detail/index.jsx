import React from 'react'
import {data} from '../../utils'
import {Card} from 'antd'

function Detail (props) {
    const ids = parseInt(props.match.params.id);
    console.log(ids)
    const dates = data.find(({id})=> id === ids)
    return (
        <Card style={{width:"60%",margin:"20px auto"}}>
            <div style={{textAlign:"center",fontWeight:"bold",fontSize:40,marginBottom:"20px" }}> {dates.title}</div>
            <div dangerouslySetInnerHTML={{ __html: dates.content }} />
        </Card>
    )
}

export default Detail;