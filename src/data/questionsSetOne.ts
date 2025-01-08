export const questionsSetOne = [
  {
    id: 101,
    question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    answers: [
      "A. AWS CLI",
      "B. AWS API",
      "C. AWS SDK",
      "D. AWS Management Console"
    ],
    correct: "D. AWS Management Console"
  },
  {
    id: 102,
    question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    answers: [
      "A. Replacing an existing EC2 instance with a larger, more powerful one",
      "B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application",
      "C. Adding more RAM capacity to an EC2 instance",
      "D. Adding more EC2 instances of the same size to handle an increase in traffic"
    ],
    correct: "D. Adding more EC2 instances of the same size to handle an increase in traffic"
  },
  {
    id: 103,
    question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    answers: [
      "A. Amazon Inspector",
      "B. AWS CloudTrail",
      "C. AWS Trusted Advisor",
      "D. EC2 Instance Usage Report"
    ],
    correct: "B. AWS CloudTrail"
  },
  {
    id: 104,
    question: "Which of the below options are related to the reliability of AWS? Choose two.",
    answers: [
      "A. Applying the principle of least privilege to all AWS resources",
      "B. Automatically provisioning new resources to meet demand",
      "C. All AWS services are considered Global Services, and this design helps customers serve their international users",
      "D. Providing compensation to customers if issues occur",
      "E. Ability to recover quickly from failures"
    ],
    correct: [
      "B. Automatically provisioning new resources to meet demand",
      "E. Ability to recover quickly from failures"
    ]
  },
  {
    id: 105,
    question: "Which statement is true regarding the AWS Shared Responsibility Model?",
    answers: [
      "A. Responsibilities vary depending on the services used",
      "B. Security of the IaaS services is the responsibility of AWS",
      "C. Patching the guest OS is always the responsibility of AWS",
      "D. Security of the managed services is the responsibility of the customer"
    ],
    correct: "A. Responsibilities vary depending on the services used"
  },
  {
    id: 106,
    question: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    answers: [
      "A. The Reserved Instance discounts can only be shared with the master account",
      "B. All accounts can receive the hourly cost benefit of the Reserved Instances",
      "C. The purchased instances will have better performance than On-demand instances",
      "D. There are no cost benefits from using consolidated billing; It is for informational purposes only"
    ],
    correct: "B. All accounts can receive the hourly cost benefit of the Reserved Instances"
  },
  {
    id: 107,
    question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    answers: [
      "A. Deploy the application across multiple Availability Zones and Edge locations",
      "B. Deploy the application across multiple Availability Zones and subnets",
      "C. Deploy the application across multiple Regions and Availability Zones",
      "D. Deploy the application across multiple VPC\u2019s and subnets"
    ],
    correct: "C. Deploy the application across multiple Regions and Availability Zones"
  },
  {
    id: 108,
    question: "What does AWS Snowball provide? Choose two.",
    answers: [
      "A. Built-in computing capabilities that allow customers to process data locally",
      "B. A catalog of third-party software solutions that customers need to build solutions and run their businesses",
      "C. A hybrid cloud storage between on-premises environments and the AWS Cloud",
      "D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS",
      "E. Secure transfer of large amounts of data into and out of the AWS"
    ],
    correct: [
      "A. Built-in computing capabilities that allow customers to process data locally",
      "E. Secure transfer of large amounts of data into and out of the AWS"
    ]
  },
  {
    id: 109,
    question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    answers: [
      "A. AWS Health Dashboard",
      "B. AWS Support Concierge",
      "C. AWS Customer Service",
      "D. AWS Operations Support"
    ],
    correct: "B. AWS Support Concierge"
  },
  {
    id: 110,
    question: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    answers: [
      "A. Applying the Amazon Connect latency-based routing policy",
      "B. Registering a new US domain name to serve the users in the US",
      "C. Building a new data center in the US and implementing a hybrid model",
      "D. Deploying new Amazon EC2 instances in a Region located in the US"
    ],
    correct: "D. Deploying new Amazon EC2 instances in a Region located in the US"
  },
  {
    id: 111,
    question: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    answers: [
      "A. IAM roles",
      "B. IAM users",
      "C. IAM user groups",
      "D. AWS Organizations"
    ],
    correct: "C. IAM user groups"
  },
  {
    id: 112,
    question: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    answers: [
      "A. AWS OpsWorks",
      "B. AWS Database Migration Service",
      "C. AWS Server Migration Service",
      "D. AWS Application Discovery Service"
    ],
    correct: "B. AWS Database Migration Service"
  },
  {
    id: 113,
    question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    answers: [
      "A. Build security in every layer",
      "B. Parallelize tasks",
      "C. Implement elasticity",
      "D. Adopt monolithic architecture"
    ],
    correct: "C. Implement elasticity"
  },
  {
    id: 114,
    question: "What are the benefits of having infrastructure hosted in AWS? Choose two.",
    answers: [
      "A. Increasing speed and agility",
      "B. There is no need to worry about security",
      "C. Gaining complete control over the physical infrastructure",
      "D. Operating applications on behalf of customers",
      "E. All of the physical security and most of the data/network security are taken care of for you"
    ],
    correct: [
      "A. Increasing speed and agility",
      "E. All of the physical security and most of the data/network security are taken care of for you"
    ]
  },
  {
    id: 115,
    question: "What is the advantage of the AWS-recommended practice of \"decoupling\" applications?",
    answers: [
      "A. Allows treating an application as a single, cohesive unit",
      "B. Reduces inter-dependencies so that failures do not impact other components of the application",
      "C. Allows updates of any monolithic application quickly and easily",
      "D. Allows tracking of any API call made to any AWS service"
    ],
    correct: "B. Reduces inter-dependencies so that failures do not impact other components of the application"
  },
  {
    id: 116,
    question: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    answers: [
      "A. AWS Budgets",
      "B. AWS Pricing Calculator",
      "C. AWS Systems Manager",
      "D. AWS Cost & Usage Reports"
    ],
    correct: "D. AWS Cost & Usage Reports"
  },
  {
    id: 117,
    question: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    answers: [
      "A. AWS services costs will be reduced to half the original price",
      "B. The consolidated billing feature is just for organizational purpose",
      "C. Each AWS account gets volume discounts",
      "D. Each AWS account gets five times the free-tier services capacity"
    ],
    correct: "C. Each AWS account gets volume discounts"
  },
  {
    id: 118,
    question: "What should you do in order to keep the data on EBS volumes safe? Choose two.",
    answers: [
      "A. Regularly update firmware on EBS devices",
      "B. Create EBS snapshots",
      "C. Ensure that EBS data is encrypted at rest",
      "D. Store a backup daily in an external drive",
      "E. Prevent any unauthorized access to AWS data centers"
    ],
    correct: [
      "B. Create EBS snapshots",
      "C. Ensure that EBS data is encrypted at rest"
    ]
  },
  {
    id: 119,
    question: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture\u2019s design?",
    answers: [
      "A. By automatically scaling your on-premises resources based on changes in demand",
      "B. By automatically scaling your AWS resources using an Elastic Load Balancer",
      "C. By reducing interdependencies between application components wherever possible",
      "D. By automatically provisioning the required AWS resources based on changes in demand"
    ],
    correct: "D. By automatically provisioning the required AWS resources based on changes in demand"
  },
  {
    id: 120,
    question: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? Choose two.",
    answers: [
      "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded",
      "B. Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis",
      "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded",
      "D. Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded",
      "E. Configure the Amazon Connect Service to alert the company when the threshold is exceeded"
    ],
    correct: [
      "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded",
      "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded",        
    ]
  },
  {
    id: 121,
    question: "What does Amazon CloudFront use to distribute content to global users with low latency?",
    answers: [
      "A. AWS Global Accelerator",
      "B. AWS Regions",
      "C. AWS Edge Locations",
      "D. AWS Availability Zones"
    ],
    correct: "C. AWS Edge Locations"
  },
  {
    id: 122,
    question: "What does the \"Principle of Least Privilege\" refer to?",
    answers: [
      "A. You should grant your users only the permissions they need when they need them and nothing more",
      "B. All IAM users should have at least the necessary permissions to access the core AWS services",
      "C. All trusted IAM users should have access to any AWS service in the respective AWS account",
      "D. IAM users should not be granted any permissions; to keep your account safe"
    ],
    correct: "A. You should grant your users only the permissions they need when they need them and nothing more"
  },
  {
    id: 123,
    question: "Which of the following does NOT belong to the AWS Cloud Computing models?",
    answers: [
      "A. Platform as a Service (PaaS)",
      "B. Infrastructure as a Service (IaaS)",
      "C. Software as a Service (SaaS)",
      "D. Networking as a Service (NaaS)"
    ],
    correct: "D. Networking as a Service (NaaS)"
  },
  {
    id: 124,
    question: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    answers: [
      "A. S3 Intelligent-Tiering",
      "B. AWS Marketplace",
      "C. Amazon S3 Glacier Deep Archive",
      "D. Amazon EBS"
    ],
    correct: "C. Amazon S3 Glacier Deep Archive"
  },
  {
    id: 125,
    question: "Which service provides DNS in the AWS cloud?",
    answers: [
      "A. Route 53",
      "B. AWS Config",
      "C. Amazon CloudFront",
      "D. Amazon EMR"
    ],
    correct: "A. Route 53"
  },
  {
    id: 126,
    question: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? Choose two.",
    answers: [
      "A. AWS Shield",
      "B. AWS Config",
      "C. Amazon Cognito",
      "D. AWS WAF",
      "E. AWS KMS"
    ],
    correct: ["A. AWS Shield", "D. AWS WAF"]
  },
  {
    id: 127,
    question: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application\u2019s response time is optimal?",
    answers: [
      "A. AWS OpsWorks",
      "B. AWS Storage Gateway",
      "C. Amazon EBS volume",
      "D. Amazon ElastiCache"
    ],
    correct: "D. Amazon ElastiCache"
  },
  {
    id: 128,
    question: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    answers: [
      "A. Reserved instances",
      "B. Spot instances",
      "C. Dedicated instances",
      "D. On-demand instances"
    ],
    correct: "D. On-demand instances"
  },
  {
    id: 129,
    question: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    answers: [
      "A. Reserved Instances",
      "B. On-demand Instances",
      "C. Dedicated Instances",
      "D. Spot Instances"
    ],
    correct: "D. Spot Instances"
  },
  {
    id: 130,
    question: "Which of the following can be described as a global content delivery network (CDN) service?",
    answers: [
      "A. AWS VPN",
      "B. AWS Direct Connect",
      "C. AWS Regions",
      "D. Amazon CloudFront"
    ],
    correct: "D. Amazon CloudFront"
  },
  {
    id: 131,
    question: "Which of the following services allows customers to manage their agreements with AWS?",
    answers: [
      "A. AWS Artifact",
      "B. AWS Certificate Manager",
      "C. AWS Systems Manager",
      "D. AWS Organizations"
    ],
    correct: "A. AWS Artifact"
  },
  {
    id: 132,
    question: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? Choose two.",
    answers: [
      "A. Amazon VPC",
      "B. Amazon DynamoDB",
      "C. Amazon Elastic MapReduce",
      "D. AWS IAM",
      "E. Amazon Elastic Compute Cloud"
    ],
    correct: [
      "B. Amazon DynamoDB",
      "C. Amazon Elastic MapReduce",
    ]
  },
  {
    id: 133,
    question: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    answers: [
      "A. Amazon Aurora",
      "B. Amazon DynamoDB",
      "C. Amazon Elastic Block Store",
      "D. Amazon Redshift"
    ],
    correct: "B. Amazon DynamoDB"
  },
  {
    id: 134,
    question: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    answers: [
      "A. AWS Identity and Access Management (IAM) user",
      "B. Infrastructure Event Management (IEM) engineer",
      "C. AWS Consulting Partners",
      "D. Technical Account Manager (TAM)"
    ],
    correct: "D. Technical Account Manager (TAM)"
  },
  {
    id: 135,
    question: "How can you view the distribution of AWS spending in one of your AWS accounts?",
    answers: [
      "A. By using Amazon VPC console",
      "B. By contacting the AWS Support team",
      "C. By using AWS Cost Explorer",
      "D. By contacting the AWS Finance team"
    ],
    correct: "C. By using AWS Cost Explorer"
  },
  {
    id: 136,
    question: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    answers: [
      "A. Access keys",
      "B. Secret token",
      "C. UserID",
      "D. User name and password"
    ],
    correct: "A. Access keys"
  },
  {
    id: 137,
    question: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    answers: [
      "A. Contact the AWS Customer Service team",
      "B. Contact the AWS Abuse team",
      "C. Contact the AWS Concierge team",
      "D. Contact the AWS Security team"
    ],
    correct: "B. Contact the AWS Abuse team"
  },
  {
    id: 138,
    question: "Select TWO examples of the AWS shared controls.",
    answers: [
      "A. Patch Management",
      "B. IAM Management",
      "C. VPC Management",
      "D. Configuration Management",
      "E. Data Center operations"
    ],
    correct: [
      "A. Patch Management",
      "D. Configuration Management",
    ]
  },
  {
    id: 139,
    question: "In order to implement best practices when dealing with a 'Single Point of Failure', you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? Choose two.",
    answers: [
      "A. ELB",
      "B. Auto Scaling",
      "C. Amazon Athen",
      "D. ECR",
      "E. Amazon EC2"
    ],
    correct: [
      "A. ELB",
      "B. Auto Scaling",
    ]
  },
  {
    id: 140,
    question: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    answers: [
      "A. Amazon SNS",
      "B. Amazon Kinesis Video Streams",
      "C. AWS CloudFormation",
      "D. Amazon CloudFront"
    ],
    correct: "D. Amazon CloudFront"
  },
  {
    id: 141,
    question: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    answers: [
      "A. A MySQL database installed on an EC2 instance",
      "B. Amazon Aurora",
      "C. Amazon DynamoDB",
      "D. Amazon Neptune"
    ],
    correct: "B. Amazon Aurora"
  },
  {
    id: 142,
    question: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    answers: [
      "A. AWS CloudFormation",
      "B. AWS Config",
      "C. Amazon SES",
      "D. Amazon EMR"
    ],
    correct: "A. AWS CloudFormation"
  },
  {
    id: 143,
    question: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    answers: [
      "A. Client-side encryption",
      "B. Configuring infrastructure devices",
      "C. Server-side encryption",
      "D. Filtering traffic with Security Groups"
    ],
    correct: "B. Configuring infrastructure devices"
  },
  {
    id: 144,
    question: "What does the AWS Health Dashboard provide? Choose two.",
    answers: [
      "A. Detailed troubleshooting guidance to address AWS events impacting your resources",
      "B. Health checks for Auto Scaling instances",
      "C. Recommendations for Cost Optimization",
      "D. A dashboard detailing vulnerabilities in your applications",
      "E. Personalized view of AWS service health"
    ],
    correct: [
      "A. Detailed troubleshooting guidance to address AWS events impacting your resources",
      "E. Personalized view of AWS service health"
    ]
  },
  {
    id: 145,
    question: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can\u2019t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    answers: [
      "A. AWS Lambda",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS CloudTrail"
    ],
    correct: "C. Amazon CloudWatch"
  },
  {
    id: 146,
    question: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    answers: [
      "A. AWS Shield",
      "B. AWS Management Console",
      "C. AWS Secrets Manager",
      "D. AWS Trusted Advisor"
    ],
    correct: "D. AWS Trusted Advisor"
  },
  {
    id: 147,
    question: "Which of the following is not a benefit of Amazon S3? Choose two.",
    answers: [
      "A. Amazon S3 provides unlimited storage for any type of data",
      "B. Amazon S3 can run any type of application or backend system",
      "C. Amazon S3 stores any number of objects, but with object size limits",
      "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere",
      "E. Amazon S3 provides 99.999999999% (11 9\u2019s) of data durability"
    ],
    correct: [
      "B. Amazon S3 can run any type of application or backend system",
      "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere"
    ]
  },
  {
    id: 148,
    question: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? Choose two.",
    answers: [
      "A. Disk disposal",
      "B. Controlling physical access to compute resources",
      "C. Patching the Network infrastructure",
      "D. Setting password complexity rules",
      "E. Configuring network access rules"
    ],
    correct: [
      "D. Setting password complexity rules",
      "E. Configuring network access rules"
    ]
  },
  {
    id: 149,
    question: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    answers: [
      "A. Amazon Aurora",
      "B. Amazon CloudWatch",
      "C. AWS Quick Start reference deployments",
      "D. AWS OpsWorks"
    ],
    correct: "C. AWS Quick Start reference deployments"
  },
  {
    id: 150,
    question: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    answers: [
      "A. Elastic RI",
      "B. Premium RI",
      "C. Standard RI",
      "D. Convertible RI"
    ],
    correct: "D. Convertible RI"
  }
];
