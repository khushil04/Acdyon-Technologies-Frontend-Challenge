import acdyonLogo from '../assets/acdyon-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-[#11151b]/15 bg-[#f4f3f0] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <img src={acdyonLogo} alt="AcdyOn" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display text-xl font-semibold tracking-[-.08em] text-[#11151b]">AcdyOn</span>
        </div>
        <p className="text-xs text-[#68727a]">Academic pathways for professionals.</p>
        <p className="text-xs text-[#68727a]">© {new Date().getFullYear()} AcdyOn</p>
      </div>
    </footer>
  );
}
