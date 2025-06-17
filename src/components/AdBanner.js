import React, { useEffect } from 'react';

const AdBanner = ({ slot, format = 'auto', layoutKey }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2128485019765898"
      data-ad-slot={slot}
      data-ad-format={format}
      {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
