import React, { useState } from  'react'
import Search from './components/Search'
import List from './components/List'
import ebay from './apis/ebay'

function App() {
  const [products, setProducts] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await ebay.get('/shopping?', {
      params: {QueryKeywords: term},
    })
    // console.log(response);

    setProducts({ response })
  }
  console.log(products);

  return (
  <>
    <Search onSubmit={onSearchSubmit} />     
    <List />
  </>
  );
}

export default App;
