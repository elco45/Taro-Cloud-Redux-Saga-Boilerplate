import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { bindActionCreators } from 'redux';
import { getWxContextRequest } from '../../redux/actions/user';

import './index.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: null,
    };
  }

  config = {
    navigationBarTitleText: 'Boilerplate',
  };

  getWxContext() {
    this.props.getWxContext();
  }

  renderOpenId() {
    const { error, wxContext } = this.props;
    if (!error && !wxContext) {
      return <View />;
    }
    return wxContext ? <View>{wxContext.openid}</View> : <View>Error</View>;
  }

  getUserInfo(userInfo) {
    const { detail } = userInfo;
    if (detail.errMsg === 'getUserInfo:ok') {
      this.setState({
        userProfile: detail.userInfo,
      });
    }
  }

  render() {
    const { loading } = this.props;
    const { userProfile } = this.state;
    return (
      <View>
        <View>Boilerplate</View>
        <Button openType="getUserInfo" onGetUserInfo={this.getUserInfo}>
          Get User Profile
        </Button>
        <Button loading={loading} onClick={() => this.getWxContext()}>
          Get OpenID
        </Button>
        {userProfile && (
          <View>
            <Text>{userProfile.nickName}</Text>
            <Image src={userProfile.avatarUrl} />
          </View>
        )}
        {this.renderOpenId()}
      </View>
    );
  }
}

Index.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  getWxContext: PropTypes.func,
  wxContext: PropTypes.object,
};

const mapStateToProps = state => {
  const { wxContext, loading, error } = state.userReducer;
  return {
    wxContext,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  getWxContext: bindActionCreators(getWxContextRequest, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
