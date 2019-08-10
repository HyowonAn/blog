import {ListPage, PostPage, EditorPage} from 'pages';

export default [
    {
        path: '/',
        exact: true,
        component: ListPage
    },
    {
        path: '/post/:id',
        component: PostPage
    },
    {
        path: '/tag/:tag/:page?',
        component: ListPage
    },
    {
        path: 'editor',
        component: EditorPage
    }
];