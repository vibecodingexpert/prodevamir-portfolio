'use client';

import { useEffect, useState, useRef } from 'react';
import { Palette, X, Sun, Moon, RotateCcw, ImageOff } from 'lucide-react';

interface ThemeColor {
  primary: string;
  hover: string;
  light: string;
  rgb: string;
  secondary: string;
  secondaryRgb: string;
}

const PRESETS: { name: string; colors: ThemeColor }[] = [
  { name: 'Orange', colors: { primary: '#f97316', hover: '#ea580c', light: '#fbbf24', rgb: '249,115,22', secondary: '#fbbf24', secondaryRgb: '251,191,36' } },
  { name: 'Blue', colors: { primary: '#3b82f6', hover: '#2563eb', light: '#93c5fd', rgb: '59,130,246', secondary: '#93c5fd', secondaryRgb: '147,197,253' } },
  { name: 'Green', colors: { primary: '#22c55e', hover: '#16a34a', light: '#86efac', rgb: '34,197,94', secondary: '#86efac', secondaryRgb: '134,239,172' } },
  { name: 'Purple', colors: { primary: '#a855f7', hover: '#9333ea', light: '#c084fc', rgb: '168,85,247', secondary: '#c084fc', secondaryRgb: '192,132,252' } },
  { name: 'Pink', colors: { primary: '#ec4899', hover: '#db2777', light: '#f9a8d4', rgb: '236,72,153', secondary: '#f9a8d4', secondaryRgb: '249,168,212' } },
  { name: 'Red', colors: { primary: '#ef4444', hover: '#dc2626', light: '#fca5a5', rgb: '239,68,68', secondary: '#fca5a5', secondaryRgb: '252,165,165' } },
  { name: 'Teal', colors: { primary: '#14b8a6', hover: '#0d9488', light: '#5eead4', rgb: '20,184,166', secondary: '#5eead4', secondaryRgb: '94,234,212' } },
  { name: 'Cyan', colors: { primary: '#06b6d4', hover: '#0891b2', light: '#67e8f9', rgb: '6,182,212', secondary: '#67e8f9', secondaryRgb: '103,232,249' } },
];

const DEFAULT_COLORS: ThemeColor = {
  primary: '#f97316', hover: '#ea580c', light: '#fbbf24', rgb: '249,115,22',
  secondary: '#fbbf24', secondaryRgb: '251,191,36',
};

const COLOR_KEY = 'portfolio-theme-color';
const MODE_KEY = 'portfolio-theme-mode';
const GRAY_KEY = 'portfolio-grayscale';

function applyTheme(colors: ThemeColor) {
  const root = document.documentElement;
  root.style.setProperty('--theme-primary', colors.primary);
  root.style.setProperty('--theme-primary-hover', colors.hover);
  root.style.setProperty('--theme-primary-light', colors.light);
  root.style.setProperty('--theme-primary-rgb', colors.rgb);
  root.style.setProperty('--theme-secondary', colors.secondary);
  root.style.setProperty('--theme-secondary-rgb', colors.secondaryRgb);
}

function applyMode(mode: 'dark' | 'light') {
  if (mode === 'light') document.documentElement.setAttribute('data-theme', 'light');
  else document.documentElement.removeAttribute('data-theme');
}

function applyGrayscale(on: boolean) {
  document.documentElement.classList.toggle('grayscale', on);
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '249,115,22';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}

