
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"

const ItemListContainer = ({productosData}) =>{
    console.log("hola")
    return (
        <div id="galeria">
            {productosData.map((item) =>{
                return(
                    <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img src={item.img} /> 
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