import React from 'react';

const Capitalise = (word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase[0].toUpperCase() + lowerCase.slice(1);
};

const Alert = (props) => {
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalise(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    );
}

export default Alert;
