# Deepak Solar - Solar Rooftop Website

Modern, SEO-optimized website for Deepak Solar - serving Churu, Bikaner, and Sikar districts of Rajasthan.

## 🌟 Features

- ✅ Comprehensive solar calculator with subsidy calculations
- ✅ District → Tehsil → Village location cascade (100+ villages)
- ✅ Mobile-first responsive design
- ✅ SEO optimized with local keywords
- ✅ Web3Forms integration for contact form
- ✅ JSON-LD structured data for local business
- ✅ Bilingual content (Hindi/English)

## 📸 Adding Project Photos

Add these 4 photos to `public/images/projects/`:

1. **farm-dungargarh.jpg** - Green farm with solar in Dungargarh
2. **home-budhwali.jpg** - House with rooftop solar in Budhwali
3. **shop-ratangarh.jpg** - Commercial shop with solar in Ratangarh
4. **bifacial-panel.jpg** - Modern bifacial solar panel

Recommended: 1200x800px, JPG format, under 500KB each

## 🚀 Deployment to Cloudflare Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Deepak Solar website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Step 3: Configure Web3Forms

Update `js/form.js` line 153 with your Web3Forms access key:
```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'
```

Get free key at: https://web3forms.com

## 📦 Build for Production

```bash
npm install
npm run build
```

## 🛠️ Development

```bash
npm run dev
```

## 📋 SEO Keywords

Churu, Bikaner, Sikar, Ratangarh, Sardarshahar, Sujangarh, rooftop solar, solar subsidy Rajasthan, PM Surya Ghar, solar panels

## 📞 Support

For technical support, contact: Deepak Solar, Ratangarh

---

Built with ❤️ for sustainable energy in Rajasthan
