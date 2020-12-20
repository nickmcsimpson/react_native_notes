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


class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.inteval = setInterval(this.inc, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.inteval)
  }

  inc = () => {
    //When not unmounting this appears ever time toggled on
    console.log('Increment!')
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true
    }
  }

  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter
  }))

  render() {
    if(this.state.showCounter) {
      return (
            <View style={styles.appContainer}>
              <Button title="toggle" onPress={this.toggleCounter}/>
              <Counter />
              </View>
          )
    } else {
      return <Button title="toggle" onPress={this.toggleCounter}/>
    }
    
  }
}