function renderTable() {
    let Carts = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
    if(Carts.length === 0) {
        document.getElementById('myTable').style.display = 'none';
        return false; 
    }
    document.getElementById('myTable').style.display = 'block';
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Trạng thái</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    Carts.forEach((Cart, index) => {
        index++;
        let tongTien = Cart.GiaBan*Cart.SoLuongMua;
        let SoLuong = Cart.SoLuongMua;
        tableContent += `
        <tr>
            <td>${index}</td>
            <td>${Cart.LoaiSP}</td>
            <td>${Cart.MaSP}</td>
            <td>${SoLuong}</td>
            <td>${Cart.TenSP}</td>
            <td>${Cart.GiaBan}</td>
            <td>${`${tongTien}`+" VNĐ"}</td>
            <td>
                <label class="switch">
                <input onclick="acceptCart()" type="checkbox">
                <span class="slider round"></span>
                </label>
            </td>
        </tr>`;
    })
    tableContent +=`</tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
}
function randomkeyDH() {
    const random = Math.random() * (9999 - 1000);
    let key = 'DHICY' + Math.round(random);
    return key;
}
function today() {
    var today = new Date();
    window.year = today.getFullYear();
    return today;
}
let dsGioHang = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
let DuyetDonHang = [
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 200000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 1500000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 350000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 300000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 450000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 500000,
    },
    {
        maDonHang: randomkeyDH(),
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chua duyet',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
];
function renderTable2() {
    // let Carts = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
    // if(Carts.length === 0) {
    //     document.getElementById('myTable').style.display = 'none';
    //     return false; 
    // }
    // document.getElementById('myTable').style.display = 'block';
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Trạng thái</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet, index) => {
        index++;
        tableContent += `<tr>
        <td>${index}</td>
        <td>${duyet.maDonHang}</td>
        <td>${duyet.tenKH}</td>
        <td>${duyet.thoiGianDat}</td>
        <td>${duyet.trangThai}</td>
        <td>
            <a style="color: blue;" href='#' onclick="xemChiTiet('${duyet.maDonHang}')">Xem chi tiet</a> 
        </td>
        <td>${tienVN(duyet.tongTien)}</td>
        <td><label class="switch">
        <input  type="checkbox">
        <input value="1" type="checkbox">
        
        <span class="slider round"></span>
      </label></td>
    </tr>`;
    document.getElementById('myTable').innerHTML = tableContent;
    })
}
function xemChiTiet(maDonHang){
    let tongTien = 0;
    document.getElementById('newScreen').innerHTML = `
    <div id="background-color-chiTiet">
    <div style="border-radius: 10px;" id="background-chiTiet">
    <div class="chiTietBox" id="chiTietBox">
        <div class="Title">Xem chi tiết đơn hàng</div>
        <table style="width: 100%;" id="chiTietDonHang">
        </table>
    </div>
    </div>`;
    document.getElementById("background-color-chiTiet").onclick = function(e) {
        if (e.target.matches("#background-color-chiTiet")) {
            document.getElementById("background-color-chiTiet").remove();
        }
    }
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet, index) => {
        if(duyet.maDonHang === maDonHang) {
            (DuyetDonHang[index].chiTiet).forEach((ct, dem) => {
                tongTien+=(ct.GiaBan*ct.SoLuong);

                tableContent += `<tr>
                <td>${dem + 1}</td>
                <td>${ct.MaSP}</td>
                <td>${ct.TenSP}</td>
                <td><img src="${fileInpToTextInp(ct.HinhAnh)}" alt="Ảnh sản phẩm" width="40" height="40"></td>
                <td>${ct.SoLuongMua}</td>
                <td>${tienVN(ct.GiaBan)}</td>
                <td>${tienVN(ct.GiaBan*ct.SoLuongMua)}</td>
            </label></td>
            </tr>`;
            })
        }
    })
    tableContent +=`
    <tr>
        <td colspan="6">TỔNG TIỀN</td>
        <td>${tongTien}</td>
    </tr>
        </tbody>`;
    document.getElementById('chiTietDonHang').innerHTML = tableContent;
    console.log(tongTien);
}
function fileInpToTextInp(event) {
    let fileChuk = event.split("\\");
    return '../img/' + fileChuk[fileChuk.length - 1];
}

function tienVN(giaTri){
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giaTri);
}