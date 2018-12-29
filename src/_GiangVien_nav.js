export default {
  items: [
    {
      title: true,
      name: 'Giảng Viên',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Quản lý học phần',
      url: '/a/base',
      icon: 'icon-briefcase',
      children: [
        {
          name: 'Danh sách học phần',
          url: '/a/base/breadcrumbs',
          icon: 'icon-control-play',
        },
        {
          name: 'Kiểm tra và thi',
          url: '/a/base/breadcrumbs',
          icon: 'icon-control-play',
        },
      ],
    },
    {
      name: 'Quản lý đề thi',
      url: '/a/base/breadcrumbs',
      icon: 'icon-briefcase',
    },
    {
      name: 'Điểm thi',
      url: '/a/base/breadcrumbs',
      icon: 'icon-check',
    },

  ]
}
