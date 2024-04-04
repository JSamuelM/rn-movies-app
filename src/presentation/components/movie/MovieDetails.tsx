import { useCallback } from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Chip, Divider, Text, useTheme } from 'react-native-paper';
import { RootStackParams } from '../../navigation/Navigation';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Cast } from '../../../core/entities/cast.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { CastActor } from '../cast/CastActor';
import { IonIcon } from '../shared/IonIcon';
import { ReadMoreText } from '../shared/ReadMoreText';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const renderActorItem = useCallback((item: Cast) => {
    return <CastActor actor={ item } />
  }, []);

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <View style={{ marginHorizontal: 20 }}>

        <View style={{ ...styles.row }}>
          <View style={{ ...styles.row, marginRight: 20 }}>
            <Text style={{ marginRight: 5 }}>
              <IonIcon name="time-outline" color={ theme.colors.onBackground } />
            </Text>
            <Text>{ movie.duration } minutos</Text>
          </View>
          <View style={ styles.row }>
            <Text style={{ marginRight: 5 }}>
              <IonIcon name="star" color={ theme.colors.onBackground } />
            </Text>
            <Text>{ movie.rating.toFixed(1) }/10</Text>
          </View>
        </View>

        <Divider theme={ theme } style={{ marginVertical: 20 }} bold />

        <View style={{ flexDirection: 'row', columnGap: 25 }}>
          <View style={{ ...styles.column }}>
            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 10, maxWidth: 150 }}>
              Fecha de lanzamiento
            </Text>
            <Text>
              { movie.releaseDate.toLocaleDateString("en", {
                year: 'numeric',
                day: '2-digit',
                month: 'long'
              }) }
            </Text>
          </View>
          <View style={{ ...styles.column }}>
            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 10 }}>
              Géneros
            </Text>  
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={ false }
              style={{ width: '80%' }}
            >
              { 
                movie.genres.map((genre, index) => (
                  <Chip
                    key={ index }
                    mode='outlined' 
                    style={ styles.genre }
                    onPress={ () => navigation.navigate('DiscoverByGenre', { genre }) }
                  >
                    { genre.name }
                  </Chip>
                ))
              }
            </ScrollView>
          </View>
        </View>

        <Divider style={{ marginVertical: 20 }} bold />

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Sinopsis
        </Text>
        
        <ReadMoreText
          text={ movie.description }
          textStyle={{
            fontSize: 15
          }}
          readMoreStyle={{ 
            color: theme.colors.primary,
            textDecorationLine: 'underline',
            fontSize: 14
          }}
        />

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>

        <Text style={{ fontSize: 18 }}>
          { Formatter.currency(movie.budget) }
        </Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text style={{
            fontSize:23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20
          }}
        >
          Actors
        </Text>

        <FlatList
          data={ cast }
          keyExtractor={ (item) => item.id.toString() }
          horizontal
          showsHorizontalScrollIndicator={ false }
          renderItem={ ({ item }) => renderActorItem(item) }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column'
  },
  genre: {
    borderRadius: 25,
    marginRight: 5
  }
});
