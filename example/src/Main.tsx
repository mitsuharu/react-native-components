import React, { useCallback } from 'react'
import { type ViewStyle, Alert, ScrollView, StyleSheet } from 'react-native'
import {
  styleType,
  Cell,
  Section,
  Button,
} from '@mitsuharu/react-native-components'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

type ComponentProps = Props & {
  onPress: () => void
  AccessoryView: React.FC
}

const Component: React.FC<ComponentProps> = ({ onPress, AccessoryView }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <Section title="section 1">
          <Cell title="cell 1" onPress={onPress} />
          <Cell title="cell 2" onPress={onPress} />
        </Section>
        <Section title="section 2">
          <Cell title="has AccessoryView" AccessoryView={AccessoryView} />
        </Section>
      </ScrollView>
    </SafeAreaView>
  )
}

const AccessoryView: React.FC = () => {
  const onPress = useCallback(() => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }, [])

  return (
    <Button
      text="show alert"
      onPress={onPress}
      style={styles.accessoryButton}
    />
  )
}

const Container: React.FC<Props> = (props) => {
  const onPress = useCallback(() => {}, [])

  return (
    <Component
      {...props}
      {...{
        onPress,
        AccessoryView,
      }}
    />
  )
}

export { Container as Main }

const styles = StyleSheet.create({
  safeAreaView: styleType<ViewStyle>({
    flex: 1,
  }),
  scrollView: styleType<ViewStyle>({
    flex: 1,
  }),
  accessoryButton: styleType<ViewStyle>({
    width: 'auto',
    height: 'auto',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 4,
  }),
})
