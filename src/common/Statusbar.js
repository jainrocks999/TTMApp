import React, { Component } from 'react';

import { StatusBar } from 'react-native';

import SColor from '../colors/index';
export default function Status() {
    return (
        <StatusBar
            backgroundColor={SColor.darkblue}
            barStyle='light-content'
        />
    )
}