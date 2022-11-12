import App from 'App';
import { builderMode } from 'utils/builderMode';

builderMode.set(true);

const NotificationsPagePreview = () => {
  return <App overflow="hidden"></App>;
};

export default NotificationsPagePreview;
