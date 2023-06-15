const Products = {
  items: [
    {
      id: 1,
      image: "racaoGato",
      title: "Ração de Gato",
      description: "Wiskas sache",
      price: "R$ 50,00",
      category: "racao",
      quantity: 100
    },
    {
      id: 2,
      image: "racao",
      title: "Ração para pitbull",
      description: "Ideal para o seu amigo Thor de 39kgs",
      price: "R$ 25,80",
      category: "racao",
      quantity: 23
    },
    {
      id: 3,
      image: "tucano",
      title: "Tucano de brinquedo",
      description: "Belo e exótico",
      price: "R$ 80,00",
      category: "brinquedo",
      quantity: 40
    },
    {
      id: 4,
      image: "peixe",
      title: "Peixe de aquario",
      description: "Para botar na caixa d'água",
      price: "R$ 30,00",
      category: "outros",
      quantity: 50
    },
  ],
};

describe('Products', () => {
  test('should contain an array of items', () => {
    expect(Array.isArray(Products.items)).toBe(true);
  });

  test('should have at least one item', () => {
    expect(Products.items.length).toBeGreaterThan(0);
  });

  test('each item should have an id', () => {
    Products.items.forEach((item) => {
      expect(item.id).toBeDefined();
    });
  });

  test('each item should have a valid price', () => {
    Products.items.forEach((item) => {
      expect(item.price).toMatch(/^R\$\s*\d+(\,\d{2})?$/);
    });
  });

  test('each item should have a category', () => {
    Products.items.forEach((item) => {
      expect(item.category).toBeDefined();
    });
  });
});
