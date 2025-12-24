import React from 'react';

export default function MarketplaceHome() {
    return (
        <div style={{
            backgroundColor: '#020617',
            color: '#f8fafc',
            minHeight: '100vh',
            fontFamily: 'Inter, sans-serif',
            padding: '2rem'
        }}>
            {/* Navigation */}
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 3rem',
                borderBottom: '1px solid #1e293b'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38bdf8' }}>NEXUS MARKETPLACE</div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <span>Search Trade</span>
                    <span>List Asset</span>
                    <span style={{ color: '#00FF00' }}>Direct Connect</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                textAlign: 'center',
                padding: '5rem 2rem',
                background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)'
            }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-0.05em' }}>
                    Kill the <span style={{ color: '#38bdf8' }}>Middle-Man</span>.
                </h1>
                <p style={{ fontSize: '1.4rem', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
                    The world's first AI-driven P2P high-stakes marketplace. No brokers. No hidden fees. Just pure mathematical matching.
                </p>

                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button style={{
                        backgroundColor: '#38bdf8',
                        color: '#020617',
                        padding: '1rem 2rem',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>Explore Assets</button>
                    <button style={{
                        backgroundColor: 'transparent',
                        color: '#38bdf8',
                        padding: '1rem 2rem',
                        border: '2px solid #38bdf8',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>List to Nexus</button>
                </div>
            </section>

            {/* Logic Stats */}
            <section style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                padding: '3rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ padding: '2rem', border: '1px solid #1e293b', borderRadius: '1rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#00FF00' }}>0% Commission</h3>
                    <p style={{ color: '#64748b' }}>Settled via Trust Layer smart contracts.</p>
                </div>
                <div style={{ padding: '2rem', border: '1px solid #1e293b', borderRadius: '1rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#38bdf8' }}>Neural Search</h3>
                    <p style={{ color: '#64748b' }}>AI finds exactly what you need, not what brokers want to sell.</p>
                </div>
                <div style={{ padding: '2rem', border: '1px solid #1e293b', borderRadius: '1rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#purple' }}>Direct Connect</h3>
                    <p style={{ color: '#64748b' }}>Encrypted P2P negotiation between final parties.</p>
                </div>
            </section>

            {/* Footer Vision */}
            <footer style={{
                marginTop: '5rem',
                textAlign: 'center',
                color: '#334155',
                fontSize: '0.9rem'
            }}>
                NEXUS Intel Protocol v2.1.4 | Disrupting the Ordinary
            </footer>
        </div>
    );
}
