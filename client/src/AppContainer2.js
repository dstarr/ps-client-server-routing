import React from 'react';
import People from "./components2/People";

let people = [
    {first: 'David', last: 'Starr', occupation: 'Technical Learning Director'},
    {first: 'Ben', last: 'Day', occupation: 'Independent Consultant'},
    {first: 'Scott', last: 'Allen', occupation: 'Web Developer'},
    {first: 'Aaron', last: 'Skonnard', occupation: 'Pluralsight CEO'}
];

class AppContainer2 extends React.Component {

    constructor(props) {
        super(props);

    }

    render = () => {

        return (
            <div>
                <People people={people} />
            </div>
        );
    }
}

export default AppContainer2;