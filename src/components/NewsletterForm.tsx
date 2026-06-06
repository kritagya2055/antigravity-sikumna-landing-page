// @ts-nocheck
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsletterForm() {
  const router = useRouter();

  useEffect(() => {
    // Inject Flodesk script into <head> if not already present
    const existingScript = document.querySelector('script[src*="flodesk"]');
    if (!existingScript) {
      (function(w: any, d: any, t: any, h: any, s: any, n: any) {
        w.FlodeskObject = n;
        var fn = function() {
          (w[n].q = w[n].q || []).push(arguments);
        };
        w[n] = w[n] || fn;
        var f = d.getElementsByTagName(t)[0];
        var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
        var sm = d.createElement(t);
        sm.async = true;
        sm.type = 'module';
        sm.src = h + s + '.mjs' + v;
        f.parentNode.insertBefore(sm, f);
        var sn = d.createElement(t);
        sn.async = true;
        sn.noModule = true;
        sn.src = h + s + '.js' + v;
        f.parentNode.insertBefore(sn, f);
      })(window as any, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
    }

    // Initialize the form
    (window as any).fd('form', {
      formId: '6a1ffb8575eb5de873a98220',
      containerEl: '#fd-form-6a1ffb8575eb5de873a98220'
    });

    // Monitor for the success message to trigger a redirect
    const container = document.getElementById('fd-form-6a1ffb8575eb5de873a98220');
    if (!container) return;

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Check if text content contains typical success phrases or if the form elements were removed
          const content = container.textContent?.toLowerCase() || '';
          if (content.includes('thank you for subscribing') || content.includes('thanks for subscribing')) {
            // Add a short delay before redirecting to allow Flodesk's post-submit automation to finish
            setTimeout(() => {
              router.push('/book');
            }, 2000);
            observer.disconnect();
          }
        }
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [router]);

  return (
    <div id="fd-form-6a1ffb8575eb5de873a98220"></div>
  );
}
