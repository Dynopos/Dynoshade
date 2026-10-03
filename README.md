# DynoShade

Laman web statik untuk DynoShade — sunshade sail & awning moden (Kelantan).

## Struktur

```
index.html            Halaman utama (satu halaman)
favicon.svg
robots.txt
assets/css/style.css  Gaya
assets/js/main.js     Pautan WhatsApp + tahun di footer
assets/img/           Gambar (WebP) + og-image.jpg untuk perkongsian media sosial
```

## Jalankan secara lokal

```sh
python3 -m http.server 8000
# buka http://localhost:8000
```

## Kemas kini biasa

- **Nombor WhatsApp**: tukar `SITE_CONTACT.whatsapp` dalam `assets/js/main.js`
  (format `60123456789`), serta `href` butang WhatsApp dan nombor telefon dalam `index.html`.
- **Harga pakej**: seksyen `#pakej` dalam `index.html`.
- **Gambar galeri**: letak fail baharu dalam `assets/img/` dan kemas kini `src`/`alt` dalam seksyen `#inspirasi`.

## Deploy

Tiada langkah build — muat naik semua fail ke mana-mana hos statik
(Netlify, Cloudflare Pages, GitHub Pages, atau cPanel `public_html`).

Selepas domain sebenar diketahui, tukar `og:image` dan `image` dalam JSON-LD di
`index.html` kepada URL penuh (cth. `https://dynoshade.my/assets/img/og-image.jpg`)
supaya pratonton WhatsApp/Facebook memaparkan gambar.
