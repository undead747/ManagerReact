export default {
  items: [
    {
      name: 'User',
      url: '/SinhVien/ThongTinCaNhan',
      icon: 'icon-user',
      badge: {
        variant: 'info',
      },
    },

    {
      title: true,
      name: 'Sinh Viên',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
       {
          name: 'Lịch học',
          url: '/SinhVien/LichHoc',
          icon: 'icon-control-play',
        },
        {
          name: 'Tình trạng học phần',
          url: '/SinhVien/TinhTrangHocPhan',
          icon: 'icon-control-play',
        },
        {
          name: 'Học phần đang học',
          url: '/SinhVien/HocPhanDangHoc',
          icon: 'icon-control-play',
        },
        {
          name: 'Đăng ký học phần',
          url: '/SinhVien/DangKyHocPhan',
          icon: 'icon-control-play',
        },
    {
      name: 'Thi',
      url: '/SinhVien/LichThi',
      icon: 'icon-pencil',
    },
    {
      name: 'Điểm thi',
      url: '/SinhVien/KetQua',
      icon: 'icon-check',
    },

  ]
}
