// แสดงเวลาท้องถิ่นและปีปัจจุบัน (ภาษาไทย)
(function(){
    const timeEl = document.getElementById('localTime');
    const yearEl = document.getElementById('year');

    function formatThaiDate(d){
        return d.toLocaleString('th-TH', {
            weekday:'long', day:'numeric', month:'long', year:'numeric',
            hour:'2-digit', minute:'2-digit'
        });
    }

    function update(){
        const now = new Date();
        if(timeEl) timeEl.textContent = 'เวลา ณ ปัจจุบัน: ' + formatThaiDate(now);
        if(yearEl) yearEl.textContent = now.getFullYear();
    }

    update();
    setInterval(update, 60_000); // อัปเดตทุก 1 นาที
})();