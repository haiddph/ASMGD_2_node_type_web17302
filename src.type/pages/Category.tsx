import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAllProductByCategory } from "../../api/product";

const ProductTable = ({ categoryId }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllProductByCategory(categoryId)
            .then(response => setData(response.data))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <Table dataSource={data} loading={loading}>
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Price" dataIndex="price" key="price" />
            <Table.Column title="Description" dataIndex="description" key="description" />
        </Table>
    );
};

const CategoriesProducts = ({ match }) => {
    const { id: categoryId } = match.params;

    return (
        <div>
            <h1>Products in Category {categoryId}</h1>
            <ProductTable categoryId={categoryId} />
        </div>
    );
};

export default CategoriesProducts;
