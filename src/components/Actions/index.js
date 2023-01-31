import { 
  View, 
  Text, 
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { styles } from './styles/styles.js'
import { AntDesign } from '@expo/vector-icons'

export function Actions() {

  return (
    <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={.7}
        style={styles.actionButton}
      >
        <View style={styles.areaButton}>
          <AntDesign name='addfolder' size={26} color='#000' />
        </View>

        <Text style={styles.labelButton}>
          Entradas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={.7}
        style={styles.actionButton}
      >
        <View style={styles.areaButton}>
          <AntDesign name='tagso' size={26} color='#000' />
        </View>

        <Text style={styles.labelButton}>
          Compras
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={.7}
        style={styles.actionButton}
      >
        <View style={styles.areaButton}>
          <AntDesign name='creditcard' size={26} color='#000' />
        </View>

        <Text style={styles.labelButton}>
          Carteira
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={.7}
        style={styles.actionButton}
      >
        <View style={styles.areaButton}>
          <AntDesign name='barcode' size={26} color='#000' />
        </View>

        <Text style={styles.labelButton}>
          Boletos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={.7}
        style={styles.actionButton}
      >
        <View style={styles.areaButton}>
          <AntDesign name='setting' size={26} color='#000' />
        </View>

        <Text style={styles.labelButton}>
          Conta
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}