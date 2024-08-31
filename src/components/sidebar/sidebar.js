import React from 'react';
import './sidebar.css';
import Dashboard from '../dashboard/dashboard';

function Sidebar() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">

        <nav className="sidebar-nav">
          <ul>
            <li><a href="#dashboard" className="active">Dashboard</a></li>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="#orders">Orders</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#channel">Channel</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#calculators">Calculators</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#account">Account</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <h1>Dashboard</h1>
        </header>
        <section className="content">
          <Dashboard />
        </section>
      </main>
    </div>
  );
}

export default Sidebar;
