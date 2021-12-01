import React from 'react'
import { useState } from "react";
import FilterTodoList from '../components/FilterTodoList'
import LeftPanel from '../components/LeftPanel';
import TitleHeader from '../components/TitleHeader';

const PastPage = (props) => {
    return (
        <div>
            <LeftPanel categories={props.categories} setCategories={props.setCategories} todos={props.todos} 
          setTodos={props.setTodos} taskID={props.taskID} setTaskID={props.setTaskID} categoryDatas={props.categoryDatas} setCategoryDatas={props.setCategoryDatas}/>
            <TitleHeader listName={"Past Tasks"}/>
            <FilterTodoList
            todos={props.todos}
            setTodos={props.setTodos}
            categories={props.categories}
            categoryDatas={props.categoryDatas} 
            setCategoryDatas={props.setCategoryDatas}
            filter={(todo, st) => st.length < 1 ? todo["dueTime"] != null ? Date.parse(new Date(todo["dueDate"] + " " + todo["dueTime"] + " PST")) - Date.parse(new Date().toLocaleString()) < 0 :
            Date.parse(new Date(todo["dueDate"]).setTime(todo["dueTime"])) - Date.parse(new Date().toLocaleString()) < 0
            : todo["dueTime"] != null ? Date.parse(new Date(todo["dueDate"] + " " + todo["dueTime"] + " PST")) - Date.parse(new Date().toLocaleString()) < 0 : Date.parse(new Date(todo["dueDate"]).setTime(todo["dueTime"])) - Date.parse(new Date().toLocaleString()) < 0 &&
            Object.values(todo)
              .join(" ")
              .toLowerCase()
              .includes(st.toLowerCase())
            }
          />
        </div>
    )
}

export default PastPage
