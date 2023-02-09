package com.blitzapp.provoqrcode;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;


import com.blitzapp.module.push.RNEasyPushNotificationsModule;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.blitzapp.animatedsplash.animation.GroupAnimation;
import com.blitzapp.animatedsplash.animation.AddImageView;

import static com.blitzapp.animatedsplash.animation.Splash.SCALE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHSLIDEDOWN;
import static com.blitzapp.animatedsplash.animation.Splash.FADE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHSLIDELEFT;
import static com.blitzapp.animatedsplash.animation.Splash.performSingleAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.createSplashView;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundColor;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;

import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Set;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
     @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    initiateSplash();
         if(RNEasyPushNotificationsModule.activityToOpen == null){
             RNEasyPushNotificationsModule.activityToOpen = this;
         }

         Intent i = getIntent();
         Bundle extras = i.getExtras();
         if (extras != null) {
             for (String key : extras.keySet()) {
                 Object value = extras.get(key);
                 Log.d("MainActivity", "Extras received at onCreate:  Key: " + key + " Value: " + value);
             }

             String title = extras.getString("title");
             String message = extras.getString("body");
             if (message != null && message.length() > 0) {
                 RNEasyPushNotificationsModule.setExtras(extras);
             }
         }
  }

    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Bundle extras = intent.getExtras();
        if (extras != null) {
            for (String key : extras.keySet()) {
                Object value = extras.get(key);
                Log.d("MainActivity", "Extras received at onNewIntent:  Key: " + key + " Value: " + value);
            }

            String title = extras.getString("title");
            String message = extras.getString("body");
            if (message != null && message.length() > 0) {
                RNEasyPushNotificationsModule.setExtras(extras);
            }
            JSONObject json = new JSONObject();
            Set<String> keys = extras.keySet();
            for (String key : keys) {
                try {
                    json.put(key, JSONObject.wrap(extras.get(key)));
                } catch(JSONException e) {
                    //Handle exception here
                }
            }
            String data = "";
            try {
                data = json.getString("data");

            } catch (JSONException e) {
                e.printStackTrace();
                data = json.toString();
            }
            Intent i = new Intent("onNotificationTap");

            i.putExtra("data", data);
            LocalBroadcastManager.getInstance(this).sendBroadcast(i);
        }
    }
  @Override
  protected String getMainComponentName() {
    return "provoQRCode";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
    public void initiateSplash() {

        createSplashView(MainActivity.this);

        //set background color to view
        setBackgroundImage(R.drawable.splash);

        // set splash hide animation
        setSplashHideAnimation(SPLASHSLIDELEFT);
        AddImageView logoimage = 
       new AddImageView(R.drawable.splashfg, screenHeight * 0.1, screenWidth * 0.25, 
       AddImageView.getCenterX(screenWidth * 0.25), 
       AddImageView.getCenterY(screenHeight * -0.5),
        AddImageView.FIT_XY, true);
        performSingleAnimation(logoimage, SCALE, 1500,1f, 2f, 1f, 2f);

        // set splash hide delay
        setSplashHideDelay(1500);
        splashShow();


    }
}
