import React from 'react';
import ColorBox from "./components1/ColorBox";

class AppContainer1 extends React.Component {

    constructor(props) {
        super(props);

    }

    render = () => {

        return (
            <div>
                <ColorBox color={'#CAF663'} text={'Green'}/>
            </div>
        );
    }
}

export default AppContainer1;