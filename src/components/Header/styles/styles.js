import { StyleSheet, StatusBar, Dimensions } from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

  btnUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, .5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44 / 2
  }
})