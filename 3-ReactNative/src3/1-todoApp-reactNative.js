import React from "react"
// import { render } from "react-dom"; //16.2.0
import {View, Button, Text, ScrollView, StyleSheet, StatusBar, Switch} from 'react-native'
import {Constants} from 'expo'

let id = 0;

const styles = StyleSheet.create({
  todoContainer: {  flexDirection: 'row', alignItems: 'center'  },
  appContainer: {    paddingTop: StatusBar.currentHeight    },
  fill: { flex: 1 },
})

const Todo = (props) => (
  <View style={styles.todoContainer}>
    {/* TODO: Input */}
    <Switch value={props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="Delete"/>
    <Text>{props.todo.text}</Text>
  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    id++
    // const text = prompt("Input Todo Text");
    const text = `TODO number ${id}`

    //Push moutates an object and doesn't update reference, i.e. doesn't rerender
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>Unchecked Todo count: {this.state.todos.filter(t => !t.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add a Todo"/>
        <ScrollView style={styles.fill}>
          {this.state.todos.map((todo) => (
            <Todo
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

// export default App;
