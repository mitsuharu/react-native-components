import { useCallback } from 'react'
import { StyleSheet, View, type ViewStyle } from 'react-native'
import { Button, styleType } from '@mitsuharu/react-native-components'

export default function App() {
  const onPress = useCallback(() => {
    console.log('pressed')
  }, [])

  return (
    <View style={styles.container}>
      <Button text={'tap button'} onPress={onPress} style={[styles.button]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: styleType<ViewStyle>({
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
  }),
})
