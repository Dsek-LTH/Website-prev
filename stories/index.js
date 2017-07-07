import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

// Import Components
import Login from '../src/Components/Login/Login';
import TextField from '../src/Components/TextField/TextField';
import Button from '../src/Components/Button/Button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Login', module)
  .add('Basic', () => <Login />);

storiesOf('TextField', module)
  .add('Text', () => <TextField placeholder='Username' />)
  .add('Login Example', () => (
    <div>
      <TextField placeholder='Username' />
      <br />
      <br />
      <TextField placeholder='Password' type='password' />
    </div>
  ));

storiesOf('Button', module)
  .add('Basic', () => <Button text='Login' />);
