// @ts-nocheck
"use client";

import { useEffect } from 'react';

export default function NewsletterForm() {
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
  }, []);

  return (
    <div id="fd-form-6a1ffb8575eb5de873a98220"></div>
  );
}
