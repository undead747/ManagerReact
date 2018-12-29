import React from 'react';


const ThongTinCaNhan = React.lazy(() => import('./SinhVien_views/Base/ThongTinCaNhan.js'));
const TinhTrangHocPhan = React.lazy(() => import('./SinhVien_views/Base/TinhTrangHocPhan.js'));
const HocPhanDangHoc = React.lazy(() => import('./SinhVien_views/Base/HocPhanDangHoc.js'));
const DangKyHocPhan = React.lazy(() => import('./SinhVien_views/Base/DangKyHocPhan.js'));
const edit = React.lazy(() => import('./SinhVien_views/Base/edit_info.js'));
const LichThi = React.lazy(() => import('./SinhVien_views/Base/LichThi.js'));
const ChuanBiThi = React.lazy(() => import('./SinhVien_views/Base/ChuanBiThi.js'));
const KetQuaThi = React.lazy(() => import('./SinhVien_views/Base/KetQuaThi.js'));
const Thi = React.lazy(() => import('./SinhVien_views/Base/thi.js'));
const ThiVaDiemThi = React.lazy(() => import('./SinhVien_views/Base/ThiVaDiemThi.js'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [

  { path: '/SinhVien/ThongTinCaNhan', name: 'Thông Tin Cá Nhân', component: ThongTinCaNhan },
  { path: '/SinhVien/TinhTrangHocPhan', name: 'Tình Trạng Học Phần', component:TinhTrangHocPhan },
  { path: '/SinhVien/HocPhanDangHoc', name: 'Học Phần Đang Học', component: HocPhanDangHoc },
  { path: '/SinhVien/DangKyHocPhan', name: 'Đăng Ký Học Phần', component: DangKyHocPhan },
  { path: '/SinhVien/edit', name: 'Chỉnh Sửa Thông Tin Cá Nhân', component: edit },
  { path: '/SinhVien/LichThi', name: 'Lịch Thi', component: LichThi },
  { path: '/SinhVien/ChuanBiThi', name: 'Lịch Thi', component: ChuanBiThi },
  { path: '/SinhVien/KetQuaThi', name: 'Kết Quả Thi', component: KetQuaThi },
  { path: '/SinhVien/Thi', name: 'Thi', component: Thi },
  { path: '/SinhVien/ThiVaDiemThi', name: 'Kết Quả Thi', component: ThiVaDiemThi },
];

export default routes;
