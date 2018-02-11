import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';


export default class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>
                    Hello  bobo {this.props.userName}
                    alert({this.props.userName})
                </Text>
                
            </View>



        )
    }
}


Chat.defaultProps = {
    userName: 'No name'
};

Chat.propTypes = {
    userName: PropTypes.string
};




