const ProductsRecommend = {
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
      title: "Ração para Gato",
      description: "Wiskas sache",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: "racaoCoelho",
      title: "Ração de Coelho",
      description: "1kd de ração de coelho",
      price: "R$ 80,00",
      category: "racao"
    },
    {
      image: "racaoGalinha",
      title: "Ração para Galinha",
      description: "1 kg de milho",
      price: "R$ 25,80",
      category: "racao"
    },
    {
      image: "tucano",
      title: "Tucano de brinquedo",
      description: "Belo e exótico",
      price: "R$ 80,00",
      category: "brinquedo"
    }
  ],
};

describe('ProductsRecommend', () => {
  test('should have an array of items', () => {
    expect(Array.isArray(ProductsRecommend.items)).toBe(true);
  });

  test('each item should have an image property', () => {
    ProductsRecommend.items.forEach((item) => {
      expect(item.image).toBeDefined();
    });
  });

  test('each item should have a title property', () => {
    ProductsRecommend.items.forEach((item) => {
      expect(item.title).toBeDefined();
    });
  });

  test('each item should have a description property', () => {
    ProductsRecommend.items.forEach((item) => {
      expect(item.description).toBeDefined();
    });
  });

  test('each item should have a price property', () => {
    ProductsRecommend.items.forEach((item) => {
      expect(item.price).toBeDefined();
    });
  });

  test('each item should have a category property', () => {
    ProductsRecommend.items.forEach((item) => {
      expect(item.category).toBeDefined();
    });
  });
});
test('should filter and slice items based on most recurrent category', () => {
  const History = {
    items: [
      {
        image: 'racao',
        title: 'Ração para pitbull',
        description: 'Ideal para o seu amigo Thor de 39kgs',
        price: 'R$ 25,80',
        category: 'racao',
      },
      {
        image: 'racaoGato',
        title: 'Ração para gato',
        description: '1kg de ração wiskas sache',
        price: 'R$ 25,80',
        category: 'racao',
      },
      {
        image: 'tucano',
        title: 'Tucano de brinquedo',
        description: 'Belo e exótico',
        price: 'R$ 80,00',
        category: 'brinquedo',
      },
    ],
  };

  const categoryCounts = {};
  History.items.forEach((item) => {
    const category = item.category;
    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });

  let mostRecurrentCategory;
  let maxCount = 0;
  for (const category in categoryCounts) {
    if (categoryCounts[category] > maxCount) {
      maxCount = categoryCounts[category];
      mostRecurrentCategory = category;
    }
  }

  const filteredItems = ProductsRecommend.items.filter(
    (item) => item.category === mostRecurrentCategory
  );

  const slicedItems = filteredItems.slice(0, 3);

  expect(slicedItems.length).toBeLessThanOrEqual(3);
  slicedItems.forEach((item) => {
    expect(item.category).toBe(mostRecurrentCategory);
  });
});
