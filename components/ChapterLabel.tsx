export default function ChapterLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="chapter-label text-xs sm:text-sm uppercase text-gold/80 font-body font-medium mb-4">
      {children}
    </p>
  );
}
