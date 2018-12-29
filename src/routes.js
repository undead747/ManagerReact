import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const UserSV = React.lazy(() => import('./views/User/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/a/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/a/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/a/theme/colors', name: 'Colors', component: Colors },
  { path: '/a/theme/typography', name: 'Typography', component: Typography },
  { path: '/a/base', exact: true, name: 'Base', component: Cards },
  { path: '/a/base/cards', name: 'Cards', component: Cards },
  { path: '/a/base/forms', name: 'Forms', component: Forms },
  { path: '/a/base/switches', name: 'Switches', component: Switches },
  { path: '/a/base/tables', name: 'Tables', component: Tables },
  { path: '/a/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/a/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/a/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/a/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/a/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/a/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/a/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/a/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/a/base/navs', name: 'Navs', component: Navs },
  { path: '/a/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/a/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/a/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/a/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/a/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/a/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/a/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/a/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/a/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/a/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/a/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/a/icons/flags', name: 'Flags', component: Flags },
  { path: '/a/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/a/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/a/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/a/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/a/notifications/badges', name: 'Badges', component: Badges },
  { path: '/a/notifications/modals', name: 'Modals', component: Modals },
  { path: '/a/widgets', name: 'Widgets', component: Widgets },
  { path: '/a/charts', name: 'Charts', component: Charts },
  { path: '/a/users', exact: true,  name: 'Users', component: Users },
  { path: '/a/userSV', exact: true,  name: 'Users', component: UserSV },
  { path: '/a/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
