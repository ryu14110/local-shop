import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';  //주소창의 id 를 불러온다
import { Container, Row, Col, DropdownButton, Dropdown,Button} from 'react-bootstrap';

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  let {id} = useParams()
  const getProductDetail=async()=>{
    let url =`https://my-json-server.typicode.com/ryu14110/local-shop/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[]);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="이미지" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" :""}</div>
          <div>{product?.new === true ? "신제품" : ""}</div><br/>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton><br/>
          <Button variant="primary" className="add-button">Primary</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
