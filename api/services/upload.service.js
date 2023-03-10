const fs = require('fs');
const AWS = require('aws-sdk');


const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKey = process.env.AWS_ACCESS_KEY
const secretKey = process.env.AWS_SECRET_ACCESS_KEY

// For dev purposes only
AWS.config.update({ accessKeyId: accessKey, secretAccessKey: secretKey });
var s3 = new AWS.S3();

// Configure multer middleware to handle file uploads.
const uploadFile = (file, folder) => {
    // Read in the file, convert it to base64, store to S3
    console.log("voici le fichier:", file);
    var fileStream = fs.createReadStream(file.path);
    fileStream.on('error', function (err) {
        if (err) { throw err; }
    });
    fileStream.on('open', function () {
        s3.putObject({
            Bucket: 'portfoliomercure',
            Key: `${folder}/${file.originalname}`,
            Body: fileStream
        }, function (err) {
            if (err) { throw err; }
        });
    });
    const url = s3.getSignedUrl('getObject', {
        Bucket: 'portfoliomercure',
        Key: file.originalname,
    });
    return url
};

exports.uploadFile = uploadFile

