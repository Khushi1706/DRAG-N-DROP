import React, { useContext} from 'react'
import {  MovableContext } from '../context/DndContext';

const Draggable = ({ status, index, children }) => {
    const { setSource, destinationId } = useContext(MovableContext);

    /**
     * Once the element is selected and dragged we run this function
     */
    const onDragStart = () => {
        setSource({
            droppableId: status,
            index: index
        })
        
    }

    /**
     * I am using this function to update the index where it is moving to
     * We are not using setDestination like setSource because of two things. 1) context might not be there 
     * 2) setDestination will become a async function and there is no guarentee than it will execute before onDrop function in draggable
     */
    const onDragEnter = () => {
        destinationId.current = index;
    }

    return <div draggable className="draggable"  key={index} onDragStart={onDragStart} onDragEnter={onDragEnter} >{children}</div>
}

export default Draggable;