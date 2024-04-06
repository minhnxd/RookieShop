import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import AddToCart from "../components/cart/addToCart";

const Product = () => {
  const { id } = useParams();

  let url = `https://dummyjson.com/products/${id}`;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Card style={{ width: "50rem" }}>
        <tr>
          <th>
            <Card.Body>
              <Card.Title>
                {product.brand} {product.title}
              </Card.Title>

              {product.images &&
                product.images.length > 0 &&
                product.images.map((image, index) => (
                  <Image key={index} src={image} thumbnail />
                ))}
            </Card.Body>
          </th>
          <th>
            <Card.Body>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
              <AddToCart id={`${product.id}`} />
            </Card.Body>
          </th>
        </tr>
      </Card>
    </>
  );
};

export default Product;
