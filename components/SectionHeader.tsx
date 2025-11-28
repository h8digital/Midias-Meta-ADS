import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  color?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title, subtitle, color = "text-blue-600" }) => {
  return (
    <div className="mb-6">
      <div className={`flex items-center gap-2 ${color} mb-1`}>
        {icon}
        <h2 className="text-xl font-bold uppercase tracking-wide">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-500 text-sm font-medium">{subtitle}</p>}
      <div className="h-1 w-12 bg-gray-200 mt-2 rounded-full"></div>
    </div>
  );
};