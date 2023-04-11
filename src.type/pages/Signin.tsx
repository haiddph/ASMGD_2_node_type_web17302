import React, { useEffect, useState } from 'react'
import HeaderHome from '../component/HeaderHome'
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';


type Props = {}

const Signin = (props: any) => {
  const navigate = useNavigate()
  console.log(props);
  const onFinish = (values: any) => {
    props.onSignin(values);
    message.success("Đăng nhập thành công!!!")
    navigate("/admin/products")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className=''>
      <HeaderHome />
      <div className=''>

        <Form

          className='formSignin'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0 auto' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2>SIGN IN</h2>
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


          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Signin