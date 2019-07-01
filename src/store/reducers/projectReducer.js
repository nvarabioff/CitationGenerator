const initState = {
    projects: [
        {id: '1', title: 'Chem Assignment', description: 'lorem ipsum text'},
        {id: '2', title: 'Design Assignment', description: 'blah blah blah'},
        {id: '3', title: 'Physics Assignment', description: 'welcome to my citation'}
    ],
    webCitations: [
        {id: '1', title: 'Chem Assignment', description: 'lorem ipsum text'},
        {id: '2', title: 'Design Assignment', description: 'blah blah blah'},
        {id: '3', title: 'Physics Assignment', description: 'welcome to my citation'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'CREATE_CITATION':
            console.log('created citation', action.citation);
            return state;
        case 'CREATE_CITATION_ERROR':
            console.log('create citation error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;