import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthVerifyForm from '@/components/ui/sectionAuth/form/AuthVerifyForm';

const Verify = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Verify email your account'>
        <AuthVerifyForm />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default Verify;
