# 🚀 Hướng Dẫn Deploy AsakaCloud lên GitHub Pages

## 📋 Bước Thực Hiện

### 1️⃣ Cài Node.js (nếu chưa có)
- Tải từ: https://nodejs.org/en (LTS version)
- Cài đặt và khởi động lại terminal

### 2️⃣ Cài Git (nếu chưa có)
- Tải từ: https://git-scm.com/download/win
- Cài đặt

### 3️⃣ Khởi Tạo Git Repository

```powershell
cd "c:\Users\Zykl  Optimizer\Documents\GitHub\Asakacloud.vn"
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git init
git add .
git commit -m "Initial commit: AsakaCloud React website"
```

### 4️⃣ Tạo Repository Trên GitHub

1. Vào https://github.com/new
2. Repository name: `Asakacloud` (hoặc tên khác)
3. Mô tả: `AsakaCloud - Minecraft Server Hosting`
4. Public (công khai)
5. Click **Create repository**

### 5️⃣ Push Code Lên GitHub

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Asakacloud.git
git push -u origin main
```

(Thay `YOUR_USERNAME` bằng username GitHub của bạn)

### 6️⃣ Cấu Hình GitHub Pages

1. Vào repository trên GitHub
2. Vào **Settings** → **Pages** (sidebar bên trái)
3. Phần **Build and deployment**:
   - Source: **Deploy from branch**
   - Branch: **main** → folder: **/frontend/dist**
4. Click **Save**

### 7️⃣ Đợi Deploy Hoàn Tất

- GitHub Actions sẽ tự động build và deploy
- Kiểm tra tab **Actions** để xem tiến trình
- Website sẽ có URL: `https://YOUR_USERNAME.github.io/Asakacloud/`

---

## 🔄 Update Website (Sau này)

Sau khi đã deploy, nếu thay đổi code:

```powershell
cd "c:\Users\Zykl  Optimizer\Documents\GitHub\Asakacloud.vn"
git add .
git commit -m "Update: [Mô tả thay đổi]"
git push
```

GitHub Actions sẽ **tự động build và deploy** lại! ✨

---

## 📦 Chạy Local (Để Test)

```powershell
cd "c:\Users\Zykl  Optimizer\Documents\GitHub\Asakacloud.vn\frontend"
npm install
npm run dev
```

Truy cập: `http://localhost:3000`

---

## 🐛 Troubleshooting

**Q: Git không được tìm thấy?**
- A: Cài lại Git, khởi động lại terminal

**Q: npm không được tìm thấy?**
- A: Cài lại Node.js, khởi động lại terminal

**Q: Build thất bại?**
- A: Kiểm tra tab Actions trên GitHub xem lỗi gì

**Q: Website không hiển thị sau deploy?**
- A: Chờ 2-5 phút, refresh page hoặc xóa cache

---

## ✅ Checklist Deploy

- [ ] Cài Node.js + Git
- [ ] Tạo GitHub Account
- [ ] Tạo Repository
- [ ] Push code lên GitHub
- [ ] Cấu hình GitHub Pages
- [ ] Kiểm tra GitHub Actions
- [ ] Truy cập website

**Xong!** 🎉
