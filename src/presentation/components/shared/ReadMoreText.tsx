import { useCallback, useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextLayoutEventData } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  text: string;
  textStyle?: object;
  readMoreStyle?: object;
}

export const ReadMoreText = ({ text, textStyle, readMoreStyle }: Props) => {

  const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState<undefined | number>(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const onTextLayout = useCallback(
    (event: NativeSyntheticEvent<TextLayoutEventData>) => {
      if (event.nativeEvent.lines.length > 3 && !textShown) {
        setShowMoreButton(true);
        setNumLines(3);
      }
    },
    [textShown],
  );

  return (
    <>
      <Text
        onTextLayout={ onTextLayout }
        numberOfLines={ numLines }
        ellipsizeMode='tail'
        style={ textStyle }
      >
        { text }
      </Text>
      {
        showMoreButton ? (
          <Text onPress={ toggleTextShown } style={ readMoreStyle }>
            { textShown ? 'Read less' : 'Read more' }
          </Text>
        )
        : null
      }
    </>
  )
}
