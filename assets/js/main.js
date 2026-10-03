// Nombor WhatsApp Malaysia dalam format 60123456789.
const SITE_CONTACT = { whatsapp: '60182889932' };
const WHATSAPP_MESSAGE = 'Salam DynoShade. Saya ingin sebut harga sunshade sail. Lokasi: ';

if (/^60\d{8,11}$/.test(SITE_CONTACT.whatsapp)) {
  const url = 'https://wa.me/' + SITE_CONTACT.whatsapp + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = url;
  });
}

document.getElementById('tahun').textContent = new Date().getFullYear();
