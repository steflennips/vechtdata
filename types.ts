
// Import React to ensure the React namespace is available for ReactNode and other types
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Cloud' | 'Analysis' | 'Language' | 'Tool';
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
}
