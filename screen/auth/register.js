import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { COLORS, assets, SHADOWS, SIZES, FONTS, titleSize } from '../../constants';
import { TextInputField, RectButton, CircleButton, } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { auth } from '../../firebase';
import { getAuth, onAuthStateChanged, User, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [paasword, setPaasword] = useState('');
    const [loading, setLoading] = useState(false)
    // const [user, setUser] = useState(User);

    useEffect(() => {
        const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
            } else {
                // User is signed out
                setUser(undefined);
            }
        });

        return unsubscribeFromAuthStatuChanged;
    }, []);

    const _registerAccount = async () => {
        if (email && paasword) {
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    console.log(userCredentials)
                })
                .catch(error => console.log(error))
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
                }}>SIGN UP</Text>

                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: 20,
                    color: COLORS.white,
                    marginVertical: 30
                }}>Create a new account</Text>
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
                        buttonText="Register"
                        marginTop={20}
                        loadingButton={loading}
                        onPress={() => _registerAccount()}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.medium,
                        color: COLORS.white,
                        marginVertical: 30,
                        alignSelf: 'center'
                    }}>Already have na account? Login</Text>
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