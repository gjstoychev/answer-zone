export const questionsSetTwo = [
  {
    id: 151,
    question: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    answers: [
      "A. AWS Organizations",
      "B. AWS Trusted Advisor",
      "C. IAM User Groups",
      "D. AWS Config"
    ],
    correct: "A. AWS Organizations"
  },
  {
    id: 152,
    question: "Which service provides object-level storage in AWS?",
    answers: [
      "A. Amazon EBS",
      "B. Amazon Instance Store",
      "C. Amazon EFS",
      "D. Amazon S3"
    ],
    correct: "D. Amazon S3"
  },
  {
    id: 153,
    question: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    answers: [
      "A. AWS Elastic Load Balancer",
      "B. AWS Budgets",
      "C. AWS Auto Scaling",
      "D. AWS Cost Explorer"
    ],
    correct: "C. AWS Auto Scaling"
  },
  {
    id: 154,
    question: "Which S3 storage class is best for data with unpredictable access patterns?",
    answers: [
      "A. Amazon S3 Intelligent-Tiering",
      "B. Amazon S3 Glacier Flexible Retrieval",
      "C. Amazon S3 Standard",
      "D. Amazon S3 Standard-Infrequent Access"
    ],
    correct: "A. Amazon S3 Intelligent-Tiering"
  },
  {
    id: 155,
    question: "What is the AWS database service that allows you to upload data structured in key-value format?",
    answers: [
      "A. Amazon DynamoDB",
      "B. Amazon Aurora",
      "C. Amazon Redshift",
      "D. Amazon RDS"
    ],
    correct: "A. Amazon DynamoDB"
  },
  {
    id: 156,
    question: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    answers: [
      "A. You have to pay a start-up fee when launching a new instance for the first time",
      "B. The on-demand instances follow the AWS pay-as-you-go pricing model",
      "C. With on-demand instances, no longer-term commitments or upfront payments are needed",
      "D. When using on-demand Linux instances, you are charged per second based on an hourly rate"
    ],
    correct: "A. You have to pay a start-up fee when launching a new instance for the first time"
  },
  {
    id: 157,
    question: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? Select two.",
    answers: [
      "A. AWS Trusted Advisor",
      "B. Amazon Inspector",
      "C. Amazon SNS",
      "D. Amazon CloudWatch",
      "E. Concierge Support Team"
    ],
    correct: [
      "A. AWS Trusted Advisor",
      "B. Amazon Inspector"
    ]
  },
  {
    id: 158,
    question: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    answers: [
      "A. Encrypted keys",
      "B. Email verification",
      "C. AWS KMS",
      "D. AWS MFA"
    ],
    correct: "D. AWS MFA"
  },
  {
    id: 159,
    question: "A company is introducing a new product to their customers and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    answers: [
      "A. AWS Knowledge Center",
      "B. AWS Health Dashboard",
      "C. Infrastructure Event Management",
      "D. AWS Support Concierge Service"
    ],
    correct: "C. Infrastructure Event Management"
  },
  {
    id: 160,
    question: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    answers: [
      "A. Amazon RDS",
      "B. Amazon Redshift",
      "C. Amazon DynamoDB",
      "D. Amazon CloudWatch"
    ],
    correct: "A. Amazon RDS"
  },
  {
    id: 161,
    question: "Which of the below is a best-practice when designing solutions on AWS?",
    answers: [
      "A. Invest heavily in architecting your environment, as it is not easy to change your design later",
      "B. Use AWS reservations to reduce costs when testing your production environment",
      "C. Automate wherever possible to make architectural experimentation easier",
      "D. Provision a large compute capacity to handle any spikes in load"
    ],
    correct: "C. Automate wherever possible to make architectural experimentation easier"
  },
  {
    id: 162,
    question: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    answers: [
      "A. Penetration testing is not allowed in AWS",
      "B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure",
      "C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS",
      "D. The AWS customers are only allowed to perform penetration testing on services managed by AWS"
    ],
    correct: "C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS"
  },
  {
    id: 163,
    question: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    answers: [
      "A. Amazon SQS",
      "B. Amazon SES",
      "C. AWS Direct Connect",
      "D. Amazon Connect"
    ],
    correct: "A. Amazon SQS"
  },
  {
    id: 164,
    question: "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? Select two.",
    answers: [
      "A. Multi-factor authentication",
      "B. Availability Zones",
      "C. Elastic Load Balancing",
      "D. Penetration testing",
      "E. Vertical Scaling"
    ],
    correct: [
      "B. Availability Zones",
      "C. Elastic Load Balancing"
    ]
  },
  {
    id: 165,
    question: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    answers: [
      "A. AWS VPN",
      "B. AWS Subnets",
      "C. AWS Dedicated Hosts",
      "D. Amazon VPC"
    ],
    correct: "D. Amazon VPC"
  },
  {
    id: 166,
    question: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? Select two.",
    answers: [
      "A. Managing environmental events of AWS data centers",
      "B. Protecting the confidentiality of data in transit in Amazon S3",
      "C. Controlling physical access to AWS Regions",
      "D. Ensuring that the underlying EC2 host is configured properly",
      "E. Patching applications installed on Amazon EC2"
    ],
    correct: [
      "B. Protecting the confidentiality of data in transit in Amazon S3",
      "E. Patching applications installed on Amazon EC2"
    ]
  },
  {
    id: 167,
    question: "Which of the following AWS services can be used as a compute resource? Select two.",
    answers: [
      "A. Amazon VPC",
      "B. Amazon CloudWatch",
      "C. Amazon S3",
      "D. Amazon EC2",
      "E. AWS Lambda"
    ],
    correct: [
      "D. Amazon EC2",
      "E. AWS Lambda"
    ]
  },
  {
    id: 168,
    question: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    answers: [
      "A. Amazon EBS",
      "B. Amazon SQS",
      "C. Amazon S3",
      "D. Amazon Instance store"
    ],
    correct: "C. Amazon S3"
  },
  {
    id: 169,
    question: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    answers: [
      "A. Instance Password",
      "B. Key pairs",
      "C. Access Keys",
      "D. MFA"
    ],
    correct: "C. Access Keys"
  },
  {
    id: 170,
    question: "What does Amazon ElastiCache provide?",
    answers: [
      "A. In-memory caching for read-heavy applications",
      "B. An Ehcache compatible in-memory data store",
      "C. An online software store that allows customers to launch pre-configured software with just a few clicks",
      "D. A domain name system in the cloud"
    ],
    correct: "A. In-memory caching for read-heavy applications"
  },
  {
    id: 171,
    question: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    answers: [
      "A. AWS WAF",
      "B. AWS Trusted Advisor",
      "C. AWS Organizations",
      "D. Amazon Config"
    ],
    correct: "C. AWS Organizations"
  },
  {
    id: 172,
    question: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    answers: [
      "A. Dedicated Instances",
      "B. Dedicated Hosts",
      "C. On-demand Instances",
      "D. Reserved Instances"
    ],
    correct: "B. Dedicated Hosts"
  },
  {
    id: 173,
    question: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    answers: [
      "A. Free support for all enterprise customers",
      "B. Automatic data protection",
      "C. Reduced Capital Expenditure (CapEx)",
      "D. AWS holds responsibility for managing customer applications"
    ],
    correct: "C. Reduced Capital Expenditure (CapEx)"
  },
  {
    id: 174,
    question: "Which of the following are important design principles you should adopt when designing systems on AWS? Select two.",
    answers: [
      "A. Always use Global Services in your architecture rather than Regional Services",
      "B. Always choose to pay as you go",
      "C. Treat servers as fixed resources",
      "D. Automate wherever possible",
      "E. Remove single points of failure"
    ],
    correct: [
      "D. Automate wherever possible",
      "E. Remove single points of failure"
    ]
  },
  {
    id: 175,
    question: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    answers: [
      "A. AWS Direct Connect",
      "B. Amazon CloudFront",
      "C. AWS Snowball",
      "D. Amazon Route 53"
    ],
    correct: "A. AWS Direct Connect"
  },
  {
    id: 176,
    question: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    answers: [
      "A. Internet gateways",
      "B. Virtual Private Cloud",
      "C. Security Groups",
      "D. Amazon CloudFront"
    ],
    correct: "B. Virtual Private Cloud"
  },
  {
    id: 177,
    question: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    answers: [
      "A. Amazon Cognito",
      "B. AWS IAM",
      "C. Amazon Aurora",
      "D. AWS WAF"
    ],
    correct: "D. AWS WAF"
  },
  {
    id: 178,
    question: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    answers: [
      "A. Amazon EMR",
      "B. Amazon MQ",
      "C. Amazon SNS",
      "D. Amazon SQS"
    ],
    correct: "A. Amazon EMR"
  },
  {
    id: 179,
    question: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? Select two.",
    answers: [
      "A. Monitoring network performance",
      "B. Installing software on EC2 instances",
      "C. Creating hypervisors",
      "D. Configuring Access Control Lists (ACLs)",
      "E. Hardware maintenance"
    ],
    correct: [
      "C. Creating hypervisors",
      "E. Hardware maintenance"
    ]
  },
  {
    id: 180,
    question: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    answers: [
      "A. Amazon Redshift",
      "B. Amazon DynamoDB",
      "C. Amazon EC2",
      "D. Amazon RDS"
    ],
    correct: "C. Amazon EC2"
  },
  {
    id: 181,
    question: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    answers: [
      "A. MFA",
      "B. Security tokens",
      "C. A user name and password",
      "D. Access keys"
    ],
    correct: "C. A user name and password"
  },
  {
    id: 182,
    question: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    answers: [
      "A. IAM",
      "B. An internet gateway",
      "C. EBS Snapshot",
      "D. AMI"
    ],
    correct: "D. AMI"
  },
  {
    id: 183,
    question: "What are two advantages of using Cloud Computing over using traditional data centers? Select two.",
    answers: [
      "A. Reserved Compute capacity",
      "B. Eliminating Single Points of Failure (SPOFs)",
      "C. Distributed infrastructure",
      "D. Virtualized compute resources",
      "E. Dedicated hosting"
    ],
    correct: [
      "B. Eliminating Single Points of Failure (SPOFs)",
      "C. Distributed infrastructure"
    ]
  },
  {
    id: 184,
    question: "Which of the following aspects of security are managed by AWS? Select two.",
    answers: [
      "A. Encryption of EBS volumes",
      "B. VPC security",
      "C. Access permissions",
      "D. Hardware patching",
      "E. Securing global physical infrastructure"
    ],
    correct: [
      "D. Hardware patching",
      "E. Securing global physical infrastructure"
    ]
  },
  {
    id: 185,
    question: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    answers: [
      "A. The ability of a system to recover gracefully from failure",
      "B. The efficient use of computing resources to meet requirements",
      "C. The ability to monitor systems and improve supporting processes and procedures",
      "D. The ability to manage datacenter operations more efficiently"
    ],
    correct: "C. The ability to monitor systems and improve supporting processes and procedures"
  },
  {
    id: 186,
    question: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    answers: [
      "A. Edge locations are used by CloudFront to cache the most recent responses",
      "B. Edge locations are used by CloudFront to improve your end users’ experience when uploading files",
      "C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency",
      "D. Edge locations are used by CloudFront to distribute content to global users with low latency"
    ],
    correct: "C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency"
  },
  {
    id: 187,
    question: "What are the change management tools that help AWS customers audit and monitor all resource changes in their AWS environment? Select two.",
    answers: [
      "A. AWS CloudTrail",
      "B. Amazon Comprehend",
      "C. AWS Transit Gateway",
      "D. AWS X-Ray",
      "E. AWS Config"
    ],
    correct: [
      "A. AWS CloudTrail",
      "E. AWS Config"
    ]
  },
  {
    id: 188,
    question: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    answers: [
      "A. Amazon ECS",
      "B. AWS Data Pipeline",
      "C. AWS Cloud9",
      "D. AWS Personal Health Dashboard"
    ],
    correct: "A. Amazon ECS"
  },
  {
    id: 189,
    question: "Which of the following services will help businesses ensure compliance in AWS?",
    answers: [
      "A. CloudFront",
      "B. CloudEndure Migration",
      "C. CloudWatch",
      "D. CloudTrail"
    ],
    correct: "D. CloudTrail"
  },
  {
    id: 190,
    question: "Which of the following procedures will help reduce your Amazon S3 costs?",
    answers: [
      "A. Use the Import/Export feature to move old files automatically to Amazon Glacier",
      "B. Use the right combination of storage classes based on different use cases",
      "C. Pick the right Availability Zone for your S3 bucket",
      "D. Move all the data stored in S3 Standard to EBS"
    ],
    correct: "B. Use the right combination of storage classes based on different use cases"
  },
  {
    id: 191,
    question: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? Select two.",
    answers: [
      "A. AWS Direct Connect",
      "B. Amazon EC2 Auto Scaling",
      "C. Elastic Load Balancer",
      "D. CloudFormation",
      "E. Network ACLs"
    ],
    correct: [
      "B. Amazon EC2 Auto Scaling",
      "C. Elastic Load Balancer"
    ]
  },
  {
    id: 192,
    question: "Which of the following activities may help reduce your AWS monthly costs?",
    answers: [
      "A. Enabling Amazon EC2 Auto Scaling for all of your workloads",
      "B. Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests",
      "C. Removing all of your Cost Allocation Tags",
      "D. Deploying your AWS resources across multiple Availability Zones"
    ],
    correct: "A. Enabling Amazon EC2 Auto Scaling for all of your workloads"
  },
  {
    id: 193,
    question: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    answers: [
      "A. S3 Transfer Acceleration",
      "B. AWS WAF",
      "C. AWS Snowmobile",
      "D. AWS Snowball"
    ],
    correct: "A. S3 Transfer Acceleration"
  },
  {
    id: 194,
    question: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    answers: [
      "A. AWS X-Ray",
      "B. Network ACL",
      "C. Security Groups",
      "D. VPC Flow logs"
    ],
    correct: "C. Security Groups"
  },
  {
    id: 195,
    question: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? Select two.",
    answers: [
      "A. AWS KMS",
      "B. AWS Global Accelerator",
      "C. AWS Direct Connect",
      "D. AWS Glue",
      "E. Amazon CloudFront"
    ],
    correct: [
      "B. AWS Global Accelerator",
      "E. Amazon CloudFront"
    ]
  },
  {
    id: 196,
    question: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? Select two.",
    answers: [
      "A. Building the relational database schema",
      "B. Performing backups",
      "C. Managing the database settings",
      "D. Patching the database software",
      "E. Installing the database software"
    ],
    correct: [
      "A. Building the relational database schema",
      "C. Managing the database settings"
    ]
  },
  {
    id: 197,
    question: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS. What is the most appropriate AWS database option?",
    answers: [
      "A. Amazon DynamoDB",
      "B. Amazon SNS",
      "C. Amazon RDS",
      "D. Amazon ElastiCache"
    ],
    correct: "C. Amazon RDS"
  },
  {
    id: 198,
    question: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    answers: [
      "A. APN Consulting Partners",
      "B. AWS TAM",
      "C. APN Technology Partners",
      "D. AWS Professional Services"
    ],
    correct: "A. APN Consulting Partners"
  },
  {
    id: 199,
    question: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    answers: [
      "A. Amazon LightSail",
      "B. AWS Lambda",
      "C. Amazon RDS instances",
      "D. Amazon EC2 instances"
    ],
    correct: "B. AWS Lambda"
  },
  {
    id: 200,
    question: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    answers: [
      "A. She has properly built an elastic system",
      "B. She has properly built a fault tolerant system",
      "C. She has properly built an encrypted system",
      "D. She has properly built a scalable system"
    ],
    correct: "B. She has properly built a fault tolerant system"
  }  
];
