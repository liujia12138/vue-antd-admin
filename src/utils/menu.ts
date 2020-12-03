const menu = [
    {
        name: 'table',
        path: '/table',
        icon: 'table',
        children: [
            {
                name: 'normal',
                path: '/normal',
                meta: {
                    title: '基础表格'
                }
            },{
                name: 'tree',
                path: '/tree',
                meta: {
                    title: '树形表格'
                }
            }
        ]
    },{
        name: 'form',
        path: '/form',
        icon: 'form',
        children: [
            {
                name: 'baseForm',
                path: '/base',
                meta: {
                    title: '基础表单'
                }
            }
        ]
    },{
        name: '可视化',
        icon: 'fund',
        path: '/charts',
        children: [
            {
                name: 'echarts',
                path: '/echarts',
                meta: {
                    title: 'echarts'
                }
            }
        ]
    // },{
    //     name: '富文本编辑器',
    //     icon: 'edit',
    //     path: ''
    }
]

export default menu;