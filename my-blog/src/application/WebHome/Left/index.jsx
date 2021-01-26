import React from 'react'
import {Card,Divider,Tag} from "antd";
import avatar from './img/header.jpg'
import './index.css'
import {color} from '../../../utils/index'
import {
    LikeTwoTone,
    EyeTwoTone,
    FireTwoTone,
    SnippetsTwoTone
} from '@ant-design/icons';



function Left(props) {
    const tags = [
        {
            "createdAt": "2019-03-30 12:47",
            "updatedAt": "2019-03-30 12:47",
            "id": 1,
            "name": "Node"
        },
        {
            "createdAt": "2019-03-30 12:47",
            "updatedAt": "2019-03-30 12:47",
            "id": 2,
            "name": "Vue"
        },
        {
            "createdAt": "2019-03-30 12:47",
            "updatedAt": "2019-03-30 12:47",
            "id": 3,
            "name": "React"
        },
        {
            "createdAt": "2019-03-30 12:47",
            "updatedAt": "2019-03-30 12:47",
            "id": 4,
            "name": "Koa"
        },
        {
            "createdAt": "2019-03-30 12:47",
            "updatedAt": "2019-03-30 12:47",
            "id": 5,
            "name": "Nginx"
        },
        {
            "createdAt": "2019-03-31 15:54",
            "updatedAt": "2019-03-31 15:54",
            "id": 7,
            "name": "Mysql"
        },
        {
            "createdAt": "2019-03-31 15:54",
            "updatedAt": "2019-03-31 15:54",
            "id": 8,
            "name": "Sequelize"
        },
        {
            "createdAt": "2019-04-10 18:49",
            "updatedAt": "2019-04-10 18:49",
            "id": 9,
            "name": "JS"
        },
        {
            "createdAt": "2019-04-10 20:15",
            "updatedAt": "2019-04-10 20:15",
            "id": 10,
            "name": "less"
        },
        {
            "createdAt": "2019-04-10 20:15",
            "updatedAt": "2019-04-10 20:15",
            "id": 11,
            "name": "axios"
        },
        {
            "createdAt": "2019-04-10 20:16",
            "updatedAt": "2019-04-10 20:16",
            "id": 12,
            "name": "xshell"
        },
        {
            "createdAt": "2019-04-10 20:17",
            "updatedAt": "2019-04-10 20:17",
            "id": 13,
            "name": "es6"
        },
        {
            "createdAt": "2019-11-11 10:59",
            "updatedAt": "2019-11-11 10:59",
            "id": 14,
            "name": "Jenkins"
        }
    ]

    return (
        <>
            <Card className="cardStyle" hoverable >
                <div className="admin-info">
                    <header id="header">
                        <img id="headerImg" src={avatar} alt="avatar" title=" 我是蜘蛛侠" style={{width: 150, height: 150}}/>
                    </header>
                    <p className="admin-name">
                        哆啦
                    </p>
                    <p className="admin-desc">
                        为团长献出心脏的调查兵团成员
                        <br/>
                        拥有帅气果实的草帽海贼团第十一位船员
                        <br/>
                        23岁还没觉醒血轮眼的木叶村第十代火影
                        <br/>
                        对！没错！我就是JOJO啦！木大木大木大！！！
                    </p>
                </div>
            </Card>
            <Card hoverable size="large" className="cardStyle" style={{height:300}}>
                <Divider orientation="left">个人成就</Divider>
                <h1><LikeTwoTone/> 获得点赞 14</h1>
                <h1><EyeTwoTone twoToneColor="#DAA520"/> 文章被阅读 300</h1>
                <h1><FireTwoTone twoToneColor="#DB7093"/> 魅力值 max</h1>
            </Card>
            <Card hoverable  className="cardStyle">
                <Divider orientation="left">标签</Divider>
                <div className="tags-content">
                    {
                        tags.map(v => (
                            <Tag id="tags" style={{margin:10,padding: '8px 12px',fontSize:18}} key={v.id} color={color[Math.floor(Math.random() * color.length)]}>{v.name}</Tag>
                        ))
                    }
                </div>
            </Card>
        </>
    )
}

export default Left;