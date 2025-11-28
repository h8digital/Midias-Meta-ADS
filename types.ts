import React from 'react';

export interface DimensionCardProps {
  title: string;
  format: string;
  ratio: string;
  pixels: string;
  description: string;
  aspectClass: string;
  icon: React.ReactNode;
  highlight?: boolean;
  reason?: string;
  proTip?: string;
}

export interface ChecklistItem {
  id: number;
  text: string;
  detail: string;
}