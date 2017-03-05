import React, { Component } from 'react';
import './../styles/css/Header.css';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
            <h1>Independence <span id="skinny" style={{"fontWeight":"100"}}>Banking</span></h1>
        </div>
        <div className="avatar-container">
            <ul>
                <li>
                    <Badge
                        badgeContent={10}
                        secondary={true}
                        badgeStyle={{top: 12, right: 12}}
                        >
                        <IconButton tooltip="Notifications">
                            <NotificationsIcon />
                        </IconButton>
                    </Badge>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;