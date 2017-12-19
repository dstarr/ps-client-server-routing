import React from 'react';
import {Button, Table} from "react-bootstrap";
import AddPerson from "./AddPerson";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class People extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: this.props.people
        };
    }

    onHandleDelete = (event, id) => {
        let people = this.state.people.filter(person => (id !== person.id));

        this.setState({
            people: people
        });
    };

    onHandleNew = (first, last, occupation) => {

        let id = this.getId();

        let person = {
            id: id,
            first: first,
            last: last,
            occupation: occupation
        };

        this.setState({
            people: this.state.people.concat(person)
        });
    };

    render = () => {

        const style = {
            margin: 20,
            padding: 20,
            width: 800,
            textAlign: 'left'
        };

        let people = this.state.people.map((person, index) => (
            <tr key={index}>
                <td>{person.id}</td>
                <td><Link to={'/people/:id'}>{person.first + ' ' + person.last}</Link></td>
                <td>{person.occupation}</td>
                <td>
                    <Button onClick={e => this.onHandleDelete(e, person.id)}>Delete</Button>
                </td>
            </tr>
        ));

        return (
            <div>
                <h1>People</h1>
                <div style={style}>
                    <Table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Occupation</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {people}
                        </tbody>
                    </Table>

                    <div>
                        <AddPerson onAddPerson={this.onHandleNew}/>
                    </div>
                </div>
            </div>
        );
    };

    getId() {

        let currentId = 0;

        for (let i = 0; i < this.state.people.length; i++) {

            if (this.state.people[i].id > currentId)
                currentId = this.state.people[i].id;
        }

        return currentId + 1;
    };
}

People.PropTypes = {
    people: PropTypes.array.isRequired
};

export default People