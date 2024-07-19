import React from 'react';

import AuthChangePassForm from '@/components/ui/sectionUser/form/AuthChangePassForm';
import UserFormContainer from '@/components/ui/sectionUser/UserFormContainer';

const ChangePass = () => {
  return (
    <React.Fragment>
      <UserFormContainer title='Change Password your account'>
        <AuthChangePassForm />
      </UserFormContainer>
    </React.Fragment>
  );
};

export default ChangePass;
