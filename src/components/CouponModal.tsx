import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CouponModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal shortly after entering the page, but only once per session
    const hasSeenCoupon = sessionStorage.getItem('couponShown');
    
    if (!hasSeenCoupon) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('couponShown', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-modal-overlay backdrop-blur-sm p-4">
      <div className="relative flex w-full max-w-[900px] flex-col md:flex-row bg-[var(--color-bg)] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] h-auto md:h-[550px] animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Images Collage */}
        <div className="relative hidden w-full md:w-1/2 md:block bg-[#eee] overflow-hidden">
          {/* Top Left Image */}
          <div 
            className="absolute top-0 left-0 w-full h-[60%] bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhD2uXq1e0U2t46U7o6Y8cT6gqS_v_X9jQxR_z_L2Z_e1T8U3pT_7K_uP_I_zU0jL0r9U0p_z4P_2Q7T_0L_q4C6C0JqT0J9pL_4U9pQ_p4J6j9J6L8U_L8p6Q6p8pT_H_m9P4U2Q_0S0l9r_X0Y0K1A")',
              clipPath: 'polygon(0 0, 100% 0, 0 100%)' 
            }}
          />
          {/* Middle/Right Image */}
          <div 
            className="absolute top-0 right-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ78bCiOaojVlf2_epNecFru-amzw1jbswKAOWQgP7ZV9tvon4Sg_yEnBkoI4oZdPpDJCt2Ke4scIEZ10SxdDF-uKpapQ_jfgAIKfqJZPXpm2A4rHb8HycUSXhGnflkPdZwD2m8tMRsz8_s-dIhoExLu88CGC9Y0TjG5XZMdidDzBDJhjPcdaW6tQtVmiLqh9bIaKGmzGKbcQV6zTOo3Vj-IW5l3ou91VPoCt-tvtjVWI01ma7CP0CrhJ_GeW2umOpMpp59V8sF64")',
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 50% 50%)' 
            }}
          />
          <div className="absolute inset-0 bg-[#eee]">
             <div className="w-full h-full relative">
                {/* Simulated Collage using borders and rotation for simplicity to match image5 */}
                <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] transform rotate-[35deg] bg-[var(--color-bg)] z-10 flex">
                   <div className="w-[10px] h-full bg-[var(--color-bg)] absolute left-1/2 top-0 z-20"></div>
                   <div className="w-full h-[10px] bg-[var(--color-bg)] absolute top-1/2 left-0 z-20"></div>
                   {/* Actually let's just use a single beautiful image to prevent messiness, or use three nicely clipped images */}
                   <img src="https://lh3.googleusercontent.com/aida/ADBb0ui2Kp0uRK-PirCPZt4COQ1oWbKzk79nn0qEWAUtugwx7BJFtHYXx_JbyZhC0_8p6RxwkuEVH3PTirMiM8Vpn8U66_duADvQy4gvt8236xB372xfhLS20ifnAbYGGDfe52l9r1ePegfwn6Es7T8hzexR-NdCFg0PkClhS-MlKA4Ehowv1ZJuc4i1GoLDirO4UffVyd05FcyemPFE2ZNLsdu9I3hTIMUIzspyNuQjojo_wvSagY0un4R91p4OrXcpyhRz341qv1-TWQ" className="absolute inset-0 w-full h-full object-cover -rotate-[35deg] scale-[1.5]" />
                </div>
             </div>
          </div>
          {/* Let's redo collage cleaner */}
          <div className="absolute inset-0 flex bg-[var(--color-bg)] flex-col z-20">
             {/* A white diagonal grid overlay over a single background image looks easiest and matches closely */}
             <div className="absolute inset-0 overflow-hidden">
               <img src="https://lh3.googleusercontent.com/aida/ADBb0uhHW5fJBqGmUT2_fguACs_Y9nPV7kFuUPJpvDXNvysc6iRmzdUc30zIzTwaMBzrvLChZKFHh5Mm3RyKYnDOmSdZ2pEm0x1XsYi9BxS95eXgeBV8FS_Sm6jX18il3cIEIgADJsftlNYN_y-C58prbTGObN2rfEYbp89q6Nb2mWFOlgS8tPtQ6-jk2K2eTmdtQM5HIX6btfZeyAx24kzf2I3oPm1emaWyRhpDwJ7AAYFKJT-NcM6gDqf0ms5We_oqyI3ssZ_EKCIw" className="absolute top-0 right-0 w-full h-2/3 object-cover shadow-[0_0_0_8px_var(--color-bg)] z-10" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}} />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgS1RYd581AintTcIC4yFJ253oISQfJ08l6azKfB-GqK-OW59U9oM-5bSxjcG12VA0UXPh33aqjBeRic7_INcQdE-q7vtb0mJ_t68qxriWqsHaRlrWXxX-ORyekPvZ8ikLiwvzZIf31MhJ2_ZTS36C99i24lsBhSzpk9RzzNb9vJMu-m0IJ8ggZqJWRLneejYGp06ENYObT49p_1RxPmxCYALSGSQfdQ5HFMPBgb5BySGdGhVuv_MQWjUeeIAWS-wW1taQILDR18o" className="absolute bottom-0 right-0 w-2/3 h-full object-cover shadow-[0_0_0_8px_var(--color-bg)]" style={{clipPath: 'polygon(100% 100%, 100% 40%, 0 100%)'}} />
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDkigEckehVjtmO6WDlV96O8BImR43C4LRlFe5Bn8w7PIDrEm0FFk8dW_dmJbNee6LFKGHT8PzH0YnyvINxQts68MLCg6hMUKuzcAaFlXRiJ1UivNHGzC85uStxjncBwJr2soEsZi9yE-O5wqGsRsR3yY-YFYhb5yQMJWwdiUabhTQd14Gp_shdoeSmud4hWwdhB5p8_onGQOoa506lXmVFGdFNdY7QnX7s2c8FoWkDK5bv1xpdDMaRNqe_KbZdHPBWLDRVKx3r74" className="absolute bottom-0 left-0 w-full h-full object-cover" style={{clipPath: 'polygon(0 0, 100% 60%, 50% 100%, 0 100%)'}} />
             </div>
             
             {/* Diagonal dividers for the collage effect */}
             <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none z-30">
               <div className="absolute w-[200%] h-3 bg-[var(--color-bg)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[35deg]"></div>
               <div className="absolute w-[200%] h-3 bg-[var(--color-bg)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[35deg]"></div>
             </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative flex w-full md:w-1/2 flex-col items-center justify-center p-[48px] text-center bg-[var(--color-bg)]">
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-[20px] right-[20px] text-[#ccc] hover:text-[#1a1a1a] transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-[var(--color-text-secondary)]">
             EXCLUSIVE WELCOME
          </div>

          <h2 className="mb-2 text-[64px] font-bold leading-none text-[var(--color-text-main)] headline">
            15% OFF
          </h2>

          <div className="mb-8 text-[14px] text-[var(--color-text-secondary)] max-w-sm">
            Sign up to our newsletter and unlock your first discount on all new season arrivals.
          </div>

          <div className="border border-dashed border-[#ccc] p-[12px] font-mono text-[18px] mb-[24px] bg-[#fafafa] w-full text-[var(--color-text-main)]">
            WELCOME15
          </div>

          <button className="w-full bg-[var(--color-accent)] p-[16px] text-[13px] font-semibold text-white uppercase tracking-[1px] transition-transform hover:opacity-80 active:scale-95 mb-4">
            CLAIM DISCOUNT
          </button>

          <button 
            onClick={() => setIsOpen(false)}
            className="text-[13px] font-medium text-[var(--color-text-secondary)] underline underline-offset-4 hover:opacity-80 transition-opacity mb-auto"
          >
            No, thanks
          </button>

          <div className="mt-8 text-[11px] leading-tight text-[var(--color-text-secondary)] max-w-sm relative">
            *Offer valid for new subscribers only & limited to 1 item. View all <a href="#" className="underline">exclusions here</a>. One promo code valid per order. Email and SMS discounts cannot be combined. By clicking and subscribing you agree to our <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
