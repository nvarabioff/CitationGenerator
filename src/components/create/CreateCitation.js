import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

function CreateCitation(props) {
    const { auth } = props;
    if (!auth.uid) {
        return <Redirect to='/signin' />
    }
    return (
        <div>
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12">
                        <h1>What type of citation would you like to create? (IEEE)</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <button className="green btn-large">
                            <Link to='/create/citation/web' className="white-text">Website</Link>
                        </button>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <button className="green btn-large">
                            <Link to='/create/citation/journal' className="white-text">Journal</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(CreateCitation);