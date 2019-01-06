import React from 'react';


const DanhSachLop = React.lazy(() => import('./GiangVien_views/Base/DanhSachLop.js'));
const DiemThiEdit = React.lazy(() => import('./GiangVien_views/Base/DiemThiEdit.js'));
const DiemThiTheoLop = React.lazy(() => import('./GiangVien_views/Base/DiemThiTheoLop.js'));
const DanhSachCauHoi = React.lazy(() => import('./GiangVien_views/Base/DanhSachCauHoi.js'));
const HocPhanDangDayVaDiemThi = React.lazy(() => import('./GiangVien_views/Base/HocPhanDangDayVaDiemThi.js'));
const HocPhanDangDayVaDiemThi1 = React.lazy(() => import('./GiangVien_views/Base/HocPhanDangDayVaDiemThi1.js'));
const KiemTraVaThi = React.lazy(() => import('./GiangVien_views/Base/KiemTraVaThi.js'));
const QuanLyDeThi = React.lazy(() => import('./GiangVien_views/Base/QuanLyDeThi.js'));
const ThemCauHoi = React.lazy(() => import('./GiangVien_views/Base/ThemCauHoi.js'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [

  { path: '/GiangVien/DanhSachLop', name: 'Danh Sách Lớp', component: DanhSachLop },
  { path: '/GiangVien/DiemThiEdit', name: 'Danh Sách Lớp', component: DiemThiEdit },
  { path: '/GiangVien/DiemThiTheoLop', name: 'Điểm Thi Theo lớp', component: DiemThiTheoLop },
  { path: '/GiangVien/DanhSachCauHoi', name: 'Danh Sách Câu Hỏi', component: DanhSachCauHoi },
  { path: '/GiangVien/HocPhanDangDayVaDiemThi', name: 'Học Phần Đang Dạy Và Điểm Thi', component: HocPhanDangDayVaDiemThi },
  { path: '/GiangVien/HocPhanDangDayVaDiemThi1', name: 'Học Phần Đang Dạy Và Điểm Thi', component: HocPhanDangDayVaDiemThi1 },
  { path: '/GiangVien/KiemTraVaThi', name: 'Kiểm Tra Và Thi', component: KiemTraVaThi },
  { path: '/GiangVien/QuanLyDeThi', name: 'Quản Lý Đề Thi', component: QuanLyDeThi },
  { path: '/GiangVien/ThemCauHoi', name: 'Quản Lý Đề Thi', component: ThemCauHoi },
];

export default routes;
