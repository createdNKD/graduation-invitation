/*
  THIỆP MỜI TỐT NGHIỆP — TÙY CHỈNH TẠI ĐÂY
  Sửa thông tin trong CONFIG, sau đó commit lên GitHub.
*/
const CONFIG = {
  graduateName: "Tên Bạn Gái",
  eventDate: "2026-11-20T08:00:00+07:00", // YYYY-MM-DDTHH:mm:ss+07:00
  eventDateText: "Thứ Sáu, 20 tháng 11, 2026",
  eventDateShort: "20.11.2026",
  eventTime: "08:00 – 11:00",
  venue: "Tên trường đại học",
  address: "Địa chỉ trường / hội trường",
  mapsUrl: "https://maps.google.com/",
  // Nếu muốn gửi RSVP đến email, thay địa chỉ bên dưới.
  rsvpEmail: "your-email@example.com"
};

const $ = (id) => document.getElementById(id);
function setText(id, value) { const el = $(id); if (el) el.textContent = value; }

function applyConfig() {
  document.title = `Graduation Invitation | ${CONFIG.graduateName}`;
  setText("graduateName", CONFIG.graduateName);
  setText("messageName", CONFIG.graduateName);
  setText("signatureName", CONFIG.graduateName);
  setText("heroDate", CONFIG.eventDateShort);
  setText("heroVenue", CONFIG.venue);
  setText("detailDate", CONFIG.eventDateText);
  setText("detailTime", CONFIG.eventTime);
  setText("detailVenue", CONFIG.venue);
  setText("detailAddress", CONFIG.address);
  $("mapLink").href = CONFIG.mapsUrl;
}

function updateCountdown() {
  const target = new Date(CONFIG.eventDate).getTime();
  const remaining = target - Date.now();
  if (Number.isNaN(target)) {
    setText("countdownNote", "Vui lòng kiểm tra ngày giờ trong CONFIG ở file script.js.");
    return;
  }
  if (remaining <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => setText(id, "00"));
    setText("countdownNote", "Ngày đặc biệt đã đến — chúc mừng tốt nghiệp! ♡");
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  setText("days", String(days).padStart(2, "0"));
  setText("hours", String(hours).padStart(2, "0"));
  setText("minutes", String(minutes).padStart(2, "0"));
  setText("seconds", String(seconds).padStart(2, "0"));
}
applyConfig();
updateCountdown();
setInterval(updateCountdown, 1000);

$("rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const contact = String(form.get("contact") || "").trim();
  const attendance = String(form.get("attendance") || "");
  const count = String(form.get("count") || "1");
  const wish = String(form.get("wish") || "").trim();
  const subject = encodeURIComponent(`RSVP tốt nghiệp - ${name}`);
  const body = encodeURIComponent(
    `Tên: ${name}\nLiên hệ: ${contact || "Chưa cung cấp"}\nPhản hồi: ${attendance}\nSố người: ${count}\nLời chúc: ${wish || "Không có"}`
  );
  setText("formMessage", "Đang mở ứng dụng email để gửi xác nhận…");
  window.location.href = `mailto:${CONFIG.rsvpEmail}?subject=${subject}&body=${body}`;
});
