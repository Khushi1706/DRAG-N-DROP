import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from '../../components/card/card';


const DndUsingPlugin = ({ data, setData }) => {

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "#daffff" : "",
    });

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        background: isDragging ? "#FFB6C1)" : "",
        ...draggableStyle
    });

    const getList = (id) => data[id];

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /**
     * Moves an item from one list to another list.
     */
    const move = (source, destination, droppableSource, droppableDestination) => {
        console.log("==================================");
        console.log("data", source, destination, droppableSource, droppableDestination)
        console.log("==================================");

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

        console.log("asdasasd", source, destination)

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

            setData({ ...data, ...state })
        } else {
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );
            setData({ ...data, ...result })
        }
    };

    return (
    
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="grid grid-flow-col grid-rows-1 grid-cols-4 gap-4">
        { 
            Object.keys(data).map(header => (
                <Droppable droppableId={header} key={`${header}`} >
                    {(provided, snapshot) => (
                        <div className="bg-green-50 p-8 m-2" style={getListStyle(snapshot.isDraggingOver)} ref={provided.innerRef}>
                            {
                                data[header].map((item, index) => (<Draggable
                                    key={item.id}
                                    draggableId={`${item.id}`}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            <Card story={item} index={index} status={header} />
                                            {console.log(header)}
                                        </div>
                                    )}
                                </Draggable>))
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>))
        }
        </div>
    </DragDropContext>)
}

DndUsingPlugin.propTypes = {
    data: PropTypes.object,
    onMove: PropTypes.func
}

DndUsingPlugin.defaultProps = {
    data: {
        resources: [],
        todo: [],
        doing: [],
        done: []
    },
    setData: () => { }
}
export default DndUsingPlugin;

