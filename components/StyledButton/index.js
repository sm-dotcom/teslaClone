import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from "./styles";

const StyledButton = (props) => {

    const type =props.type;
    const content = props.content;
    const onPress = props.onPress;
    // console.warn(type);
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type ==='primary' ? '#FFFFFFA6' : '#171A20CC';

    return (
        <View>
            <Pressable
                style= {[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
                //         console.warn(data,"Hey there" }}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>

    );
};

export default StyledButton;