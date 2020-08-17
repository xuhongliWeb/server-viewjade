import path = require('path')

import formidable = require('formidable')

export = function (req) {
    return new Promise((resolve,reject) => {
        const form = new formidable.IncomingForm() // 创建Formidable.IncomingForm对象
        form.encoding = 'utf-8'  // 设置表单域的编码
        form.uploadDir = path.join(__dirname,'../files/') // 设置上传文件存放的文件夹，默认为系统的临时文件夹
        form.keepExtensions = true // 保留后缀
        // form.parse(request, [callback]) 该方法会转换请求中所包含的表单数据，callback会包含所有字段域和文件信息，如：
        form.parse(req,(err,fields,files) => {
            const { file } = files
            if(!err) resolve(file) 
            else 
            reject(err)
        })
    })
}