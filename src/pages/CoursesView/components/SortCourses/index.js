import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Card from "@material-ui/core/Card";

// // fake data generator
// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}`,
//     name: `item ${k + offset}`
//   }));

// a little function to help us with reordering the result
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
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,

  ...(isDragging && {
    background: "rgb(235,235,235)"
  })
});

const getListStyle = isDraggingOver => ({
  //background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

export default class SortCourses extends Component {
  state = {
    items: this.props.data.courses.slice(1),
    selected: [this.props.data.courses[0]]
    // items: getItems(10),
    // selected: getItems(5, 10)
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: "items",
    droppable2: "selected"
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list do nothing
    if (!destination) {
      return;
    }

    // if dropped in the same list then reorder the list
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      this.setState({
        items: result.droppable,
        selected: result.droppable2
      });
    }
  };

  //Handle moving an item from the completed list to the available list
  handleRemove = id => {
    const result = move(
      this.getList("droppable2"),
      this.getList("droppable"),
      { index: 0, droppableId: "droppable2" },
      { index: 0, droppableId: "droppable" }
    );
    this.setState({
      items: result.droppable,
      selected: result.droppable2
    });
  };

  //Handle moving an item from the available list to the completed list
  handleAdd = id => {
    const result = move(
      this.getList("droppable"),
      this.getList("droppable2"),
      { index: 0, droppableId: "droppable" },
      { index: 0, droppableId: "droppable2" }
    );
    this.setState({
      items: result.droppable,
      selected: result.droppable2
    });
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Card>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <List>
                  <ListSubheader>{"Completed"}</ListSubheader>
                  {this.state.selected.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <RootRef rootRef={provided.innerRef}>
                          <ListItem
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <ListItemIcon>
                              <DragIndicatorIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={item.name}
                              secondary={item.number}
                            />
                            <ListItemSecondaryAction>
                              <IconButton
                                color="secondary"
                                onClick={() => this.handleRemove(item.id)}
                              >
                                <RemoveCircleIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        </RootRef>
                      )}
                    </Draggable>
                  ))}
                </List>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Card>
        <Card>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <ListSubheader>{"Available"}</ListSubheader>
                <List>
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <RootRef rootRef={provided.innerRef}>
                          <ListItem
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <ListItemIcon>
                              <DragIndicatorIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={item.name}
                              secondary={item.number}
                            />
                            <ListItemSecondaryAction>
                              <IconButton
                                color="primary"
                                onClick={() => this.handleAdd(item.id)}
                              >
                                <AddCircleIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        </RootRef>
                      )}
                    </Draggable>
                  ))}
                </List>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Card>
      </DragDropContext>
    );
  }
}
