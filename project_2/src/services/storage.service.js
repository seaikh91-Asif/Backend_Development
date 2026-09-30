const { ImageKit } = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: "private_sYU8N0EY8yAHElF3HDrsMme1ElY=",
});

async function uploadFile(buffer) {
    console.log(buffer); 
    
    
    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result; 
}

module.exports = uploadFile;