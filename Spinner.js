import React from 'react'

const loader = (props) => {
    return (
        <div className='ui active inverted dimmer'> 
            <div className='ui text loader'>
            {props.message}
            </div>
        </div>
    )
}

loader.defaultProps = {
    message: 'Loading..'
};

export default loader;