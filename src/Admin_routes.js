import React from 'react';


const ThemChuyenNganh = React.lazy(() => import('./Admin_views/Base/ThemChuyenNganh.js'));
const ThemGiangVien = React.lazy(() => import('./Admin_views/Base/ThemGiangVien.js'));
const ThemHocPhan = React.lazy(() => import('./Admin_views/Base/ThemHocPhan.js'));
const ThemKhoa = React.lazy(() => import('./Admin_views/Base/ThemKhoa.js'));
const ThemLop = React.lazy(() => import('./Admin_views/Base/ThemLop.js'));
const ThemSinhVien = React.lazy(() => import('./Admin_views/Base/ThemSinhVien.js'));
const danhsachlop = React.lazy(() => import('./Admin_views/Base/danhsachlop.js'));
const quanli_user_giangvien = React.lazy(() => import('./Admin_views/Base/quanli_user_giangvien.js'));
const quanli_user_Sinhvien = React.lazy(() => import('./Admin_views/Base/quanli_user_sinhvien.js'));
const quanlychuyennganh = React.lazy(() => import('./Admin_views/Base/quanlychuyennganh.js'));
const quanlyhocphan = React.lazy(() => import('./Admin_views/Base/quanlyhocphan.js'));
const quanlykhoa = React.lazy(() => import('./Admin_views/Base/quanlykhoa.js'));
const quanlylop = React.lazy(() => import('./Admin_views/Base/quanlylop.js'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [

  { path: '/Admin/ThemChuyenNganh', name: 'Thêm chuyên ngành', component: ThemChuyenNganh },
  { path: '/Admin/ThemGiangVien', name: 'Thêm giảng viên', component:ThemGiangVien },
  { path: '/Admin/ThemHocPhan', name: 'Thêm học phần', component: ThemHocPhan },
  { path: '/Admin/ThemKhoa', name: 'Thêm khoa', component: ThemKhoa },
  { path: '/Admin/ThemLop', name: 'Thêm lớp', component: ThemLop },
  { path: '/Admin/ThemSinhVien', name: 'Thêm Sinh Viên', component: ThemSinhVien },

  { path: '/Admin/danhsachlop', name: 'Thêm Sinh Viên', component: danhsachlop },
  { path: '/Admin/quanli_user_giangvien', name: 'Thêm Sinh Viên', component:quanli_user_giangvien },
  { path: '/Admin/quanli_user_Sinhvien', name: 'Thêm Sinh Viên', component: quanli_user_Sinhvien },
  { path: '/Admin/quanlychuyennganh', name: 'Thêm Sinh Viên', component: quanlychuyennganh },
  { path: '/Admin/quanlyhocphan', name: 'Thêm Sinh Viên', component: quanlyhocphan },
  { path: '/Admin/quanlykhoa', name: 'Thêm Sinh Viên', component: quanlykhoa },
  { path: '/Admin/quanlylop', name: 'Thêm Sinh Viên', component: quanlylop },  
];

export default routes;
