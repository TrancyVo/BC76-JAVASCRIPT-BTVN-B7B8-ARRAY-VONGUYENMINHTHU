let arrSoNguyen = [];

//YC: Hiển thị số nguyên user nhập lên giao diện
document.getElementById("btn").onclick = function () {
  let soNguyen = document.getElementById("nhapSo").value * 1;
  if (soNguyen == "") {
    return alert(`Vui lòng nhập số Nguyên`);
  }

  if (Number.isInteger(soNguyen)) {
    arrSoNguyen.push(` ${soNguyen}`);
  } else {
    return alert(`Giá trị không phải là số Nguyên`);
  }

  document.querySelector(".ketQua").innerHTML = arrSoNguyen;
};

// C1: Tổng số nguyên dương trong mảng
document.getElementById("cau1").onclick = function () {
  let tongSoDuong = 0;
  for (let index in arrSoNguyen) {
    if (arrSoNguyen[index] > 0) {
      let soNguyenDuong = Number(arrSoNguyen[index]);
      tongSoDuong += soNguyenDuong;
    }
  }
  console.log(tongSoDuong);
  document.querySelector(
    ".ketQua1"
  ).innerHTML = `Tổng số Nguyên dương trong mảng: ${tongSoDuong}`;
};
// C2: Số lượng số nguyên dương trong mảng
document.getElementById("cau2").onclick = function () {
  let demSoDuong = 0;
  for (let index in arrSoNguyen) {
    if (arrSoNguyen[index] > 0) {
      demSoDuong++;
    }
  }
  console.log(demSoDuong);
  document.querySelector(
    ".ketQua2"
  ).innerHTML = `Số lượng số nguyên dương trong mảng: ${demSoDuong} `;
};

// C3: Số nguyên nhỏ nhất trong mảng
document.getElementById("cau3").onclick = function () {
  let soNguyenNhoNhat = Math.min(...arrSoNguyen);

  document.querySelector(
    ".ketQua3"
  ).innerHTML = `Số nguyên nhỏ nhất trong mảng: ${soNguyenNhoNhat} `;
};

// C4: Số nguyên dương nhỏ nhất trong mảng
document.getElementById("cau4").onclick = function () {
  let soNguyenDuong = [];
  let soNguyenDuongNhoNhat = 0;

  for (let index in arrSoNguyen) {
    if (arrSoNguyen[index] > 0) {
      soNguyenDuong.push(arrSoNguyen[index]);
    }
    soNguyenDuongNhoNhat = Math.min(...soNguyenDuong);
  }
  document.querySelector(
    ".ketQua4"
  ).innerHTML = `Số nguyên dương nhỏ nhất trong mảng: ${soNguyenDuongNhoNhat}`;
};

// C5: Tìm số chẵn cuối cùng trong mảng (Nếu không có -> Hiển thị -1)
document.getElementById("cau5").onclick = function () {
  let soNguyenChanCuoi = 0;
  let arrSoNguyenChan = arrSoNguyen.filter((item, index) => {
    return item % 2 == 0;
  });
  console.log(arrSoNguyenChan);
  if (arrSoNguyenChan.length == 0) {
    soNguyenChanCuoi = -1;
  } else {
    soNguyenChanCuoi = arrSoNguyenChan[arrSoNguyenChan.length - 1];
  }

  document.querySelector(
    ".ketQua5"
  ).innerHTML = `Số nguyên chẵn cuối cùng trong mảng: ${soNguyenChanCuoi}`;
};

// C6: Đổi chỗ 2 giá trị trong mảng
document.getElementById("cau6").onclick = function () {
  let pos1 = parseInt(document.getElementById("phanTu1").value);
  let pos2 = parseInt(document.getElementById("phanTu2").value);

  if (
    pos1 >= 0 &&
    pos1 < arrSoNguyen.length &&
    pos2 >= 0 &&
    pos2 < arrSoNguyen.length
  ) {
    let savePos1 = arrSoNguyen[pos1];
    arrSoNguyen[pos1] = arrSoNguyen[pos2];
    arrSoNguyen[pos2] = savePos1;
    console.log(arrSoNguyen[pos2]);
    console.log(arrSoNguyen[pos1]);
  } else {
    return alert(`Vị trí không hợp lệ`);
  }

  document.querySelector(
    ".ketQua6"
  ).innerHTML = `Mảng sau khi hoán đổi vị trí 2 giá trị: ${arrSoNguyen}`;
};
