import React from 'react';

const LoadingHOC = (WrappedComponent) => {

    const colours = [ 'grey', 'black'];
    const randomColour = colours[Math.floor(Math.random() * 2)];
    const className = randomColour + ' text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default LoadingHOC