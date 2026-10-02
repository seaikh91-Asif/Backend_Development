const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: "private_sYU8N0EY8yAHElF3HDrsMme1ElY="
});

// Ekhane parameter e originalName tao receive korchi
async function uploadFile(buffer, originalName) { 
    try {
        const result = await imagekit.files.upload({
            // Buffer take Base64 string e convert kore dicchi, ImageKit eta easily bujhte parbe
            file: buffer.toString('base64'),  
            fileName: originalName || "image.jpg"
        });

        return result; 
    } catch (error) {
        console.log("ImageKit Upload Error:", error);
        throw error;
    }
}

module.exports = uploadFile;