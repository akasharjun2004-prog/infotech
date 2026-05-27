import React from 'react';

function Logo({ size = 'large' }) {
  const fontSize = size === 'small' ? '24px' : '36px';
  const taglineSize = size === 'small' ? '10px' : '14px';

  return (
    <div className="logo" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <h1 style={{ fontSize: fontSize, fontWeight: '700', letterSpacing: '1px', margin: 0 }}>
        RAK Infotech
      </h1>
      <p style={{ fontSize: taglineSize, fontWeight: '300', margin: 0, opacity: '0.9' }}>
        IT Solutions & Services
      </p>
    </div>
  );
}

export default Logo;
