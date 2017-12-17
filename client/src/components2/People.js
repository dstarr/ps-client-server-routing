import React from 'react';
import {Button, Table} from "react-bootstrap";
import AddPerson from "./AddPerson";

class People extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: this.props.people
        };
    }

    onHandleDelete = (event, firstName, lastName) => {
        let people = this.state.people.filter(person => (firstName !== person.first || lastName !== person.last));

        this.setState({
            people: people
        });
    };

    onHandleNew = (person) => {

        let people = this.state.people;
        people.push(person);
        this.setState({
            people: people
        });
    };

    render = () => {

        const style = {
            backgroundColor: '#5897E2',
            margin: 20,
            padding: 20,
            width: 800
        };

        let people = this.state.people.map((person, index) => (
            <tr key={index}>
                <td>{person.first + ' ' + person.last}</td>
                <td>{person.occupation}</td>
                <td>
                    <Button onClick={e => this.onHandleDelete(e, person.first, person.last)}>Delete</Button>
                </td>
            </tr>
        ));

        return (
            <div style={style}>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>&nbsp;</th>
                    </tr>
                    {people}
                    </thead>
                </Table>

                <div>
                    <AddPerson onAddPerson={this.onHandleNew}/>
                </div>
            </div>
        );
    }
}

export default People