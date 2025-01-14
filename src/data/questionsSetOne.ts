export const questionsSetOne = [
  {
    id: 101,
    question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    answers: [
      { definition: "A. AWS CLI", details: "(Command Line Interface): This tool allows users to manage AWS resources through command line commands, not a web interface." },
      { definition: "B. AWS API", details: "(Application Programming Interface): This is a set of protocols that allows different software applications to communicate with AWS services, but it does not provide a user interface." },
      { definition: "C. AWS SDK", details: "(Software Development Kit): This is a collection of tools and libraries to help developers integrate AWS services into applications, but it is not a user interface." },
      { definition: "D. AWS Management Console", details: "is a web-based interface that allows users to interact with and manage AWS services and resources visually. It provides an easy-to-navigate dashboard where users can view their services, monitor resources, and configure settings without needing to use command-line tools or code." },
    ],
    correct: "D. AWS Management Console"
  },
  {
    id: 102,
    question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    answers: [
      { definition: "A. Replacing an existing EC2 instance with a larger, more powerful one.",
        details: "This is an example of vertical scaling (or scaling up) as you are increasing the size of a single instance." },
      { definition: "B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
        details: "This is also vertical scaling because it focuses on enhancing a single instance's capacity." },
      { definition: "C. Adding more RAM capacity to an EC2 instance.",
        details: "Similar to the above options, this is vertical scaling since it increases the resources of an individual instance." },
      { definition: "D. Adding more EC2 instances of the same size to handle an increase in traffic.",
        details: "Horizontal scaling involves adding more instances or resources to distribute the load and increase capacity. It means scaling out by adding more machines (like EC2 instances) rather than making existing ones larger." },
    ],
    correct: "D. Adding more EC2 instances of the same size to handle an increase in traffic."
  },
  {
    id: 103,
    question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    answers: [
      { definition: "A. Amazon Inspector", details: "is a security assessment service that helps improve the security and compliance of applications deployed on AWS but does not track who terminated instances." },
      { definition: "B. AWS CloudTrail", details: "is a service that records API calls made on your AWS account, including actions taken on EC2 instances. It logs details such as who made the request, the time of the request, and the IP address from which the request was made. This information is crucial for auditing and tracking changes within your AWS environment." },
      { definition: "C. AWS Trusted Advisor", details: "service provides best practices and recommendations to optimize your AWS environment but does not log specific actions taken on resources." },
      { definition: "D. EC2 Instance Usage Report", details: "gives insights into instance usage and costs but does not provide information about who terminated instances." },
    ],
    correct: "B. AWS CloudTrail"
  },
  {
    id: 104,
    question: "Which of the below options are related to the reliability of AWS? Choose two.",
    answers: [
      { definition: "A. Applying the principle of least privilege to all AWS resources.",
        details: "While this is a best practice for security, it is not directly related to reliability." },
      { definition: "B. Automatically provisioning new resources to meet demand.",
        details: "This feature helps ensure that applications can handle fluctuations in traffic and resource needs without manual intervention. By automatically scaling resources, AWS maintains performance and availability, which contributes to overall reliability." },
      { definition: "C. All AWS services are considered Global Services, and this design helps customers serve their international users.",
        details: "This statement focuses on global reach and accessibility, rather than reliability specifically." },
      { definition: "D. Providing compensation to customers if issues occur.",
        details: "Although compensation may indicate a commitment to service quality, it does not directly affect the reliability of AWS services." },
      { definition: "E. Ability to recover quickly from failures.",
        details: "AWS is designed with features such as redundancy and failover mechanisms that enable quick recovery from failures. This resilience ensures that services remain available and functional, enhancing reliability for users." },
    ],
    correct: [
      "B. Automatically provisioning new resources to meet demand.",
      "E. Ability to recover quickly from failures."
    ]
  },
  {
    id: 105,
    question: "Which statement is true regarding the AWS Shared Responsibility Model?",
    answers: [
      { definition: "A. Responsibilities vary depending on the services used.",
        details: "The AWS Shared Responsibility Model outlines the division of responsibilities for security and compliance between AWS and its customers. Responsibilities do indeed vary based on the specific services utilized. For example, in Infrastructure as a Service (IaaS) like Amazon EC2, customers manage the guest operating system and applications, while AWS manages the underlying infrastructure. In contrast, for fully managed services (like AWS Lambda), AWS takes on more responsibility for security." },
      { definition: "B. Security of the IaaS services is the responsibility of AWS.",
        details: "This statement is partially incorrect. While AWS secures the infrastructure, customers are responsible for securing their applications and data within IaaS services." },
      { definition: "C. Patching the guest OS is always the responsibility of AWS.",
        details: "This is incorrect; patching the guest OS is typically the responsibility of the customer when using IaaS services like EC2." },
      { definition: "D. Security of the managed services is the responsibility of the customer.",
        details: "This statement is also misleading. For managed services, AWS is responsible for much of the security, while customers must manage aspects relevant to their applications." },
    ],
    correct: "A. Responsibilities vary depending on the services used."
  },
  {
    id: 106,
    question: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    answers: [
      { definition: "A. The Reserved Instance discounts can only be shared with the master account.",
        details: "This is incorrect because the discounts are shared among all accounts under the consolidated billing setup, not just the master account." },
      { definition: "B. All accounts can receive the hourly cost benefit of the Reserved Instances.",
        details: "When you use consolidated billing, the reserved instance (RI) discounts apply to the entire billing family, meaning that all accounts under the consolidated billing arrangement can benefit from the reserved instances purchased by any one account. This effectively helps maximize the usage of reserved instances across multiple accounts." },
      { definition: "C. The purchased instances will have better performance than On-demand instances.",
        details: "This statement is misleading. Reserved instances provide a pricing benefit rather than a performance benefit; the underlying performance is generally the same as on-demand instances." },
      { definition: "D. There are no cost benefits from using consolidated billing; It is for informational purposes only.",
        details: "This is incorrect. Consolidated billing offers significant cost benefits by allowing accounts to pool usage for better pricing, including access to reserved instance discounts." },
    ],
    correct: "B. All accounts can receive the hourly cost benefit of the Reserved Instances."
  },
  {
    id: 107,
    question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    answers: [
      { definition: "A. Deploy the application across multiple Availability Zones and Edge locations.",
        details: "While this provides some level of availability, Edge locations are primarily used for content delivery through services like Amazon CloudFront rather than hosting the application itself." },
      { definition: "B. Deploy the application across multiple Availability Zones and subnets.",
        details: "This option focuses only on Availability Zones within a single region, which is beneficial but not as robust as including multiple regions." },
      { definition: "C. Deploy the application across multiple Regions and Availability Zones.",
        details: "Deploying across multiple Regions provides geographic redundancy, meaning that if one region experiences an outage, the application can still be available in another region. Deploying across multiple Availability Zones within a region offers additional redundancy. Each Availability Zone is isolated from failures in other zones, so if one zone goes down, the application can continue running in others." },
      { definition: "D. Deploy the application across multiple VPC's and subnets.",
        details: "While this could provide some level of isolation, it does not inherently improve availability compared to using multiple Availability Zones or Regions." },
    ],
    correct: "C. Deploy the application across multiple Regions and Availability Zones."
  },
  {
    id: 108,
    question: "What does AWS Snowball provide? Choose two.",
    answers: [
      { definition: "A. Built-in computing capabilities that allow customers to process data locally.",
        details: "AWS Snowball Edge devices include built-in computing capabilities that allow customers to run edge computing applications or process data locally before transferring it to AWS. This is especially useful for use cases like IoT, data analysis, and machine learning in remote locations." },
      { definition: "B. A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
        details: "This describes AWS Marketplace, not AWS Snowball." },
      { definition: "C. A hybrid cloud storage between on-premises environments and the AWS Cloud.",
        details: "This aligns more with AWS Storage Gateway rather than AWS Snowball." },
      { definition: "D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
        details: "While AWS Snowball can handle large data transfers, Exabyte-scale data transfer is typically handled by AWS Snowmobile, not Snowball." },
      { definition: "E. Secure transfer of large amounts of data into and out of the AWS.",
        details: "AWS Snowball is designed to securely transfer large amounts of data into and out of AWS using physical storage devices. This service helps organizations overcome challenges with slow or unreliable network connections when transferring large datasets." },
    ],
    correct: [
      "A. Built-in computing capabilities that allow customers to process data locally.",
      "E. Secure transfer of large amounts of data into and out of the AWS."
    ]
  },
  {
    id: 109,
    question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    answers: [
      { definition: "A. AWS Health Dashboard", details: "tool provides information about the status of AWS services and any ongoing issues but does not specifically address billing or account inquiries." },
      { definition: "B. AWS Support Concierge", details: "is a dedicated resource provided to AWS Enterprise Support customers that offers personalized assistance with billing and account inquiries. This service is designed to provide quick and efficient support, ensuring that customers get the guidance they need related to their AWS accounts." },
      { definition: "C. AWS Customer Service", details: "can assist with some issues, but the Concierge service is tailored specifically for Enterprise Support customers and is more efficient for billing and account matters." },
      { definition: "D. AWS Operations Support", details: "primarily focuses on operational issues and best practices rather than billing or account inquiries." },
    ],
    correct: "B. AWS Support Concierge"
  },
  {
    id: 110,
    question: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    answers: [
      { definition: "A. Applying the Amazon Connect latency-based routing policy.",
        details: "This option is more relevant to routing calls through Amazon Connect rather than addressing application latency for web users." },
      { definition: "B. Registering a new US domain name to serve the users in the US.",
        details: "This does not affect latency. A domain name does not influence the physical location of the application or its servers." },
      { definition: "C. Building a new data center in the US and implementing a hybrid model.",
        details: "This option would likely be more expensive and time-consuming than simply deploying EC2 instances in a US region." },
      { definition: "D. Deploying new Amazon EC2 instances in a Region located in the US.",
        details: "By deploying new Amazon EC2 instances in a US region, the company can significantly reduce latency for US users. This is because the physical distance between the users and the servers will be much shorter, resulting in faster response times." },
    ],
    correct: "D. Deploying new Amazon EC2 instances in a Region located in the US."
  },
  {
    id: 111,
    question: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    answers: [
      { definition: "A. IAM roles", details: "are used to grant temporary permissions to entities like users, services, or applications. While useful for specific tasks, they are not designed for organizing users into teams." },
      { definition: "B. IAM users", details: "represent individual users but do not help organize them into teams. Permissions must be managed on a per-user basis, which can be cumbersome for large organizations." },
      { definition: "C. IAM user groups", details: "allow you to group IAM users together and assign permissions to the group rather than to individual users. This simplifies the process of managing permissions across multiple users." },
      { definition: "D. AWS Organizations", details: "is used to manage multiple AWS accounts, not to organize individual users within an account. It’s more suitable for setting up centralized management and billing across accounts." },
    ],
    correct: "C. IAM user groups"
  },
  {
    id: 112,
    question: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    answers: [
      { definition: "A. AWS OpsWorks", details: "is a configuration management service that uses Chef or Puppet. It is not related to database migration." },
      { definition: "B. AWS Database Migration Service", details: "(DMS) is specifically designed to help migrate databases to AWS with minimal downtime. It supports both homogeneous migrations (e.g., Oracle to Oracle) and heterogeneous migrations (e.g., Oracle to Amazon Aurora). DMS ensures that the source database remains fully operational during the migration, minimizing the impact on functionality." },
      { definition: "C. AWS Server Migration Service", details: "(SMS) is used for migrating virtual machines (VMs) from on-premises environments to AWS. It is not designed for database migrations." },
      { definition: "D. AWS Application Discovery Service", details: "helps in planning application migrations by collecting information about on-premises servers. It does not handle the actual migration of databases." },
    ],
    correct: "B. AWS Database Migration Service"
  },
  {
    id: 113,
    question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    answers: [
      { definition: "A. Build security in every layer.", details: "This refers to integrating security measures at all layers of an application or infrastructure but is unrelated to adjusting compute capacity dynamically." },
      { definition: "B. Parallelize tasks.", details: "This involves breaking down processes into smaller tasks to run concurrently, which improves efficiency but does not relate to dynamically adjusting compute capacity." },
      { definition: "C. Implement elasticity.", details: "This refers to the ability to dynamically adjust compute resources (e.g., increasing or decreasing capacity) based on demand. This is a core AWS best practice that helps optimize costs by using only the resources needed at any given time. Elasticity is achieved through services like Auto Scaling and Elastic Load Balancing." },
      { definition: "D. Adopt monolithic architecture.", details: "Monolithic architectures are the opposite of modern, scalable cloud-native approaches. They are rigid and do not support elasticity well." },
    ],
    correct: "C. Implement elasticity."
  },
  {
    id: 114,
    question: "What are the benefits of having infrastructure hosted in AWS? Choose two.",
    answers: [
      { definition: "A. Increasing speed and agility.", details: "AWS allows organizations to quickly deploy and scale resources without the need for upfront hardware investments. This flexibility enables faster innovation and adaptation to changing business needs." },
      { definition: "B. There is no need to worry about security.", details: "While AWS provides robust security measures, customers still have responsibilities, such as managing access controls and securing their applications and data." },
      { definition: "C. Gaining complete control over the physical infrastructure.", details: "AWS customers do not have physical access or control over AWS infrastructure, as AWS manages the physical hardware." },
      { definition: "D. Operating applications on behalf of customers.", details: "AWS provides infrastructure and managed services, but it does not operate customers' applications. Customers retain responsibility for their application management." },
      { definition: "E. All of the physical security and most of the data/network security are taken care of for you.", details: "AWS operates under a shared responsibility model where AWS handles the security 'of' the cloud (physical infrastructure, hardware, etc.), while customers manage the security 'in' the cloud (data, applications, etc.). This offloads much of the operational burden from the customer." },
    ],
    correct: [
      "A. Increasing speed and agility.",
      "E. All of the physical security and most of the data/network security are taken care of for you."
    ]
  },
  {
    id: 115,
    question: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
    answers: [
      { definition: "A. Allows treating an application as a single, cohesive unit.",
        details: "This describes a monolithic application, which is the opposite of decoupled design." },
      { definition: "B. Reduces inter-dependencies so that failures do not impact other components of the application.",
        details: "Decoupling applications means designing them in a way where components are independent and interact with each other asynchronously or through well-defined interfaces. This approach improves fault tolerance by ensuring that a failure in one component does not propagate to others. It also enhances scalability and simplifies maintenance." },
      { definition: "C. Allows updates of any monolithic application quickly and easily.",
        details: "Monolithic applications are typically harder to update. Decoupling is more aligned with microservices or modular architectures." },
      { definition: "D. Allows tracking of any API call made to any AWS service.",
        details: "While AWS provides services like AWS CloudTrail for API call tracking, this is unrelated to the concept of decoupling applications." },
    ],
    correct: "B. Reduces inter-dependencies so that failures do not impact other components of the application."
  },
  {
    id: 116,
    question: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    answers: [
      { definition: "A. AWS Budgets", details: "helps set spending thresholds and provides alerts when you approach or exceed those limits. While useful for monitoring costs, it does not provide detailed historical billing activity." },
      { definition: "B. AWS Pricing Calculator", details: "is a tool to estimate costs for new or proposed AWS resources. It does not provide information about past billing activity." },
      { definition: "C. AWS Systems Manager", details: "is used for operational management and resource monitoring, not for viewing billing details." },
      { definition: "D. AWS Cost & Usage Reports", details: "(CUR) provide a detailed view of your AWS usage and associated costs. Customers can analyze their Amazon EC2 billing activity for the past month or any specified period using these reports. CUR is ideal for detailed billing and cost management." },
    ],
    correct: "D. AWS Cost & Usage Reports"
  },
  {
    id: 117,
    question: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    answers: [
      { definition: "A. AWS services costs will be reduced to half the original price.", details: "There’s no guarantee of a 50% reduction in costs. Discounts depend on usage levels and eligible services." },
      { definition: "B. The consolidated billing feature is just for organizational purpose.", details: "While consolidated billing provides a unified bill and helps in managing multiple accounts, it also offers tangible cost benefits like volume discounts." },
      { definition: "C. Each AWS account gets volume discounts.", details: "Consolidated billing under AWS Organizations enables you to combine usage across multiple AWS accounts to achieve volume discounts. For example, services like Amazon EC2 and S3 offer tiered pricing, so the combined usage from all accounts may qualify for lower pricing tiers." },
      { definition: "D. Each AWS account gets five times the free-tier services capacity.", details: "Free-tier benefits are account-specific and do not multiply based on the number of accounts linked to a consolidated bill." },
    ],
    correct: "C. Each AWS account gets volume discounts."
  },
  {
    id: 118,
    question: "What should you do in order to keep the data on EBS volumes safe? Choose two.",
    answers: [
      { definition: "A. Regularly update firmware on EBS devices.", details: "AWS handles the underlying hardware and firmware for EBS, so this is not a customer responsibility." },
      { definition: "B. Create EBS snapshots.", details: "EBS snapshots allow you to create point-in-time backups of your EBS volumes. These snapshots can be stored in Amazon S3, providing a reliable and durable way to recover your data if the original volume is compromised." },
      { definition: "C. Ensure that EBS data is encrypted at rest.", details: "Encrypting your EBS volumes protects your data from unauthorized access, even if someone gains access to the physical storage. AWS makes it easy to enable encryption for EBS volumes using AWS-managed keys or your own customer-managed keys." },
      { definition: "D. Store a backup daily in an external drive.", details: "While backing up data is important, using AWS-native features like snapshots is more practical and cost-effective than external drives for EBS data." },
      { definition: "E. Prevent any unauthorized access to AWS data centers.", details: "Physical security of AWS data centers is managed by AWS as part of the shared responsibility model, and customers do not have access to these facilities." },
    ],
    correct: [
      "B. Create EBS snapshots.",
      "C. Ensure that EBS data is encrypted at rest."
    ]
  },
  {
    id: 119,
    question: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
    answers: [
      { definition: "A. By automatically scaling your on-premises resources based on changes in demand.",
        details: "Elasticity applies to AWS cloud resources, not on-premises infrastructure." },
      { definition: "B. By automatically scaling your AWS resources using an Elastic Load Balancer.",
        details: "While an Elastic Load Balancer (ELB) helps distribute incoming traffic, it does not handle resource provisioning. Elasticity involves scaling resources like EC2 instances, databases, or storage." },
      { definition: "C. By reducing interdependencies between application components wherever possible.",
        details: "This is related to decoupling, not elasticity. Decoupling minimizes the risk of failure propagation but does not address dynamic scaling." },
      { definition: "D. By automatically provisioning the required AWS resources based on changes in demand.",
        details: "Elasticity is a key principle of cloud architecture, allowing applications to automatically adjust resource allocation to match current demand. This ensures efficient use of resources, reduces costs during low usage, and provides high availability during peak demand." },
    ],
    correct: "D. By automatically provisioning the required AWS resources based on changes in demand."
  },
  {
    id: 120,
    question: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? Choose two.",
    answers: [
      { definition: "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
        details: "You can use Amazon CloudWatch to monitor billing metrics and set up an alarm to notify you via Amazon SNS (Simple Notification Service) when your AWS charges exceed a specified threshold, such as $2000." },
      { definition: "B. Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
        details: "Amazon SES is an email-sending service and does not have built-in billing alert capabilities." },
      { definition: "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
        details: "The AWS Budgets service lets you define a spending threshold and sends notifications when actual or forecasted usage exceeds this limit. It's specifically designed for cost monitoring and alerting." },
      { definition: "D. Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
        details: "AWS CloudTrail tracks API activity but cannot take automated actions like resource deletion, especially based on billing thresholds." },
      { definition: "E. Configure the Amazon Connect Service to alert the company when the threshold is exceeded.",
        details: "Amazon Connect is a contact center service and has no functionality for billing alerts." },
    ],
    correct: [
      "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
      "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
    ]
  },
  {
    id: 121,
    question: "What does Amazon CloudFront use to distribute content to global users with low latency?",
    answers: [
      { definition: "A. AWS Global Accelerator.", details: "AWS Global Accelerator improves performance for global applications by routing traffic through AWS's global network but does not distribute content like CloudFront." },
      { definition: "B. AWS Regions.", details: "AWS Regions are geographic locations hosting multiple Availability Zones. They are used for deploying resources, but they are not optimized for low-latency content delivery like Edge Locations." },
      { definition: "C. AWS Edge Locations.", details: "Amazon CloudFront uses a network of Edge Locations to cache and distribute content closer to users worldwide. By serving cached content from these locations, CloudFront reduces latency and improves the performance of delivering web assets, videos, or APIs." },
      { definition: "D. AWS Availability Zones.", details: "Availability Zones are isolated data centers within an AWS Region designed for high availability, not for distributing content globally." },
    ],
    correct: "C. AWS Edge Locations."
  },
  {
    id: 122,
    question: "What does the 'Principle of Least Privilege' refer to?",
    answers: [
      { definition: "A. You should grant your users only the permissions they need when they need them and nothing more.",
        details: "The Principle of Least Privilege is a security best practice that involves giving users, roles, or applications the minimum level of access necessary to perform their tasks. This minimizes the potential impact of accidental changes, security breaches, or malicious actions." },
      { definition: "B. All IAM users should have at least the necessary permissions to access the core AWS services.",
        details: "This contradicts the principle, as not all users need access to core AWS services unless required for their role." },
      { definition: "C. All trusted IAM users should have access to any AWS service in the respective AWS account.",
        details: "Granting broad access goes against the principle of least privilege and increases security risks." },
      { definition: "D. IAM users should not be granted any permissions; to keep your account safe.",
        details: "While denying all permissions keeps the account safe, it also makes it unusable. Permissions should be granted selectively based on need." },
    ],
    correct: "A. You should grant your users only the permissions they need when they need them and nothing more."
  },
  {
    id: 123,
    question: "Which of the following does NOT belong to the AWS Cloud Computing models?",
    answers: [
      { definition: "A. Platform as a Service (PaaS).", details: "AWS provides PaaS offerings like Elastic Beanstalk and Lambda for developers." },
      { definition: "B. Infrastructure as a Service (IaaS).", details: "AWS's foundational services, such as EC2 and S3, fall under this model." },
      { definition: "C. Software as a Service (SaaS).", details: "AWS offers SaaS solutions like Amazon WorkSpaces and WorkDocs." },
      { definition: "D. Networking as a Service (NaaS).", details: "While AWS offers robust networking services (like Amazon VPC, Route 53, and CloudFront), Networking as a Service (NaaS) is not considered one of the primary cloud computing models." },
    ],
    correct: "D. Networking as a Service (NaaS)."
  },
  {
    id: 124,
    question: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    answers: [
      { definition: "A. S3 Intelligent-Tiering", details: "optimizes storage costs by automatically moving data between tiers based on access patterns, but it is not as cost-effective as S3 Glacier Deep Archive for data that is rarely accessed." },
      { definition: "B. AWS Marketplace", details: "is a platform for buying and selling third-party software solutions. It is not a storage service." },
      { definition: "C. Amazon S3 Glacier Deep Archive", details: "is the most cost-effective storage option for long-term data archiving and retention. It is ideal for infrequently accessed data, like regulatory compliance-related videos, which may only be retrieved in rare circumstances. It offers very low storage costs but has higher retrieval times compared to other S3 storage classes." },
      { definition: "D. Amazon EBS", details: "is a high-performance storage service designed for use with EC2 instances. It is not cost-effective for long-term storage of infrequently accessed data." },
    ],
    correct: "C. Amazon S3 Glacier Deep Archive"
  },
  {
    id: 125,
    question: "Which service provides DNS in the AWS cloud?",
    answers: [
      { definition: "A. Route 53", details: "is AWS's scalable Domain Name System (DNS) service. It is used to route end users to Internet applications by translating human-readable domain names into IP addresses. Additionally, Route 53 provides domain registration and health checking features." },
      { definition: "B. AWS Config", details: "is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It does not provide DNS functionality." },
      { definition: "C. Amazon CloudFront", details: "is a Content Delivery Network (CDN) service that accelerates the delivery of content, but it does not handle DNS services." },
      { definition: "D. Amazon EMR", details: "(Amazon Elastic MapReduce) is a big data processing service, unrelated to DNS." },
    ],
    correct: "A. Route 53"
  },
  {
    id: 126,
    question: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? Choose two.",
    answers: [
      { definition: "A. AWS Shield", details: "is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. It provides two levels of protection: Standard and Advanced." },
      { definition: "B. AWS Config", details: "is used for assessing and auditing resource configurations, not for DDoS protection." },
      { definition: "C. Amazon Cognito", details: "is a user authentication and authorization service. It does not provide DDoS protection." },
      { definition: "D. AWS WAF", details: "(Web Application Firewall) helps protect web applications from common exploits like SQL injection and cross-site scripting (XSS). It can also block malicious traffic and mitigate volumetric attacks when integrated with AWS Shield and CloudFront." },
      { definition: "E. AWS KMS", details: "(Key Management Service) is a service for managing encryption keys. It is not related to protecting against DDoS attacks." },
    ],
    correct: ["A. AWS Shield", "D. AWS WAF"]
  },
  {
    id: 127,
    question: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
    answers: [
      { definition: "A. AWS OpsWorks", details: "is a configuration management service for deploying applications using Chef or Puppet. It does not store data for optimizing response times." },
      { definition: "B. AWS Storage Gateway", details: "connects on-premises environments to AWS storage services. It is not intended for low-latency access to frequently used data." },
      { definition: "C. Amazon EBS volume", details: "provides persistent block storage for EC2 instances, which is slower than in-memory caching services like ElastiCache for frequently accessed data." },
      { definition: "D. Amazon ElastiCache", details: "is designed to improve the performance of web applications by storing frequently accessed data in memory. This reduces response times and speeds up data retrieval compared to querying a database or storage system repeatedly. It is especially well-suited for caching data in a two-tier web application architecture." },
    ],
    correct: "D. Amazon ElastiCache"
  },
  {
    id: 128,
    question: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    answers: [
      { definition: "A. Reserved instances", details: "are designed for steady-state workloads and require a 1-year or 3-year commitment. They are not cost-effective or practical for a one-day use case." },
      { definition: "B. Spot instances", details: "are the most cost-effective option but are not suitable for uninterrupted workloads since they can be terminated by AWS at any time if capacity is needed." },
      { definition: "C. Dedicated instances", details: "are intended for use cases requiring hardware isolation for compliance or regulatory needs, which is unnecessary and more expensive for a single-day application." },
      { definition: "D. On-demand instances", details: "are ideal for short-term, unpredictable workloads that cannot be interrupted. They allow you to pay only for the compute time you use without requiring long-term commitments, making them perfect for running an application for just one day." },
    ],
    correct: "D. On-demand instances"
  },
  {
    id: 129,
    question: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    answers: [
      { definition: "A. Reserved Instances", details: "require a long-term commitment (1 or 3 years) and are suited for predictable, steady-state workloads. They are not the most cost-effective for sporadic tasks." },
      { definition: "B. On-demand Instances", details: "offer flexibility without long-term commitment, but they are more expensive than Spot Instances and are better suited for tasks requiring uninterrupted availability." },
      { definition: "C. Dedicated Instances", details: "provide hardware isolation for compliance or regulatory needs, which is unnecessary and more costly for a task like thumbnail creation." },
      { definition: "D. Spot Instances", details: "are highly cost-effective for workloads that can tolerate interruptions. They are ideal for batch processing tasks like creating thumbnails of millions of images. Since consistent uptime and continuous processing are not critical, you can use Spot Instances to save up to 90% compared to On-Demand Instances." },
    ],
    correct: "D. Spot Instances"
  },
  {
    id: 130,
    question: "Which of the following can be described as a global content delivery network (CDN) service?",
    answers: [
      { definition: "A. AWS VPN", details: "is a service that provides secure connections between on-premises networks and AWS resources. It is not a CDN." },
      { definition: "B. AWS Direct Connect", details: "establishes a dedicated network connection between your premises and AWS. It is used for high-bandwidth and low-latency networking, not content delivery." },
      { definition: "C. AWS Regions", details: "are geographic areas with multiple Availability Zones for deploying resources. They are not a CDN." },
      { definition: "D. Amazon CloudFront", details: "is a global Content Delivery Network (CDN) service provided by AWS. It delivers data, videos, applications, and APIs securely and with low latency by caching content at AWS Edge Locations worldwide. This ensures a fast and reliable user experience for global audiences." },
    ],
    correct: "D. Amazon CloudFront"
  },
  {
    id: 131,
    question: "Which of the following services allows customers to manage their agreements with AWS?",
    answers: [
      { definition: "A. AWS Artifact", details: "is a service that provides access to AWS compliance reports and agreements. It enables customers to review, accept, and manage agreements with AWS, such as Business Associate Addendums (BAAs) and Non-Disclosure Agreements (NDAs)." },
      { definition: "B. AWS Certificate Manager", details: "is used for managing SSL/TLS certificates for securing websites and applications, not for managing agreements." },
      { definition: "C. AWS Systems Manager", details: "is used for operational management of AWS resources, such as patching, configuration, and automation, not agreements." },
      { definition: "D. AWS Organizations", details: "is used to manage multiple AWS accounts within a single organization, not for managing customer agreements with AWS." },
    ],
    correct: "A. AWS Artifact"
  },
  {
    id: 132,
    question: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? Choose two.",
    answers: [
      { definition: "A. Amazon VPC", details: "(Virtual Private Cloud) provides network isolation, but customers are responsible for designing, configuring, and maintaining their VPC setup." },
      { definition: "B. Amazon DynamoDB", details: "is a fully managed NoSQL database service. AWS manages the infrastructure, scaling, backups, and updates." },
      { definition: "C. Amazon Elastic MapReduce", details: "(EMR) is a fully managed big data processing framework for running Apache Hadoop, Spark, and other distributed frameworks. AWS takes care of provisioning, scaling, and managing the underlying infrastructure." },
      { definition: "D. AWS IAM", details: "(Identity and Access Management) is a global service for managing access control, but it is not considered an AWS-Managed Service as it requires users to configure permissions and policies." },
      { definition: "E. Amazon Elastic Compute Cloud", details: "(EC2) provides scalable virtual servers but is not fully managed. Customers are responsible for maintaining and patching the operating system and software on the instances." },
    ],
    correct: ["B. Amazon DynamoDB", "C. Amazon Elastic MapReduce"]
  },
  {
    id: 133,
    question: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    answers: [
      { definition: "A. Amazon Aurora", details: "is a relational database service (SQL) and does not meet the requirement for a NoSQL database." },
      { definition: "B. Amazon DynamoDB", details: "is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It is designed for use cases like key-value stores, document databases, and applications requiring low-latency access to data." },
      { definition: "C. Amazon Elastic Block Store", details: "(EBS) is a block storage service for EC2 instances, not a database solution." },
      { definition: "D. Amazon Redshift", details: "is a fully managed data warehouse solution, optimized for complex analytical queries, and is not a NoSQL database." },
    ],
    correct: "B. Amazon DynamoDB"
  },
  {
    id: 134,
    question: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    answers: [
      { definition: "A. AWS Identity and Access Management (IAM) user.", details: "IAM users are entities created to access AWS resources, not support personnel." },
      { definition: "B. Infrastructure Event Management (IEM) engineer.", details: "IEM is a short-term engagement to support specific events like migrations or product launches. It is not a primary point of contact for ongoing support." },
      { definition: "C. AWS Consulting Partners.", details: "AWS Consulting Partners provide third-party consulting services, but they are not part of the AWS Enterprise Support Plan." },
      { definition: "D. Technical Account Manager (TAM).", details: "As part of the AWS Enterprise Support Plan, the TAM acts as the primary point of contact for ongoing support needs. TAMs provide proactive guidance, best practices, and coordination for your AWS environment to help achieve operational excellence." },
    ],
    correct: "D. Technical Account Manager (TAM)."
  },
  {
    id: 135,
    question: "How can you view the distribution of AWS spending in one of your AWS accounts?",
    answers: [
      { definition: "A. By using Amazon VPC console.", details: "The VPC console is for managing virtual private clouds, not for viewing AWS spending." },
      { definition: "B. By contacting the AWS Support team.", details: "While support can assist with billing inquiries, AWS provides self-service tools like Cost Explorer for analyzing spending." },
      { definition: "C. By using AWS Cost Explorer.", details: "AWS Cost Explorer is a tool that enables you to view and analyze your AWS spending and usage over time. It provides detailed insights into the distribution of costs across services, accounts, regions, and tags. You can create custom reports and forecasts to manage your AWS expenses effectively." },
      { definition: "D. By contacting the AWS Finance team.", details: "AWS does not have a customer-facing 'Finance team' to assist with billing insights; instead, tools like Cost Explorer are provided." },
    ],
    correct: "C. By using AWS Cost Explorer."
  },
  {
    id: 136,
    question: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    answers: [
      { definition: "A. Access keys", details: "consist of an Access Key ID and a Secret Access Key. They are required for programmatic access to AWS services, including interacting with the AWS CLI. These keys allow the CLI to authenticate the IAM user and authorize access to AWS resources." },
      { definition: "B. Secret token", details: "is not used by AWS for authentication in the CLI. Instead, the access keys are used." },
      { definition: "C. UserID", details: "is an internal identifier for an IAM user and is not used for CLI access." },
      { definition: "D. Username and password", details: "are used to log in to the AWS Management Console, not for CLI access. The CLI requires access keys for programmatic interactions." },
    ],
    correct: "A. Access keys"
  },
  {
    id: 137,
    question: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    answers: [
      { definition: "A. Contact the AWS Customer Service team.", details: "The Customer Service team handles general account and billing issues, not security incidents or abuse reports." },
      { definition: "B. Contact the AWS Abuse team.", details: "If you discover malicious use of AWS resources (e.g., unauthorized access, phishing, spam, or other abuse), you should report the issue to the AWS Abuse team." },
      { definition: "C. Contact the AWS Concierge team.", details: "The Concierge team is available only with Enterprise Support and primarily assists with account and billing-related concerns, not abuse or security issues." },
      { definition: "D. Contact the AWS Security team.", details: "While AWS has a Security team, incidents involving malicious resource use should be directed to the Abuse team, which is specialized in handling such cases." },
    ],
    correct: "B. Contact the AWS Abuse team."
  },
  {
    id: 138,
    question: "Select TWO examples of the AWS shared controls.",
    answers: [
      { definition: "A. Patch Management.", details: "AWS is responsible for patching the underlying infrastructure. The customer is responsible for patching their operating systems and applications." },
      { definition: "B. IAM Management.", details: "IAM is a customer-specific control. Customers are solely responsible for managing their identities, access policies, and permissions." },
      { definition: "C. VPC Management.", details: "Customers are responsible for configuring their Virtual Private Clouds (VPCs), while AWS provides the networking infrastructure." },
      { definition: "D. Configuration Management.", details: "AWS provides services and tools to manage configurations (e.g., AWS Config). The customer must configure their applications, databases, and settings appropriately." },
      { definition: "E. Data Center operations.", details: "This is an AWS-only control, as AWS is entirely responsible for maintaining its physical data centers." },
    ],
    correct: ["A. Patch Management.", "D. Configuration Management."]
  },
  {
    id: 139,
    question: "In order to implement best practices when dealing with a 'Single Point of Failure', you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? Choose two.",
    answers: [
      { definition: "A. ELB", details: "(Elastic Load Balancer) automatically distributes incoming application traffic across multiple targets, such as EC2 instances. It ensures that traffic is rerouted away from failed instances to healthy ones, minimizing downtime." },
      { definition: "B. Auto Scaling", details: "automatically adjusts the number of EC2 instances based on demand or health checks. It ensures that the system can recover from failures by launching new instances to replace unhealthy ones." },
      { definition: "C. Amazon Athena", details: "is a query service for analyzing data in S3 using SQL. It is not related to automation for detecting or reacting to failures." },
      { definition: "D. ECR", details: "(Elastic Container Registry) is used for storing and managing Docker container images. It does not handle failure detection or response automation." },
      { definition: "E. Amazon EC2", details: "provides compute resources, but it does not inherently provide automation for failure detection or recovery. Services like Auto Scaling and ELB are used in conjunction with EC2 to handle such scenarios." },
    ],
    correct: ["A. ELB", "B. Auto Scaling"]
  },
  {
    id: 140,
    question: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    answers: [
      { definition: "A. Amazon SNS", details: "(Simple Notification Service) is used for message delivery and notifications, not for delivering video content with high transfer speeds." },
      { definition: "B. Amazon Kinesis Video Streams", details: "is used for processing and analyzing video streams, not for global content delivery." },
      { definition: "C. AWS CloudFormation", details: "is a service for creating and managing AWS infrastructure as code, not for content delivery." },
      { definition: "D. Amazon CloudFront", details: "is a global content delivery network (CDN) service that delivers content, such as video, with low latency and high transfer speeds. It caches content at AWS Edge Locations around the world, ensuring that users can access it quickly, no matter their location." },
    ],
    correct: "D. Amazon CloudFront"
  },
  {
    id: 141,
    question: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    answers: [
      { definition: "A. A MySQL database installed on an EC2 instance.", details: "While you can install MySQL on an EC2 instance, backups would need to be managed manually. EC2 does not provide automated database backups natively." },
      { definition: "B. Amazon Aurora", details: "is a relational database service compatible with MySQL and PostgreSQL. It provides automated backups, point-in-time recovery, and replication across multiple Availability Zones. This makes it an ideal choice for a MySQL-based application." },
      { definition: "C. Amazon DynamoDB", details: "is a NoSQL database service. It does not support MySQL and is not suitable for applications requiring a relational database." },
      { definition: "D. Amazon Neptune", details: "is a graph database service, not a relational database like MySQL. It is designed for managing graph-based data and not suited for this use case." },
    ],
    correct: "B. Amazon Aurora"
  },
  {
    id: 142,
    question: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    answers: [
      { definition: "A. AWS CloudFormation", details: "allows AWS architects and developers to manage and provision AWS infrastructure as code. Using CloudFormation, you can define your infrastructure in template files written in JSON or YAML, enabling repeatable and consistent deployments." },
      { definition: "B. AWS Config", details: "is used to track and assess the compliance and configuration of AWS resources, but it does not manage infrastructure as code." },
      { definition: "C. Amazon SES", details: "(Simple Email Service) is a cloud-based service for sending emails, not for managing infrastructure." },
      { definition: "D. Amazon EMR", details: "(Elastic MapReduce) is used for processing big data using frameworks like Apache Hadoop and Spark. It is unrelated to infrastructure as code." },
    ],
    correct: "A. AWS CloudFormation"
  },
  {
    id: 143,
    question: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    answers: [
      { definition: "A. Client-side encryption.", details: "Not correct: Customers handle client-side encryption to secure their data before sending it to AWS." },
      { definition: "B. Configuring infrastructure devices.", details: "Not correct: Customers configure resources like Security Groups, EC2 instances, and VPCs. AWS provides the tools, but customers manage them." },
      { definition: "C. Server-side encryption.", details: "Correct: AWS manages server-side encryption for services like S3, RDS, and Redshift, ensuring data is encrypted at rest." },
      { definition: "D. Filtering traffic with Security Groups.", details: "Not correct: Customers define and manage Security Group rules to allow or deny specific traffic." },
    ],
    correct: "C. Server-side encryption."
  },
  {
    id: 144,
    question: "What does the AWS Health Dashboard provide? Choose two.",
    answers: [
      { definition: "A. Detailed troubleshooting guidance to address AWS events impacting your resources.", details: "Correct: The AWS Health Dashboard provides detailed guidance and recommendations for resolving issues that impact your resources." },
      { definition: "B. Health checks for Auto Scaling instances.", details: "Not correct: Auto Scaling health checks are managed within the Auto Scaling service, not the AWS Health Dashboard." },
      { definition: "C. Recommendations for Cost Optimization.", details: "Not correct: Cost optimization recommendations are provided by AWS Cost Explorer or AWS Trusted Advisor, not the AWS Health Dashboard." },
      { definition: "D. A dashboard detailing vulnerabilities in your applications.", details: "Not correct: The AWS Health Dashboard focuses on AWS service health and resource-specific events, not application vulnerabilities." },
      { definition: "E. Personalized view of AWS service health.", details: "Correct: The dashboard offers a tailored view of the health of AWS services that affect your account or resources." },
    ],
    correct: [
      "A. Detailed troubleshooting guidance to address AWS events impacting your resources.",
      "E. Personalized view of AWS service health."
    ]
  },
  {
    id: 145,
    question: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    answers: [
      { definition: "A. AWS Lambda", details: "is a compute service that runs code in response to events but does not monitor EC2 instances." },
      { definition: "B. AWS Config", details: "tracks configuration changes and compliance, not real-time performance monitoring." },
      { definition: "C. Amazon CloudWatch", details: "monitors the performance of EC2 instances, including CPU utilization, memory usage, and network activity, helping identify performance issues." },
      { definition: "D. AWS CloudTrail", details: "logs API calls and tracks user activity, which is useful for auditing but not for performance monitoring." },
    ],
    correct: "C. Amazon CloudWatch"
  },
  {
    id: 146,
    question: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    answers: [
      { definition: "A. AWS Shield", details: "protects against DDoS attacks but does not provide general infrastructure security recommendations." },
      { definition: "B. AWS Management Console", details: "is a web-based interface for managing AWS resources but does not offer security optimization advice." },
      { definition: "C. AWS Secrets Manager", details: "is used for securely storing and accessing credentials, not for providing security recommendations." },
      { definition: "D. AWS Trusted Advisor", details: "provides recommendations for optimizing infrastructure security, performance, cost, and fault tolerance, helping to enhance application security." },
    ],
    correct: "D. AWS Trusted Advisor"
  },
  {
    id: 147,
    question: "Which of the following is not a benefit of Amazon S3? Choose two.",
    answers: [
      { definition: "A. Amazon S3 provides unlimited storage for any type of data.",
        details: "Not correct: S3 offers virtually unlimited storage for storing any type of data." },
      { definition: "B. Amazon S3 can run any type of application or backend system.",
        details: "Correct: S3 is designed for storage, not for running applications or backend systems." },
      { definition: "C. Amazon S3 stores any number of objects, but with object size limits.",
        details: "Not correct: This is true; while S3 can store unlimited objects, individual objects have size limits (up to 5TB)." },
      { definition: "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
        details: "Correct: S3 scaling is automatic and does not require manual intervention to handle storage or retrieval." },
      { definition: "E. Amazon S3 provides 99.999999999% (11 9's) of data durability.",
        details: "Not correct: This is a core benefit of S3, ensuring high durability of stored data." },
    ],
    correct: [
      "B. Amazon S3 can run any type of application or backend system.",
      "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere."
    ]
  },
  {
    id: 148,
    question: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? Choose two.",
    answers: [
      { definition: "A. Disk disposal.", details: "Not correct: Disk disposal is managed by AWS as part of their physical security and infrastructure responsibilities." },
      { definition: "B. Controlling physical access to compute resources.", details: "Not correct: AWS handles physical access control to data centers as part of its responsibilities." },
      { definition: "C. Patching the Network infrastructure.", details: "Not correct: AWS is responsible for patching the underlying network infrastructure." },
      { definition: "D. Setting password complexity rules.", details: "Customers are responsible for defining and enforcing password policies for their users within their AWS accounts." },
      { definition: "E. Configuring network access rules.", details: "Customers must configure security groups, network ACLs, and other network access rules to secure their applications and data." },
    ],
    correct: ["D. Setting password complexity rules.", "E. Configuring network access rules."]
  },
  {
    id: 149,
    question: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    answers: [
      { definition: "A. Amazon Aurora", details: "is a database service, not a deployment solution for popular technologies like IBM MQ." },
      { definition: "B. Amazon CloudWatch", details: "is a monitoring and observability service, not a deployment solution." },
      { definition: "C. AWS Quick Start reference deployments", details: "provide pre-configured, automated deployment templates to quickly deploy popular technologies like IBM MQ on AWS." },
      { definition: "D. AWS OpsWorks", details: "is a configuration management service for managing applications, but it does not provide pre-configured deployment solutions like Quick Starts." },
    ],
    correct: "C. AWS Quick Start reference deployments"
  },
  {
    id: 150,
    question: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    answers: [
      { definition: "A. Elastic RI", details: "does not exist in AWS." },
      { definition: "B. Premium RI", details: "is not a valid term or feature for Reserved Instances in AWS." },
      { definition: "C. Standard RI", details: "offer the lowest cost but do not allow exchanging for other instance types during the reservation period." },
      { definition: "D. Convertible RI", details: "provide the flexibility to exchange the instance for another instance type, platform, or tenancy during the reservation period, making them suitable for workloads that may change." },
    ],
    correct: "D. Convertible RI"
  }
];
