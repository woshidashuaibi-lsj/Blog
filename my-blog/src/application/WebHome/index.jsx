import React, {useRef} from 'react';
import './index.css'
import Particles from 'react-particles-js'
import List from "./List";
import Left from "./Left"
import {Col,Row} from "antd";


function WebHome(props) {
    const scrollGoDown = () => {
        window.scrollTo({
            top: 1200,
            behavior: "smooth"
        })
    }

    return (
        <div style={{position: 'relative'}}>
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#00008B",
                                blur: 1
                            }
                        },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 1000
                            },
                        },
                    }
                }}
                style={{
                    width: '100%',
                    height: 200,
                }}
            />
            <div style={{
                position: "absolute",
                left: '50%',
                top: 200,
                transform: 'translate(-50%,0)'
            }}>
                <img src='http://resource.muyiy.cn/image/javascript.gif' alt={"前端动态图"}
                     style={{
                         width: '50vw',
                         height: '35vh',
                     }}
                />
                <div style={{fontSize: 60, fontWeight: 'bolder', textAlign: 'center', marginTop: 20}}>穗杰的前端博客</div>
                <div style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>正经人谁写日记啊？</div>
                <div className="border-btn">
                    <button className="btn" onClick={scrollGoDown}>GO</button>
                </div>
            </div>
            <Row justify="space-around" style={{width:"80%",margin:"0 auto"}}>
                <Col span={8}>
                    <Left/>
                </Col>
                <Col span={16}>
                    <List />
                </Col>
            </Row>
            {/*<Left />*/}
            {/*<List style={{*/}
            {/*    position: "absolute",*/}
            {/*    left: '50%',*/}
            {/*    top: 400,*/}
            {/*    transform: 'translate(-50%,0)'*/}
            {/*}}/>*/}
        </div>
    )
}

export default WebHome;