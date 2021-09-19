import React, {useMemo, useState} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type DashedLine = {
  axis?: 'horizontal' | 'vertical';
  dashGap?: number;
  dashLength?: number;
  dashThickness?: number;
  dashColor?: string;
  dashStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const DashedLine: React.FC<DashedLine> = ({
  axis = 'horizontal',
  dashGap = 2,
  dashLength = 4,
  dashThickness = 2,
  dashColor = '#000',
  dashStyle,
  style,
}) => {
  const [lineLength, setLineLength] = useState(0);
  const isRow = axis === 'horizontal';
  const numOfDashes = Math.ceil(lineLength / (dashGap + dashLength));

  const dashStyles = useMemo(
    () => ({
      width: isRow ? dashLength : dashThickness,
      height: isRow ? dashThickness : dashLength,
      marginRight: isRow ? dashGap : 0,
      marginBottom: isRow ? 0 : dashGap,
      backgroundColor: dashColor,
    }),
    [dashColor, dashGap, dashLength, dashThickness, isRow],
  );

  return (
    <View
      onLayout={event => {
        const {width, height} = event.nativeEvent.layout;
        setLineLength(isRow ? width : height);
      }}
      style={[style, isRow ? styles.row : styles.column]}>
      {[...Array(numOfDashes)].map((_, i) => {
        return <View key={i} style={[dashStyles, dashStyle]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

export default DashedLine;
