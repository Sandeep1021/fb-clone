import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Add, ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';


function Sidebar() {
    const [{user} , dispatch] = useStateValue();
    return (
        <div className="sidebar">
         <SidebarRow src={user.photoURL} title={user.displayName}/>  
         <SidebarRow 
             Icon={LocalHospitalIcon}
             title="COVID-19 Information center"
         /> 
         <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
             <SidebarRow Icon={PeopleIcon} title="Friends"
         />
         <SidebarRow Icon ={ChatIcon} title="Messenger"/>
         <SidebarRow Icon={GroupIcon} title="Groups"/>
         <SidebarRow Icon ={BookmarkIcon} title="Saved"/>
         <SidebarRow Icon={EventIcon} title="Events"/>
        <SidebarRow Icon={AddToQueueIcon} title="Watch Videos"/>
         <SidebarRow Icon={StorefrontIcon} title="Marketplace"  />
         <SidebarRow Icon ={VideoLibraryIcon} title="Videos"/>
         <SidebarRow Icon ={ExpandMoreOutlined} title="Marketplace"/>
           
           
        </div>
    )
}

export default Sidebar;
