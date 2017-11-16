import React from 'react'

const DeleteAll = (props) => {
        return (
            <div className="center-text">
                <button 
                    className="btn btn-rounded btn-outlined orange-btn"
                    onClick={props.deleteAll}
                >
                Delete all
                </button>
            </div>
        )
}

export default DeleteAll