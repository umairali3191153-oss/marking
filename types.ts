// Fix: Import React to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}