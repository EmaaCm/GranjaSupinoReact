import "./ItemListContainer.css";
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductosData from "../Json/ProductData";

const ItemListContainer = ({ProductosData}) =>{
    return (
        <div>
            {ProductosData.map((item) =>{
                return(
                    <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{item.nombre}</Card.Title>
                      <Card.Text>
                        {item.tipo}
                        {item.precio}
                      </Card.Text>
                      <Button variant="primary">Comprar</Button>
                    </Card.Body>
                  </Card>

                )
            })}


        </div>

    )

};



export default ItemListContainer;