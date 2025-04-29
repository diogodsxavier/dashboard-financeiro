import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Dashboard Financeiro</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
        textAlign: 'center' as const,
    },
    title: {
        color: '#fff',
        margin: 0,
        fontSize: '24px',
    },
};

export default Header;