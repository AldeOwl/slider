import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello() {
    let str = 'world'
    return(
        <h1> Hello {str}!</h1>
    )
}

function SayFullName(props) {
    return(
        <div>
            <h1> My name {props.name}, surname {props.surname}</h1>
            <a href={props.link}>Ссылка на мой профиль</a>
        </div>
    )
}

ReactDOM.render(<SayFullName name='Alex' surname='Denisov' link='www.google.com' />, document.getElementById('root'));


serviceWorker.unregister();
