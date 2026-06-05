// site-config.js — default configuration for Digital Tricks website
// This file is loaded by index.html for default values.
// The admin panel (admin.html) saves overrides to localStorage which take precedence.

const SITE_CONFIG_DEFAULTS = {
  version: "1.0",

  stats: [
    { value: "6K+",  label: "YouTube Subscribers" },
    { value: "7K+",  label: "Telegram Members" },
    { value: "200+", label: "Videos Published" },
    { value: "3+",   label: "Years Active" }
  ],

  socials: [
    { platform: "YouTube",  handle: "@digitaltricks70", label: "Subscribe",    url: "https://youtube.com/@digitaltricks70",  icon: "yt" },
    { platform: "Telegram", handle: "@DigitalTriicks",  label: "Join Channel", url: "https://t.me/DigitalTriicks",           icon: "tg" },
    { platform: "Twitter",  handle: "@Toheedahmed1",    label: "Follow",       url: "https://x.com/Toheedahmed1",           icon: "tw" },
    { platform: "WhatsApp", handle: "+92-304-3962008",  label: "Message",      url: "https://wa.me/923043962008",           icon: "wa" }
  ],

  affiliates: [
    {
      exchange: "Binance",
      deal: "20% fee discount",
      code: "DIGITALTRICKS",
      url: "https://www.binance.com/en/register?ref=DIGITALTRICKS",
      icon: "bnb"
    },
    {
      exchange: "OKX",
      deal: "Up to $10,000 bonus",
      code: "DTRICKS",
      url: "https://www.okx.com/join/DTRICKS",
      icon: "okx"
    },
    {
      exchange: "Bitget",
      deal: "15% fee rebate",
      code: "DTRICKS15",
      url: "https://www.bitget.com/en/referral/register?from=referral&clacCode=DTRICKS15",
      icon: "bitget"
    }
  ],

  contact: {
    collaboration: {
      telegram: { username: "@Toheedahmed1", url: "https://t.me/Toheedahmed1" },
      whatsapp:  { number: "+92-304-3962008", url: "https://wa.me/923043962008" }
    },
    help: {
      telegram: { username: "@DigitalTriicks", url: "https://t.me/DigitalTriicks" },
      whatsapp:  { label: "Join Community",    url: "https://chat.whatsapp.com/CNEuctUsWEdDW4mpeIXOcq" }
    }
  }
};
