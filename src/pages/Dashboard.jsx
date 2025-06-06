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

<<<<<<< HEAD
   
=======
      {/* <div className="dashboard-container">
        <h2 style={{ marginBottom: '1.5rem', fontSize: '20px' }}>Recent Activity</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '16px', borderLeft: '4px solid #0984e3', background: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ fontWeight: '500' }}>New project "Website Redesign" created</p>
            <p style={{ color: '#636e72', fontSize: '0.9rem' }}>2 hours ago</p>
          </div>
          <div style={{ padding: '16px', borderLeft: '4px solid #00b894', background: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ fontWeight: '500' }}>Task "Update Documentation" completed</p>
            <p style={{ color: '#636e72', fontSize: '0.9rem' }}>5 hours ago</p>
          </div>
          <div style={{ padding: '16px', borderLeft: '4px solid #6c5ce7', background: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ fontWeight: '500' }}>New team member joined</p>
            <p style={{ color: '#636e72', fontSize: '0.9rem' }}>1 day ago</p>
          </div>
        </div>
      </div> */}
>>>>>>> 5a2e9d67a09173765653faa9f5049be102cc031b
    </div>
  );
};

export default Dashboard;
