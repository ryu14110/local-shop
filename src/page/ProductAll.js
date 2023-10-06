import React,{useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);  //UI에 보여주는 건 useState 저장한다
  const [query, setQuery] = useSearchParams();
  const getProducts=async()=>{
    let searchQuery = query.get('q')||"";
    // console.log("쿼리값은?", searchQuery);
    let url =  `https://my-json-server.typicode.com/ryu14110/local-shop/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data?",data);
    setProductList(data);
  }
  useEffect(()=>{  // API 호출는 useEffect 이용
    getProducts();
  },[query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu,index)=>(
            <Col lg={3} key={index}><ProductCard item={menu}/></Col>
          ))}
          
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll;
