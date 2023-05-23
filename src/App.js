//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import ProductList from './Components/ProductList.js';
import Footer from './Components/Footer.js';
import React,{useState} from 'react';
import AddItem from './Components/AddItem.js';

function App() {
   const products = [
    {
      price : 2000,
      name : "prema latha",
      typeoforder : "Embridory work",
      quantity : 0,
    }
]

let [productList, setProductList] = useState(products);
let [totalAmount, setTotalAmount] = useState(0);

const incrementQuantity = (index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newProductList[index].quantity++;
  newTotalAmount += newProductList[index].price;
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
}     

const decrementQuantity = (index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  if (newProductList[index].quantity > 0) 
  {
    newProductList[index].quantity--;
    newTotalAmount -= newProductList[index].price;
  }
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
}  

const resetQuantity = () => {
  let newProductList = [...productList];
  newProductList.map((products)=>{
    products.quantity = 0
  })
  setProductList(newProductList);
  setTotalAmount(0);
}

const removeItem = (index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newTotalAmount -= 
    newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index, 1);
  setProductList(newProductList);
  setTotalAmount(newTotalAmount);
}

const addItem = (name, typeoforder,price) => {
  let newProductList = [...productList];
  newProductList.push({
    name:name,
    typeoforder:typeoforder,
    price:price,
    quantity:0
  });
  setProductList(newProductList);
}

  return (
    <>
    <Navbar/>
    <main className='container-mt-5'>
    <AddItem addItem = {addItem}/>
    <ProductList 
    productList = {productList}
    incrementQuantity = {incrementQuantity} 
    decrementQuantity = {decrementQuantity}
    removeItem = {removeItem}/>
    </main>
    <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity} />
    </>
  );
}
 
export default App;
