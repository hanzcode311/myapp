import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  "appId": "com.example.myapp",
  "appName": "My App",
  "webDir": "www",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 3000,
      "backgroundColor": "#ffffff",
      "showSpinner": false
    }
  }
};

export default config;
