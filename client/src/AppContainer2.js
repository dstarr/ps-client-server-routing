import React from 'react';
import People from "./components2/People";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from "./components2/Home";

let people = [
    {first: 'David', last: 'Starr', occupation: 'Technical Learning Director'},
    {first: 'Ben', last: 'Day', occupation: 'Independent Consultant'},
    {first: 'Homer', last: 'Griffon', occupation: 'Web Developer'},
    {first: 'Peter', last: 'Simpson', occupation: 'CEO'}
];

class AppContainer2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: people
        };


    }

    render = () => {

        const linkStyle = {
            fontSize: 20
        };

        const linkContainerStyle = {
            padding: 20,
            position: 'fixed',
            height: '100%',
            width: 200,
            backgroundColor: '#f0f0f0',
            top: 0
        };

        const contentStyle = {
            flex: 1,
            position: 'fixed',
            marginLeft: 210,
            width: 800

        };

        return (
            <BrowserRouter>
                <div>
                    <div style={linkContainerStyle}>
                        <nav>
                            <div><Link style={linkStyle} to={'/'}>Home</Link></div>
                            <div><Link style={linkStyle} to={'/people'}>People</Link></div>
                            <div><Link style={linkStyle} to={'/routeB'}>Places</Link></div>
                        </nav>
                    </div>

                    <div style={contentStyle}>
                        <Route path={'/'} component={Home} exact/>
                        <Route path={'/people'}
                               render={() => <People people={this.state.people}/>}
                        />
                        {/* <Route path={'/places'} component={Places}/> */}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppContainer2;