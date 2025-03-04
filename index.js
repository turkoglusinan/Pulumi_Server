import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const instanceNumber = 3;

const instances = [];

// Create an AWS resource (EC2)
// Need to update your ami ID and key pair
for (let i = 0; i < instanceNumber; i++){
    const instance = new aws.ec2.Instance(`new-instance-${i}`,{
        ami: "ami-xxxxxxxxxxxxx", // Replace with your AMI ID
        instanceType: "t2.micro",
        keyName: "xxxxxxxxxxx", // Replace with your key pair name
        tags: {
            Name: `new-ec2-instance-${i}`
        }
    }
    );
    instances.push(instance)
}

// Export the EC2 instances IDs
export const instancesIds = instances.map(instance => instance.id);
