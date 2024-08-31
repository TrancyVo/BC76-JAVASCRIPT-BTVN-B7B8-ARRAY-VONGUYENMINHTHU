let arrSoNguyen = [];

//YC: Hiển thị số nguyên user nhập lên giao diện
document.getElementById("btn").onclick = function () {
  let nhapSoNguyen = document.getElementById("nhapSo").value;
  if (nhapSoNguyen == "") {
    return alert(`Vui lòng nhập số Nguyên`);
  }
  let soNguyen = parseFloat(nhapSoNguyen);
  if (Number.isInteger(soNguyen)) {
    arrSoNguyen.push(soNguyen);
  } else {
    return alert(`Giá trị không phải là số Nguyên`);
  }

  document.querySelector(".ketQua").innerHTML = arrSoNguyen.join(", ");
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
  let arrSoNguyenChan = arrSoNguyen.filter((item, index) => {
    return item % 2 == 0;
  });
  let soNguyenChanCuoi = -1;
  let ketQua5 = document.querySelector(".ketQua5");
  if (arrSoNguyenChan.length > 0) {
    soNguyenChanCuoi = arrSoNguyenChan[arrSoNguyenChan.length - 1];
    ketQua5.innerHTML = `Số nguyên chẵn cuối cùng trong mảng: ${soNguyenChanCuoi} `;
  } else {
    ketQua5.innerHTML = `Kết quả: ${soNguyenChanCuoi} <br> Không có số nguyên chẵn trong mảng`;
  }
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

// C7: Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("cau7").onclick = function () {
  arrSoNguyen.sort((a, b) => a - b);
  // console.log(arrMangTangDan);
  console.log(arrSoNguyen);

  document.querySelector(
    ".ketQua7"
  ).innerHTML = `Mảng theo thứ tự tăng dần: ${arrSoNguyen}`;
};

// C8: Tìm số Nguyên Tố nhỏ nhất trong mảng (Nếu không có -> hiển thị -1)
function timSoNguyenTo(number) {
  if (number <= 1) {
    return false;
  }
  if (number == 2) {
    return true;
  }
  if (number % 2 == 0) {
    return false;
  }
  for (let index = 3; index <= Math.sqrt(number); index += 2) {
    if (number % index == 0) {
      return false;
    }
  }
  return true;
}
document.getElementById("cau8").onclick = function () {
  let arrSoNguyenTo = [];
  for (let item of arrSoNguyen) {
    if (timSoNguyenTo(item)) {
      arrSoNguyenTo.push(item);
    }
  }
  console.log(arrSoNguyenTo);
  let soNguyenToDauTien = -1;
  let ketQua8 = document.querySelector(".ketQua8");
  if (arrSoNguyenTo.length > 0) {
    soNguyenToDauTien = arrSoNguyenTo[0];
    ketQua8.innerHTML = `Số nguyên tố đầu tiên trong Mảng: ${soNguyenToDauTien}`;
  } else {
    ketQua8.innerHTML = `Kết quả: ${soNguyenToDauTien} <br> Không có số nguyên tố trong mảng`;
  }
};

//C9: Nhập vào mảng số thực, đếm số nguyên trong mảng
let arrSoThuc = [];
document.getElementById("btnSoThuc").onclick = function () {
  let nhapSoThuc = document.getElementById("nhapSoThuc").value;
  if (nhapSoThuc == "") {
    return alert(`Vui lòng nhập số Thực`);
  }
  let soThuc = parseFloat(nhapSoThuc);
  arrSoThuc.push(soThuc);
  document.querySelector(".ketQuaSoThuc").innerHTML = arrSoThuc.join(", ");
};
document.getElementById("cau9").onclick = function () {
  let demSoNguyen = 0;
  for (let item of arrSoThuc) {
    if (Number.isInteger(item)) {
      demSoNguyen++;
    }
  }
  document.querySelector(
    ".ketQua9"
  ).innerHTML = `Số lượng số nguyên trong mảng số thực: ${demSoNguyen}`;
};

//C10: SỐ DƯƠNG HAY SỐ ÂM NHIỀU HƠN
document.getElementById("cau10").onclick = function () {
  let arrSoDuong = [];
  let arrSoAm = [];
  for (let item of arrSoThuc) {
    if (item < 0) {
      arrSoAm.push(item);
    } else if (item > 0) {
      arrSoDuong.push(item);
    }
  }
  console.log(arrSoAm);
  console.log(arrSoDuong);
  let ketQua10 = document.querySelector(".ketQua10");
  if (arrSoAm.length > arrSoDuong.length) {
    ketQua10.innerHTML = `Trong mảng số thực trên: Số lượng Số Âm > Số Dương`;
  } else if (arrSoDuong.length > arrSoAm.length) {
    ketQua10.innerHTML = `Trong mảng số thực trên: Số lượng Số Dương > Số Âm`;
  } else {
    ketQua10.innerHTML = `Trong mảng số thực trên: Số lượng Số Dương = Số Âm`;
  }
};
