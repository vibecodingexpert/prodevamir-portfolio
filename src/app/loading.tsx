export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-auto" style={{ color: 'var(--theme-primary)' }}
      >
        <rect x="2" y="2" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="6" y="6" width="4" height="12" rx="1" fill="currentColor" />
        <rect x="14" y="6" width="4" height="12" rx="1" fill="currentColor" />
        <rect x="6" y="22" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="14" y="22" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="28" y="10" width="6" height="20" rx="2" fill="currentColor" className="animate-pulse-bar" />
        <rect x="38" y="6" width="6" height="28" rx="2" fill="currentColor" className="animate-pulse-bar" style={{ animationDelay: '0.2s' }} />
        <rect x="48" y="14" width="6" height="16" rx="2" fill="currentColor" className="animate-pulse-bar" style={{ animationDelay: '0.4s' }} />
        <text x="64" y="26" fontFamily="var(--font-sans)" fontSize="16" fontWeight="700" fill="currentColor">AMIR</text>
        <text x="64" y="38" fontFamily="var(--font-sans)" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">DEVELOPER</text>
      </svg>
      <div className="h-0.5 rounded-full mt-8 overflow-hidden" style={{ width: '120px', background: 'rgba(var(--theme-primary-rgb), 0.15)' }}>
        <div className="h-full rounded-full animate-loading-bar" style={{ background: 'var(--theme-primary)' }} />
      </div>
    </div>
  );
}
