import React from 'react';
import PropTypes from 'prop-types';
import {Button, FormControl, FormGroup} from "react-bootstrap";

class AddPerson extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newFirstName: '',
            newLastName: '',
            newOccupation: ''
        }
    }

    onFirstNameChange = (e) => {
        this.setState({
            newFirstName: e.target.value
        });
    };

    onLastNameChange = (e) => {
        this.setState({
            newLastName: e.target.value
        });
    };

    onOccupationChange = (e) => {
        this.setState({
            newOccupation: e.target.value
        });
    };

    onSubmitNewPerson = () => {

        const first = this.state.newFirstName;
        const last = this.state.newLastName;
        const occupation = this.state.newOccupation;

        this.props.onAddPerson(first, last, occupation);

        this.setState({
            newFirstName: '',
            newLastName: '',
            newOccupation: ''
        })
    };

    render = () => {

        let inputStyle = {
            align: 'left',
            width: 200,
            display: 'inline-block'
        };

        return (
            <div align="left">
                <FormGroup>
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="First Name"
                        value={this.state.newFirstName}
                        onChange={this.onFirstNameChange}
                    />
                    {' '}
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="Last Name"
                        value={this.state.newLastName}
                        onChange={this.onLastNameChange}
                    />
                    {' '}
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="Occupation"
                        value={this.state.newOccupation}
                        onChange={this.onOccupationChange}
                    />
                    {' '}
                    <Button onClick={this.onSubmitNewPerson}>Add Person</Button>
                </FormGroup>
            </div>)

    }
}

AddPerson.PropTypes = {
    onAddPerson: PropTypes.func.required
};

export default AddPerson;