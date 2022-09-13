import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.gray,
    },
    Video: {
        alignSelf: 'center',
        width: 320,
        height: 320,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonControll: {
        backgroundColor: colors.primary
    }
});

export default styles