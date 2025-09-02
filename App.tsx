/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeStack from "./navigation/HomeStack"
import AppDrawer from "./navigation/AppDrawer"
import { NavigationContainer } from '@react-navigation/native';



import HMSAds, {
  HMSBanner,
  HMSInstream,
  HMSNative,
  HMSVastView,
  HMSVast,
  HMSInterstitial,
  HMSOaid,
  HMSInstallReferrer,
  HMSSplash,
  HMSReward,
} from "@hmscore/react-native-hms-ads";



function App(): JSX.Element {

  return (
      <SafeAreaView style={{flex:1}} >
        <StatusBar translucent backgroundColor="transparent" />

        <AppDrawer />

          <View>
            <HMSBanner
             style={{height:50}}
             bannerAdSize={"320_50"}
             adId="c711efa49u" 
             adParam={{ // specific ads for special ad audience //testw6vs28auh3
              adContentClassification: HMSAds.ContentClassification.AD_CONTENT_CLASSIFICATION_UNKOWN,
              gender:HMSAds.Gender.UNKNOWN,
              nonPersonalizedAd: HMSAds.NonPersonalizedAd.ALLOW_ALL,
              tagForChildProtection: HMSAds.TagForChild.TAG_FOR_CHILD_PROTECTION_UNSPECIFIED,
              tagForUnderAgeOfPromise:HMSAds.UnderAge.PROMISE_UNSPECIFIED,
             }}/>
          </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
