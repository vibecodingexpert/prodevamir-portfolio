'use client';

interface Props {
  className?: string;
}

export default function Logo({ className = 'h-10 w-auto' }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--theme-primary)' }}>
      <rect x="2" y="6" width="28" height="28" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 26L16 10l6 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="38" y="26" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.5">Amir</text>
    </svg>
  );
}
