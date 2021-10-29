import React from 'react';

import { Snackbar } from 'react-native-paper';

type Props = {
  error: boolean;
}

export const SnackbarComponent = ({ error }: Props) => (
  <Snackbar
    visible={error}
    onDismiss={() => {}}
    style={{ backgroundColor: '#f00' }}
    action={{
      label: '',
    }}
  >
    Ocorreu um erro. Verifique se os campos foram preenchidos corretamente.
  </Snackbar>
);
