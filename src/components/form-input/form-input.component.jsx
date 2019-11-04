import React from 'react';

import { GroupContainer, FormInputContainer, LabelContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer type="text" onChange={handleChange} {...otherProps} />
    {
      label
        ? (<LabelContainer className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</LabelContainer>)
        : null
    }
  </GroupContainer>
);

export default FormInput;