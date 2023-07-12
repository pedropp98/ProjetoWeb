import ProductForm from "../../components/ProductForm"
import React, { useState } from 'react';

function CreateProduct() {
  return (
    <>
    <main>
      <div className="container ">
      <ProductForm title="Criar novo Produto" button="Criar"/>
      </div>
    </main>
    </>
  );
}

export default CreateProduct;
