import React from 'react';
import CitationList from './CitationList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const { project, auth } = props;
    const id = props.match.params.id;
    const linkWeb = '/create/citation/web/' + id;
    const linkJournal = '/create/citation/journal/' + id;
    if (!auth.uid) {
        return <Redirect to='/signin' />
    }
    if (project) {
        return (
            <div className="container section citation-list">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <h2>{ project.title }</h2>
                        <h5>{ project.description }</h5>
                        <CitationList p={id}/>
                        <h5>Add Citation:</h5>
                        <button className="green btn-large">
                            <Link to={linkWeb} className="white-text">Website</Link>
                        </button>
                        <button className="green btn-large">
                            <Link to={linkJournal} className="white-text">Journal</Link>
                        </button>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>{ moment(project.createdAt.toDate()).calendar() }</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Redirect to='/' />
            // <div className="container center">
            //     <p>Loading Project...</p>
            // </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['time', 'desc'] }
    ])
)(ProjectDetails);
