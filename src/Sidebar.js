import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';


const sidebarItems = ['page-1', 'page-2', 'page-3'];

const SideBarItem = ({ title, isOpen }) => {
    return (
        <Link to={title}>
            <div className={`SidebarItem ${isOpen ? 'open' : 'closed'}`}>{title}</div>
        </Link>
    );
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleHover = () => {
        this.setState({ open: true });
    }

    handleLeave = () => {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;

        return (
            <div
                className={`Sidebar ${open ? 'open' : 'closed'}`}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
            >
                {
                    sidebarItems.map((item, idx) => {
                        return (<SideBarItem key={item} title={item} isOpen={open} />)
                    })
                }
            </div>
        );
    }
}

export default Sidebar;