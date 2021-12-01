import React, { useState } from 'react';
import './QuickEdit.css'
import ContentEditable from "react-contenteditable";

const QuickEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);
  const contentEditable=React.createRef();
  function transformation(data) {
    const test = `${data}`;
    return test;
  }
  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if ( event.key === "Escape") {
      event.target.blur();
    }
  }

  const onBlur = (event) => {
    setValue(editingValue)
  }

  return (
    <ContentEditable
    innerRef={contentEditable}
    html={transformation(editingValue)}
    className="quickEditInput"
    type="text"
    onChange={onChange}
    onKeyDown={onKeyDown}
    onBlur={onBlur}
    style={{fontSize:15}}
    />
  )
}

export default QuickEdit;