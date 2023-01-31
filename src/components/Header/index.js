import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles/styles.js' 
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'

export function Header(props) {

  const { 
    container, 
    content, 
    userName, 
    btnUser 
  } = styles

  return (
    <View style={container}>
      <MotiView 
        style={content}
        from={{
          translateY: -150,
          opacity: 0
        }}

        animate={{
          translateY: 0,
          opacity: 1
        }}

        transition={{
          type: 'spring',
          duration: 800,
          delay: 300
        }}
      >
        <MotiText 
          style={userName}
          from={{
            translateX: -300
          }}

          animate={{
            translateX: 0
          }}

          transition={{
            type: 'spring',
            duration: 800,
            delay: 800
          }}
        >
          { props.name }
        </MotiText>

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={.7}
          style={btnUser}
        >
          <Feather name='user' color='#fff' size={27} />
        </TouchableOpacity>
      </MotiView>
    </View>
  )
}