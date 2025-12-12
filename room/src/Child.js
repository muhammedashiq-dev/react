import React from 'react'

function Child(props) {
    return(
        <button onClick={props.onToggle}>
            {props.isLightOn? 'Turn OFF' : 'Turn ON'}
        </button>
    )
};
export default Child;