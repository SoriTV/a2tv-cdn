const hp1 = document.getElementsByClassName("homepage-1");
const hp2 = document.getElementsByClassName("homepage-2");
const hp3 = document.getElementsByClassName("homepage-3");
const hp4 = document.getElementsByClassName("homepage-4");
const hp5 = document.getElementsByClassName("content")
const hp6 = document.getElementsByClassName("sponsor");

hp1[0].innerHTML = `
<div class="homepage-1-container">
    <div class="homepage-1-image">
        <img src="https://cdn.glitch.global/d04f4d01-5bc3-4bc8-875c-e15b72c7ef55/Snapseed.jpg?v=1696907679781" width="" alt="" title="Ảnh chụp 10A2" class="homepage-1-image">
    </div>
    <div class="homepage-1-content">
        <h2 class="homepage-1-content-title">
            Chào mừng đến đã đến với Website chính thức của A2.
        </h2>
    </div>
</div>`;

hp2[0].innerHTML = `
<div class="homepage-2-container">
    <div class="homepage-2-image">
        <img src="https://cdn.glitch.global/d04f4d01-5bc3-4bc8-875c-e15b72c7ef55/%5B23-9-30%5D%20Trung%20Thu%20-%20Img%20(10).jpg?v=1697216931067" width="" alt="" title="Ảnh chụp chung" class="homepage-2-image">
    </div>
    <div class="homepage-2-content">
        <h2 class="homepage-2-content-title">
            Mặc dù mới là năm thứ nhất A2 cùng học và đồng hành với nhau...
        </h2>
    </div>
</div>`;

hp3[0].innerHTML = `
<div class="homepage-3-container">
    <div class="homepage-3-image">
        <img src="https://cdn.glitch.global/d04f4d01-5bc3-4bc8-875c-e15b72c7ef55/%5B23-9-25%5D%20Ch%E1%BB%A5p%20phi%E1%BA%BFm%20-%20Img%20(28).jpg?v=1696910889941" width="" alt="" title="Ảnh chụp chung" class="homepage-3-image">
    </div>
    <div class="homepage-3-content">
        <h2 class="homepage-3-content-title">
            nhưng cứ mỗi ngày trôi qua là mỗi kỷ niệm mới được tạo thành.
        </h2>
    </div>
</div>`;

hp4[0].innerHTML = `
<div class="homepage-4-container">
    <div class="homepage-4-image">
        <img src="https://cdn.glitch.global/d04f4d01-5bc3-4bc8-875c-e15b72c7ef55/%5B23-9-20%5D%20Ch%E1%BB%A5p%20phi%E1%BA%BFm%20-%20Img%20(14).jpg?v=1696910531391" width="" alt="" title="Ảnh chụp chung" class="homepage-4-image">
    </div>
    <div class="homepage-4-content">
        <h2 class="homepage-4-content-title">
            Vậy nên hãy góp sức để tạo nên những kỷ niệm đẹp trong chặng đường 3 năm này nhé!
        </h2>
    </div>
</div>`;

hp5[0].innerHTML = `
                <div class="content-container">
                    <div class="content-header">
                        <div class="content-header-container">
                            <p class="content-header-text">
                                MỤC LỤC CỦA A2 OFFICIAL WEBSITE
                            </p>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="content-card-image"></div>
                        <h4 class="content-card-title">
                            THÔNG TIN
                        </h4>
                        <p class="content-card-description-1">
                            Tổng quát những thông tin khái quát về lớp A2.
                        </p>
                        <div class="content-card-direction">
                            <a href="/thong-tin/" class="content-card-direction-button">
                                <span class="content-card-direction-button-css">Xem chi tiết</span>
                            </a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="content-card-image"></div>
                        <h4 class="content-card-title">
                            THÀNH VIÊN
                        </h4>
                        <p class="content-card-description-1">
                            Giới thiệu những thành viên có mặt trong hành trình 3 năm học của lớp A2.
                        </p>
                        <div class="content-card-direction">
                            <a href="/thanh-vien/" class="content-card-direction-button">
                                <span class="content-card-direction-button-css">Xem chi tiết</span>
                            </a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="content-card-image"></div>
                        <h4 class="content-card-title">
                            KHOẢNH KHẮC
                        </h4>
                        <p class="content-card-description-1">
                            Nơi lưu giữ những khoảnh khắc, kỉ niệm, ảnh và video của A2 trong suốt 3 năm học này.
                        </p>
                        <div class="content-card-direction">
                            <a href="/khoanh-khac/" class="content-card-direction-button">
                                <span class="content-card-direction-button-css">Xem chi tiết</span>
                            </a>
                        </div>
                    </div>
                    <div class="content-card">
                        <div class="content-card-image"></div>
                        <h2 class="content-card-title">
                            LIÊN HỆ
                        </h2>
                        <p class="content-card-description-1">
                            Liên lạc với những thành viên lớp A2 với các vấn đề liên quan.
                        </p>
                        <div class="content-card-direction">
                            <a href="/lien-he/" class="content-card-direction-button">
                                <span class="content-card-direction-button-css">Xem chi tiết</span>
                            </a>
                        </div>
                    </div>
                </div>
`;

hp6[0].innerHTML = `
<div class="sponsor-container">
    <div class="sponsor-header">
        <p class="sponsor-header-text">
            ĐƠN VỊ VẬN HÀNH A2 OFFICIAL WEBSITE
        </p>
    </div>
    <div class="sponsor-image">
        <a href="https://a2tv.stl.io.vn" class="sponsor-image-ex">
            <img src="https://cdn.glitch.global/d04f4d01-5bc3-4bc8-875c-e15b72c7ef55/a2.jpg?v=1699194995058" class="sponsor-image-ex">
        </a>
        <a href="https://stl.io.vn" class="sponsor-image-ex">
            <img src="https://cdn.glitch.global/fe903a6f-50b0-47e7-ac0b-5135afb92925/STL.png?v=1670131602976" class="sponsor-image-ex">
        </a>
    </div>
    <div class="sponsor-header">
        <p class="sponsor-header-text">
            A2 Official Website tự hào khi sử dụng tên miền <a class="information-content-bold">.vn</a> để tăng độ tin cậy và uy tín trên môi trường mạng!
        </p>
    </div>
</div>`;
