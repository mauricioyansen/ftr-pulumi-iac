import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("test-bucket-yang-2", {
  bucket: "test-bucket-yang-2",
  tags: { IAC: "true" },
});

const thirdBucket = new aws.s3.BucketV2("test-bucket-yang-3", {
  bucket: "test-bucket-yang-3",
  tags: { IAC: "true" },
});

const ecr = new aws.ecr.Repository("test-ecr-yang-2", {
  name: "test-ecr-yang-2",
  imageTagMutability: "IMMUTABLE",
  tags: { IAC: "true" },
});

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const thirdBucketName = thirdBucket.id;
export const thirdBucketRegion = thirdBucket.region;
export const thirdBucketArn = thirdBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
