import React from 'react';
import People from "./components2/People";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from "./components2/Home";
import Places from "./components2/Places";

let people = [
    {id: 1, first: 'David', last: 'Starr', occupation: 'Technical Learning Director'},
    {id: 2, first: 'Ben', last: 'Day', occupation: 'Independent Consultant'},
    {id: 3, first: 'Homer', last: 'Griffon', occupation: 'Web Developer'},
    {id: 4, first: 'Peter', last: 'Simpson', occupation: 'CEO'}
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
            fontSize: 18
        };

        const linkContainerStyle = {
            padding: 20,
            position: 'fixed',
            height: '100%',
            width: 200,
            backgroundColor: '#f0f0f0'
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
                            <div><Link style={linkStyle} to={'/places'}>Places</Link></div>
                        </nav>
                    </div>

                    <div style={contentStyle}>
                        <Route path={'/'} component={Home} exact/>
                        <Route path={'/people'}
                               render={() => <People people={this.state.people}/>}
                        />

                        <Route path={'/places'} component={Places}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppContainer2;