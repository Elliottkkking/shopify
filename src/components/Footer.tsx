import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <footer className="w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] text-[var(--color-text-main)] py-[80px] px-[40px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-[64px]">
          <div className="col-span-1 md:col-span-1">
            <img alt="TMWINGS Logo" className="w-[120px] h-auto mb-[32px] mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0ugtS65c4Xoe-7ZGZ09RxfgQ2FN1rdDuSrTe-0rZB0BPPum7nE98hK1nKcj2N0hvyNh83cHwq6uV8Hh65uDtx_0Wa0B5MmQ9ecrXzsAY_qX2XC9OxuRpsqPBlPavRu_wy6QmdhZ1oNdswiwpVM1Eg4nU983p7gOdD6vjd6AYBmuWFTnYw5NXaPdguuSuf37ca_DvJLPCw9XrgduwU0ur6zSLdLJzn7uaY3Y1Y04lcG6rieWVunIwXBgIs1WmuBdkaFjdV13aRiyv6g"/>
            <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">Engineering the perfect atmosphere. Minimalist design meets maximalist performance.</p>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[1px] text-[12px] mb-[24px]">Collections</h4>
            <ul className="flex flex-col gap-[12px] text-[14px] text-[var(--color-text-secondary)]">
              <li><Link to="/category/cooling" className="hover:text-[var(--color-text-main)] transition-colors">Air Conditioners</Link></li>
              <li><Link to="/category/cooling" className="hover:text-[var(--color-text-main)] transition-colors">Fans & Airflow</Link></li>
              <li><Link to="/category/heating" className="hover:text-[var(--color-text-main)] transition-colors">Heating Systems</Link></li>
              <li><Link to="/category/kitchen" className="hover:text-[var(--color-text-main)] transition-colors">Kitchen Series</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[1px] text-[12px] mb-[24px]">Experience</h4>
            <ul className="flex flex-col gap-[12px] text-[14px] text-[var(--color-text-secondary)]">
              <li><a className="hover:text-[var(--color-text-main)] transition-colors" href="#">The Studio</a></li>
              <li><a className="hover:text-[var(--color-text-main)] transition-colors" href="#">Installation Guide</a></li>
              <li><a className="hover:text-[var(--color-text-main)] transition-colors" href="#">Sustainability</a></li>
              <li><a className="hover:text-[var(--color-text-main)] transition-colors" href="#">Support Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[1px] text-[12px] mb-[24px]">Connect</h4>
            <div className="flex flex-col gap-[24px]">
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">Join our newsletter for exclusive previews and design news.</p>
              <div className="flex border-b border-[var(--color-text-main)] pb-[8px]">
                <input className="bg-transparent text-[14px] w-full focus:outline-none placeholder:text-[var(--color-text-secondary)] text-[var(--color-text-main)]" placeholder="Email Address" type="email"/>
                <button className="material-symbols-outlined text-[18px] text-[var(--color-text-main)] hover:opacity-70 transition-opacity">east</button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-[64px] pt-[32px] border-t border-[var(--color-border)] flex justify-between items-center text-[12px] text-[var(--color-text-secondary)]">
            <p>© 2026 TMWINGS. All rights reserved.</p>
            <div className="flex gap-[24px]">
                <a className="hover:text-[var(--color-text-main)] transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-[var(--color-text-main)] transition-colors" href="#">Terms of Service</a>
            </div>
        </div>
      </footer>
  );
}
