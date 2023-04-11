import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/product'
import { Image } from "antd"
import HeaderHome from '../component/HeaderHome'
import { IProduct } from '../types/product'

type Props = {}

const ProductDetail = (props: Props) => {
    const { _id } = useParams<{ _id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        getOneProduct(_id).then(({ data: { product } }) => {
            setProduct(product);
        });
    }, [_id]);

    if (!product) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className='container'>
            <HeaderHome />
            <div className='displayImage' >
                <div className='display'>
                    <Image className="displayImage" src={product.image} />
                    <div className='item'>
                        <div className='itemText'><p>{product.name}</p></div>
                        <div className='itemPrice'>Giá sản phẩm: {product.price} VNĐ </div>
                        <p>100% hàng chất lượng</p>
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
                <hr />
                <div className='des'>
                    <div className='itemDes'><p className='itemDes'>Mô tả sản phẩm : {product.description}</p></div>
                </div>
            </div>
            <div>
                {/* <AppFooter /> */}
            </div>
        </div>
    );
}

export default ProductDetail;
