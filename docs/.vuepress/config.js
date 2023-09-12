module.exports = {
    title: '布吉岛知识笔记',
    description: '该项目主要记录我从毕业到工作的Java学习笔记&工作总结，把平时碎片化的知识系统性的整理出来，不断完善自己的认知...',
    base: '/vuepress-pro/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        // lastUpdated: '上次更新',
        subSidebar: 'auto',
        nav: [
            {text: "首页",link: "/"},
            {
                text: "Java",
                items: [
                    {text: "Java基础",link: "https://juejin.cn"},
                    {text: "Java Web",link: "https://juejin.cn"},
                    {text: "JavaIO",link: "https://github.com"},
                    {text: "Java集合",link: "https://juejin.cn"},
                    {text: "Java并发",link: "https://juejin.cn"},
                    {text: "Java8",link: "https://juejin.cn"},
                    {text: "JVM",link: "https://juejin.cn"}

                ]
            },
            {
                text: "数据库",
                items: [
                    {text: "Mysql",link: "https://juejin.cn"},
                    {text: "Oracle",link: "https://github.com"},
                    {text: "Redis",link: "https://github.com"},
                    {text: "MongoDB",link: "https://github.com"},
                    {text: "Elasticsearch",link: "https://github.com"},
                ]
            },
            {
                text: "框架|中间件",
                items: [
                    {text: "Spring",link: "https://juejin.cn"},
                    {text: "SpringBoot",link: "https://github.com"},
                    {text: "SpringCloud",link: "https://github.com"},
                    {text: "Mybatis",link: "https://github.com"},
                    {text: "Mybatis-plus",link: "https://github.com"},
                    {text: "RabbitMQ",link: "https://github.com"},
                    {text: "KafKa",link: "https://github.com"},
                    {text: "RocketMQ",link: "https://github.com"},
                    {text: "ActivityMQ",link: "https://github.com"},
                ]
            },
            {
                text: "软件|部署",
                items: [
                    {text: "Docker",link: "https://juejin.cn"},
                    {text: "Linux",link: "https://github.com"},
                    {text: "Jenkins",link: "https://github.com"},
                    {text: "Nginx",link: "https://github.com"},
                    {text: "SVN",link: "https://github.com"},
                    {text: "Git|GitLab|GitHub|Gitee",link: "https://github.com"},
                ]
            },
            {
                text: "架构|系统",
                items: [
                    {text: "架构基础",link: "https://juejin.cn"},
                    {text: "分布式系统",link: "https://github.com"},
                    {text: "微服务",link: "https://github.com"},
                    {text: "开源对象存储-Minio",link: "https://github.com"},
                    {text: "中移在线系统",link: "https://github.com"},
                    {text: "商城系统",link: "https://github.com"},
                    {text: "在线教育系统",link: "https://github.com"},
                    {text: "智慧医疗系统",link: "https://github.com"},
                    {text: "CRM营销系统",link: "https://github.com"},
                ]
            },
            {
                text: "物联|智能",
                items: [
                    {text: "阿里云",link: "https://github.com"},
                    {text: "腾讯云",link: "https://github.com"},
                    {text: "华为云",link: "https://github.com"},
                    {text: "搬瓦工",link: "https://github.com"},
                    {text: "物联网相关",link: "https://juejin.cn"},
                    {text: "CharGpt",link: "https://github.com"},
                    {text: "前沿关注",link: "https://github.com"}
                ]
            },
            {
                text: "软件|资源|教程",
                items: [
                    {text: "Office系列",link: "https://juejin.cn"},
                    {text: "Adobe系列",link: "https://github.com"},
                    {text: "idea系列",link: "https://github.com"},
                    {text: "远程链接工具",link: "https://github.com"},
                    {text: "亲测好用工具",link: "https://github.com"},
                    {text: "翻墙",link: "https://github.com"},

                ]
            },
            {
                text: "工作|思考|读书",
                items: [
                    {text: "历史相关",link: "https://juejin.cn"},
                    {text: "传记相关",link: "https://github.com"},
                    {text: "科技相关",link: "https://github.com"},
                    {text: "军事相关",link: "https://github.com"},
                ]
            },
            {
                text: "跟我学",
                items: [
                    {text: "能学习到什么",link: "https://juejin.cn"},
                    {text: "掌握到什么技术",link: "https://github.com"},
                    {text: "永久提供帮助",link: "https://github.com"},
                    {text: "推荐工作就业",link: "https://github.com"},
                ]
            },
            {
                text: "关于我",
                items: [
                    {text: "个人经历|简历",link: "/md/about/Resume"},
                    {text: "目前正做",link: "/md/about/CurrentDoing"},
                    {text: "未来计划",link: "/md/about/FuturePlan"}
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false,
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false,
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}
