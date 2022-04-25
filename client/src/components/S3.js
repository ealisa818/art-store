import AWS from 'aws-sdk';

const S3_BUCKET = 'suzanne-keenan';
const REGION = 'us-east-1';

AWS.config.update({
    accessKeyId: 'AKIAQGKT3UZCAOXL6DXQ',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})
