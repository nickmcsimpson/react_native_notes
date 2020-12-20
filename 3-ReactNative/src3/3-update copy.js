import React from "react"
import {View, Button, Text, ScrollView, StyleSheet, StatusBar, Switch} from 'react-native'
import {Constants} from 'expo'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48
  }
})

class Count extends React.Component {
  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

class CountEvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }

  componentDidUpdate() {
    //Only ran when should update returns true
    console.log(this.props.count)
  }

  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    // this.inc = this.inc.bind(this)
  }

  componentDidMount() {
    setInterval(this.inc, 1000)
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Count count={this.state.count}/>
        <CountEvenNumbers count={this.state.count}/>
      </View>
    );
  }
}