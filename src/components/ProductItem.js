import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <h3 className="productNotFound">Product Not Found</h3>
  console.log(shoe)

  return (
    <div className="productItemContainer">
      <div className="productItem">
        <h2>{shoe.name}</h2>
        <img src={shoe.img} height={500} width={500} alt="shoe" className="imgProductItem" />
      </div>
      <p className="paraProduct">Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>
    </div>
  );
}

export default ProductItem;
