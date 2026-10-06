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

## Deploy (GitHub Pages)

Laman ini di-host di **https://dynopos.github.io/Dynoshade/**.

Aktifkan sekali sahaja: repo → **Settings → Pages → Build and deployment** →
Source: *Deploy from a branch* → pilih branch `ccr-540b342c-llzcjo` dan folder `/ (root)` → **Save**.
Setiap push ke branch itu akan dikemas kini secara automatik dalam 1–2 minit.

Tiada langkah build. Fail `.nojekyll` memastikan GitHub menghidang fail apa adanya.

Jika guna domain sendiri kemudian, tukar URL `dynopos.github.io/Dynoshade` dalam
`index.html` (canonical, `og:url`, `og:image`, JSON-LD) kepada domain baharu.
