import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeComponent(props) {
  const { value } = props;

  return (
    <QRCode value={value} />
  );
}

export default QRCodeComponent;