function deriveHover(hex: string): string {
  const r = Math.max(parseInt(hex.slice(1, 3), 16) - 30, 0);
  const g = Math.max(parseInt(hex.slice(3, 5), 16) - 30, 0);
  const b = Math.max(parseInt(hex.slice(5, 7), 16) - 30, 0);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function deriveLight(hex: string): string {
  const r = Math.min(parseInt(hex.slice(1, 3), 16) + 60, 255);
  const g = Math.min(parseInt(hex.slice(3, 5), 16) + 60, 255);
  const b = Math.min(parseInt(hex.slice(5, 7), 16) + 60, 255);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function clearAllStorage() {
  localStorage.removeItem(COLOR_KEY);
  localStorage.removeItem(MODE_KEY);
  localStorage.removeItem(GRAY_KEY);
}

export default function ThemeColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const [grayscale, setGrayscale] = useState(false);
  const [savedColors, setSavedColors] = useState<ThemeColor | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedColor = localStorage.getItem(COLOR_KEY);
    if (savedColor) {
      try { const p = JSON.parse(savedColor); setSavedColors(p); applyTheme(p); } catch { null; }
    }
    const savedMode = localStorage.getItem(MODE_KEY);
    if (savedMode === 'light' || savedMode === 'dark') { setMode(savedMode); applyMode(savedMode); }
    const savedGray = localStorage.getItem(GRAY_KEY);
    if (savedGray === 'true') { setGrayscale(true); applyGrayscale(true); }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const selectPreset = (colors: ThemeColor) => {
    setSavedColors(colors);
    applyTheme(colors);
    localStorage.setItem(COLOR_KEY, JSON.stringify(colors));
  };

  const handlePrimaryChange = (hex: string) => {
    if (!/^#[0-9a-f]{6}$/i.test(hex)) return;
    const prev = savedColors;
    const colors: ThemeColor = {
      primary: hex,
      hover: deriveHover(hex),
      light: deriveLight(hex),
      rgb: hexToRgb(hex),
      secondary: prev?.secondary || deriveLight(hex),
      secondaryRgb: prev?.secondaryRgb || hexToRgb(deriveLight(hex)),
    };
    setSavedColors(colors);
    applyTheme(colors);
    localStorage.setItem(COLOR_KEY, JSON.stringify(colors));
  };

  const handleSecondaryChange = (hex: string) => {
    if (!/^#[0-9a-f]{6}$/i.test(hex)) return;
    const prev = savedColors;
    const colors: ThemeColor = {
      primary: prev?.primary || '#f97316',
      hover: prev?.hover || '#ea580c',
      light: prev?.light || '#fbbf24',
      rgb: prev?.rgb || '249,115,22',
      secondary: hex,
      secondaryRgb: hexToRgb(hex),
    };
    setSavedColors(colors);
    applyTheme(colors);
    localStorage.setItem(COLOR_KEY, JSON.stringify(colors));
  };

  const toggleMode = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    applyMode(next);
    localStorage.setItem(MODE_KEY, next);
  };

  const toggleGrayscale = () => {
    const next = !grayscale;
    setGrayscale(next);
    applyGrayscale(next);
    localStorage.setItem(GRAY_KEY, next.toString());
  };

  const resetAll = () => {
    setGrayscale(false);
    setMode('dark');
    setSavedColors(DEFAULT_COLORS);
    applyGrayscale(false);
    applyMode('dark');
    applyTheme(DEFAULT_COLORS);
    clearAllStorage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div ref={panelRef} className="absolute bottom-16 right-0 border-border rounded-2xl p-5 shadow-2xl w-72 max-h-[50vh] overflow-y-auto"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-primary">Theme Settings</span>
            <button onClick={() => setIsOpen(false)} className="text-muted3 hover-text-primary transition-colors">
              <X size={16} />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-card border-border">
            <span className="text-sm text-muted">Appearance</span>
            <button
              onClick={toggleMode}
              className="p-2 rounded-lg bg-card-hover hover-bg-accent-30 transition-all"
              title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {mode === 'dark' ? <Sun size={16} className="text-accent" /> : <Moon size={16} className="text-accent" />}
            </button>
          </div>

          <div className="mb-3">
            <span className="text-xs text-muted">Preset Themes</span>
          </div>
          <div className="grid grid-cols-4 gap-2.5 mb-5">
            {PRESETS.map(({ name, colors }) => (
              <button
                key={name}
                title={name}
                onClick={() => selectPreset(colors)}
                className="w-full aspect-square rounded-full border-2 border-border hover:scale-110 transition-transform duration-200 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
              />
            ))}
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-xs text-muted mb-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-sm align-middle mr-1.5" style={{ background: 'var(--theme-primary)' }} />
                Primary Color
              </label>
              <input
                type="color"
                value={savedColors?.primary || '#f97316'}
                onChange={(e) => handlePrimaryChange(e.target.value)}
                className="w-full h-9 rounded-xl bg-card border-border cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs text-muted mb-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-sm align-middle mr-1.5" style={{ background: 'var(--theme-secondary)' }} />
                Heading Gradient Color
              </label>
              <input
                type="color"
                value={savedColors?.secondary || '#fbbf24'}
                onChange={(e) => handleSecondaryChange(e.target.value)}
                className="w-full h-9 rounded-xl bg-card border-border cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-card border-border">
            <span className="text-sm text-muted">Grayscale</span>
            <button
              onClick={toggleGrayscale}
              className={`p-2 rounded-lg transition-all ${grayscale ? 'bg-accent-20 text-accent' : 'bg-card-hover text-muted hover-text-accent'}`}
              title="Toggle grayscale"
            >
              <ImageOff size={16} />
            </button>
          </div>

          <button
            onClick={resetAll}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-muted hover-text-accent hover-border-accent-30 transition-all text-xs"
          >
            <RotateCcw size={14} />
            Reset All Settings
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 shadow-accent"
        style={{
          background: `linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))`,
        }}
      >
        <Palette size={20} />
      </button>
    </div>
  );
}
