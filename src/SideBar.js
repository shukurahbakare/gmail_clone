
import { Inbox,Star, AccessTime, LabelImportant, NearMe, Note, ExpandMore } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import React from 'react';
import './SideBar.css';
import SideBarOption from './SideBarOption';



const SideBar = () => {
  return (
    <div className='sidebar'>
     <Button 
        startIcon={<AddIcon fontSize='large' />} className="sidebar__compose"
      > 
        Compose
      </Button>
      <SideBarOption Icon={Inbox} title={'Inbox'} number={4} selected={true}/>
      <SideBarOption Icon={Star} title={'Starred'} number={10}/>
      <SideBarOption Icon={AccessTime} title={'Snoozed'} number={10}/>
      <SideBarOption Icon={LabelImportant} title={'Important'} number={10}/>
      <SideBarOption Icon={NearMe} title={'Sent'} number={10}/>
      <SideBarOption Icon={Note} title={'Draft'} number={20}/>
      <SideBarOption Icon={ExpandMore} title={'More'} number={10}/>
    </div>
  )
}

export default SideBar;