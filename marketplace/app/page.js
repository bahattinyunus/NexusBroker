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

                <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Describe what you need (e.g., 'Panamax vessel for grain')"
                            style={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #334155',
                                backgroundColor: '#1e293b',
                                color: 'white',
                                width: '400px'
                            }}
                        />
                        <button
                            onClick={async () => {
                                const query = document.getElementById('searchInput').value;
                                const resultsDiv = document.getElementById('resultsArea');
                                resultsDiv.innerHTML = '<div style="color: #38bdf8">Scanning Neural Network...</div>';

                                try {
                                    const res = await fetch('http://localhost:8000/match', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                            id: 'REQ-' + Math.random().toString(36).substr(2, 9),
                                            sector: 'general',
                                            type: 'buy',
                                            asset: query,
                                            details: {}
                                        })
                                    });
                                    const data = await res.json();

                                    if (data.matches && data.matches.length > 0) {
                                        resultsDiv.innerHTML = data.matches.map(m => `
                                            <div style="background: #0f172a; padding: 1rem; margin-top: 1rem; border: 1px solid #334155; border-radius: 0.5rem; text-align: left;">
                                                <div style="color: #00FF00; font-weight: bold; font-size: 0.8rem;">MATCH SCORE: ${(m.score * 100).toFixed(1)}%</div>
                                                <div style="color: #f8fafc; font-weight: bold;">${m.description}</div>
                                                <div style="color: #94a3b8; font-size: 0.9rem;">${JSON.stringify(m.metadata)}</div>
                                            </div>
                                        `).join('');
                                    } else {
                                        resultsDiv.innerHTML = '<div style="color: #ef4444">No sufficient matches found in the vector space.</div>';
                                    }
                                } catch (e) {
                                    console.error(e);
                                    resultsDiv.innerHTML = '<div style="color: #ef4444">Connection to Nexus Core failed. Ensure backend is running.</div>';
                                }
                            }}
                            style={{
                                backgroundColor: '#38bdf8',
                                color: '#020617',
                                padding: '1rem 2rem',
                                border: 'none',
                                borderRadius: '0.5rem',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>Initialize Search</button>
                    </div>
                    <div id="resultsArea" style={{ width: '100%', maxWidth: '600px', marginTop: '1rem' }}></div>
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
