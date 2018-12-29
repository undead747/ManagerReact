export default {
  items: [
    {
      name: 'User',
      url: '/a/dashboard',
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
          url: '/a/base/breadcrumbs',
          icon: 'icon-control-play',
        },
        {
          name: 'Tình trạng học phần',
          url: '/a/base/breadcrumbs',
          icon: 'icon-control-play',
        },
        {
          name: 'Học phần đang học',
          url: '/a/base/breadcrumbs',
          icon: 'icon-control-play',
        },

    {
      name: 'Thi',
      url: '/a/base',
      icon: 'icon-pencil',
    },
    {
      name: 'Điểm thi',
      url: '/a/theme/colors',
      icon: 'icon-check',
    },
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
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },

    {
      name: 'Colors',
      url: '/a/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/a/theme/typography',
      icon: 'icon-pencil',
    },

    {
      name: 'Base',
      url: '/a/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/a/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/a/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/a/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/a/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/a/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/a/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/a/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/a/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/a/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/a/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/a/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/a/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/a/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/a/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/a/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/a/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Minh',
      url: '/a/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/a/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/a/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/a/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/a/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/a/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/a/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/a/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/a/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/a/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/a/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/a/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/a/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/a/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/a/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/a/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/a/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/a/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/a/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/a/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },

  ],
};
