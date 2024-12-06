import {View,StyleSheet,Image,Text} from "react-native"
import { Card,Paragraph,Title} from "react-native-paper"
import React, { useState, useEffect } from 'react';
import { AllStyle } from "../../style/style";

const CardComponent = ({title,unit,time})=>{
    return(
    <View>
        <Card
        style={{
            margin:5,
            marginTop:5,
            backgroundColor:AllStyle.color.oaCard
        }}>
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{unit}</Paragraph>
                <Paragraph>{time}</Paragraph>
            </Card.Content>
        </Card>
    </View>
    );
}
export default CardComponent;