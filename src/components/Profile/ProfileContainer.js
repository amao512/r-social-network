import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
    getProfileThunk, getStatusThunk, 
    updateStatusThunk, savePhoto, saveDetails
} from '../../redux/thunks/profileReducerThunk';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';
import Reloader from '../common/reloader/Reloader';

class ProfileContainer extends Component {
    refreshProfile(){
        const {match, profileId, getProfileThunk, getStatusThunk} = this.props;
        
        let userId = match.params.userId;
        if(!userId) userId = profileId;

        getProfileThunk(userId)
        getStatusThunk(userId)
    }

    // componentDidMount отрисововаеть компонент один раз
    componentDidMount(){
        this.refreshProfile();
    }

    // обновляеть компонент при изменений
    componentDidUpdate(prevProps){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render(){
        if(!this.props.profile){
            return <Reloader />
        } else {
            return <Profile {...this.props} savePhoto={this.props.savePhoto} />
        }
    }
}

const mapStateToProps = state => ({
    profile: state.profile.profileInfo,
    profileId: state.auth.userId,
    status: state.profile.status
})

export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, savePhoto, saveDetails}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);