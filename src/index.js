import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import RootNavigation from 'src/navigators';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const container = {flex: 1};
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={container} forceInset={{bottom: 'never'}}>
            <RootNavigation />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
