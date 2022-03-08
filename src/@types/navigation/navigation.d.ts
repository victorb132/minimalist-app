import { RootStackParamList } from '../../routes/app.stack.routes';
import { RootTabParamList } from '../../routes/app.tab.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends RootTabParamList {}
  }
}