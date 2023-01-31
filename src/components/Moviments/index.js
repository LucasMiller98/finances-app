import { useState } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles/styles.js'
import { MotiView, AnimatePresence, MotiText } from 'moti'

export function Moviments({ data }) {

  const [isShowValue, setIsShowValue] = useState(false)
  
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={.7}
      onPress={() => setIsShowValue(!isShowValue)}
    >
      <Text style={styles.date}>{ data.date }</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{ data.label }</Text>

        { isShowValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              from={{
                translateX: 100
              }} 

              animate={{
                translateX: 0
              }}

              transition={{
                type: 'spring',
                duration: 300,
              }}

              style={data.type === 1 ? 
                    styles.value : 
                    styles.expenses}
              >
              { data.type === 1 ? `R$${data.value}` : `R$-${data.value}` }
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView 
              style={styles.skeleton} 
              from={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              transition={{
                type: 'spring'
              }}
            />
          </AnimatePresence>
        ) }
      </View>
    </TouchableOpacity>
  )
}