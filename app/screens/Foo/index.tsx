import React, { FC, Fragment, ReactElement } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Config from 'react-native-config';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Styled Components
import {
  StyledScrollView,
  StyledViewBody,
  StyledViewContainer,
  StyledTextTitle,
  StyledTextDescription,
  StyledTextHighlight,
} from './_styles';

// Definitions
import { FooScreenType } from './_definitions';

const App: FC<FooScreenType> = (): ReactElement => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <StyledViewBody>
          <StyledViewContainer>
            <StyledTextTitle>Quick test of environments vars</StyledTextTitle>
            <StyledTextDescription>API_HOST: {Config.API_HOST}</StyledTextDescription>
            <StyledTextDescription>STORYBOOK: {Config.STORYBOOK}</StyledTextDescription>
          </StyledViewContainer>
          <StyledViewContainer>
            <StyledTextTitle>Environments</StyledTextTitle>
            <StyledTextDescription>
              Read the <StyledTextHighlight>README</StyledTextHighlight> file in the
              environments directory to get started.
            </StyledTextDescription>
          </StyledViewContainer>
          <StyledViewContainer>
            <StyledTextTitle>Step One</StyledTextTitle>
            <StyledTextDescription>
              Edit <StyledTextHighlight>App.js</StyledTextHighlight> to change this screen
              and then come back to see your edits.
            </StyledTextDescription>
          </StyledViewContainer>
          <StyledViewContainer>
            <StyledTextTitle>See Your Changes</StyledTextTitle>
            <StyledTextDescription>
              <ReloadInstructions />
            </StyledTextDescription>
          </StyledViewContainer>
          <StyledViewContainer>
            <StyledTextTitle>Debug</StyledTextTitle>
            <StyledTextDescription>
              <DebugInstructions />
            </StyledTextDescription>
          </StyledViewContainer>
          <StyledViewContainer>
            <StyledTextTitle>Learn More</StyledTextTitle>
            <StyledTextDescription>
              Read the docs to discover what to do next:
            </StyledTextDescription>
          </StyledViewContainer>
          <LearnMoreLinks />
        </StyledViewBody>
      </StyledScrollView>
    </SafeAreaView>
  </Fragment>
);

export default App;
