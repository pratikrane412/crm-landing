export interface ScreenshotItem {
  id: string;
  title: string;
  category: 'dashboard' | 'leads' | 'academics' | 'finance' | 'forms' | 'admin';
  image: string;
  badge: string;
  description: string;
  options: {
    name: string;
    description: string;
  }[];
}

export interface Hotspot {
  id: string;
  top: string;
  left: string;
  title: string;
  metric: string;
  description: string;
  badge: string;
}

export interface RoleView {
  id: string;
  roleTitle: string;
  tagline: string;
  badge: string;
  screenshot: string;
  accentColor: string;
  superpowers: string[];
  primaryMetrics: {
    label: string;
    value: string;
    sub: string;
  }[];
}
