// site-config.js — default configuration for Digital Tricks website
// This file is loaded by index.html for default values.
// The admin panel (admin.html) saves overrides to localStorage which take precedence.

const SITE_CONFIG_DEFAULTS = {
  version: "1.0",

  stats: [
    { value: "6K+",  label: "Telegram Members" },
    { value: "3+",   label: "Years Experience" },
    { value: "100+", label: "Signals Monthly" },
    { value: "90%",  label: "Win Rate" }
  ],

  socials: [
    { platform: "YouTube",  label: "Subscribe",      url: "https://youtube.com/@digitaltricks70",    icon: "yt" },
    { platform: "Telegram", label: "Join Channel",   url: "https://t.me/DigitalTriicks",             icon: "tg" },
    { platform: "Twitter",  label: "Follow",         url: "https://twitter.com/digitaltricks70",     icon: "tw" },
    { platform: "WhatsApp", label: "Message",        url: "https://wa.me/923043962008",              icon: "wa" }
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
