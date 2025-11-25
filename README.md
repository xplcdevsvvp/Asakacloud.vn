# AsakaCloud - Minecraft Server Hosting #1 Vietnam

Trang web chính thức của AsakaCloud - dịch vụ cho thuê máy chủ Minecraft hàng đầu tại Việt Nam.

## 🎮 Tính Năng

- ⚡ **Khởi tạo tức thì** - Máy chủ được tạo chỉ trong 30 giây
- 🛟 **Hỗ trợ 24/7** - Đội ngũ Việt Nam luôn sẵn sàng
- 🛡️ **Bảo vệ DDoS Pro** - Hệ thống phòng chống tấn công tiên tiến
- 💾 **Sao lưu không giới hạn** - Khôi phục dữ liệu dễ dàng
- 🎮 **Cài đặt mod 1-click** - Forge, Fabric, Paper có sẵn
- 💰 **Giá hợp lý nhất** - Chất lượng cao, chi phí thấp

## 🚀 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Design:** Dark theme neon tech gaming

## 📦 Cài Đặt & Chạy

```bash
cd frontend
npm install
npm run dev
```

## 🔨 Build

```bash
cd frontend
npm run build
```

## 📝 Cấu Trúc Project

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Hero.jsx
│   │   ├── Packages.jsx
│   │   ├── Features.jsx
│   │   ├── Software.jsx
│   │   └── Commitment.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🌐 Deploy lên GitHub Pages

### Bước 1: Build project
```bash
cd frontend
npm run build
```

### Bước 2: Tạo branch gh-pages
```bash
git add .
git commit -m "Build: AsakaCloud React website"
git push -u origin main
```

### Bước 3: Deploy trên Settings
1. Vào GitHub Settings → Pages
2. Source: Deploy from branch
3. Branch: `main` → folder: `/frontend/dist`
4. Save

Website sẽ có URL: `https://YOUR_USERNAME.github.io/Asakacloud/`

## 📧 Liên Hệ

- Discord: https://discord.gg/asakacloud
- Email: support@asakacloud.vn

## 📄 License

© 2025 AsakaCloud. All rights reserved.
- 6 tính năng chính
- 6 gói pricing (Basic, Balanced, Ryzen, Performance, VPS, Dedicated)
- Section phần cứng với thông số kỹ thuật
- Danh sách phần mềm hỗ trợ
- Bảng so sánh dịch vụ
- Call-to-action footer

✅ **Animations & Effects**:
- Smooth scroll
- Hover effects trên cards
- Fade-in animations khi scroll
- Infinite carousel cho software section
- Sticky navigation bar

✅ **Performance**:
- Tối ưu hóa CSS
- Lazy loading animations
- Smooth transitions

## Công nghệ sử dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Custom styling với CSS Variables
- **Vanilla JavaScript** - Không cần framework
- **Google Fonts** - Inter font family

## Tùy chỉnh

### Thay đổi màu sắc
Mở file `styles.css` và chỉnh sửa CSS Variables trong `:root`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Thay đổi nội dung
Chỉnh sửa file `index.html` để thay đổi text, links, hoặc thêm sections mới.

### Thay đổi animations
Mở file `script.js` để tùy chỉnh các hiệu ứng JavaScript.

## Chạy local

Để xem website trên máy local:

### Cách 1: Python (nếu có Python cài sẵn)
```bash
python3 -m http.server 5000
```
Mở trình duyệt: `http://localhost:5000`

### Cách 2: Node.js (nếu có Node.js cài sẵn)
```bash
npx http-server -p 5000
```
Mở trình duyệt: `http://localhost:5000`

### Cách 3: VS Code Live Server
1. Cài extension "Live Server" trong VS Code
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

## Hỗ trợ trình duyệt

✅ Chrome/Edge (phiên bản mới)
✅ Firefox (phiên bản mới)
✅ Safari (phiên bản mới)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## License

Dự án này được tạo ra cho mục đích học tập và demo. Tất cả nội dung và thương hiệu thuộc về AsakaCloud.

---

**Lưu ý**: Đây là bản clone website chỉ để học tập. Không sử dụng cho mục đích thương mại mà không có sự cho phép của AsakaCloud.
