import React from 'react';

const LoadingHOC = (WrappedComponent) => {

    const colours = [ 'grey', 'black'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
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