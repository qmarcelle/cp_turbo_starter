import QRCode from 'qrcode.react';
import React from 'react';

interface QRCodeGeneratorProps {
  value: string;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value }) => {
  return (
    <div>
      <QRCode value={value} />
    </div>
  );
};
