import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId);
        setTimeout(() => {
            this.props.getStatus(userId)
        }, 1000)
    }

    render() {
       return (
           <Profile  { ...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
       );
   }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect (mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent);


export default compose(
    connect (mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)