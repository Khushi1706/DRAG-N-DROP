import React, { useContext } from 'react'
import { MovableContext } from '../context/DndContext'

const Droppable = ({ title, children, onDrop, onMove, ...props }) => {

    const { source, destinationId } = useContext(MovableContext);

    /**
     * 
     * @param {*} event 
     * This event is triggered on onDrop that is once the drop is complete
     */
    const onDropComplete = (event) => {
        console.log("event", title, destinationId)
        onMove({ source, destination: { droppableId: title, index: destinationId.current } })
    }

    /**
     * 
     * @param {*} event 
     * This function makes the droppable to drop the items
     */
    const onDragOver = (event) => {
        event.preventDefault();
    }

    return (
        <div className="bg-green-50 p-8 m-2"
            onDrop={onDropComplete}
            onDragOver={(e) => { onDragOver(e) }}
            key={title}>
            <div className="text-red-500">{title.toUpperCase()}</div>
            {children}
        </div>)
}

export default Droppable;