# Pulumi EC2 Instance Deployment

## Overview

This Pulumi project facilitates the creation of EC2 instances on AWS. By modifying the for loop in the Pulumi code, you can specify the number of servers you want to generate.

## Prerequisites

Before proceeding, ensure you have the following:

- Pulumi installed on your computer ([Download Pulumi](https://www.pulumi.com/docs/install/))
- An active AWS account
- AWS CLI configured with appropriate credentials

## Setup Instructions

### 1. Install Pulumi

Download and install Pulumi from the official website or use a package manager suitable for your operating system.

### 2. Authenticate with AWS

Ensure you are logged into your AWS account and have configured AWS CLI:

```sh
aws configure
```

### 3. Update Configuration

Modify the Pulumi configuration as required:

- **AMI ID**: Locate the desired AMI ID from the AWS EC2 AMI catalog.
- **Key Pair**: Retrieve your key pair from the AWS EC2 dashboard under the *Network & Security* section.
- **Instance Count**: Adjust the for loop in the Pulumi script to define the number of instances you want to create.

### 4. Deploy EC2 Instances

Run the following command to create EC2 instances:

```sh
pulumi up
```

Accept the prompts to proceed. The terminal will display the instance IDs upon successful creation.

### 5. Destroy EC2 Instances

To terminate all created EC2 instances, run:

```sh
pulumi destroy
```

Confirm the prompts to complete the process.

## Optional: Use a Different Cloud Provider

If you prefer a cloud provider other than AWS, update the Pulumi code accordingly and provide the necessary instance details.

## Conclusion

This project simplifies EC2 instance deployment using Pulumi. Modify the script as needed to match your requirements and efficiently manage your cloud infrastructure.

