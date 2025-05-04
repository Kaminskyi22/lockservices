'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: any;
    fbq: any;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Analytics
    window.gtag = window.gtag || function() { (window.gtag.q = window.gtag.q || []).push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID);

    // Meta Pixel
    window.fbq = window.fbq || function() { (window.fbq.q = window.fbq.q || []).push(arguments); };
    window.fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      
      {/* Meta Pixel */}
      <Script
        strategy="afterInteractive"
        id="fb-pixel"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `
        }}
      />
    </>
  );
} 