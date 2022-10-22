import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
    },
    profileHeader: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileDetails: {
        flex: 0.6,
        backgroundColor: 'white'
    },
    detailItem: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: 'black',
        flex: .25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailsItemLabel: {
        flex: .5,
        color: 'orange',
        fontSize: 18
    },
    detailsItemText: {
        flex: .5,
        textAlign: 'center',
        fontSize: 30
    }
});

export default styles;