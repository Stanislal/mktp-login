import React, { useContext } from 'react';
import { handleSAMLLogin } from '@oracle-cx-commerce/livelo-osf/src/plugins/utils';
import { StoreContext } from '@oracle-cx-commerce/react-ui/contexts';
import { connect } from '@oracle-cx-commerce/react-components/provider';
import { getPageData } from './selectors';

const MktpLogin = props => {
  const { action } = useContext(StoreContext);
  const { isUserLoggedIn, loginText } = props;

  return (
    <>
      <button onClick={() => handleSAMLLogin(action)}>{loginText}</button>
      {isUserLoggedIn ? 'LOGADO' : 'DESLOGADO'}
    </>
  );
};

export default connect(getPageData)(MktpLogin);
