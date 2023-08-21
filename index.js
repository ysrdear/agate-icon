//规范化字体图标命名标准
const fs = require('fs');
const path = require('path')


const dirPath = './lib'

fs.readdir(dirPath, (err, files) => {

    files.forEach(item=>{

        const filePath = path.join(dirPath, item);

        var newName =  item.replace(/[A-Z]/, (match) => match.toLowerCase());

        newName = newName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());

        newName = newName.replace(/\d+/g, '');

        var newPath = path.join(dirPath, newName)

        fs.renameSync(filePath, newPath)
    })
})
