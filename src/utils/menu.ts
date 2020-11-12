const menu = [
    {
        name: 'table',
        path: '/table',
        icon: 'table',
        children: [
            {
                name: '基础表格',
                path: '/table/normal'
            }
        ]
    },{
        name: 'form',
        path: '/form',
        icon: 'form',
        children: [
            {
                name: 'normal',
                path: '/form/normal'
            }
        ]
    },{
        name: '可视化',
        icon: 'fund'
    },{
        name: '富文本编辑器',
        icon: 'edit'
    }
]

export default menu;