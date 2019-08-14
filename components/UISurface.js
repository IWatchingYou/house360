import React from 'react';
import {
    asset,
    View,
    Text,
    VrButton,
    StyleSheet
}
from 'react-360';

export default class UISurface extends React.Component{

    

    render(){
        return(
            <View
                style={{
                    maxWidth: '500px',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    flex: 1
                }}
            >
                <VrButton style={styles.btn}>
                    <Text>Room 1</Text>
                </VrButton>
                <VrButton style={styles.btn}>
                    <Text>Room 2</Text>
                </VrButton>
                <VrButton style={styles.btn}>
                    <Text>Room 3</Text>
                </VrButton>
                <VrButton style={styles.btn}>
                    <Text>Room 4</Text>
                </VrButton>
                <VrButton style={styles.btn} onClick={()=>this.onLerpClick(0,-10,0)}>
                    <Text>Full House</Text>
                </VrButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#363636',
        margin: 10,
        padding: 10
    }
})