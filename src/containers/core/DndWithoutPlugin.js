import React, { useRef, useState } from 'react'
import Draggable from '../../components/draggable/Draggable'
import Droppable from '../../components/droppable/Droppable'
import PropTypes from 'prop-types';
import { MovableContext } from './../../components/context/DndContext'
import Card from '../../components/card/card';

const DndWithoutPlugin = ({data, setData}) => {

    const [source, setSource] = useState(null);
    const destinationId = useRef(null);

    const onDragOver = (result) => {
        console.log("result", result)
    }


    const getList = (id) => data[id];

    const reorder = (list, startIndex, endIndex) => {
        console.log("list", list, startIndex, endIndex);
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    };
    
    /**
     * Moves an item from one list to another list.
     */
    const move = (source, destination, droppableSource, droppableDestination) => {
    
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
    
        destClone.splice(droppableDestination.index, 0, removed);
    
        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
    
        return result;
    };


    const onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            Object.keys(data).forEach(item => {
                if (source.droppableId === item) {
                    state = { [item]: items };
                }
            })

            setData({...data, ...state})
        } else {
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );
            setData({...data, ...result})
        }
    };

    return (
        <MovableContext.Provider
            value={{
                source, setSource, destinationId
            }}
        >
        <div className="grid grid-flow-col grid-rows-1 grid-cols-4 gap-4">
        {
            Object.keys(data).map((item) => <Droppable key={item} onDrop={onDragOver} onMove={onDragEnd} title={item} >
                {
                    data[item].map((story, index) => {
                        return <Draggable key={index} status={item} index={index}><Card story={story} index={index} status={item}/> </Draggable>
                    })
                }
            </Droppable>)
        }
        </div>
    </MovableContext.Provider>
    )

}

DndWithoutPlugin.propTypes = {
    data: PropTypes.object,
    onMove: PropTypes.func
}

DndWithoutPlugin.defaultProps = {
    data: {
        resources: [],
        todo: [],
        doing: [],
        done: []
    },
    setData: () => {}
}

export default DndWithoutPlugin;