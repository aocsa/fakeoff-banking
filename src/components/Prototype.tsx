import * as React from 'react'
import { Component, Props } from 'react'
import { MuiThemeProvider, getMuiTheme, colors, darkBaseTheme } from 'material-ui/styles'
import { fade } from 'material-ui/utils/colorManipulator'

import { Flex } from 'reflexbox'
import AppBar from 'material-ui/AppBar'

console.log(darkBaseTheme)

const theme = getMuiTheme({
  palette: {
    primary1Color: colors.black,
    primary2Color: colors.black,
    primary3Color: colors.grey600,
    accent1Color: colors.amberA200,
    accent2Color: colors.amberA400,
    accent3Color: colors.amberA100,
    textColor: colors.fullWhite,
    alternateTextColor: '#fff',
    canvasColor: '#303030',
    borderColor: fade(colors.fullWhite, 0.3),
    disabledColor: fade(colors.fullWhite, 0.3),
    pickerHeaderColor: fade(colors.fullWhite, 0.12),
    clockCircleColor: fade(colors.fullWhite, 0.12),
  },
  fontFamily: 'PT Mono'
})

export default class Prototype extends Component<Props<any>, {}> {
  render() {
    return <MuiThemeProvider muiTheme={theme}>
      <Flex flexAuto flexColumn>
        <AppBar title='Фэйк-банк' />
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flex>
    </MuiThemeProvider>
  }
}