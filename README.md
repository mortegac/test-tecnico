# Test Técnico Reactjs - Redux - Firebase

El test consiste en una APP utilizando Expo y Firebase, donde se cumpla con las siguientes funcionalidades:

.- Pantalla de login/registro en donde el usuario puede loggearse/registrarse en Cloud Firestore 

.- Pantalla Home 
Listado de mensajes, que cuenrtan con un título, mensaje y fecha.
 La app debe actualziarse en tiempo real a mensajes nuevos creadios desde firestore


# Estructura de carpetas
```
.- ├── src
.- │   ├── components
.- │   │   ├── commons
.- │   │   └── sections
.- │   │
.- │   ├── constants
.- │   │   ├── colorPalette.js
.- │   │   └── config.js
.- │   │
.- │   ├── navigation
.- │   │   ├── NavigationService.js
.- │   │   └── rootNavigation.js
.- │   │
.- │   ├── services
.- │   │   ├── firebase.js
.- │   │   ├── post.services.js
.- │   │   └── users.services.js
.- │   │
.- │   └── store
.- │       ├── errors
.- │       ├── loading
.- │       ├── posts
.- │       ├── users
.- │       ├── store.js
.- │       └── rootReducer.js
```

# Enviroment:
```
Expo CLI 3.0.10 environment info:
    System:
      OS: macOS 10.14.6
      Shell: 5.3 - /bin/zsh
    Binaries:
      Node: 10.16.3 - ~/.nvm/versions/node/v10.16.3/bin/node
      Yarn: 1.17.3 - /usr/local/bin/yarn
      npm: 6.9.0 - ~/.nvm/versions/node/v10.16.3/bin/npm
      Watchman: 4.9.0 - /usr/local/bin/watchman
    IDEs:
      Xcode: 11.0/11A420a - /usr/bin/xcodebuild
    npmPackages:
      expo: ^34.0.1 => 34.0.4
      react: 16.8.3 => 16.8.3
      react-native: https://github.com/expo/react-native/archive/sdk-34.0.0.tar.gz => 0.59.8
      react-navigation: ^4.0.5 => 4.0.5
    npmGlobalPackages:
      expo-cli: 3.0.10
```

# Tecnologias / Librerias

.-  "expo": "^34.0.1",

.-  "firebase": "^6.6.2",  

.-  "react": "16.8.3",

.-  "react-native": "0.59.8",

.-  "react-navigation": "^4.0.5",

.-  "react-navigation-stack": "^1.8.0",

.-  "react-redux": "^7.1.1",

.-  "redux": "^4.0.4",

.-  "redux-logger": "^3.0.6",

.-  "redux-thunk": "^2.3.0",

.-  "styled-components": "^4.3.2"
