import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from '../../redux/actions/user';

import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Boilerplate',
  };

  login() {
    this.props.login();
  }

  renderUser() {
    const { error, user } = this.props;
    if (!error && !user) {
      return <View />;
    }
    return user ? <View>{user.openid}</View> : <View>Error</View>;
  }

  render() {
    const { loading } = this.props;
    return (
      <View>
        <View>
          <View>Boilerplate</View>
          <Button loading={loading} onClick={() => this.login()}>
            Login
          </Button>
          {this.renderUser()}
        </View>
      </View>
    );
  }
}

Index.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  login: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = state => {
  const { user, loading, error } = state.userReducer;
  return {
    user,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginRequest, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
