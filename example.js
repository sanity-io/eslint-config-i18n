import {useTranslation} from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  return (
    <>
      string literal{' '}
      <Button stringAttr="hello" templateAttr={`hello ${name}`} aria-label={t('some.key')} />
    </>
  );
}
