// Nombor WhatsApp Malaysia dalam format 60123456789.
const SITE_CONTACT = { whatsapp: '60182889932' };
const WHATSAPP_MESSAGE = 'Salam DynoShade. Saya ingin sebut harga sunshade sail. Lokasi: ';

if (/^60\d{8,11}$/.test(SITE_CONTACT.whatsapp)) {
  const url = 'https://wa.me/' + SITE_CONTACT.whatsapp + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = url;
  });
}

// Simulasi harga: Essential + bilangan tiang.
const sim = document.getElementById('simulasi');
if (sim) {
  const base = Number(sim.dataset.base);
  const pole = Number(sim.dataset.pole);
  const rm = (n) => 'RM' + n.toLocaleString('en-MY');
  const cta = sim.querySelector('[data-sim-cta]');
  const update = () => {
    const picked = sim.querySelector('input[name="tiang"]:checked');
    const n = picked ? Number(picked.value) : 0;
    const total = base + n * pole;
    sim.querySelector('[data-sim-label]').textContent = n ? 'Tiang: ' + n + ' × ' + rm(pole) : 'Tanpa tiang';
    sim.querySelector('[data-sim-poles]').textContent = n ? rm(n * pole) : 'RM0';
    sim.querySelector('[data-sim-total]').textContent = rm(total);
    sim.querySelectorAll('.sim-opt').forEach((opt) => {
      opt.classList.toggle('is-on', opt.querySelector('input').checked);
    });
    if (cta && /^60\d{8,11}$/.test(SITE_CONTACT.whatsapp)) {
      const pakej = n ? 'Essential 2 layer + ' + n + ' tiang' : 'Essential 2 layer tanpa tiang';
      const msg = 'Salam DynoShade. Saya berminat ' + pakej + ' (anggaran ' + rm(total) + '). Lokasi: ';
      cta.href = 'https://wa.me/' + SITE_CONTACT.whatsapp + '?text=' + encodeURIComponent(msg);
    }
  };
  sim.addEventListener('change', update);
  update();
}

document.getElementById('tahun').textContent = new Date().getFullYear();
