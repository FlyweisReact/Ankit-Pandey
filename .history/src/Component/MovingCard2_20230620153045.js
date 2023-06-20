import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Sample data for draggable cards
const initialCards = [
  { id: 'card1', title: 'Card 1', content: 'Card 1 content' },
  { id: 'card2', title: 'Card 2', content: 'Card 2 content' },
  { id: 'card3', title: 'Card 3', content: 'Card 3 content' },
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
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="droppable">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={{backgroundColor : "#fff"}}>
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {item.content}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
  )
}

export default MovingCard2