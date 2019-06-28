import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

storiesOf('Button', module).addDecorator(getStory => (
  <CenterView>{getStory()}</CenterView>
));
