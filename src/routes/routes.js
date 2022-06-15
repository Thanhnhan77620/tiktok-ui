//routes
import config from '~/config';

//Layouts
import HeaderOnly from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

export const publicRoutes = [
    { path: config.routes.home, component: Home }, //default layout, logic trong App.js
    { path: config.routes.following, component: Following }, //default layout, logic trong App.js
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile }, //default layout, logic trong App.js
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }, //lấy layout HeaderOnly, logic trong App.js
    { path: config.routes.search, component: Search, layout: null }, //không có layout, logic trong App.js
];

export const privateRoutes = [];
