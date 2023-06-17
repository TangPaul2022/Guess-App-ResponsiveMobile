import { StyleSheet, Text } from 'react-native';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'gen-bb-bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor:'white',
        padding: 7,
        marginTop: 20,
        marginHorizontal: '17%'
        //paddingBottom: 10
    },
})