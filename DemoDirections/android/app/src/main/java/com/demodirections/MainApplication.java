package com.demodirections;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.bottomsheetbehavior.BottomSheetBehaviorPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.airbnb.android.react.maps.MapsPackage;
import com.zyu.ReactNativeWheelPickerPackage;
import com.rnnestedscrollview.RNNestedScrollViewPackage;
import com.rncollapsingtoolbar.RNCollapsingToolbarPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new BottomSheetBehaviorPackage(),
          new MapsPackage(),
          new RNGooglePlacesPackage(),
          new ReactNativeWheelPickerPackage(),
          new RNCollapsingToolbarPackage(),
          new RNNestedScrollViewPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
