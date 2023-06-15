const History = {
  items: [
    {
      image: "racao",
      title: "Ração para pitbull",
      description: "Ideal para o seu amigo Thor de 39kgs",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: "racaoGato",
      title: "Ração para gato",
      description: "1kg de ração wiskas sache",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: "tucano",
      title: "Tucano de brinquedo",
      description: "Belo e exótico",
      price: "R$ 80,00",
      category: "brinquedo"
    },
  ],
};

describe('History', () => {
  test('should have at least one item', () => {
    expect(History.items.length).toBeGreaterThan(0);
  });

  test('each item should have an image', () => {
    History.items.forEach((item) => {
      expect(item.image).toBeDefined();
    });
  });

  test('each item should have a title', () => {
    History.items.forEach((item) => {
      expect(item.title).toBeDefined();
    });
  });

  test('each item should have a description', () => {
    History.items.forEach((item) => {
      expect(item.description).toBeDefined();
    });
  });

  test('each item should have a price', () => {
    History.items.forEach((item) => {
      expect(item.price).toBeDefined();
    });
  });

  test('each item should have a category', () => {
    History.items.forEach((item) => {
      expect(item.category).toBeDefined();
    });
  });
});
