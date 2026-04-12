# Portfolio — Nguyễn Văn A

Personal portfolio website built with React + Vite, TailwindCSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Chỉnh sửa nội dung

Toàn bộ nội dung portfolio nằm trong **1 file duy nhất**:

```
src/data/portfolio.js
```

Mở file này và thay đổi:
- `personalInfo` — tên, email, phone, links, ảnh chân dung
- `aboutData` — bio, stats, services
- `projectsData` — danh sách projects + filter categories
- `skillsData` — skill levels, radar chart data, tools
- `educationData` — timeline + certifications
- `contactData` — heading, subtitle, EmailJS config

**Không cần sửa code component** — chỉ cần thay data là xong.

## Thêm ảnh

Đặt ảnh vào thư mục `public/`:
- `public/avatar.jpg` — ảnh chân dung (About section)
- `public/resume.pdf` — file CV download
- `public/projects/project-1.jpg` — thumbnail projects
- `public/og-image.jpg` — ảnh Open Graph (share trên social media)

Cập nhật đường dẫn trong `portfolio.js`.

## Setup EmailJS

1. Tạo tài khoản tại [emailjs.com](https://www.emailjs.com/)
2. **Create Email Service** — chọn Gmail hoặc Outlook
3. **Create Email Template** với các biến:
   - `{{name}}` — tên người gửi
   - `{{email}}` — email người gửi
   - `{{subject}}` — tiêu đề
   - `{{message}}` — nội dung tin nhắn
4. Copy 3 IDs vào file `.env` (tạo từ `.env.example`):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build production

```bash
npm run build
npm run preview  # xem trước bản build
```

Output nằm trong `dist/`.

## Deploy lên Vercel

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com), import repo
3. Thêm Environment Variables (3 EmailJS IDs)
4. Click Deploy — xong!

## Deploy lên Netlify

1. Push code lên GitHub
2. Vào [app.netlify.com](https://app.netlify.com), import repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Thêm Environment Variables
6. Deploy

## Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 | UI framework |
| Vite 8 | Build tool |
| TailwindCSS 4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| EmailJS | Contact form (no backend) |

## Features

- Dark/Light mode with system preference detection
- Smooth scroll navigation with scroll-spy
- Animated sections on scroll (fade-up, stagger)
- SVG Radar chart (custom, no chart library)
- Animated progress bars
- Project filtering with layout animations
- Education timeline with alternating layout
- Contact form with real-time validation
- Toast notification system
- Modal for certificate details
- Responsive: mobile, tablet, desktop
- Accessibility: semantic HTML, focus states, skip navigation, reduced motion
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD, sitemap
