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

## 🛠️ Instalasi

Pustaka ini dirancang untuk dipasang langsung dari GitHub sebagai API WhatsApp untuk bot Anda.

### Cara 1: Menambahkan ke package.json (Disarankan)
Buka file `package.json` milik bot Anda, lalu tambahkan baris berikut di dalam blok `"dependencies"`:

```json
"dependencies": {
  "@zansxart/baileys": "github:zansxart/zansx-baileys"
}
```

Setelah itu, buka terminal/CMD di direktori bot Anda dan jalankan:
```bash
npm install
```

### Cara 2: Install Langsung dari Terminal
Jika Anda ingin menginstalnya langsung melalui terminal tanpa membuka `package.json`, jalankan perintah ini di dalam direktori bot Anda:
```bash
npm install github:zansxart/zansx-baileys
```

### Cara 3: Clone Manual (Untuk Pengembangan Pustaka)
Jika Anda ingin memodifikasi source code pustaka ini:
```bash
git clone https://github.com/zansxart/zansx-baileys.git
cd zansx-baileys
npm install
npm run build:tsc
```

---

## 💻 Contoh Penggunaan (Quick Start)

Setelah instalasi, Anda dapat menggunakan kode berikut untuk memulai:

```javascript
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('zansx-baileys')
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
            console.log('✅ zansx-baileys siap digunakan!')
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

## 🤖 Fitur: AI Logo

Kirim pesan dengan ikon AI (✨ AI) yang muncul di WhatsApp, seperti pesan dari Meta AI. Fitur ini **otomatis aktif** untuk semua pesan di private chat.

### Otomatis (Private Chat)
Semua pesan yang dikirim ke private chat akan otomatis menampilkan logo AI tanpa perlu konfigurasi apapun.

### Manual (Eksplisit)
```javascript
await sock.sendMessage(jid, { text: 'Halo! Saya asisten AI kamu.', ai: true })
```

> **Catatan:** Logo AI hanya didukung oleh WhatsApp di **private/personal chat**. Di group chat, tag tetap dikirim namun WhatsApp tidak menampilkan ikonnya.

---

## 📖 Fitur: Group Story

Kirim story/status langsung ke group chat menggunakan `groupStatusMessage`. Mendukung gambar, video, dan teks.

### Kirim Gambar sebagai Story
```javascript
await sock.sendMessage(groupJid, {
    groupStatusMessage: {
        image: { url: './gambar.jpg' },
        caption: 'Story dari bot! 🔥'
    }
})
```

### Kirim Video sebagai Story
```javascript
await sock.sendMessage(groupJid, {
    groupStatusMessage: {
        video: { url: './video.mp4' },
        caption: 'Video story! 🎬'
    }
})
```

### Kirim Teks sebagai Story
```javascript
await sock.sendMessage(groupJid, {
    groupStatusMessage: {
        text: 'Halo dari group story! ✨'
    }
})
```

---

## ⚠️ Kebijakan & Lisensi

Pustaka ini adalah perangkat lunak sumber terbuka (open-source) di bawah lisensi **MIT**.

**Disclaimer:** Proyek ini tidak terafiliasi secara resmi dengan WhatsApp. Gunakan secara bertanggung jawab. Kami tidak bertanggung jawab atas pemblokiran akun akibat penyalahgunaan atau penggunaan bot yang berlebihan (spam).

---

## 🤝 Kontribusi & Dukungan

Kami sangat menghargai kontribusi dari komunitas. Jika Anda menemukan bug atau ingin menambahkan fitur, silakan buat *Pull Request* atau *Issue*.

- **Website:** [zansxart.me](https://zansxart.me)
- **GitHub:** [zansxart/zansx-baileys](https://github.com/zansxart/zansx-baileys)

Copyright © 2025 [zansxart](https://github.com/zansxart)
