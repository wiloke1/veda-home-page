import App from 'App';
import { GetStartedFormUI } from 'components/GetStartedForm';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { LoginForm } from 'types/Navigation';

window.builderMode = true;

const HeaderNavigationPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const login = entry.getIn(['data', 'login']).toJS() as LoginForm;

  if (!login) {
    return <div>Loading...</div>;
  }
  return (
    <App overflow="hidden">
      <div style={{ height: '100vh', width: '600px', margin: '100px auto' }}>
        <GetStartedFormUI data={login} />
      </div>
    </App>
  );
};

export default HeaderNavigationPreview;
