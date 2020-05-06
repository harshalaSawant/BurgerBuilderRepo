import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerTogglehandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerTogglehandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )  
    }
} 

export default Layout;