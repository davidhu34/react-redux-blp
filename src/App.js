import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Add } from './actions'

const App = ({ data, Add }) => (
    <div>
        <div>{data}</div>
        <div onClick={Add}>
            add
        </div>
    </div>
)


export default connect(
    state => ({ ...state }),
    dispatch => ({
        Add: (e) => dispatch( Add() )
    })
)(App)
