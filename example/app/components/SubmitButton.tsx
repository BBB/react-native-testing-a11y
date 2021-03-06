import * as React from 'react';
import {Button} from 'react-native';
import {a11yOf} from '../lib/testID';

export const submitButtonID = a11yOf('SubmitButton');

export const SubmitButton: React.SFC<{}> = (props) => {
  return (
    <Button
      title={'Submit'}
      onPress={() => void 0}
      {...submitButtonID().asProps()}
    />
  );
};
