import { View, Text } from "react-native";
import { styles } from "./styles/styles.js";
import { MotiView } from 'moti'

export function Balance(props) {

  const { 
    container, 
    item, 
    itemTitle, 
    currencySymbol,
    balance,
    content,
    expenses
  } = styles
  
  return (
    <MotiView 
      style={container}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}

      animate={{
        rotateX: '0deg',
        opacity: 1
      }}

      transition={{
        type: 'spring',
        delay: 300,
        duration: 900
      }}
    >

      <View style={item}>
        <Text style={itemTitle}>Saldo</Text>
        <View style={content}>
          <Text style={currencySymbol}>R$</Text>
          <Text style={balance}>{ props.balance }</Text>
        </View>
      </View>
      
      <View style={item}>
        <Text style={itemTitle}>Gastos</Text>
        <View style={content}>
          <Text style={currencySymbol}>R$</Text>
          <Text style={expenses}>{ props.expenses }</Text>
        </View>
      </View> 
      
    </MotiView>
  )
}