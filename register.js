const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const companyName = document.getElementById('companyName').value;
    const contactName = document.getElementById('contactName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const boothSize = document.getElementById('boothSize').value;
    const numChairs = document.getElementById('numChairs').value;
    console.log("company name");
    // Validate input values
    if (!companyName || !contactName || !contactNumber) {
        alert('กรุณากรอกข้อมูลที่จำเป็น');
        return;
    }

    if (!boothSize) {
        alert('กรุณาเลือกขนาดบูธ');
        return;
    }

    if (isNaN(numChairs) || numChairs < 1 || numChairs > 10) {
        alert('จำนวนเก้าอี้ต้องเป็นตัวเลขระหว่าง 1 ถึง 10');
        return;
    }

    alert('ลงทะเบียนเรียบร้อยแล้ว');
});
