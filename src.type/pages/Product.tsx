import { Badge, Image, Rate, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { List } from 'antd';
import { getAllProduct } from '../api/product';
import Card from 'antd/es/card/Card';

import { Link } from "react-router-dom"
import { IProduct } from '../types/product';

type Props = {
  products: IProduct[],
}

const Product = ({ products }: Props) => {

  const [productList, setProductList] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) => setProductList(products.data))
  }, [])

  return (
    <div>
      <div>
        <List
          grid={{ column: 3 }}
          renderItem={(products: any, index) => {
            console.log(products);

            return (
              <Badge.Ribbon className="itemCardBadge" text="50%" color="red">
                <Link to={`/products/${products._id}`}>
                  <Card
                    className="itemCard"
                    title={products.name}
                    key={index}
                    cover={
                      <Image className="itemImage" src={products.image} />
                    }
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
      <AppFooter />
    </div>
  )
}

export default Product