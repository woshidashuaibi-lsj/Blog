import React from 'react';
import {renderRoutes} from "react-router-config";
import {Card, Col, Menu, Row, message, Input, BackTop} from "antd";
import {Link} from "react-router-dom";
import './index.css'
import {FieldTimeOutlined,ShareAltOutlined,SearchOutlined, HomeOutlined, SettingOutlined, UserSwitchOutlined,ChromeOutlined,WeiboCircleOutlined,GithubOutlined,ZhihuOutlined} from "@ant-design/icons";

function Home(props) {
    const { route } = props;
    const { SubMenu } = Menu
    const warning = () => {
        message.warning('正经人谁玩微博呀？');
    };

    const handleClick=()=>{
        console.log(123)
    }
    return (

        <div>

            <Card
                hoverable
                style={{ width: '100%',height:100,top:0 }}
            >
                <Row justify="space-between">
                    <Col span={6}>
                        <Link to="/webHome" style={{color:'black'}}>
                            <HomeOutlined style={{fontSize:30,marginRight:10}}/>
                            <span style={{fontWeight:"bold",fontSize:30}}>哆啦的万事屋</span>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Input size="large" placeholder="" prefix={<SearchOutlined />} />
                    </Col>
                    <Col span={10}>
                        <Menu onClick={handleClick} mode="horizontal" style={{right :0,fontSize:20,fontWeight:500}} defaultSelectedKeys="home">
                            <Menu.Item key="home" icon={<HomeOutlined style={{fontSize:20}}/>}>
                                <Link to="/webHome">
                                主页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="timeLine" icon={<FieldTimeOutlined style={{fontSize:20}}/>}>
                                <Link to="/timeLine">
                                时间线
                                </Link>
                            </Menu.Item>
                            <SubMenu key="about" icon={<SettingOutlined style={{fontSize:20}}/>} title="归档">
                                <Menu.Item key="setting:1">react 相关</Menu.Item>
                                <Menu.Item key="setting:2">面试宝典</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="personal" icon={<UserSwitchOutlined style={{fontSize:20}}/>}>
                                <Link to="/personal">
                                    个人相关
                                </Link>
                            </Menu.Item>
                            <SubMenu key="communicate" icon={<ChromeOutlined style={{fontSize:25}}/>} title="我的社交">
                                <Menu.Item onClick={warning} icon={<WeiboCircleOutlined />} key="set:1">微博</Menu.Item>
                                <Menu.Item icon={<GithubOutlined />} key="set:2">
                                    <a href='https://github.com/woshidashuaibi-lsj' target="_blank">
                                    github
                                    </a>
                                </Menu.Item>
                                <Menu.Item icon={<ZhihuOutlined />} key="set:3">知乎</Menu.Item>
                                <Menu.Item icon={<ShareAltOutlined />} key="set:4">掘金</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Card>
            <BackTop id="Top" style={{bottom:200,right:150}}>
                <img src={'http://s2.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/rocket_top.bcc748c3.png'} alt="回到最上层"/>
            </BackTop>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Home;