import classNames from 'classnames';
import { Button } from 'components/Button';
import { FC } from 'react';
import { LoginForm } from 'types/Navigation';
import { builderMode } from 'utils/builderMode';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useLoginFormStatic } from './useLoginFormStatic';

export interface GetStartedFormProps {
  containerClassName?: string;
}

export const GetStartedFormUI: FC<GetStartedFormProps & { data: LoginForm }> = ({ containerClassName, data }) => {
  const { action, method, placeholder, buttonText, inputName, inputHiddenAction, note } = data;
  return (
    <div>
      <form action={action} method={method} className={classNames('pos:relative', containerClassName)}>
        <input
          className="h:80px! bd:0 p:0_20px! fz:20px! w:100% mb:10px bdrs:10px!@600px mb:0@600px"
          name={inputName}
          type="text"
          placeholder={placeholder}
        />
        <input type="hidden" name="action" value={inputHiddenAction} />
        <Button
          className="h:80px fz:20px p:0_36px bgc:color-primary w:100% pos:absolute@600px t:5px@600px r:5px@600px bdrs:8px!@600px w:auto@600px h:70px@600px"
          type="submit"
        >
          {buttonText}
        </Button>
      </form>
      {!!note && (
        <div className="mt:20px fz:16px c:color-primary*a">
          <ReactMarkdown linkTarget="_blank">{note}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export const GetStaredFormPrivate: FC<GetStartedFormProps> = ({ containerClassName }) => {
  const data = useLoginFormStatic();

  return <GetStartedFormUI containerClassName={containerClassName} data={data} />;
};

export const GetStartedForm: FC<GetStartedFormProps> = ({ containerClassName }) => {
  if (builderMode.get()) {
    return (
      <GetStartedFormUI
        containerClassName={containerClassName}
        data={{
          action: '',
          method: 'GET',
          inputName: 'shop',
          inputHiddenAction: 'requestShopifyCode',
          placeholder: '/collections/settings/entries/login',
          buttonText: 'Try for free',
          note: '',
        }}
      />
    );
  }

  return <GetStaredFormPrivate containerClassName={containerClassName} />;
};
