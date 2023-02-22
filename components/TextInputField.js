import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, assets, SHADOWS, SIZES, FONTS, titleSize } from '../constants'; 

const TextInputField = ({ ...props }) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='xyz@email.ru'
                    placeholderTextColor={COLORS.lightGray}
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.font,
                        color: COLORS.white,
                        height: 50,
                    }}
                    {...props}
                />
            </View>
        </View>
    )
}

export default TextInputField

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginVertical: 10,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 12
    }
})