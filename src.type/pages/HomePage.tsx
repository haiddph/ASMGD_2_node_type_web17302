import { Badge, Image, Rate, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderHome from '../component/HeaderHome'
import { List } from 'antd';
import { getAllProduct } from '../api/product';
import Card from 'antd/es/card/Card';

import { IProduct } from '../types/product';
import { Link } from 'react-router-dom';


import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
type Props = {
  products: IProduct[];
}

const HomePage = (props: Props) => {

  const [productList, setProductList] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) => setProductList(products.data))

  }, [])
  const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };


  return (
    <div >
      <HeaderHome />

      <div>
        <List
          grid={{ column: 4 }}
          renderItem={(products: any, index) => {
            return (
              <Badge.Ribbon className="itemCardBadge" text="Mới !" color="red">
                <Link to={`products/${products._id}`}>
                  <Card
                    className="itemCard"
                    title={products.name}
                    key={index}
                    cover={
                      <Image className="itemImage" src={products.image} />
                    }
                    actions={[
                      <>
                        <Rate defaultValue={2} character={({ index }: { index: number }) => index + 1} />
                        <br />
                        <Rate defaultValue={3} character={({ index }: { index: number }) => customIcons[index + 1]} />
                      </>
                    ]}
                  >

                    <Card.Meta title={
                      <Typography.Paragraph>
                        Price:
                        <Typography.Text type="danger">{products.price}</Typography.Text>
                      </Typography.Paragraph>
                    }

                      description={products.description}
                    ></Card.Meta>
                  </Card>
                </Link>
              </Badge.Ribbon>
            );
          }}
          dataSource={productList}
        ></List>

      </div>

    </div >
  )
}

export default HomePage