import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('./components/Profile/MyPosts/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='external-wrapper'>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='wrapper_content'>
                        <Route path='/profile/:userId?'
                               render={() => {
                                   return <React.Suspense fallback={<div>Loading..</div>}>
                                       <ProfileContainer />
                                   </React.Suspense>
                               }}/>

                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<div>Loading..</div>}>
                                <DialogsContainer />
                            </React.Suspense>
                        }}/>
                        <Route path='/news' render={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
