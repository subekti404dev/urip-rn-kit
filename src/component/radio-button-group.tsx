import * as React from "react";
import { View, StyleProp, TextStyle } from "react-native";
import RadioButton from "./radio-button";

interface RadioButtonGroupProps {
 data?: string[];
 activeIndex?: number;
 radioSize?: number;
 fontSize?: number;
 color?: string;
 labelStyle?: StyleProp<TextStyle>;
 onChange?: ({ value: string, index: number }) => void;
}

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
 const [active, setActive] = React.useState(props.activeIndex);

 return (
  <View style={{ zIndex: 5 }}>
   {(props.data || []).map((data: string, index: number) => {
    const isActive = active === index;
    const onPress = () => {
     if (props.onChange) props.onChange({ value: data, index });
     setActive(index);
    };
    return (
     <RadioButton
      key={index}
      label={data}
      labelStyle={props.labelStyle}
      radioSize={props.radioSize}
      fontSize={props.fontSize}
      color={props.color}
      onPress={onPress}
      active={isActive}
     />
    );
   })}
  </View>
 );
};

export default RadioButtonGroup;
