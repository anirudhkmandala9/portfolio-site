export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#EDE9E3] py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-gray-400">
        <span>&copy; {new Date().getFullYear()} Anirudh Kumar Mandala</span>
        <div className="flex items-center gap-5">
          <a href="mailto:akmandal@uci.edu" className="hover:text-navy transition">Email</a>
          <a href="https://linkedin.com/in/anirudhkmandala" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition">LinkedIn</a>
          <a href="https://github.com/anirudhkmandala9" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
