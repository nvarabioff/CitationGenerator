import React from 'react';
import ProjectList from '../myprojects/ProjectList';
import CreateProjectBtn from './CreateProjectBtn';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/signin' />
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12">
                        <h1>[IEEE] Citation Generator Dashboard</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12">
                        <CreateProjectBtn />
                        <h3>Your Projects:</h3>
                        <ProjectList projects={projects} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if (!props.auth.uid) return []
        return [{ 
            collection: 'projects',
            orderBy: ['createdAt', 'desc'],
            where: [
                ['userID', '==', props.auth.uid]
            ]
        }]
        
    }
    )
)(Dashboard);