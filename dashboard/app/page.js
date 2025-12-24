import React from 'react';

export default function Home() {
  return (
    <main style={{
      backgroundColor: '#020617',
      color: '#f8fafc',
      fontFamily: 'sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        border: '1px solid #1e293b',
        padding: '3rem',
        borderRadius: '1rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
        boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)'
      }}>
        <h1 style={{ color: '#38bdf8', fontSize: '3rem', marginBottom: '1rem' }}>NEXUS BROKER</h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>The Intelligent Intermediary Protocol Dashboard</p>
        
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          <div style={{ color: '#00FF00', fontWeight: 'bold' }}>SYSTEM STATUS: ACTIVE</div>
          <div style={{ color: '#38bdf8' }}>NEURAL MATCHING: READY</div>
          <div style={{ color: '#purple' }}>TRUST PROTOCOL: ENFORCED</div>
        </div>
      </div>
    </main>
  );
}
