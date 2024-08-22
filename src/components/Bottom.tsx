import React from 'react';

export const Bottom = () => (
  <footer 
    className="text-center p-5 py-5"
    style={{
      background: '#000000',
    }}
  >
    <div className="d-flex justify-content-between align-items-center" style={{ padding: '0 20px' }}>
      <img src="/leftersLogoBottom.png" alt="Logo" style={{ width: '120px', height: '30px' }} />
      <p style={{ marginBottom: '0', color: '#ffffff' }}>
        &copy; 2022 Lifters Tecnologia. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);