# Graduation Invitation — Thiệp mời tốt nghiệp

Website thiệp mời tốt nghiệp dạng landing page, thiết kế responsive cho điện thoại và máy tính. Dùng HTML, CSS, JavaScript thuần nên dễ chỉnh sửa và deploy miễn phí bằng GitHub Pages.

## Xem website bằng GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `graduation-invitation`.
2. Upload toàn bộ file/thư mục trong dự án này (giữ nguyên cấu trúc).
3. Vào **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, nhấn **Save**.
6. Đợi GitHub build xong; website sẽ có địa chỉ dạng `https://TEN-USERNAME.github.io/graduation-invitation/`.

## Chỉnh sửa thông tin thiệp

Mở `script.js`, sửa phần `CONFIG` ở đầu file:

- `graduateName`: tên người tốt nghiệp.
- `eventDate`: ngày giờ đếm ngược theo ISO 8601, ví dụ `2026-11-20T08:00:00+07:00`.
- `eventDateText`, `eventDateShort`, `eventTime`: nội dung ngày và giờ hiển thị.
- `venue`, `address`: tên địa điểm và địa chỉ.
- `mapsUrl`: đường dẫn Google Maps đúng địa điểm.
- `rsvpEmail`: email nhận phản hồi RSVP.

Sau khi sửa, commit/push lên GitHub. GitHub Pages sẽ cập nhật website tự động.

## Thay ảnh bằng ảnh thật

Thay các file trong `assets/` bằng ảnh của bạn, hoặc sửa `src` trong `index.html`:
- `graduate-placeholder.svg`: ảnh chính.
- `memory-1.svg`, `memory-2.svg`, `memory-3.svg`: ảnh kỷ niệm.

Nếu dùng ảnh JPG/PNG, ví dụ `assets/anh-tot-nghiep.jpg`, sửa HTML thành:
`<img id="heroPhoto" src="assets/anh-tot-nghiep.jpg" alt="Ảnh tốt nghiệp" />`

## RSVP hoạt động như thế nào?

Bản hiện tại mở ứng dụng email của khách để soạn phản hồi gửi đến `rsvpEmail`. Nó **không tự lưu câu trả lời vào website** và yêu cầu khách có ứng dụng email đã thiết lập.

Nếu muốn lưu RSVP tự động vào Google Sheets, có thể kết nối Google Apps Script hoặc dịch vụ form bên ngoài. Không nên đặt mật khẩu, API key hoặc thông tin bí mật trong JavaScript công khai.

## Chạy thử trên máy

Chỉ cần mở `index.html` bằng trình duyệt. Khi chỉnh sửa, nên dùng VS Code và extension Live Server để tự tải lại trang.
