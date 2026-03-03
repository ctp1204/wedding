# Wedding Invitation — Chức năng
**Cô dâu & Chú rể:** Lê Quốc Cường & Kim Chi
**Ngày cưới:** 19 & 20 tháng 5 năm 2026
**Địa điểm:** Quảng Trị

---

## 🌸 Các Chức Năng Chính

### 1. Hero Section (Màn hình chào)
- Hiển thị tên cô dâu chú rể với hiệu ứng đẹp mắt
- Ngày cưới: 19 · 05 · 2026 — 20 · 05 · 2026
- Hiệu ứng cánh hoa rơi (petals animation)
- Nút "Cuộn xuống" hướng dẫn người dùng
- Nhạc nền: "50 Năm Về Sau" - Đặng Thanh Tuyền
- Nút play/pause music

### 2. Cô Dâu & Chú Rể (#couple-intro)
- Card giới thiệu chú rể: Lê Quốc Cường
  - Ảnh đại diện
  - Tiểu sử ngắn
- Card giới thiệu cô dâu: Kim Chi
  - Ảnh đại diện
  - Tiểu sử ngắn

### 3. Đếm Ngược (#countdown)
- Timer đếm ngược đến ngày cưới
- Hiển thị: Ngày, Giờ, Phút, Giây
- Cập nhật real-time

### 4. Thông Tin Hôn Lễ (#event)
- **Lễ Nhà Nữ (19/05/2026)**
  - Địa điểm: Nhà cô dâu - 19 Bùi Trung Lập, TT. Gio Linh, Gio Linh, Quảng Trị
  - Thời gian: 09:30

- **Lễ Nhà Nam & Tiệc Cưới (20/05/2026)**
  - Địa điểm: Nhà chú rể - Kiệt 16/10 Trần Phú, Phường 1, Quảng Trị
  - Thời gian: 10:00

### 5. Lịch Trình Ngày Cưới (#schedule)
- 06:00 — Trang điểm cô dâu
- 08:00 — Đón khách & chụp ảnh
- 09:30 — Lễ rước dâu
- 11:00 — Lễ thành hôn
- 12:00 — Tiệc trưa gia đình
- 18:00 — Tiệc cưới chính thức
- 21:00 — Chia tay & lưu niệm

### 6. Câu Chuyện Tình Yêu (#story)
- 2020 — Lần đầu gặp gỡ
- 2021 — Buổi hẹn hò đầu tiên
- 2022 — Chính thức thuộc về nhau
- 2024 — Lời cầu hôn
- Timeline với ảnh và mô tả

### 7. Gallery Ảnh (#gallery)
- Grid 9 ảnh khoảnh khắc của cặp đôi
- Lightbox xem ảnh full-size khi click
- Hiệu ứng hover đẹp mắt

### 8. Gợi Ý Trang Phục (#dress-code)
- **Bảng màu khuyến nghị:**
  - Hồng phấn (#fce4ec)
  - Champagne (#f8e0d0)
  - Vàng nhạt (#e8d5a3)
  - Xanh nhạt (#d4e8d4)
  - Tím lavender (#e8e0f0)
  - Xanh trời (#b8cce4)

- **Lưu ý:** Tránh mặc màu trắng

- **Gợi ý cho khách nữ:** Đầm dài, đầm midi, hoặc áo dài
- **Gợi ý cho khách nam:** Suit, vest, áo sơ mi lịch sự

### 9. Xác Nhận Tham Dự (RSVP) (#rsvp)
- Form điền thông tin:
  - Họ tên
  - Số điện thoại
  - Số lượng khách đi cùng
  - Có đi tiệc không
  - Lời chúc
- Nút gửi xác nhận
- Hiển thị thông báo cảm ơn

### 10. Mừng Cưới (#gift)
- **Thông tin chuyển khoản:**
  - Vietcombank — Lê Quốc Cường: 1234 5678 9012
  - Techcombank — Kim Chi: 9876 5432 1098
- Nút sao chép số tài khoản
- QR Code trang wedding để chia sẻ

### 11. Bản Đồ (#maps)
- **Nhà gái (Lễ vu quy — 19/05/2026):**
  - Địa chỉ: 19 Bùi Trung Lập, TT. Gio Linh, Gio Linh, Quảng Trị
  - Link Google Maps

- **Nhà trai (Lễ thành hôn — 20/05/2026):**
  - Địa chỉ: Kiệt 16/10 Trần Phú, Phường 1, Quảng Trị
  - Link Google Maps

### 12. Navigation Menu
- Menu cố định trên mobile
- Các link điều hướng:
  - Cô dâu & Chú rể
  - Hôn lễ
  - Lịch trình
  - Tình yêu
  - Gallery
  - Trang phục
  - Lời chúc
  - Mừng cưới
  - Địa điểm

---

## 🎨 Hiệu Ứng UI/UX

### Animations
- Scroll reveal (hiệu ứng hiện khi cuộn)
- Petals falling (cánh hoa rơi)
- Hover effects trên các card
- Smooth scroll navigation
- Music player animation

### Responsive Design
- Tương thích mobile, tablet, desktop
- Menu hamburger trên mobile

### Typography
- Font chính: Cormorant Garamond, Cinzel, Lato
- Màu sắc chủ đạo: Rose, Gold, Cream

---

## 📦 Cấu Trúc Dự Án

```
wedding/
├── index.html          # Trang wedding chính
├── package.json        # Dependencies (ytdl-core)
├── download_music.js   # Script tải nhạc từ YouTube
├── music.mp3          # Nhạc nền
└── FEATURES.md        # File này
```

---

## 🔧 Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Styling & Animations
- **Vanilla JavaScript** - Interactivity
- **QRCode.js** - Tạo QR Code
- **Google Fonts** - Typography
- **ytdl-core** (Node.js) - Tải nhạc từ YouTube
