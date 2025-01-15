import React from 'react';
import { Dialog } from '~/components/ui/Dialog';

export const MicroTestDialog: React.FC<{ value: string | null; keyId: string }> = ({ keyId, value }) => {
  return (
    <Dialog keyId={keyId}>
      <h2>Micro Test Dialog</h2>
      <p>ID: {value}</p>
    </Dialog>
  );
};
