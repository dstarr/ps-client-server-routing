import React from 'react';
import HelloComponent from "./components1/HelloComponent";

class AppContainer1 extends React.Component {

    constructor(props) {
        super(props);

    }

    render = () => {

        return (
            <div>
                <HelloComponent/>
            </div>
        );
    }
}

export default AppContainer1;