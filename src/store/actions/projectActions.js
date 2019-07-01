export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userID = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            user: profile.username,
            userID: userID,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};

export const createCitation = (citation) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;
        firestore.collection('webCitations').add({
            ...citation,
            userID: userID,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CITATION', citation });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CITATION_ERROR', err });
        })
    }
}