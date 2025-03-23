
# artWeb - Jasa Pembuatan Website Profesional

## Tentang Proyek
artWeb adalah perusahaan penyedia jasa pembuatan website profesional berbasis di Yogyakarta. Website ini dibangun dengan React, TypeScript, Tailwind CSS, dan shadcn/ui.

## URL Proyek
**Live URL**: https://lovable.dev/projects/bdd1004e-1797-4be6-8cf6-9d620c173b8e

## Cara Deploy Website ini

### Opsi 1: Deploy Manual dengan Netlify

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

4. **Deploy ke Netlify**
   - Buat akun di [Netlify](https://www.netlify.com/)
   - Klik "New site from Git"
   - Pilih GitHub dan repository artWeb
   - Konfigurasi pengaturan build:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Klik "Deploy site"

### Opsi 2: GitHub Actions untuk Auto Deploy ke Netlify

1. **Setup Netlify**
   - Buat site baru di Netlify
   - Dapatkan Site ID dan Personal Access Token dari Netlify
     - Site ID: Dashboard Netlify > Site settings > General > Site details > API ID
     - Access Token: User Settings > Applications > Personal access tokens > New access token

2. **Setup GitHub Secrets**
   - Buka repository GitHub > Settings > Secrets and variables > Actions
   - Tambahkan secrets berikut:
     - `NETLIFY_SITE_ID`: [Site ID dari Netlify]
     - `NETLIFY_AUTH_TOKEN`: [Personal access token dari Netlify]

3. **Buat GitHub Actions Workflow**
   - Buat file `.github/workflows/deploy.yml` dengan konfigurasi berikut:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
          
      - name: Build
        run: npm run build
          
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

4. **Commit dan Push GitHub Actions Workflow**
   ```sh
   mkdir -p .github/workflows
   # Salin konfigurasi workflow ke .github/workflows/deploy.yml
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow for Netlify deployment"
   git push
   ```

5. **Verifikasi Auto Deployment**
   - Buat perubahan kecil pada repository
   - Push perubahan ke branch main
   - Periksa tab "Actions" di GitHub untuk melihat workflow berjalan
   - Setelah selesai, site akan otomatis terupdate di Netlify

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
