import React from 'react';
import ReactDOM from 'react-dom';
import ImageUploadForm from './ImageUploadForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const main = () => (
  <MuiThemeProvider>
    <RaisedButton
      className="signin-button"
      label="Login/Signup "
      href="/login/facebook"
      primary
      labelColor="blue"
    />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('main'),
);
