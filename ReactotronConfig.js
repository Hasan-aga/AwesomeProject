import Reactotron, {networking} from 'reactotron-react-native';
Reactotron.configure({name: 'AwesomeProject'})
  .useReactNative()
  .use(networking())
  .connect();
