import { ImageBackground, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { IconButton, Text } from 'react-native-paper';

interface Props {
  // movie: FullMovie;
  poster: string;
  originalTitle: string;
  title: string;
}

export const MovieHeader = ({ poster, originalTitle, title }: Props) => {

  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <>
      {/* <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        <View style={ styles.imageBorder }>
          <Image
            style={ styles.posterImage }
            source={{ uri: poster }}
          />
        </View>

        <View style={ styles.marginContainer }>
          <Text style={ styles.subTitle }>{ originalTitle }</Text>
          <Text style={ styles.title }>{ title }</Text>
        </View>

        <View style={ styles.backButton }>
          <Pressable onPress={ () => navigation.goBack() }>
            <Text style={ styles.backButtonText }>Regresar</Text>
          </Pressable>
        </View>
      </View> */}
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.5 }}>
        <ImageBackground
          style={ styles.posterImage }
          source={{ uri: poster }}
        >
          <View style={{ ...styles.titleContainer, backgroundColor: theme.colors.border }}>
            <View style={ styles.titleInfo }>
              <Text style={{ ...styles.title, color: theme.colors.text }}>
              { title }
            </Text>
            <Text style={{ ...styles.subTitle, color: theme.colors.text }}>
              { originalTitle }
            </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={ styles.backButton }>
          <IconButton
            icon='arrow-back-outline'
            iconColor={ theme.colors.text }
            size={ 20 }
            onPress={ () => navigation.goBack() }
          />
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
  },
  posterImage: {
    flex: 1,
    objectFit: 'cover'
  },
  titleContainer: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  titleInfo: {
    marginVertical: 10,
    paddingHorizontal: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  }
});
