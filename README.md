
# artWeb - Jasa Pembuatan Website Profesional

## Tentang Proyek
artWeb adalah perusahaan penyedia jasa pembuatan website profesional berbasis di Yogyakarta. Website ini dibangun dengan React, TypeScript, Tailwind CSS, dan shadcn/ui.

## URL Proyek
**Live URL**: https://jr-repository.github.io/artWeb/

## Cara Deploy Website ini

### Opsi 1: Deploy Manual dengan GitHub Pages

1. **Fork atau Clone Repository**
   ```sh
   git clone https://github.com/jr-repository/artWeb.git
   cd artWeb
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Build Proyek**
   ```sh
   npm run build
   ```

4. **Deploy ke GitHub Pages Secara Manual**
   - Pastikan branch `gh-pages` sudah dibuat di repository
   - Copy semua file dari folder `dist` ke branch `gh-pages`
   - Push perubahan ke GitHub
   ```sh
   git checkout -b gh-pages
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

### Opsi 2: GitHub Actions untuk Auto Deploy ke GitHub Pages

1. **Setup GitHub Repository**
   - Buka repository GitHub > Settings > Pages
   - Di bagian "Source", pilih "GitHub Actions"

2. **Buat GitHub Actions Workflow**
   - Buat file `.github/workflows/deploy.yml` dengan konfigurasi berikut:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
          
      - name: Build
        run: npm run build
          
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

3. **Commit dan Push GitHub Actions Workflow**
   ```sh
   mkdir -p .github/workflows
   # Salin konfigurasi workflow ke .github/workflows/deploy.yml
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow for GitHub Pages deployment"
   git push
   ```

4. **Verifikasi Auto Deployment**
   - Buat perubahan kecil pada repository
   - Push perubahan ke branch main
   - Periksa tab "Actions" di GitHub untuk melihat workflow berjalan
   - Setelah selesai, site akan otomatis terupdate di GitHub Pages
   - Website akan tersedia di URL: https://jr-repository.github.io/artWeb/

### Opsi 3: Deploy ke Vercel

1. **Fork atau Clone Repository**
   ```sh
   git clone https://github.com/jr-repository/artWeb.git
   ```

2. **Setup Vercel**
   - Buat akun di [Vercel](https://vercel.com)
   - Install Vercel CLI: `npm i -g vercel`
   - Login: `vercel login`

3. **Deploy ke Vercel**
   ```sh
   cd artWeb
   vercel
   ```

4. **Setup Auto Deploy**
   - Connect repository GitHub melalui dashboard Vercel
   - Vercel akan otomatis men-deploy setiap kali ada push ke branch main

## Teknologi yang Digunakan

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Pengembangan Lokal

```sh
# Clone repository
git clone https://github.com/jr-repository/artWeb.git

# Masuk ke direktori proyek
cd artWeb

# Install dependencies
npm i

# Jalankan server pengembangan
npm run dev
```

## Kontak

Untuk informasi lebih lanjut tentang layanan pembuatan website, hubungi kami melalui WhatsApp di nomor 081573635143.
