import React , {useState} from 'react'

const initialItems = [
    { id: 'item1', content: 'Item 1' },
    { id: 'item2', content: 'Item 2' },
    { id: 'item3', content: 'Item 3' },
  ];

const MovingCard2 = () => {


    const [items, setItems] = useState(initialItems);

  // Function called when a draggable item is dropped
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(items);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(updatedItems);
  };

  return (
    <div style={{color : 'red'}}>MovingCard2</div>
  )
}

export default MovingCard2