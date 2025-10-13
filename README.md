# AsakaCloud Clone Website

Bản sao chép website AsakaCloud.vn - Minecraft Server Hosting #1 Vietnam

## Cấu trúc dự án

```
.
├── index.html       # File HTML chính (bắt buộc ở root cho GitHub Pages)
├── styles.css       # File CSS cho styling
├── script.js        # File JavaScript cho animations và interactions
└── README.md        # File hướng dẫn này
```

## Deploy lên GitHub Pages

### Bước 1: Tạo repository trên GitHub
1. Đăng nhập vào GitHub
2. Tạo repository mới (ví dụ: `asakacloud-clone`)
3. **KHÔNG** chọn "Initialize with README" (vì đã có README.md)

### Bước 2: Push code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit - AsakaCloud clone website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages
1. Vào repository trên GitHub
2. Click vào **Settings** (Cài đặt)
3. Scroll xuống phần **Pages** (ở sidebar bên trái)
4. Trong phần **Source**:
   - Chọn branch: `main`
   - Chọn folder: `/ (root)`
5. Click **Save**
6. Đợi vài giây, GitHub sẽ hiển thị URL của website

### Bước 4: Truy cập website
Website sẽ có URL dạng: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Tính năng

✅ **100% Responsive** - Hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile)

✅ **Sao chép chính xác** - Giống y chang website AsakaCloud.vn gốc:
- Hero section với gradient text
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
