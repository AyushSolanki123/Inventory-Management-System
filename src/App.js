import SearchBar from './Components/SearchBar';
import AddItem  from './Components/AddItem';
import ItemsDisplay from './Components/ItemsDisplay';
import { useState, useEffect } from 'react';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("https://inventory-backend1981.herokuapp.com/items")
      .then((response) => response.json())
      .then((data) => setData({items: data}))
  }, []);

  const updateFilters= (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",        
      },
      body: JSON.stringify(item)
    };

    fetch("https://inventory-backend1981.herokuapp.com/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({items: items});
      });
  }

  const deleteItems = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    };
    fetch(`https://inventory-backend1981.herokuapp.com/items/${item.id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          const index = items.indexOf(item);
          items.splice(index, 1);
          setData({items: items})
        }
      })
  }

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {return data;}

    for (const item of data) {
      if (filters.name !== "" && item.name.toLowerCase() !== filters.name.toLowerCase()) 
        continue;

      if (filters.price !== 0 && item.price > filters.price) 
        continue;
      
      if (filters.type !== "" && item.type.toLowerCase() !== filters.type.toLowerCase()) 
        continue;
      
      if (filters.brand !== "" && item.brand.toLowerCase() !== filters.brand.toLowerCase()) 
        continue;  

      filteredData.push(item)
    }

    return filteredData;
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">        
        <ItemsDisplay
          deleteItems={deleteItems}
          items={filterData(data["items"])}
        />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />        
      </div>
    </div>
  );
}

export default App;
