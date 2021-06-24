import React, { Component } from 'react';
import firebase from '../firebase';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
    }

    login(){
        let provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result =>{
                console.log(result);
        })
    }
    
    render(){
        return (
            <button id="SingInGoogle" className="btn"  onClick={this.login}>Sing in with Google</button>
        );
    }
}