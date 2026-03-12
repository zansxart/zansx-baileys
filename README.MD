# ⚡ zansx-baileys

<div align="center">
  <img src="https://socialify.git.ci/zansxart/zansx-baileys/image?description=1&descriptionEditable=The%20most%20powerful%20and%20modified%20WhatsApp%20Web%20API%20library%20for%20Node.js&font=Inter&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark" alt="zansx-baileys" width="640" height="320" />
</div>

<p align="center">
  <a href="https://github.com/zansxart/zansx-baileys"><img src="https://img.shields.io/github/v/release/zansxart/zansx-baileys?style=for-the-badge&color=007bff" alt="version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/zansxart/zansx-baileys?style=for-the-badge&color=success" alt="license"></a>
  <a href="https://github.com/zansxart/zansx-baileys"><img src="https://img.shields.io/github/stars/zansxart/zansx-baileys?style=for-the-badge&color=orange" alt="stars"></a>
</p>

---

## 🚀 Apa itu zansx-baileys?

**zansx-baileys** adalah pustaka (library) WhatsApp Web API tingkat lanjut yang dibangun di atas fondasi Baileys. Proyek ini difokuskan pada stabilitas, kecepatan, dan perbaikan fitur-fitur yang sering bermasalah pada versi standar, seperti penanganan JID (@lid ke @pn) dan sinkronisasi grup yang lebih efisien.

Didesain untuk pengembang yang membutuhkan kontrol penuh tanpa harus bergantung pada Selenium atau Puppeteer.

---

## 🔥 Fitur Unggulan

- **💎 Elite Performance** - Penggunaan memori yang dioptimalkan untuk skalabilitas tinggi.
- **🛠️ Specialized Fixes** - Perbaikan otomatis untuk masalah `@lid` dan `@pn` yang sering terjadi di versi terbaru WhatsApp.
- **🔌 Zero Dependency UI** - Berjalan sepenuhnya di latar belakang tanpa membutuhkan browser fisik.
- **📦 Full Media Support** - Kirim dan terima semua jenis media (Gambar, Video, Dokumen, Sticker, Audio).
- **🛡️ Secure & Encrypted** - Mendukung penuh enkripsi End-to-End WhatsApp.
- **📊 Real-time Events** - Sistem *event listener* yang responsif untuk setiap aktivitas pesan atau koneksi.

---

## 🛠️ Instalasi Cepat

Gunakan pengelola paket favorit Anda:

```bash
# NPM
npm install zansxart

# Yarn
yarn add zansxart

# PNPM
pnpm add zansxart
```

---

## 💻 Contoh Penggunaan (Quick Start)

Buat file baru, misalnya `index.js`, dan tempelkan kode berikut:

```javascript
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('zansxart')
const { Boom } = require('@hapi/boom')

async function startZansxart() {
    // Kelola sesi secara otomatis
    const { state, saveCreds } = await useMultiFileAuthState('session_zansxart')

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        browser: ['zansxart', 'Chrome', '1.0.0']
    })

    // Simpan kredensial setiap kali diperbarui
    sock.ev.on('creds.update', saveCreds)

    // Pantau status koneksi
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error instanceof Boom) ? 
                lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut : true
            console.log('Koneksi terputus! Mencoba hubungkan kembali...', shouldReconnect)
            if (shouldReconnect) startZansxart()
        } else if (connection === 'open') {
            console.log('✅ zansxart-baileys siap digunakan!')
        }
    })

    // Tangani pesan masuk
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0]
        if (!m.message || m.key.fromMe) return

        console.log(`📩 Pesan dari ${m.key.remoteJid}: ${m.message.conversation || 'Media/Lainnya'}`)

        // Contoh balas pesan
        if (m.message.conversation === 'ping') {
            await sock.sendMessage(m.key.remoteJid, { text: 'pong! 🏓' })
        }
    })
}

startZansxart()
```

---

## ⚠️ Kebijakan & Lisensi

Pustaka ini adalah perangkat lunak sumber terbuka (open-source) di bawah lisensi **MIT**.

**Disclaimer:** Proyek ini tidak terafiliasi secara resmi dengan WhatsApp. Gunakan secara bertanggung jawab. Kami tidak bertanggung jawab atas pemblokiran akun akibat penyalahgunaan atau penggunaan bot yang berlebihan (spam).

---

## 🤝 Kontribusi & Dukungan

Kami sangat menghargai kontribusi dari komunitas. Jika Anda menemukan bug atau ingin menambahkan fitur, silakan buat *Pull Request* atau *Issue*.

- **Website:** [zansxart.me](https://zansxart.me)
- **GitHub:** [zansxart/zansxart-baileys](https://github.com/zansxart/zansxart-baileys)

Copyright © 2025 [zansxart](https://github.com/zansxart)
