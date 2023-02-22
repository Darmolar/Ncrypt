import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { COLORS, assets, SHADOWS, SIZES, FONTS, titleSize } from '../../constants';
import { TextInputField, RectButton, CircleButton, } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { authUser } from '../../firebase';
import { onAuthStateChanged, User, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [paasword, setPaasword] = useState('');
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(User);

    useEffect(() => {
        const unsubscribeFromAuthStatuChanged = onAuthStateChanged(authUser, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
                console.log(user)
            } else {
                // User is signed out
                setUser(undefined);
            }
        });

        return unsubscribeFromAuthStatuChanged;
    }, []);

    const _loginAccount = async () => {
        if (email && paasword) {
            signInWithEmailAndPassword(authUser, email, paasword)
                .then(userCredentials => {
                    // console.log(userCredentials);
                    navigation.navigate('Home');
                })
                .catch(error => console.log(error))
        } else {
            alert('All Fields are required');
        }
    }
    return (
        <View style={styles.container} >
            <View style={{ padding: 20 }}>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: 30,
                    color: COLORS.white,
                    marginTop: -50
                }}>SIGN IN</Text>

                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: 20,
                    color: COLORS.white,
                    marginVertical: 30
                }}>Sign In with email address</Text>
                <Text></Text>
                <View>
                    <TextInputField
                        onChangeText={val => setEmail(val)}
                    />
                    <TextInputField
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={val => setPaasword(val)}
                    />
                    <RectButton
                        backgroundColor={COLORS.secondary}
                        borderRadius={12}
                        buttonText="Login"
                        marginTop={20}
                        loadingButton={loading}
                        handlePress={_loginAccount}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.medium,
                        color: COLORS.white,
                        marginVertical: 30,
                        alignSelf: 'center'
                    }}>New Here? Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center'
    }
})