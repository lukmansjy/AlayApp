import React, { useState, useEffect } from 'react'
import { Body, CheckBox, Content, ListItem, Text, Textarea, Form, Left, Button, Icon, Right } from 'native-base'
import { View, Clipboard, ToastAndroid } from 'react-native'


const TextConvert = ()=>{
    const [state, setState] = useState({
        dataListItems: ['i', 'a', 'u', 'e', 'o', 'h4s1l'],
        selectId: 0,
        text: '',
        result: ''
    })
    

    const handleCBPress = (key)=>{
        setState({
            ...state,
            selectId: key
        })

    }

    const handleChageText = (value)=>{
        setState({
            ...state,
            text: value
        })
    }

    const handleBtnPress = ()=>{
        let result = ''
        if( state.dataListItems[state.selectId] == state.dataListItems[5]){
            result = state.text.replace(/[Aa]/g, '4');
            result = result.replace(/[Ii]/g, '1');
            result = result.replace(/[Ii]/g, '1');
            result = result.replace(/[Ee]/g, '3');            
            result = result.replace(/[Oo]/g, '0');
        }else{
            result = state.text.replace(/[aiueo]/g, state.dataListItems[state.selectId]);
            result = result.replace(/[AIUEO]/g, state.dataListItems[state.selectId].toUpperCase());
        }
        
        setState({
            ...state,
            result: result
        })
    }
    
    const handleCopy = () => {
        Clipboard.setString(state.result)
        ToastAndroid.show('Text Berhasil Disalin', ToastAndroid.SHORT);
    };

    return(
        <View>
            <Text style={{textAlign:'center', fontSize: 20, margin: 8}}>Aplikasi Alay</Text>
            <View style={{borderTopColor: '#ddd', borderStyle: 'solid', borderTopWidth: 1}}></View>
            {state.dataListItems.map( (item, key) =>{
                let active = false
                if(state.selectId == key){
                    active = true
                }
                return(
                    <ListItem key={key}>
                        <CheckBox checked={active} onPress={()=> handleCBPress(key)}/>
                        <Body>
                            <Text>To: {item}</Text>
                        </Body>
                    </ListItem>
                )
            } )}

                <View style={{margin: 12}}>
                    <Textarea rowSpan={5} bordered placeholder="Silakan isi" onChangeText={handleChageText}/>
                    <View style={{marginTop: 12, width: 88}}>
                        <Button success onPress={handleBtnPress}>
                            <Text>Convert</Text>
                        </Button>
                    </View>
                    <View style={{marginTop: 12, padding: 12, backgroundColor: '#ddd', borderRadius:8}}>
                        <Text>Hasil: {state.result}</Text>
                        <View style={{marginTop: 12, width: 97}}>
                            <Button dark onPress={handleCopy}>
                                <Text>Copy Text</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            
        </View>
    )
}

export default TextConvert