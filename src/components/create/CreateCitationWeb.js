//Class based because we want to store what the user enters in a local input field
import React, { Component } from 'react';
import { createCitation } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateCitationWeb extends Component {
    state = {
        authorFirstName: '',
        authorLastName: '',
        publicationYear: '',
        publisher: '',
        title: '',
        url: '',
        projectId: this.props.match.params.id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCitation(this.state);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props)
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/signin' />
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Citation from Website</h5>
                    <div className="input-field">
                        <label htmlFor="authorFirstName">Author First Name</label>
                        <input type="text" id="authorFirstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="authorLastName">Author Last Name</label>
                        <input type="text" id="authorLastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="publisher">Publisher</label>
                        <input type="text" id="publisher" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="publicationYear">Publication Year</label>
                        <input type="text" id="publicationYear" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="url">URL</label>
                        <input type="text" id="url" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Create Citation</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCitation: (citation) => dispatch(createCitation(citation))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCitationWeb);
