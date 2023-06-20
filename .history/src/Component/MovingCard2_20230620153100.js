import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Sample data for draggable cards
const initialCards = [
  { id: 'card1', title: 'Card 1', content: 'Card 1 content' },
  { id: 'card2', title: 'Card 2', content: 'Card 2 content' },
  { id: 'card3', title: 'Card 3', content: 'Card 3 content' },
];


const MovingCard2 = () => {
  const [cards, setCards] = useState(initialCards);

  // Function called when a card is dropped
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedCards = Array.from(cards);
    const [reorderedCard] = updatedCards.splice(result.source.index, 1);
    updatedCards.splice(result.destination.index, 0, reorderedCard);

    setCards(updatedCards);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className="card">
                      <div className="card-title">{card.title}</div>
                      <div className="card-content">{card.content}</div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};


export default MovingCard2