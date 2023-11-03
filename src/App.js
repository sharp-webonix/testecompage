import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import products from './db/data';
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from './components/Card';
import './index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, price, title }) =>
          category === selected ||
          company === selected ||
          price === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title,  description, price }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          description={description}
          price={price}
          
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);
  return (
  <>
    <Sidebar handleChange={handleChange} />
    <Nav query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Product result={result} />

  </>
  );
}

export default App;
