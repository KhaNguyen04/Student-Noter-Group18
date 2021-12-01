import React, { useState } from 'react';
import './AdjustForm.css'

{/* Functional component */}
{/* Pass in props so this component can send date back to parent component (AddForm to App.js) */}
const AdjustForm = (props) => {

  const setAdjustDescription = (e) => {
    props.setCurrentAdjustDescription(e.target.innerHTML.replace(/&nbsp;/g, ' '));
  }

    return (
      <div className="addform">

        {/* Alignment to keep text to the left */}
        <div className="alignment">

          {/* Title of popup */}
          <div className="sameLine">
            <p className="titleaddform"> <b> Edit </b> </p>
            <button className="closeButton" onClick={() => props.onHide()}> X </button>
          </div>

          <hr className="addformhr"/>

          <div className="item">
            <p className="nomargin"> <b> Description </b> </p>
            <div className="tadescription" contentEditable="true" onInput={e => setAdjustDescription(e)}> {props.adjustInfo} </div>
          </div>

          {/* Add button takes the state and puts it into a list to call parent function, addTask. addTask is performed by parent component. */}
          <div className="addformbuttoncontainer">
            <button className="adjustformbutton" onClick={e => props.adjustTask(props.currentAdjustDescription)}> Edit </button>
          </div>

        </div>

      </div>
    );
}

export default AdjustForm;

// , updateTask()