'use strict';

import React, {StyleSheet, View, WebView, Component} from 'react-native';
import CookieManager from 'react-native-cookies';
import LoggedIn from './LoggedIn'

const LOGIN_URL = "http://localhost:3000/login/";
const HOME_URL = "http://localhost:3000/";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default class ReactNativeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loadedCookie: false
    };
  }

  componentWillMount () {
    CookieManager.getAll((cookie) => {
      let isAuthenticated;
      if (cookie && cookie.remember_me) {
        isAuthenticated = true;
      }
      else {
        isAuthenticated = false;
      }

      this.setState({
        loggedIn: isAuthenticated,
        loadedCookie: true
      });
    });
  }

  onNavigationStateChange (navState) {
    // If we get redirected back to the HOME_URL we know that we 
    if (navState.url == HOME_URL) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  render () {
    // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
    if (this.state.loadedCookie) {
      if (this.state.loggedIn) {
        return (
          <LoggedIn/>
        );
      }
      else {
        return (
          <View style={[styles.container]}>
            <WebView
              ref={'webview'}
              automaticallyAdjustContentInsets={false}
              style={styles.webView}
              url={LOGIN_URL}
              javaScriptEnabledAndroid={true}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
              startInLoadingState={true}
              scalesPageToFit={true}
            />
          </View>
        );
      }
    }
    else {
      return (
        <View></View>
      );
    }
  }
}

