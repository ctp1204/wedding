---
description: Cách deploy website lên Vercel sử dụng CLI
---

Để deploy nhanh website này lên Vercel từ terminal, bạn hãy làm theo các bước sau:

1. Mở terminal tại thư mục dự án (`/home/cuong-tp/projects/wedding`).
2. Chạy lệnh để cài đặt Vercel CLI (nếu chưa có):
```bash
npm install -g vercel
```
3. Chạy lệnh deploy:
```bash
vercel
```
4. Làm theo các hướng dẫn trên màn hình:
   - `Set up and deploy?`: Yes
   - `Which scope?`: Chọn tài khoản của bạn
   - `Link to existing project?`: No
   - `What's your project's name?`: wedding (hoặc tên bạn muốn)
   - `In which directory is your code located?`: ./
   - `Auto-detect build settings?`: Yes

5. Sau khi hoàn tất, Vercel sẽ cung cấp cho bạn một đường link `https://wedding-xxx.vercel.app`.

// turbo
6. Để cập nhật bản chính thức (Production), chạy:
```bash
vercel --prod
```
