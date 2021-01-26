import React from 'react'
import './index.css'
import {Card, Col, Row,Tag,Divider} from "antd";
import {color} from "../../../utils";
import {data} from "../../../utils"
import { createHashHistory } from 'history';


function Lists(props) {
    const history = createHashHistory();
    console.log(props)
    const enterDetail = (ids) => {
        history.push(`/detail/${ids}`)
    }
    return (
        <div>
            {data.map((item,index) => (
                    <Card onClick={()=>enterDetail(item.id)} hoverable className="cardStyle" style={{margin:"20 auto",width:"100%",height:240,cursor:'pointer' }} key={index}>
                        <Row justify="space-between">
                            <Col span={16}>
                                <h1>{item.title}</h1>
                                <div style={{fontSize:20,fontWeight:"lighter"}}>{item.summary}</div>
                                <div style={{marginTop:30}}>
                                    {
                                        item.category.map(v =>(
                                            <Tag id="tags" style={{fontSize:18,margin:5, padding: "6px 10px"}} key={item+ Math.random()} color={color[Math.floor(Math.random() * color.length)]}>{v}</Tag>
                                        ))
                                    }
                                    <Divider type="vertical"/>
                                    {
                                        item.tag.map(v =>(
                                            <Tag id="tags" style={{fontSize:18,margin:10, padding: "6px 10px"}} key={item+ Math.random()} color={color[Math.floor(Math.random() * color.length)]}>{v}</Tag>
                                        ))
                                    }
                                    <Divider type="vertical"/>
                                    {
                                        <span style={{fontSize:18,fontWeight:"lighter"}}>{item.createdAt}</span>
                                    }
                                </div>
                            </Col>
                            <Col span={6}>
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            </Col>
                        </Row>
                    </Card>
                )
            )}
        </div>
    )
}

export default Lists;