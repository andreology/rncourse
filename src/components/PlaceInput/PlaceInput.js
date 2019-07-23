//Andre Barajas
//React Native App Practice 
//Summer 2019
import React, { Component } from 'react';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
            <DefaultInput
                placeholder="Place Name"
                value={props.placeName}
                onChangeText={props.onChangeText}
            />
);
    


export default placeInput;