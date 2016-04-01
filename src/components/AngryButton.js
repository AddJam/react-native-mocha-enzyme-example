import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'

class AngryButton extends Component {
  render() {
    const { text, onPress } = this.props
    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    color: '#B8151C'
  },
  text: {
    color: 'white'
  }
})

export default AngryButton
