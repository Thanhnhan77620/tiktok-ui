//routes
import routesConfig from '~/config/routes';

//Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

export const publicRoutese = [
    { path: routesConfig.home, component: Home }, //default layout, logic trong App.js
    { path: routesConfig.following, component: Following }, //default layout, logic trong App.js
    { path: routesConfig.profile, component: Profile }, //default layout, logic trong App.js
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly }, //lấy layout HeaderOnly, logic trong App.js
    { path: routesConfig.search, component: Search, layout: null }, //không có layout, logic trong App.js
];

export const privateRoutese = [];
