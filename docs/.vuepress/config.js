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
                    {text: "Java基础",link: "/md/java/Java基础"},
                    {text: "JavaWeb",link: "/md/java/JavaWeb"},
                    {text: "JavaIO",link: "/md/java/JavaIO"},
                    {text: "Java集合",link: "/md/java/Java集合"},
                    {text: "Java并发",link: "/md/java/Java并发"},
                    {text: "Java8",link: "/md/java/Java8"},
                    {text: "JVM",link: "/md/java/JVM"}

                ]
            },
            {
                text: "数据库",
                items: [
                    {text: "Mysql",link: "/md/database/Mysql"},
                    {text: "Oracle",link: "/md/database/Oracle"},
                    {text: "Redis",link: "/md/database/Redis"},
                    {text: "MongoDB",link: "/md/database/MongoDB"},
                    {text: "Elasticsearch",link: "/md/database/Elasticsearch"},
                ]
            },
            {
                text: "框架|中间件",
                items: [
                    {text: "Spring",link: "/md/frame/Spring"},
                    {text: "SpringBoot",link: "/md/frame/SpringBoot"},
                    {text: "SpringCloud",link: "/md/frame/SpringCloud"},
                    {text: "Mybatis",link: "/md/frame/Mybatis"},
                    {text: "Mybatis-plus",link: "/md/frame/Mybatis-plus"},
                    {text: "RabbitMQ",link: "/md/frame/RabbitMQ"},
                    {text: "KafKa",link: "/md/frame/KafKa"},
                    {text: "RocketMQ",link: "/md/frame/RocketMQ"},
                    {text: "ActivityMQ",link: "/md/frame/ActivityMQ"},
                ]
            },
            {
                text: "软件|部署",
                items: [
                    {text: "Docker",link: "/md/softdevlop/Docker"},
                    {text: "Linux",link: "/md/softdevlop/Linux"},
                    {text: "Jenkins",link: "/md/softdevlop/Jenkins"},
                    {text: "Nginx",link: "/md/softdevlop/Nginx"},
                    {text: "SVN",link: "/md/softdevlop/SVN"},
                    {text: "Git|GitLab|GitHub|Gitee",link: "Git"},
                ]
            },
            {
                text: "架构|系统",
                items: [
                    {text: "架构基础",link: "/md/jgxitong/架构基础"},
                    {text: "分布式系统",link: "/md/jgxitong/分布式系统"},
                    {text: "微服务",link: "/md/jgxitong/微服务"},
                    {text: "开源对象存储-Minio",link: "/md/jgxitong/minio"},
                    {text: "中移在线系统",link: "/md/jgxitong/中移在线系统"},
                    {text: "商城系统",link: "/md/jgxitong/商城系统"},
                    {text: "在线教育系统",link: "/md/jgxitong/在线教育系统"},
                    {text: "智慧医疗系统",link: "/md/jgxitong/智慧医疗系统"},
                    {text: "CRM营销系统",link: "/md/jgxitong/CRM营销系统"},
                ]
            },
            {
                text: "物联|智能",
                items: [
                    {text: "阿里云",link: "/md/Iot/阿里云"},
                    {text: "腾讯云",link: "/md/Iot/腾讯云"},
                    {text: "华为云",link: "/md/Iot/华为云"},
                    {text: "搬瓦工",link: "/md/Iot/搬瓦工"},
                    {text: "物联网相关",link: "/md/Iot/物联网相关"},
                    {text: "CharGpt",link: "/md/Iot/CharGpt"},
                    {text: "前沿关注",link: "/md/Iot/前沿关注"}
                ]
            },
            {
                text: "软件|资源|教程",
                items: [
                    {text: "Office系列",link: "/md/softSource/Office系列"},
                    {text: "Adobe系列",link: "/md/softSource/Adobe系列"},
                    {text: "jetBrains系列",link: "/md/softSource/jetBrains系列"},
                    {text: "远程链接工具",link: "/md/softSource/远程链接工具"},
                    {text: "亲测好用工具",link: "/md/softSource/亲测好用工具"},
                    {text: "overWall",link: "/md/softSource/overWall"},

                ]
            },
            {
                text: "工作|思考|读书",
                items: [
                    {text: "工作总结",link: "/md/work/工作总结.md"},
                    {text: "人生思考",link: "/md/work/人生思考.md"},
                    {text: "历史相关",link: "/md/work/历史相关.md"},
                    {text: "传记相关",link: "/md/work/传记相关.md"},
                    {text: "科技相关",link: "/md/work/科技相关.md"},
                    {text: "军事相关",link: "/md/work/军事相关.md"},
                ]
            },
            {
                text: "跟我学",
                items: [
                    {text: "能学习到什么",link: "/md/followMe/能学习到什么"},
                    {text: "掌握到什么技术",link: "/md/followMe/掌握到什么技术"},
                    {text: "永久提供帮助",link: "/md/followMe/永久提供帮助"},
                    {text: "推荐工作就业",link: "/md/followMe/推荐工作就业"},
                    {text: "整体架构图",link: "/md/followMe/整体架构图"}
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
