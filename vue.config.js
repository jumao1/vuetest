module.exports={
    devServer:{
        open:true,//配置浏览器自动打开
        host:'localhost',
        port:8080,
        https:false,
        hotOnly:false,
        proxy:{
            '/api':{
                target:'http://121.89.233.78:8080',
                changeOrigin:true,
                ws:true,
                secure:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        },
        before:app => {},
        host:'0.0.0.0',
    },
}