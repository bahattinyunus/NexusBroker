import React from 'react';

const mockListings = [
    {
        "id": "NXS-RE-001",
        "title": "Cyber-Penthouse",
        "price": "2,500,000 USDT",
        "score": 98,
        "tag": "Verfied Home"
    },
    {
        "id": "NXS-MA-042",
        "title": "Autonomous Tanker Slot",
        "price": "45,000 USDT",
        "score": 95,
        "tag": "Marine Asset"
    }
];

export default function ListingsPage() {
    return (
        <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '3rem', fontFamily: 'Inter, sans-serif' }}>
            <h2 style={{ color: '#38bdf8', marginBottom: '2rem' }}>Direct Marketplace Listings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {mockListings.map(item => (
                    <div key={item.id} style={{
                        border: '1px solid #1e293b',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        background: '#0f172a',
                        transition: 'transform 0.2s'
                    }}>
                        <div style={{ fontSize: '0.8rem', color: '#38bdf8', marginBottom: '0.5rem' }}>{item.tag}</div>
                        <h3 style={{ margin: '0 0 1rem 0' }}>{item.title}</h3>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{item.price}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#64748b' }}>Trust Score: <b style={{ color: '#00FF00' }}>{item.score}</b></span>
                            <button style={{
                                background: '#38bdf8',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>Direct Buy</button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '4rem', padding: '2rem', border: '1px dashed #38bdf8', textAlign: 'center' }}>
                <p style={{ color: '#64748b' }}>No Brokers Involved. All transactions are P2P via Nexus Trust Protocol.</p>
            </div>
        </div>
    );
}
