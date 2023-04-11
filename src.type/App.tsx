import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/admin/Dashboard'
import ListProduct from './pages/admin/product/ListProduct'
import AddProduct from './pages/admin/product/AddProduct'
import UpdateProduct from './pages/admin/product/UpdateProduct'
import { getAllProduct, deleteProduct, updateProduct, addProduct } from './api/product'
import "./App.css"
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import { ICategory, IProduct, IUser } from './types/product'
import ListCategory from './pages/admin/category/ListCategory'
import { addCategory, deleteCategory, getAllCategory } from './api/category'
import AddCategory from './pages/admin/category/AddCategory'
import UpdateCategory from './pages/admin/category/UpdateCategory'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { IUsers, addUser, logInUser } from './api/user'
import ProductDetail from './pages/ProductDetail'
// import ProductCategory from './pages/admin/product/ProductCategory';


function App() {

  const [Products, setProducts] = useState<IProduct[]>([])
  const [Categories, setCategories] = useState<ICategory[]>([])
  const [productsByCategory, setProductsByCategory] = useState<{ [categoryId: string | number]: IProduct[] }>({});
  //Products
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) => setProducts(products.data))
  }, [])
  // console.log(products)

  const onhandleDelete = (id: number) => {
    deleteProduct(id).then(() => setProducts(Products.filter((item: any) => item._id !== id)))
  }

  const onHandleAdd = (products: any) => {
    addProduct(products).then(() => setProducts([...Products, products.data]))
  };

  const onhandleUpdate = (products: any) => {
    updateProduct(products).then(() => setProducts(Products.map((item: any) => item.id == products._id ? products : item)))
  }
  // const onhandlegetbyidCategory = (products: any) => {
  //   getAllProduct(categoryId).then(())
  // }
  // Category
  useEffect(() => {
    getAllCategory().then(({ data: { categories } }) => setCategories(categories))
  }, [])
  console.log(Categories);
  const onhandleDeleteCategory = (id: number) => {
    deleteCategory(id).then(() => setCategories(Categories.filter((item: any) => item._id !== id)))
  }
  const onHandleAddCategory = (categories: any) => {
    addCategory(categories).then(() => setCategories([...categories, categories]))
  };
  const onHandleAddUser = (users: any) => {
    addUser(users)
  }
  //Signin
  const onHandleSignIn = async (data: IUsers) => {
    const { data: user } = await logInUser(data);
    console.log("users", user);
    localStorage.setItem("users ", JSON.stringify(user));
  };
  //console.log()
  // productGetbyCategoryId



  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' >
            <Route index element={<Product products={Products} />} />
            <Route path=':_id' element={<ProductDetail />} />
          </Route>

          <Route path='signin' element={<Signin onSignin={onHandleSignIn} />} />
          <Route path='signup' element={<Signup onAddUser={onHandleAddUser} />} />
        </Route>
        <Route path='admin'>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ListProduct products={Products} onRemove={onhandleDelete} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            {/* <Route path=':_id/category' element={<ProductCategory products={Products} />} /> */}
            <Route path=':_id/update' element={<UpdateProduct products={Products} onUpdate={onhandleUpdate} />}></Route>
          </Route>Products
        </Route>
        <Route path='admin'>
          <Route index element={<Dashboard />} />
          <Route path='category'>
            <Route index element={<ListCategory onDelete={onhandleDeleteCategory} categories={Categories} />} />
            <Route path='add' element={<AddCategory onAddCategory={onHandleAddCategory} />} />
            <Route path=':_id/update' element={<UpdateCategory />}></Route>
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
