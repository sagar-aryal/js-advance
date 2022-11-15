const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const ShoppingList = () => {
  return (
    <>
      {products.map((item) => (
        <li key={item.id} style={{ color: item.isFruit ? "maroon" : "green" }}>
          {item.title}
        </li>
      ))}
    </>
  );
};

export default ShoppingList;
