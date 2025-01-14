export const questionsSetFour = [
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
];
