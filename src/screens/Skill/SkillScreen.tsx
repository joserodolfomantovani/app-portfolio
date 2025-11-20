import React from 'react';
import { View, Text,  Image  } from 'react-native';

import { styles } from './SkillScreenStyles';

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      

      <Image
             style={styles.photoCircle} 
             source={require('../../../assets/usuario.png')} />

      <Text style={styles.title}>Minhas Habilidades</Text>

      {/* HABILIDADES */}
      <View style={styles.skillsBox}>

        <View style={styles.skillRow}>
          <Text style={styles.skillName}>React Native:</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        </View>

        <View style={styles.skillRow}>
          <Text style={styles.skillName}>JavaScript:</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        </View>

        <View style={styles.skillRow}>
          <Text style={styles.skillName}>TypeScript:</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        </View>


        <View style={styles.skillRow}>
          <Text style={styles.skillName}>Node.js:</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐</Text>
        </View>
         <View style={styles.skillRow}>
          <Text style={styles.skillName}>React:</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐</Text>
        </View>


           <View style={styles.skillRow}>
          <Text style={styles.skillName}>Android Kotlin/Java:</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        </View>

      </View>

    

    </View>
  );
}