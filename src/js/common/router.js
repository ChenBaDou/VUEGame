'use strict';
import index from '../../components/main.vue';

export default {
    routes: [
        {
            path: '/',
            name: 'index',
            title: '首页',
            component: index,
            meta: {
                mark: 'indexMark'
            },
            children: []
        }
    ]
}