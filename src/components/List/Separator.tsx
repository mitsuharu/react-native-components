import { styleType } from '../utils/styles'
import React, { memo } from 'react'
import { StyleSheet, View, type ViewStyle } from 'react-native'
import { borderInset } from './util'

type Props = {}
type ComponentProps = Props & {
  hasPaddingLeft: boolean
}

const Component: React.FC<ComponentProps> = ({ hasPaddingLeft }) => {
  return (
    <View style={styles.separator}>
      <View
        style={hasPaddingLeft ? styles.hasPaddingLeft : styles.hasNoPaddingLeft}
      />
    </View>
  )
}

export const ItemSeparator: React.FC<Props> = memo((props) => (
  <Component {...props} hasPaddingLeft />
))

export const SectionSeparator: React.FC<Props> = memo((props) => (
  <Component {...props} hasPaddingLeft={false} />
))

const styles = StyleSheet.create({
  separator: styleType<ViewStyle>({
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'transparent',
  }),
  hasPaddingLeft: styleType<ViewStyle>({
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgb(224, 224, 224)',
    marginLeft: borderInset.left,
    marginRight: 0,
  }),
  hasNoPaddingLeft: styleType<ViewStyle>({
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgb(224, 224, 224)',
    marginLeft: 0,
    marginRight: 0,
  }),
})
