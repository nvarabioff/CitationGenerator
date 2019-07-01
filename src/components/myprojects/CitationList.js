import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const CitationList = (props) => {
    const { citations } = props;
    let number = 0;
    return (
        <div className="card z-depth=0 project-summary">
            <div className="card-content grey-text text-darken-3">
                { citations && citations.map(citation => {
                    number = number + 1;
                    return (
                    <p key={citation.id}>
                        [{number}] {citation.authorFirstName[0]}. {citation.authorLastName},
                        <i> {citation.title}. </i> {citation.publisher}, {citation.publicationYear}.
                        [Online] Available: {citation.url}
                    </p>
                    ); 
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        citations: state.firestore.ordered.webCitations,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if (!props.auth.uid) return []
        return [{
            collection: 'webCitations',
            orderBy: ['createdAt', 'asc'],
            where: [
                ['projectId', '==', props.p]
            ]
        }]
    })
)(CitationList);
