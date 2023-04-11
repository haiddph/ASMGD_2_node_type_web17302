import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { Menu, Button, Image } from 'antd';
import Typography from "antd/es/typography/Typography";
import { useNavigate, Link } from "react-router-dom";
import { Carousel } from 'antd';
import { useEffect, useState } from "react";
import { IProduct } from "../../types/product";
import { getAllProduct } from "../../api/product";
function HeaderHome() {
    const navigate = useNavigate()
    const onMenuClick = (item: any) => {
        navigate(`/${item.key}`)
    }
    const contentStyle: React.CSSProperties = {
        height: '300px',
        color: '#fff',
        lineHeight: '200px',
        textAlignLast: 'center',
        background: 'linear-gradient(90deg, rgba(29,113,145,1) 20%, rgba(39,71,164,1) 82%)',

    };
    const nenuHome: React.CSSProperties = {
        lineHeight: '70px',
    }
    return (
        <div className="anticon-star">
            <Menu
                onClick={onMenuClick}
                mode="horizontal"
                style={nenuHome}
                items={[
                    {
                        label: <HomeFilled />,
                        key: "",
                    },
                    {
                        label: "About",
                        key: "about",
                    },
                    {
                        label: "Page",
                        key: "page",
                        children: [
                            {
                                label: "Page Products",
                                key: "page-products",

                            }
                        ]
                    },

                    {
                        label: <Button><Link to={"/signup"}>Đăng kí</Link></Button>,
                        key: "signup",
                    },
                    {
                        label: <Button><Link to={"/signin"}>Đăng nhập</Link></Button>,
                        key: "signin",
                    },
                ]}
            />

            <Carousel autoplay className="">
                <div>
                    <h3 style={contentStyle}> <Image className="displayImage" width={1300} src={"https://taogiare.vn/wp-content/uploads/2023/02/7db0f8b5f855220b7b442-1024x200.jpg"} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><Image className="displayImage" width={1300} src={"https://taogiare.vn/wp-content/uploads/2023/02/bf0aed82ed62373c6e733-1024x200.jpg"} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><Image className="displayImage" width={1300} src={"https://taogiare.vn/wp-content/uploads/2023/02/1ad130b12f51f50fac405-2048x400.jpg"} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><Image className="displayImage" width={1300} src={"https://taogiare.vn/wp-content/uploads/2023/02/390b656e7a8ea0d0f99f6-2048x400.jpg"} /></h3>
                </div>
            </Carousel>
        </div>
    )
}

export default HeaderHome