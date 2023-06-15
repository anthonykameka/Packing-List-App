import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: true},
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

const App = () => {

  const [items, setItems] = useState([])
  const numItems = items.length;

  const handleAddItems = (item) => {
    setItems([...items, item])
    console.log(items)
  }

  const handleDeleteItems = (id) => {
    // setItems(items=>items.filter(item => item.id !== id) )
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  const handlePackedItem = (id) => {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : {...item}))
  }

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to clear the list?')
    if (confirmed) setItems([])
    
  }


  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} onPackedItem={handlePackedItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}






export default App;
