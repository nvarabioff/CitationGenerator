import React from 'react';
import { Link } from 'react-router-dom';

const CreateCitationBtn = () => {
    return (
        <div>
            <button className="green btn-large">
                <Link to='/create/project' className="white-text">Create Project</Link>
            </button>
        </div>
    );
}

export default CreateCitationBtn;