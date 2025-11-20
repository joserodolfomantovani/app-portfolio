import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import { styles } from './HomeScreenStyles';

export function HomeScreen() {
  const openLink = (url:string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
   
      <Image
        style={styles.photoCircle} 
        source={require('../../../assets/usuario.png')} />
        
     
        <Text style={styles.name}>José Rodolfo Mantovani</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink("https://www.linkedin.com/in/jose-rodolfo-mantovani-b23758231")}
        >
          <Text style={styles.buttonText}>LINKEDIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink("https://github.com/joserodolfomantovani")}
        >
          <Text style={styles.buttonText}>GITHUB</Text>
        </TouchableOpacity>

     
      </View>
    </View>
  );
}
