import React, {useContext, useState} from 'react'
import { Link} from "react-router-dom";
import './LeftPanel.css'
import AuthContext from '../context/AuthContext'
import {HiOutlineFolderOpen} from "react-icons/hi";
import {AiOutlineCheck,AiOutlineUnorderedList,AiOutlineClockCircle} from "react-icons/ai";
import {Ri24HoursFill} from "react-icons/ri";
import {MdRunningWithErrors} from "react-icons/md";
import Popup from './Popup.js'
import CategoryForm from './CategoryForm';
import {FaFolderPlus} from "react-icons/fa";




const LeftPanel = (props) => {
    let {authTokens, logoutUser} = useContext(AuthContext)
    let {user} = useContext(AuthContext)
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);

    return (
        <div className="full">
            <div className="wrap">
                <ul className="panel">
                    {user &&   <li className="item">Hello {user.first_name}!</li>}
                    <Link className="link" to="/daily"><li className="items"><Ri24HoursFill className="icon"></Ri24HoursFill><span className="button-text">Today</span></li></Link>
                    <Link className="link" to="/upcoming"><li className="items"><AiOutlineClockCircle className="icon"></AiOutlineClockCircle>Upcoming</li></Link>
                    <Link className="link" to="/past"><li className="items"><MdRunningWithErrors className="icon"></MdRunningWithErrors>Past</li></Link>
                    <Link className="link" to="/finish"><li className="items"><AiOutlineCheck className="icon"></AiOutlineCheck>Finished</li></Link>
                    <Link className="link" to="/todolist/"><li className="items"><AiOutlineUnorderedList className="icon"></AiOutlineUnorderedList>All (add)</li></Link>
                    <br/>
                    
                <div className="Add-category">
                    <button type="category-button" id="cat" title="Add category" onClick={e => { setShowCategoryPopup(!showCategoryPopup) }}><FaFolderPlus id="addFolIcon"></FaFolderPlus></button>
                </div>
                    <li className="items"><HiOutlineFolderOpen className="icon"></HiOutlineFolderOpen>Category</li>
                                    { <div className="categorylist">
                {Object.entries(props.categories).map(([key, value]) => (
                        <div key={"categoryitemblock_" + key} className="categoryitem">
                            <p className="nomargin" id={"categoryitem_" + key}> <b> {props.categories[key].name} </b> </p>
                            {/* <button className="categorydeletebutton" id={"dcategoryitem_" + key} onClick={e => deleteCategory(e.target.id, props.categories[key].name)}> Delete </button> */}
                        </div>
                    ))}
                </div> }
                    {user && <button onClick={logoutUser} className="logoutBut"><li className="logout">Log Out</li></button> }
                </ul>

            </div>
            <Popup show={showCategoryPopup} onHide={() => setShowCategoryPopup(false)} components={
                    <CategoryForm categories={props.categories} addCategory={props.addCategoryInput} deleteCategory={(id) => props.deleteCategory(id)} onHide={() => setShowCategoryPopup(false)}
                    setCategories={props.setCategories} categoryDatas={props.categoryDatas} setCategoryDatas={props.setCategoryDatas} todos={props.todos}/>
                }/>
        </div>
    )
}

export default LeftPanel
