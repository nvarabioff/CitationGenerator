//Class based because we want to store what the user enters in a local input field
// Not even close to done
//
//
//
//
//
// TODO:
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateCitationJournal extends Component {
    state = {
        authorFInit: '',
        authorLName: '',
        title: '',
        publisher: '',
        publicationYear: '',
        format: '',
        url: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/signin' />
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Citation from Journal source</h5>
                    <div className="input-field">
                        <label htmlFor="authorFInit">Author First Initial</label>
                        <input type="text" id="authorFInit" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="authorLName">Author Last Name</label>
                        <input type="text" id="authorLName" onChange={this.handleChange}/>
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
                        <label htmlFor="format">Format</label>
                        <input type="text" id="format" onChange={this.handleChange}/>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(CreateCitationJournal);
