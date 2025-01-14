export const questionsSetThree = [
  {
    id: 201,
    question: "Where can you store files in AWS? Select two.",
    answers: [
      { definition: "A. Amazon EFS", details: "(Elastic File System) is a fully managed file storage service that can be used with AWS cloud services and on-premises resources. It is designed for use with EC2 instances, making it a suitable choice for storing files." },
      { definition: "B. Amazon SNS", details: "(Simple Notification Service) is a messaging service used for sending notifications and messages, not for storing files. Therefore, this option is not suitable for file storage." },
      { definition: "C. Amazon EBS", details: "(Elastic Block Store) service provides block-level storage that can be attached to EC2 instances. EBS is often used to store data for applications and databases, making it another valid choice for file storage." },
      { definition: "D. Amazon ECS", details: "(Elastic Container Service) service is used for running and managing containerized applications. It does not provide file storage directly, so this option is not suitable for file storage." },
      { definition: "E. Amazon EMR", details: "(Elastic MapReduce) is a cloud big data platform for processing vast amounts of data using frameworks like Apache Hadoop and Spark. While it can handle data, it is not primarily a storage service." },
    ],
    correct: [
      "A. Amazon EFS",
      "C. Amazon EBS"
    ]
  },
  {
    id: 202,
    question: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    answers: [
      { definition: "A. Amazon Simple Queue Service", details: "(SQS) is a fully managed message queuing service that enables decoupled communication between distributed systems. SQS allows you to send, store, and receive messages reliably, making it an ideal choice for this purpose." },
      { definition: "B. AWS Storage Gateway", details: "service is designed to connect on-premises environments with cloud storage. It does not function as a messaging service, so it is not suitable for delivering messages." },
      { definition: "C. Amazon Simple Email Service", details: "(SES) is primarily an email sending service and is not designed for general message queuing or reliable delivery across systems." },
      { definition: "D. Amazon Simple Storage Service", details: "(S3) is an object storage service that is used for storing and retrieving any amount of data, but it is not a messaging service and does not provide message delivery features." },
    ],
    correct: "A. Amazon Simple Queue Service"
  },
  {
    id: 203,
    question: "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    answers: [
      { definition: "A. Pay less as AWS grows.", details: "This statement does not accurately describe any specific payment model related to Amazon EC2." },
      { definition: "B. Pay as you go.", details: "This refers to the on-demand pricing model where customers pay for the compute capacity they use without any long-term commitment. This is not the correct answer." },
      { definition: "C. Pay less by using more.", details: "This phrase generally refers to volume discounts but does not specifically apply to the commitment-based payment model for EC2." },
      { definition: "D. Save when you reserve.", details: "This option accurately describes the concept of Reserved Instances, where customers save money by reserving capacity for a one or three-year term." },
    ],
    correct: "D. Save when you reserve."
  },
  {
    id: 204,
    question: "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    answers: [
      { definition: "A. Right-size before and after migration.", details: "By properly evaluating and adjusting the database instance types and sizes according to the actual needs, the company can optimize its RDS costs effectively." },
      { definition: "B. Use a Multi-Region Active-Passive architecture.", details: "While this architecture can enhance availability and disaster recovery, it may increase costs due to the need for additional resources in multiple regions, which is not the best option for minimizing costs." },
      { definition: "C. Combine On-demand Capacity Reservations with Saving Plans.", details: "This option is complex and may not be necessary for keeping costs to a minimum, as it might lead to over-commitment and costs if not carefully planned." },
      { definition: "D. Use a Multi-Region Active-Active architecture.", details: "Similar to option B, this architecture is more focused on availability and performance than on cost reduction. It typically incurs higher costs due to running multiple active resources across regions." },
    ],
    correct: "A. Right-size before and after migration."
  },
  {
    id: 205,
    question: "What is the primary storage service used by Amazon RDS database instances?",
    answers: [
      { definition: "A. Amazon Glacier", details: "service is designed for long-term archival storage and is not suitable for database operations. Therefore, it is not the correct answer." },
      { definition: "B. Amazon EBS", details: "(Elastic Block Store). Amazon RDS uses Amazon EBS as its primary storage service for database instances. EBS provides block-level storage that is optimized for use with Amazon EC2 and RDS, allowing for low-latency performance and high durability." },
      { definition: "C. Amazon EFS", details: "(Elastic File System) is a managed file storage service for use with AWS cloud services, but it is not the primary storage service for Amazon RDS." },
      { definition: "D. Amazon S3", details: "(Simple Storage Service) is an object storage service used for storing and retrieving any amount of data. It is not directly used as the primary storage for RDS database instances." },
    ],
    correct: "B. Amazon EBS"
  },
  {
    id: 206,
    question: "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    answers: [
      { definition: "A. AWS CodePipeline", details: "is a continuous integration and continuous delivery (CI/CD) service for automating the build, test, and deployment phases of application development. It is not designed for troubleshooting performance or latency issues." },
      { definition: "B. AWS X-Ray", details: "service is specifically designed for debugging and analyzing microservices applications. AWS X-Ray helps you understand the performance of your application by tracing requests as they travel through the various services. It provides insights into latency bottlenecks, errors, and helps visualize service dependencies." },
      { definition: "C. Amazon Inspector", details: "is a security assessment service that helps improve the security and compliance of applications deployed on AWS. It is not focused on performance or latency troubleshooting." },
      { definition: "D. AWS CloudTrail", details: "service provides event history for AWS account activity, allowing you to monitor and log API calls made on your account. While it helps with security and auditing, it does not directly address application performance or latency issues." },
    ],
    correct: "B. AWS X-Ray"
  },
  {
    id: 207,
    question: "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? Select two.",
    answers: [
      { definition: "A. Amazon Redshift", details: "can be configured for high availability and can use snapshots for backups, but it does not inherently provide Multi-AZ fault tolerance as part of its core design." },
      { definition: "B. AWS Snowball", details: "is a physical data transport solution and does not involve cloud services designed for fault tolerance. It is not relevant to Multi-AZ designs." },
      { definition: "C. Amazon Simple Storage Service", details: "(S3) is designed to provide high durability and availability, and it automatically stores data redundantly across multiple devices in multiple Availability Zones. Thus, it has inherent fault tolerance." },
      { definition: "D. Amazon EBS", details: "(Elastic Block Store) provides block-level storage and can be configured for Multi-AZ by using EBS volumes with snapshots or by utilizing Multi-AZ deployments of EC2 instances, but it is not natively Multi-AZ without specific configurations." },
      { definition: "E. Amazon DynamoDB", details: "is a fully managed NoSQL database service that automatically replicates data across multiple Availability Zones within a region, ensuring high availability and fault tolerance." },
    ],
    correct: [
      "C. Amazon Simple Storage Service",
      "E. Amazon DynamoDB"
    ]
  },
  {
    id: 208,
    question: "What are the Amazon RDS features that can be used to improve the availability of your database? Select two.",
    answers: [
      { definition: "A. AWS Regions.", details: "While deploying resources across multiple AWS Regions can enhance availability and disaster recovery, it is not a specific feature of Amazon RDS itself. Instead, it is a broader AWS concept." },
      { definition: "B. Multi-AZ Deployment.", details: "This feature provides high availability by automatically replicating the database to a standby instance in a different Availability Zone (AZ). If the primary instance fails, Amazon RDS automatically switches to the standby, ensuring minimal downtime." },
      { definition: "C. Automatic patching.", details: "This feature helps maintain the database’s security and performance but does not directly improve availability. It ensures the database is up to date, but does not provide redundancy or failover capabilities." },
      { definition: "D. Read Replicas.", details: "Read Replicas can contribute to overall performance, indirectly supporting availability by offloading read operations from the primary instance. However, the primary feature focused on availability is Multi-AZ Deployment." },
      { definition: "E. Edge Locations.", details: "Edge Locations are part of Amazon CloudFront, used for content delivery and caching. They do not contribute to the availability of Amazon RDS databases." },
    ],
    correct: [
      "B. Multi-AZ Deployment.",
      "D. Read Replicas."
    ]
  },
  {
    id: 209,
    question: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    answers: [
      { definition: "A. Replicate the current resources across multiple Availability Zones within the same region.",
        details: "This option enhances availability and fault tolerance within the same region, but it does not address latency for users located far away, such as those in Asia.", },
      { definition: "B. Migrate the application to a hosting provider in Asia.",
        details: "While this could reduce latency by bringing the application physically closer to Asian users, it involves a significant migration effort and could lead to increased operational complexity.", },
      { definition: "C. Recreate the website content.", details: "Simply recreating the website content does not inherently reduce latency. Latency is more about the distance between the user and the server rather than the content itself.", },
      { definition: "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.",
        details: "This is the most effective option for reducing latency. By using Amazon CloudFront, a Content Delivery Network (CDN), content is cached at Edge Locations around the world, including those in Asia. This means that users will access the content from the nearest Edge Location, significantly reducing load times and improving the user experience.", },
    ],
    correct: "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
  },
  {
    id: 210,
    question: "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    answers: [
      { definition: "A. AWS Identity and Access Management", details: "(IAM) service enables organizations to create and manage AWS users and groups and to set permissions that allow or deny access to AWS resources. IAM allows fine-grained control over which AWS products and actions each developer can access, making it the most suitable option for managing user permissions.", },
      { definition: "B. Amazon RDS", details: "(Relational Database Service) is a managed database service that does not provide access control features for managing interactions with AWS products overall.", },
      { definition: "C. Network Access Control Lists", details: "(NACLs) are used to control inbound and outbound traffic at the subnet level within a VPC, but they do not manage permissions for AWS service interactions by individual users.", },
      { definition: "D. Amazon EMR", details: "(Elastic MapReduce) service is focused on processing large amounts of data using frameworks like Hadoop and Spark. It does not manage access control for other AWS products.", },
    ],
    correct: "A. AWS Identity and Access Management"
  },
  {
    id: 211,
    question: "Using Amazon EC2 falls under which of the following cloud computing models?",
    answers: [
      { definition: "A. IaaS & SaaS", details: "suggests that EC2 fits into both Infrastructure as a Service (IaaS) and Software as a Service (SaaS). However, EC2 specifically does not fall under SaaS."},
      { definition: "B. IaaS", details: "- Infrastructure as a Service provides virtualized computing resources over the internet. Amazon EC2 allows users to rent virtual machines and provides the underlying infrastructure, such as servers, networking, and storage, which perfectly aligns with the IaaS model."},
      { definition: "C. SaaS", details: "- Software as a Service refers to software applications that are hosted and managed by a service provider and accessed over the internet. EC2 does not fit this model, as it is not a software application itself."},
      { definition: "D. PaaS", details: "- Platform as a Service provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure. While EC2 can be part of a PaaS solution, it is primarily categorized as IaaS."},
    ],
    correct: "B. IaaS"
  },
  {
    id: 212,
    question: "Which of the below is a best-practice when building applications on AWS?",
    answers: [
      { definition: "A. Strengthen physical security by applying the principle of least privilege.",
        details: "While applying the principle of least privilege is important for security, physical security is primarily managed by AWS in their data centers, and this statement does not directly address best practices for building applications on AWS." },
      { definition: "B. Ensure that the application runs on hardware from trusted vendors.",
        details: "This statement is somewhat relevant but does not specifically apply to the practices recommended by AWS for building applications. The hardware used is largely managed by AWS." },
      { definition: "C. Use IAM policies to maintain performance.",
        details: "IAM (Identity and Access Management) policies are essential for managing permissions and security. However, they are not directly related to maintaining application performance." },
      { definition: "D. Decouple the components of the application so that they run independently.",
        details: "This is a well-known best practice when building applications on AWS. Decoupling components (for example, using microservices architecture) allows for better scalability, flexibility, and resilience. It enables different parts of the application to be managed and scaled independently, improving overall performance and reliability." },
    ],
    correct: "D. Decouple the components of the application so that they run independently."
  },
  {
    id: 213,
    question: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    answers: [
      { definition: "A. Amazon EBS", details: "(Elastic Block Store) provides block-level storage that is primarily used for Amazon EC2 instances. While it is reliable and offers good performance, it is more suited for data that requires frequent access and lower latency, such as databases. It's not ideal for storing large amounts of media files like photos and videos." },
      { definition: "B. Amazon SQS", details: "(Simple Queue Service) is a messaging service that facilitates communication between distributed systems but is not designed for file storage. Therefore, it is not suitable for storing and retrieving photos and videos." },
      { definition: "C. Amazon Instance store", details: "provides temporary storage that is physically attached to the host server where the instance runs. While it offers high performance, the data is lost when the instance is stopped or terminated, making it unsuitable for storing photos and videos that need to be persistent." },
      { definition: "D. Amazon S3", details: "(Simple Storage Service) is an object storage service that is designed for storing and retrieving any amount of data, including large files like photos and videos. It offers high durability, scalability, and availability, making it an excellent choice for media storage. Additionally, S3 supports various storage classes, enabling cost-effective storage options based on access patterns." },
    ],
    correct: "D. Amazon S3"
  },
  {
    id: 214,
    question: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing... Select two.",
    answers: [
      { definition: "A. Active archives.", details: "Amazon Glacier is ideal for storing data that needs to be retained over the long term but is not frequently accessed, making it suitable for active archives. This includes data like historical records or backup data that may be needed occasionally." },
      { definition: "B. Dynamic websites’ assets.", details: "Dynamic websites require assets that are frequently accessed and updated, such as images, scripts, and other media files that change regularly. Since Amazon Glacier is intended for data that is infrequently accessed, it would not be a practical choice for dynamic website assets." },
      { definition: "C. Long-term analytic data.", details: "Data that requires long-term storage for analysis, but is not needed on a regular basis, can also be effectively stored in Amazon Glacier. This includes datasets that might be analyzed over several months or years." },
      { definition: "D. Active databases.", details: "Active databases involve data that is constantly being read from or written to. These databases require quick access for performance reasons. Storing such data in Amazon Glacier would lead to slow retrieval times, making it unsuitable for active database use." },
      { definition: "E. Cached data.", details: "Cached data is typically stored for quick access to improve performance and reduce load times. Since caching involves frequently accessed information, it contradicts the purpose of Amazon Glacier, which is designed for infrequent access and longer retrieval times." },
    ],
    correct: [
      "A. Active archives.",
      "C. Long-term analytic data."
    ]
  },
  {
    id: 215,
    question: "What does Amazon Elastic Beanstalk provide?",
    answers: [
      { definition: "A. A PaaS solution to automate application deployment.",
        details: "Amazon Elastic Beanstalk is a PaaS solution that lets developers focus on coding by automating deployment, including capacity provisioning, load balancing, scaling, health monitoring, and resource management like servers, databases, and networking." },
      { definition: "B. A compute engine for Amazon ECS.",
        details: "This describes Amazon Elastic Container Service (ECS), not Elastic Beanstalk." },
      { definition: "C. A scalable file storage solution for use with AWS and on-premises servers.",
        details: "This refers to Amazon Elastic File System (EFS) or other storage services, not Elastic Beanstalk." },
      { definition: "D. A NoSQL database service.", details: "This describes Amazon DynamoDB or similar services, rather than Elastic Beanstalk." },
    ],
    correct: "A. A PaaS solution to automate application deployment."
  },
  {
    id: 216,
    question: "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    answers: [
      { definition: "A. Amazon Kinesis", details: "is a service for real-time data processing and analytics, not for security assessments." },
      { definition: "B. Security Groups", details: "act as virtual firewalls to control inbound and outbound traffic to EC2 instances, but they do not perform assessments." },
      { definition: "C. Amazon Inspector", details: "is a security assessment service that helps enhance the security and compliance of applications deployed on Amazon EC2. It performs automated assessments by scanning instances for potential vulnerabilities, such as missing patches, insecure configurations, and software-related issues. The service generates detailed reports with findings and recommendations to address identified security risks effectively." },
      { definition: "D. AWS Network Access Control Lists", details: "(NACLs) provide an additional layer of security by controlling traffic at the subnet level, but they do not assess vulnerabilities." },
    ],
    correct: "C. Amazon Inspector",
  },
  {
    id: 217,
    question: "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? Choose two.",
    answers: [
      { definition: "A. Patch management controls.", details: "Incorrect. Customers are responsible for managing patches on their own applications and operating systems." },
      { definition: "B. Database controls.", details: "Incorrect. While AWS provides managed database services, customers are responsible for configuring and securing their databases." },
      { definition: "C. Awareness & Training.", details: "This option refers to the training and awareness programs that organizations must implement for their employees. Customers are responsible for ensuring their staff is educated on security policies and practices; hence, this control is not inherited from AWS but is rather the customer's responsibility." },
      { definition: "D. Environmental controls.", details: "While AWS manages environmental controls, such as temperature and humidity control within data centers, these are part of the physical security aspect. However, it is important to note that customers do not directly manage these but benefit from AWS's management of them." },
      { definition: "E. Physical controls.", details: "Customers fully inherit physical controls such as the security measures at AWS data centers. This includes aspects like access controls, surveillance, and environmental safety." },
    ],
    correct: ["D. Environmental controls.", "E. Physical controls."],
  },
  {
    id: 218,
    question: "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    answers: [
      { definition: "A. Reserved instances - No Upfront.", details: "While this option offers savings over On-Demand pricing, it may not be as cost-effective as the Partial Upfront option." },
      { definition: "B. Reserved instances - Partial Upfront.", details: "Choosing the 'Partial Upfront' reserved instance option means you pay a portion of the cost upfront and the rest over the term. This option usually provides a balance between lower upfront costs and better overall pricing than 'No Upfront' reserved instances." },
      { definition: "C. On-Demand instances.", details: "This pricing model is flexible but typically results in higher costs over time, especially for long-term use." },
      { definition: "D. Spot Instances.", details: "These are often the cheapest but are not suitable for long-term database hosting, as they can be terminated by AWS with little notice." },
    ],
    correct: "B. Reserved instances - Partial Upfront."
  },
  {
    id: 219,
    question: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
    answers: [
      { definition: "A. Elasticity.", details: "This refers to the ability to automatically scale resources up or down based on demand but does not directly address latency issues." },
      { definition: "B. Global reach.", details: "AWS provides a global infrastructure that includes multiple regions and availability zones around the world. This allows you to deploy your applications closer to your users, which can significantly reduce latency. By using services such as Amazon CloudFront (a content delivery network), you can cache content at edge locations closer to users, improving load times and reducing latency." },
      { definition: "C. Data durability.", details: "This pertains to the reliability and protection of data, ensuring it is safely stored, but it does not impact latency." },
      { definition: "D. High availability.", details: "This ensures that the application is consistently operational and accessible, but it also does not directly relate to improving latency for international users." },
    ],
    correct: "B. Global reach."
  },
  {
    id: 220,
    question: "Savings Plans are available for which of the following AWS compute services? Select two.",
    answers: [
      { definition: "A. AWS Batch.", details: "While AWS Batch is a service for running batch computing jobs, it does not directly qualify for Savings Plans." },
      { definition: "B. AWS Outposts.", details: "This service extends AWS infrastructure to on-premises environments and does not include Savings Plans." },
      { definition: "C. Amazon Lightsail.", details: "Although this is a simplified service for easy application hosting, it does not support Savings Plans." },
      { definition: "D. Amazon EC2.", details: "Savings Plans can be applied to Amazon EC2, allowing you to save on the cost of compute capacity. This is beneficial for users who have predictable workloads and can commit to a certain level of usage over a one or three-year term." },
      { definition: "E. AWS Lambda.", details: "Savings Plans also apply to AWS Lambda, which enables you to save on serverless computing costs based on your usage patterns. This is particularly useful for applications with variable workloads that still require some degree of predictability." },
    ],
    correct: [
      "D. Amazon EC2.",
      "E. AWS Lambda."
    ]
  },
  {
    id: 221,
    question: "A company has business-critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    answers: [
      { definition: "A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
        details: "While this can help with content delivery and latency, it does not provide a comprehensive solution for disaster recovery." },
      { definition: "B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
        details: "This improves resilience to localized issues but does not protect against a Region-wide disaster." },
      { definition: "C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
        details: "While backups are important, relying solely on point-in-time backups can lead to data loss and does not ensure immediate availability during a disaster." },
      { definition: "D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.",
        details: "An Active-Active setup means that resources are running simultaneously in multiple AWS Regions. This configuration allows traffic to be balanced across Regions, ensuring that if one Region goes down due to a natural disaster, the other Region can continue to handle requests without interruption. By distributing resources across different geographical locations, the likelihood of all resources being affected by the same disaster is minimized." },
    ],
    correct: "D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
  },
  {
    id: 222,
    question: "Which statement is correct with regards to AWS service limits? Select two.",
    answers: [
      { definition: "A. You can contact AWS support to increase the service limits.",
        details: "AWS allows customers to request an increase in service limits (also known as quotas) for certain services. If you find that your usage is approaching the limits, you can reach out to AWS support to discuss increasing those limits based on your needs." },
      { definition: "B. Each IAM user has the same service limit.",
        details: "Service limits are generally applied at the account level rather than at the IAM user level, meaning that all users under the same account share the same service limits." },
      { definition: "C. There are no service limits on AWS.",
        details: "This statement is incorrect as AWS does impose service limits to help ensure fair usage of resources and maintain system stability." },
      { definition: "D. You can use the AWS Trusted Advisor to monitor your service limits.",
        details: "AWS Trusted Advisor is a service that provides real-time guidance to help you provision your resources following AWS best practices. One of its features includes monitoring service limits, helping you stay informed about your usage and potential limits you may be approaching." },
      { definition: "E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.",
        details: "While AWS may offer notifications for certain services, it is not specifically the Amazon Simple Email Service (SES) that handles these notifications for service limits. Notifications are typically managed through services like AWS CloudWatch or AWS Budgets." },
    ],
    correct: [
      "A. You can contact AWS support to increase the service limits.",
      "D. You can use the AWS Trusted Advisor to monitor your service limits."
    ]
  },
  {
    id: 223,
    question: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    answers: [
      { definition: "A. AWS Console", details: "(AWS Management Console) is a web-based user interface for managing AWS services, but it does not support scripting." },
      { definition: "B. AWS Service Catalog", details: "service allows organizations to create and manage catalogs of IT services but is not focused on script-based management of AWS resources." },
      { definition: "C. AWS OpsWorks", details: "is a configuration management service that helps you manage applications, but it is not primarily a tool for using scripts to manage all AWS services and resources." },
      { definition: "D. AWS CLI", details: "(Command Line Interface) is a unified tool that allows you to manage AWS services through command-line scripts, facilitating automation of tasks. With the AWS CLI, you can easily perform actions like creating EC2 instances and managing S3 buckets, making it an essential resource for developers and system administrators looking to streamline their workflows." },
    ],
    correct: "D. AWS CLI"
  },
  {
    id: 224,
    question: "What are the connectivity options that can be used to build hybrid cloud architectures? Select two.",
    answers: [
      { definition: "A. AWS Artifact", details: "is a service that provides access to compliance reports and security documentation, such as audit reports and certifications, but it does not facilitate connectivity between on-premises environments and AWS." },
      { definition: "B. AWS Cloud9", details: "is a cloud-based integrated development environment (IDE) that allows developers to write, run, and debug code within the browser. While it enhances development workflows, it does not serve as a connectivity option for hybrid cloud architectures." },
      { definition: "C. AWS Direct Connect", details: "provides a dedicated network connection from your on-premises data center to AWS. This option allows for a more consistent network experience and lower latency, making it ideal for high-throughput applications." },
      { definition: "D. AWS CloudTrail", details: "is a service that enables governance, compliance, and operational auditing of your AWS account by logging API calls. Although it helps track changes and monitor activity in your AWS environment, it does not provide connectivity features." },
      { definition: "E. AWS VPN", details: "(Virtual Private Network) establishes a secure connection between your on-premises network and your AWS environment over the internet. This option is useful for extending your network to the cloud securely." },
    ],
    correct: [
      "C. AWS Direct Connect",
      "E. AWS VPN"
    ]
  },
  {
    id: 225,
    question: "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    answers: [
      { definition: "A. AWS EC2 Auto Recovery.", details: "This feature automatically recovers EC2 instances if they become impaired but does not distribute traffic." },
      { definition: "B. AWS Auto Scaling.", details: "While Auto Scaling can automatically adjust the number of EC2 instances based on demand, it does not manage traffic distribution on its own." },
      { definition: "C. AWS Network Load Balancer.", details: "This option is suitable for high-performance TCP/UDP traffic but operates at Layer 4 and is not specifically optimized for HTTP/HTTPS traffic distribution." },
      { definition: "D. AWS Application Load Balancer.", details: "Designed to distribute incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses. It operates at the application layer (Layer 7) of the OSI model, which allows it to make routing decisions based on the content of the HTTP request." },
    ],
    correct: "D. AWS Application Load Balancer."
  },
  {
    id: 226,
    question: "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    answers: [
      { definition: "A. Amazon Neptune", details: "is a graph database service that supports both property graph and RDF graph models but is not MySQL-compatible." },
      { definition: "B. Amazon Aurora", details: "is a MySQL-compatible relational database service designed for high performance and availability, capable of automatically scaling its storage and read capacity based on application needs. This feature allows Aurora to adjust to varying workloads seamlessly, ensuring optimal performance without manual intervention or the need for over-provisioning resources." },
      { definition: "C. Amazon RDS for SQL Server", details: "is a managed relational database service for Microsoft SQL Server, not MySQL-compatible." },
      { definition: "D. Amazon RDS for PostgreSQL", details: "is a managed database service for PostgreSQL, which is also not MySQL-compatible." },
    ],
    correct: "B. Amazon Aurora"
  },
  {
    id: 227,
    question: "Which of the following can help protect your EC2 instances from DDoS attacks? Select two.",
    answers: [
      { definition: "A. AWS CloudHSM", details: "is a hardware security module that provides secure key management and cryptographic operations but does not offer direct protection against DDoS attacks. Its primary function is related to data encryption and security rather than traffic management." },
      { definition: "B. Security Groups", details: "act as virtual firewalls for your EC2 instances, allowing you to define rules that control incoming and outgoing traffic. By configuring security group rules, you can limit traffic to only the necessary ports and IP addresses, thereby reducing the attack surface against DDoS attacks." },
      { definition: "C. AWS Batch", details: "is a service designed for running batch computing jobs at any scale but does not provide security features for protecting EC2 instances. It focuses on job scheduling and resource management rather than network security." },
      { definition: "D. AWS IAM", details: "(Identity and Access Management) is used to manage access permissions and security credentials for AWS resources. While IAM is critical for securing access to AWS services, it does not specifically help protect EC2 instances from DDoS attacks, as it is not concerned with network traffic control." },
      { definition: "E. Network Access Control Lists (Network ACLs)", details: "provide an additional layer of security at the subnet level and can be used to allow or deny traffic to and from subnets within your VPC. By setting up appropriate rules, you can block unwanted traffic patterns that may indicate a DDoS attack, further protecting your EC2 instances." },
    ],
    correct: [
      "B. Security Groups",
      "E. Network Access Control Lists (Network ACLs)"
    ]
  },
  {
    id: 228,
    question: "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    answers: [
      { definition: "A. Amazon Redshift", details: "is a fully managed data warehouse designed for large-scale data analytics, enabling users to run complex queries quickly and efficiently. It is optimized for business intelligence and data analytics workloads, utilizing a columnar storage format and advanced compression techniques to enhance query performance and enable faster data retrieval and analysis. Additionally, Redshift is tailored for online analytical processing (OLAP) and can scale horizontally by adding nodes to the data warehouse cluster." },
      { definition: "B. Amazon Kinesis", details: "is primarily used for real-time data streaming and processing, not for data warehousing." },
      { definition: "C. Amazon DynamoDB", details: "is a fully managed NoSQL database service, designed for high-availability and low-latency data access, but it is not a data warehouse." },
      { definition: "D. Amazon RDS", details: "(Relational Database Service) is a managed relational database service for OLTP (online transaction processing) workloads, which does not focus on the large-scale analytics required for data warehousing." },
    ],
    correct: "A. Amazon Redshift"
  },
  {
    id: 229,
    question: "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    answers: [
      { definition: "A. Application development.", details: "While important, application development costs may not directly influence the TCO comparison between AWS and on-premises since they can apply to both environments equally." },
      { definition: "B. Market research.", details: "This is generally not a cost-related factor in a TCO analysis; it focuses more on understanding the market rather than the operational expenses." },
      { definition: "C. Business analysis.", details: "Similar to market research, business analysis may involve strategic considerations but does not directly pertain to the cost comparison aspect of TCO." },
      { definition: "D. Physical hardware.", details: "In a TCO analysis, the costs associated with physical hardware, such as servers, storage devices, and networking equipment, are critical. When comparing cloud services like AWS with on-premises solutions, it's essential to consider the initial capital expenditure for purchasing hardware, ongoing maintenance costs, and the potential need for upgrades or replacements." },
    ],
    correct: "D. Physical hardware."
  },
  {
    id: 230,
    question: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    answers: [
      { definition: "A. EC2 instances will be billed on one second increments, with a minimum of one minute.",
        details: "AWS bills Linux-based EC2 instances based on actual usage time in one-second increments after the first minute. This means that if you run an EC2 instance for less than one minute, you will still be charged for a full minute, but for any additional seconds, you will only pay for the actual seconds used." },
      { definition: "B. EC2 instances will be billed on one hour increments, with a minimum of one day.",
        details: "Suggests hourly billing with a daily minimum, which is not accurate." },
      { definition: "C. EC2 instances will be billed on one minute increments, with a minimum of one hour.",
        details: "Implies billing by minute with an hourly minimum, which is incorrect." },
      { definition: "D. EC2 instances will be billed on one day increments, with a minimum of one month.",
        details: "States daily billing with a monthly minimum, which also does not reflect AWS's billing practices." },
    ],
    correct: "A. EC2 instances will be billed on one second increments, with a minimum of one minute."
  },
  {
    id: 231,
    question: "Which of the following will impact the price paid for an EC2 instance? Select two.",
    answers: [
      { definition: "A. Instance type.", details: "The instance type determines the hardware specifications, such as CPU, memory, and storage, which significantly influence the pricing of the EC2 instance. Different instance types are priced differently based on their capabilities and intended use cases."},
      { definition: "B. The Availability Zone where the instance is provisioned.", details: "Pricing can vary by Availability Zone within a region. Some zones may have different costs associated with running instances due to factors like demand and resource availability."},
      { definition: "C. Load balancing.", details: "Load balancing does not affect EC2 instance pricing; it has its own cost structure based on usage and the type of load balancer used."},
      { definition: "D. Number of buckets.", details: "The number of Amazon S3 buckets does not impact EC2 pricing. S3 bucket costs are separate from EC2 instance costs, as they pertain to storage rather than compute resources."},
      { definition: "E. Number of private IPs.", details: "The number of private IPs assigned to an instance does not impact its pricing."},
    ],
    correct: [
      "A. Instance type.",
      "B. The Availability Zone where the instance is provisioned."
    ]
  },
  {
    id: 232,
    question: "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    answers: [
      { definition: "A. By creating an AWS Config template from the old instance and launching a new instance from it.",
        details: "AWS Config does not create templates for launching instances; it is used for resource configuration tracking and compliance."},
      { definition: "B. By creating an EBS Snapshot of the old instance.",
        details: "An EBS snapshot captures the state of the EBS volume but does not provide a complete configuration for launching a new EC2 instance on its own."},
      { definition: "C. By installing Aurora on EC2 and launching a new instance from it.",
        details: "This option is not relevant because Amazon Aurora is a managed database service, not a method for replicating EC2 instance configurations."},
      { definition: "D. By creating an AMI from the old instance and launching a new instance from it.",
        details: "An AMI (Amazon Machine Image) captures the configuration, including the operating system, application server, and applications of the existing EC2 instance. This allows the customer to launch new instances with the same settings and software already configured."},
    ],
    correct: "D. By creating an AMI from the old instance and launching a new instance from it."
  },
  {
    id: 233,
    question: "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    answers: [
      { definition: "A. IAM Principals", details: "refer to entities that can perform actions in AWS (like users or roles) but do not enforce restrictions at the account level within AWS Organizations."},
      { definition: "B. AWS Service Control Policies (SCPs)", details: "are a feature of AWS Organizations that enable administrators to manage permissions across all accounts within the organization. They set permission guardrails that dictate what services and actions can be accessed or performed by accounts or organizational units (OUs)."},
      { definition: "C. IAM policies", details: "define permissions for users, groups, and roles within an individual account but do not apply organization-wide restrictions across multiple accounts."},
      { definition: "D. AWS Fargate", details: "is a serverless compute engine for containers and does not relate to managing permissions or restrictions for AWS accounts."},
    ],
    correct: "B. AWS Service Control Policies (SCPs)"
  },
  {
    id: 234,
    question: "Which of the following statements describes the AWS Cloud’s agility?",
    answers: [
      { definition: "A. AWS allows you to host your applications in multiple regions around the world.",
        details: "While this statement is true, it primarily relates to the geographic distribution and redundancy of applications rather than agility."},
      { definition: "B. AWS provides customizable hardware at the lowest possible cost.",
        details: "This statement focuses on cost efficiency and customization but does not directly address agility."},
      { definition: "C. AWS allows you to provision resources in minutes.",
        details: "One of the key aspects of agility in the cloud is the ability to quickly provision and scale resources as needed. With AWS, customers can launch and configure new resources—such as virtual servers, storage, and databases—within minutes, allowing them to respond rapidly to changing business needs and demands."},
      { definition: "D. AWS allows you to pay upfront to reduce costs.",
        details: "This option relates to pricing strategies and does not pertain to the agility or speed of resource provisioning."},
    ],
    correct: "C. AWS allows you to provision resources in minutes."
  },
  {
    id: 235,
    question: "What are the benefits of using the Amazon Relational Database Service? Select two.",
    answers: [
      { definition: "A. Lower administrative burden.", details: "Amazon RDS automates routine database tasks such as backups, patch management, and monitoring, which significantly reduces the administrative overhead for database management. This allows teams to focus more on application development rather than database maintenance."},
      { definition: "B. Complete control over the underlying host.", details: "While RDS provides management of the database environment, users do not have complete control over the underlying host, as it is a managed service."},
      { definition: "C. Resizable compute capacity.", details: "Amazon RDS provides the ability to easily scale the compute resources up or down based on the application’s requirements. This flexibility helps organizations manage their workloads efficiently without significant downtime."},
      { definition: "D. Scales automatically to larger or smaller instance types.", details: "Although RDS allows for easy scaling, it does not automatically change instance types; users must manually adjust settings to scale up or down."},
      { definition: "E. Supports the document and key-value data structure.", details: "Amazon RDS is primarily designed for relational databases and does not inherently support document or key-value data structures, which are more characteristic of NoSQL databases."},
    ],
    correct: [
      "A. Lower administrative burden.",
      "C. Resizable compute capacity."
    ]
  },
  {
    id: 236,
    question: "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    answers: [
      { definition: "A. Internet Gateway", details: "is a component that allows communication between instances in your VPC and the internet, but it does not provide encrypted connections." },
      { definition: "B. AWS IQ", details: "is a service that connects customers with AWS-certified freelancers for help with projects and does not relate to connectivity options." },
      { definition: "C. AWS Direct Connect", details: "provides a dedicated network connection between on-premises and AWS, it does not use IPSec; instead, it connects directly to AWS without using the internet." },
      { definition: "D. AWS Site-to-Site VPN", details: "allows you to create a secure and encrypted connection between your on-premises network and your Amazon Virtual Private Cloud (VPC) using IPSec." },
    ],
    correct: "D. AWS Site-to-Site VPN"
  },
  {
    id: 237,
    question: "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    answers: [
      { definition: "A. Enterprise Support.", details: "While this option also provides 24x7 access to support, it is a higher tier than what the question asks for, making it not the minimum level." },
      { definition: "B. Developer Support.", details: "This support plan does not provide 24x7 access to technical support via phone or chat; it is limited to business hours." },
      { definition: "C. Basic Support.", details: "The Basic Support plan does not include access to technical support engineers at any time; it only offers access to customer service and AWS documentation." },
      { definition: "D. Business Support.", details: "Offers 24x7 access to AWS technical support engineers through phone and chat and includes features such as system architecture guidance, proactive management, and access to the AWS Trusted Advisor for best practice recommendations." },
    ],
    correct: "D. Business Support."
  },
  {
    id: 238,
    question: "Which of the following is used to control network traffic in AWS? Select two.",
    answers: [
      { definition: "A. Network Access Control Lists (NACLs)", details: "provide a layer of security at the subnet level by allowing you to control inbound and outbound traffic to and from subnets in your VPC. They enable you to specify rules that can allow or deny traffic based on IP addresses, protocols, and ports." },
      { definition: "B. Key Pairs", details: "are used for secure SSH access to EC2 instances but do not control network traffic." },
      { definition: "C. Access Keys", details: "are used for programmatic access to AWS services and do not manage or control network traffic." },
      { definition: "D. IAM Policies", details: "control user permissions for accessing AWS services but do not regulate network traffic directly." },
      { definition: "E. Security Groups", details: "act as virtual firewalls for your EC2 instances, controlling inbound and outbound traffic at the instance level. You can define rules to allow specific types of traffic, such as HTTP or SSH, enhancing the security of your resources." },
    ],
    correct: [
      "A. Network Access Control Lists (NACLs)",
      "E. Security Groups"
    ]
  },
  {
    id: 239,
    question: "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    answers: [
      { definition: "A. Reserved instances", details: "require an upfront commitment for a one- or three-year term, making them less flexible and potentially more expensive for short-term or variable workloads." },
      { definition: "B. Spot Instances", details: "allow you to take advantage of unused EC2 capacity at significantly lower prices compared to other instances. Since the application is designed for quick recovery from hardware failures, using Spot Instances is ideal. If an instance is terminated due to pricing changes, the application can simply launch another Spot Instance to continue processing without significant delays." },
      { definition: "C. On-Demand instances", details: "are generally more expensive than Spot Instances for the same capacity." },
      { definition: "D. Dedicated instances", details: "run on hardware that is dedicated to a single customer and are the most expensive option, making them unsuitable for cost-sensitive applications." },
    ],
    correct: "B. Spot Instances"
  },
  {
    id: 240,
    question: "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    answers: [
      { definition: "A. AWS Service Health Dashboard", details: "displays the operational status of AWS services across all regions. It provides real-time information about any service disruptions, outages, or maintenance activities, allowing users to monitor the health of AWS services." },
      { definition: "B. AWS Management Console", details: "is the user interface for managing AWS services but does not provide a comprehensive status of all services across regions." },
      { definition: "C. Amazon CloudWatch", details: "is a monitoring service for AWS resources and applications, but it focuses on resource performance and operational metrics rather than overall service status." },
      { definition: "D. AWS Personal Health Dashboard", details: "provides alerts and remediation guidance when AWS is experiencing events that may impact your specific resources, but it does not give a global view of all AWS services." },
    ],
    correct: "A. AWS Service Health Dashboard"
  },
  {
    id: 241,
    question: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    answers: [
      { definition: "A. AWS Software Development Kit", details: "are collections of libraries that allow developers to interact with AWS services using various programming languages, including Python (Boto3), Java, JavaScript (Node.js), C#, Ruby, and others." },
      { definition: "B. AWS Command Line Interface", details: "(CLI) allows you to interact with AWS services using command-line commands but does not support multiple programming languages as it is a command-line tool." },
      { definition: "C. AWS CodeDeploy", details: "is a deployment service that automates the deployment of applications to various compute services, but it does not provide a method for calling AWS services from programming languages." },
      { definition: "D. AWS Management Console", details: "is a web-based interface for managing AWS resources, not a programming interface for calling services programmatically." },
    ],
    correct: "A. AWS Software Development Kit"
  },
  {
    id: 242,
    question: "Which AWS Service can be used to register a new domain name?",
    answers: [
      { definition: "A. Amazon Personalize", details: "is used for machine learning and personalization of user experiences, not for domain registration." },
      { definition: "B. Amazon Route 53", details: "is a scalable Domain Name System (DNS) web service designed by AWS. It allows you to register new domain names, manage DNS records, and route users to applications effectively." },
      { definition: "C. AWS KMS", details: "(Key Management Service) is focused on encryption and managing cryptographic keys, and is unrelated to domain registration." },
      { definition: "D. AWS Config", details: "provides resource configuration tracking and compliance auditing but does not assist with domain name registration." },
    ],
    correct: "B. Amazon Route 53"
  },
  {
    id: 243,
    question: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction. What are the AWS automation tools that help them deploy their applications faster? Select two.",
    answers: [
      { definition: "A. AWS CloudFormation", details: "allows developers to define and provision AWS infrastructure as code. By using templates, you can automate the deployment of your entire infrastructure, including networks, storage, and compute resources. This automation speeds up the deployment process and reduces the chances of human error." },
      { definition: "B. AWS Migration Hub", details: "helps track the progress of application migrations to AWS but is not primarily focused on speeding up deployments." },
      { definition: "C. AWS IAM", details: "(Identity and Access Management) is essential for managing access and security, but it does not contribute directly to the deployment process." },
      { definition: "D. AWS Elastic Beanstalk", details: "is a platform as a service (PaaS) that simplifies the deployment and management of applications. It automatically handles the deployment, from capacity provisioning, load balancing, and auto-scaling to application health monitoring. Developers can focus on writing code without worrying about the underlying infrastructure, which significantly accelerates the deployment process." },
      { definition: "E. Amazon Macie", details: "is primarily used for data security and privacy, particularly for discovering and protecting sensitive data." },
    ],
    correct: [
      "A. AWS CloudFormation",
      "D. AWS Elastic Beanstalk"
    ]
  },
  {
    id: 244,
    question: "Which AWS service provides cost-optimization recommendations?",
    answers: [
      { definition: "A. AWS Trusted Advisor", details: "provides real-time guidance to help optimize your AWS resources based on best practices, including cost optimization recommendations, identifying underutilized resources, and suggesting ways to reduce expenses, enabling organizations to effectively manage costs and improve efficiency." },
      { definition: "B. AWS Pricing Calculator", details: "helps estimate the cost of AWS services based on your expected usage, but it does not provide recommendations for optimizing costs." },
      { definition: "C. Amazon QuickSight", details: "is a business analytics service that allows you to visualize and analyze data. It is not focused on cost optimization." },
      { definition: "D. AWS X-Ray", details: "helps analyze and debug distributed applications, especially in microservices architectures. It does not offer cost-related insights." },
    ],
    correct: "A. AWS Trusted Advisor"
  },
  {
    id: 245,
    question: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    answers: [
      { definition: "A. VPC Peering", details: "allows direct communication between two VPCs, but it can become complex when managing many VPCs, as each pair requires a separate connection." },
      { definition: "B. AWS Transit Gateway", details: "enables you to connect multiple Virtual Private Clouds (VPCs) and on-premises networks through a central hub, simplifying network architecture by reducing the complexity of VPC peering relationships, while allowing you to scale your network and manage connections across multiple AWS Regions effectively." },
      { definition: "C. Amazon Connect", details: "is a cloud-based contact center service and is not related to VPC connection management." },
      { definition: "D. Security Groups", details: "are used to control inbound and outbound traffic to resources within a VPC but do not facilitate VPC connections." },
    ],
    correct: "B. AWS Transit Gateway"
  },
  {
    id: 246,
    question: "What is one benefit and one drawback of buying a reserved EC2 instance? Select two.",
    answers: [
      { definition: "A. Instances can be shut down by AWS at any time with no notification.",
        details: "This statement is incorrect for reserved instances. AWS does not shut down reserved instances; they are committed resources for the duration of the reservation. However, AWS can terminate on-demand instances in certain situations, but that does not apply to reserved instances." },
      { definition: "B. Reserved instances require at least a one-year pricing commitment.",
        details: "This means that once you purchase a reserved instance, you are committing to pay for it for at least one year, which can be a drawback if your needs change or if you do not end up using the instance as expected." },
      { definition: "C. There is no additional charge for using dedicated instances.",
        details: "This statement is misleading. Dedicated instances run on hardware that's dedicated to a single customer, and while reserved instances can be dedicated, they typically come with additional charges compared to standard instances. You may incur extra costs for the dedicated tenancy." },
      { definition: "D. Reserved instances provide a significant discount compared to on-demand instances.",
        details: "This is a primary advantage of reserved instances, as they offer substantial cost savings (up to 75%) over on-demand pricing when you commit to using the instances for a specified term (typically one or three years)." },
      { definition: "E. Reserved instances are best suited for periodic workloads.",
        details: "This statement is not accurate. Reserved instances are more suited for steady-state workloads that are consistently running, rather than periodic workloads. For workloads that are variable or infrequent, on-demand instances may be more cost-effective." },
    ],
    correct: [
      "B. Reserved instances require at least a one-year pricing commitment.",
      "D. Reserved instances provide a significant discount compared to on-demand instances."
    ]
  },
  {
    id: 247,
    question: "Why does every AWS Region contain multiple Availability Zones?",
    answers: [
      { definition: "A. Multiple Availability Zones allow you to build resilient and highly available architectures.",
        details: "The main reason for having multiple Availability Zones in every AWS Region is to enable the creation of resilient and highly available architectures. This design helps ensure that applications remain operational even in the event of failure in one of the AZs." },
      { definition: "B. Multiple Availability Zones result in lower total cost compared to deploying in a single Availability Zone.",
        details: "This statement is not necessarily true. While spreading resources across multiple AZs may improve resilience, it does not inherently reduce costs and could increase them due to the additional resources required." },
      { definition: "C. Multiple Availability Zones allow for data replication and global reach.",
        details: "This option is partially correct, as data can be replicated across AZs for redundancy, but it does not specifically address the primary reason for having multiple AZs, which is high availability. Global reach is typically achieved through multiple regions rather than just within a single region." },
      { definition: "D. Multiple Availability Zones within a region increase the storage capacity available in that region.",
        details: "This statement is misleading. While having more AZs can allow for more resources to be deployed, the primary purpose of multiple AZs is not to increase storage capacity but to enhance fault tolerance and availability." },
    ],
    correct: "A. Multiple Availability Zones allow you to build resilient and highly available architectures."
  },
  {
    id: 248,
    question: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    answers: [
      { definition: "A. On-Demand Instances.", details: "For running EC2 instances that must always be available for two months, On-Demand Instances are the most cost-effective option, as they provide the necessary flexibility and do not require long-term commitments." },
      { definition: "B. Spot Instances.", details: "Spot Instances are often the most cost-effective option but are not suitable for workloads that must always be available, as they can be interrupted if the spot price exceeds your bid." },
      { definition: "C. Reserved Instances - All Upfront.", details: "While Reserved Instances can provide significant savings for long-term usage (1 or 3 years), they require a commitment that doesn't align with a short-term need of two months." },
      { definition: "D. Reserved Instances - No Upfront.", details: "Similar to the All Upfront option, Reserved Instances generally require a commitment of one year or more, making them less suitable for a two-month requirement." },
    ],
    correct: "A. On-Demand Instances."
  },
  {
    id: 249,
    question: "Which of the following is a benefit of running an application in multiple Availability Zones?",
    answers: [
      { definition: "A. Allows you to exceed AWS service limits.", details: "This statement is incorrect. Running in multiple AZs does not allow you to exceed AWS service limits, as those limits are defined per account regardless of the number of AZs used." },
      { definition: "B. Reduces application response time between servers and global users.", details: "While using multiple AZs can improve availability, it does not inherently reduce response time for global users. Response time can be affected by the geographic distance between users and the nearest AZ." },
      { definition: "C. Increases available compute capacity.", details: "While multiple AZs can allow you to scale your application, the primary benefit is not about increasing compute capacity but rather about providing high availability." },
      { definition: "D. Increases the availability of your application.", details: "The main benefit of running an application in multiple Availability Zones is that it increases the availability of your application, ensuring it remains operational even in the event of an AZ failure." },
    ],
    correct: "D. Increases the availability of your application."
  },
  {
    id: 250,
    question: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    answers: [
      { definition: "A. AWS sells the old devices to other hosting providers.", details: "This is not true, as selling old devices could pose a security risk by potentially exposing customer data." },
      { definition: "B. AWS destroys the old devices in accordance with industry-standard practices.", details: "AWS ensures the security of customer data by destroying old storage devices in compliance with industry-standard practices, preventing any risk of data recovery." },
      { definition: "C. AWS sends the old devices for remanufacturing.", details: "This option is incorrect, as the focus is on secure destruction rather than remanufacturing to ensure data is not recoverable." },
      { definition: "D. AWS stores the old devices in a secure place.", details: "While secure storage may be appropriate for some assets, old storage devices that have reached the end of their useful life are destroyed to prevent any data exposure." },
    ],
    correct: "B. AWS destroys the old devices in accordance with industry-standard practices."
  },
];
