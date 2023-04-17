import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';

type InitialScreenProps = {
  navigation: any;
};

export default function InitialScreen({navigation}: InitialScreenProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/initialImage.png')}
        resizeMode="contain"
        style={styles.bgImage}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <View style={styles.iconsContainer}>
          <Pressable onPress={() => {}}>
            {/* {isPlayingSound && (
              <Image
                style={styles.icon}
                source={require('../assets/sound.png')}
              />
            )} */}
            {/* {!isPlayingSound && ( */}
            <Image
              style={styles.icon}
              source={require('../assets/sound-mute.png')}
            />
            {/* )} */}
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              style={styles.iconEnter}
              resizeMode="contain"
              source={require('../assets/enter.png')}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#01AED9',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    top: 100,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 35,
    width: 50,
    margin: 30,
  },
  iconEnter: {
    height: 45,
    width: 60,
    margin: 30,
  },
});
