import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Projects', value: '', color: '#0984e3' },
    { title: 'Active Tasks', value: '', color: '#00b894' },
    { title: 'Team Members', value: '', color: '#6c5ce7' },
    { title: 'Completed', value: '', color: '#fdcb6e' },
    { title: 'Incomplete', value: '', color: '#e17055' }
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, index) => (
          <div key={index} className="card" style={{ borderTop: `4px solid ${stat.color}` }}>
            <h3 style={{ color: '#636e72', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{stat.title}</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2d3436' }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Dashboard;
