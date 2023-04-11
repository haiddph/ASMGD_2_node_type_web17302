import React, { useEffect, useState } from 'react'
import HeaderHome from '../component/HeaderHome'
import { Button, Form, Input, message } from 'antd';
import { IUser } from '../types/product';
import { useNavigate } from 'react-router-dom';


type Props = {
  onAddUser: (user: IUser) => void;
}

const Signup = ({ onAddUser }: Props) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    // console.log(values);

    onAddUser(values);
    message.success("Đăng kí thành công! Vui lòng đăng nhập")
    navigate("/")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  //const navigate = useNavigate()

  return (
    <div className=''>
      <HeaderHome />
      <div className=''>

        <Form

          className=''
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0 auto' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2>SIGN UP</h2>
          <Form.Item
            label=" Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label=" Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Repass Password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your confirmPassword!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Signup