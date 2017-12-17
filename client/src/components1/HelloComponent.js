import React from 'react';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import Image from "react-bootstrap/es/Image";

class HelloComponent extends React.Component {

    constructor() {
        super();
    }

    render = () => {

        return (
            <div>
                <Jumbotron>
                    <h1>Hello Node and React</h1>

                </Jumbotron>
                <Image src={'/images/ECLogo.png'}/>
            </div>
        );
    }
}

export default HelloComponent;

