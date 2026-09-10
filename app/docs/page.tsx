import React from 'react';

export default function DocsPage() {
  return (
    <div className="min-h-screen p-8 bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold mb-4">StaffPurse Documentation</h1>
        <p className="text-slate-600 mb-6">Welcome to the StaffPurse Documentation! This documentation is hosted on GitHub Pages.</p>
        
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-slate-600 mb-6">StaffPurse is a Soroban-anchored spend management platform designed for scale and transparency.</p>
        
        <h3 className="text-lg font-medium mb-2">Quick Links</h3>
        <ul className="list-disc pl-5 text-blue-600">
          <li className="mb-1"><a href="https://github.com/StaffPurse/staffpurse-web/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="hover:underline">Architecture</a></li>
          <li className="mb-1"><a href="https://github.com/StaffPurse/staffpurse-web" target="_blank" rel="noopener noreferrer" className="hover:underline">Web Repository</a></li>
          <li className="mb-1"><a href="https://github.com/StaffPurse/staffpurse-app" target="_blank" rel="noopener noreferrer" className="hover:underline">App Repository</a></li>
          <li className="mb-1"><a href="https://github.com/StaffPurse/staffpurse-contracts" target="_blank" rel="noopener noreferrer" className="hover:underline">Contracts Repository</a></li>
        </ul>
      </div>
    </div>
  );
}
