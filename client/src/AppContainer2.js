import React from 'react';
import People from "./components2/People";
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import Home from "./components2/Home";
import Places from "./components2/Places";
import PersonProfile from "./components2/PersonProfile";
import PageNotFound from "./components2/PageNotFound";
import LeftNav from "./components2/LeftNav";

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

        const contentStyle = {
            flex: 1,
            position: 'fixed',
            marginLeft: 210,
            width: 800

        };

        return (
            <BrowserRouter>
                <div>
                    <div className={'leftNavContainer'}>
                        <LeftNav />
                    </div>

                    <div style={contentStyle}>
                        <Switch>
                            <Route path={'/'} component={Home} exact/>
                            <Route path={'/people/:id'} component={PersonProfile}/>
                            <Route path={'/people'}
                                   render={() => <People people={this.state.people}/>}
                            />
                            <Route path={'/places'} component={Places}/>
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppContainer2;