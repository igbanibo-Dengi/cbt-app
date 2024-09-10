export type Question = {
    questionText: string;
    options: string[];
    correctAnswer: string;
};

// export const initialQuestions: Question[] = [
//     {
//         questionText: 'What is the capital of France?',
//         options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
//         correctAnswer: 'Paris',
//     },
//     {
//         questionText: 'Which planet is known as the Red Planet?',
//         options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
//         correctAnswer: 'Mars',
//     },
//     {
//         questionText: 'What is the largest ocean on Earth?',
//         options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//         correctAnswer: 'Pacific Ocean',
//     },
//     {
//         questionText: 'Who wrote "Hamlet"?',
//         options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
//         correctAnswer: 'William Shakespeare',
//     },
// ];

// ===========================================

export const initialQuestions: Question[] = [
    {
        questionText: 'How are target resolution times used in the \'incident management\' practice?',
        options: [
            'They are agreed, documented, and communicated to help set user expectations',
            'They are established, reviewed, and reported to ensure that customers are happy with the service',
            'They are initiated, approved, and managed to ensure that predictable responses are achieved',
            'They are scheduled, assessed and authorized to reduce the risk of service failures'
        ],
        correctAnswer: 'They are agreed, documented, and communicated to help set user expectations'
    },
    {
        questionText: 'Why should some service requests be fulfilled with no additional approvals?',
        options: [
            'To ensure that spending is properly accounted for',
            'To ensure that information security requirements are met',
            'To streamline the fulfilment workflow',
            'To set user expectations for fulfilment times'
        ],
        correctAnswer: 'To streamline the fulfilment workflow'
    },
    {
        questionText: 'What is a set of specialized organizational capabilities for enabling value for customers in the form of services?',
        options: [
            'Service offering',
            'Service provision',
            'Service management',
            'Service consumption'
        ],
        correctAnswer: 'Service management'
    },
    {
        questionText: 'Which gives a user access to a system?',
        options: [
            'Service requirement',
            'Service agreement',
            'Service consumption',
            'Service provision'
        ],
        correctAnswer: 'Service provision'
    },
    {
        questionText: 'Which statement about managing incidents is CORRECT?',
        options: [
            'Low impact incidents should be resolved efficiently, making logging unnecessary',
            'The \'incident management\' practice should use a single process regardless of the impact of the incident',
            'Low impact incidents should be resolved efficiently so the resource required is reduced',
            'Incidents with the lowest impact should be resolved first'
        ],
        correctAnswer: 'Low impact incidents should be resolved efficiently so the resource required is reduced'
    },
    {
        questionText: 'Which statement about the service value chain is CORRECT?',
        options: [
            'The service value chain converts value into demand',
            'Each value chain activity uses different combinations of practices to convert inputs into outputs',
            'Each value chain activity identifies a requirement for resources from an external supplier',
            'The service value chain uses value streams to describe a combination of consumers and providers'
        ],
        correctAnswer: 'Each value chain activity uses different combinations of practices to convert inputs into outputs'
    },
    {
        questionText: 'What describes how components and activities work together to facilitate value creation?',
        options: [
            'The ITIL service value system',
            'The ITIL guiding principles',
            'The four dimensions of service management',
            'A service relationship'
        ],
        correctAnswer: 'The ITIL service value system'
    },
    {
        questionText: 'Which practice involves the management of vulnerabilities that were not identified before the service went live?',
        options: [
            'Service request management',
            'Problem management',
            'Change control',
            'Service level management'
        ],
        correctAnswer: 'Problem management'
    },
    {
        questionText: 'Which statement about the use of measurement in the \'start where you are\' guiding principle is CORRECT?',
        options: [
            'It should always be used to support direct observation',
            'It should always be used instead of direct observation',
            'Measured data is always more accurate than direct observation',
            'The act of measuring always positively impacts results'
        ],
        correctAnswer: 'It should always be used to support direct observation'
    },
    {
        questionText: 'Which ITIL practice recommends performing service reviews to ensure that services continue to meet the needs of the organization?',
        options: [
            'Service desk',
            'Service request management',
            'Service level management',
            'Service configuration management'
        ],
        correctAnswer: 'Service level management'
    },
    {
        questionText: 'What should be considered as part of the \'partners and suppliers\' dimension?',
        options: [
            'The level of integration and formality involved in the relationships between organizations',
            'The activities, workflows, controls and procedures needed to achieve the agreed objectives',
            'The information created, managed and used in the course of service provision and consumption',
            'The required skills and competencies of teams and individual members of the organization'
        ],
        correctAnswer: 'The level of integration and formality involved in the relationships between organizations'
    },
    {
        questionText: 'Which practice makes new services available for use?',
        options: [
            'Change enablement',
            'Release management',
            'Deployment management',
            'IT asset management'
        ],
        correctAnswer: 'Release management'
    },
    {
        questionText: 'Which activity contributes to the \'where are we now?\' step of the \'continual improvement\' model?',
        options: [
            'Executing improvement actions',
            'Performing baseline assessments',
            'Defining the improvement plan',
            'Understanding the business mission'
        ],
        correctAnswer: 'Performing baseline assessments'
    },
    {
        questionText: 'Which guiding principle considers the importance of customer loyalty?',
        options: [
            'Progress iteratively with feedback',
            'Focus on value',
            'Optimize and automate',
            'Start where you are'
        ],
        correctAnswer: 'Focus on value'
    },
    {
        questionText: 'Which is a recommendation of the guiding principle \'think and work holistically\'?',
        options: [
            'Conduct a review of existing service management practices and decide what to keep and what to discard',
            'Review how an improvement initiative can be organized into smaller, manageable sections that can be completed in a timely manner',
            'Review service management practices and remove any unnecessary complexity',
            'Use the four dimensions of service management to ensure coordination of all aspects of an improvement initiative'
        ],
        correctAnswer: 'Use the four dimensions of service management to ensure coordination of all aspects of an improvement initiative'
    },
    {
        questionText: 'Which statement about \'continual improvement\' is CORRECT?',
        options: [
            'All improvement ideas should be logged in a single \'continual improvement register\'',
            'A single team should carry out \'continual improvement\' across the organization',
            '\'Continual improvement\' should have minimal interaction with other practices',
            'Everyone in the organization is responsible for some aspects of \'continual improvement\''
        ],
        correctAnswer: 'Everyone in the organization is responsible for some aspects of \'continual improvement\''
    },
    {
        questionText: 'What impact does automation have on a service desk?',
        options: [
            'Less low level work and a greater ability to focus on user experience',
            'Increased phone contact and a reduced ability to focus on user experience',
            'Ability to work from multiple locations, geographically dispersed',
            'Ability to work from a single centralized location'
        ],
        correctAnswer: 'Less low level work and a greater ability to focus on user experience'
    },
    {
        questionText: 'Identify the missing word(s) in the following sentence: The service desk should be the entry point and single point of contact for the [?] with all of its users.',
        options: [
            'Service consumer',
            'Service provider',
            'Customer',
            'Supplier'
        ],
        correctAnswer: 'Service provider'
    },
    {
        questionText: 'What aspect of \'service level management\' asks service consumers what their work involves and how technology helps them?',
        options: [
            'Customer engagement',
            'Operational metrics',
            'Business metrics',
            'Customer feedback'
        ],
        correctAnswer: 'Customer engagement'
    },
    {
        questionText: 'Which is a result of applying the guiding principle \'progress iteratively with feedback\'?',
        options: [
            'The ability to discover and respond to failure earlier',
            'Standardization of practices and services',
            'Understanding the customer\'s perception of value',
            'Understanding the current state and identifying what can be reused'
        ],
        correctAnswer: 'The ability to discover and respond to failure earlier'
    },
    {
        questionText: 'What can be used to determine if a service is \'fit for purpose\'?',
        options: [
            'Availability',
            'Warranty',
            'Outcome',
            'Utility'
        ],
        correctAnswer: 'Utility'
    },
    {
        questionText: 'In service relationships, what is a benefit of identifying consumer roles?',
        options: [
            'It enables effective stakeholder management',
            'It provides shared service expectations',
            'It removes constraints from the customer',
            'It enables a common definition of value'
        ],
        correctAnswer: 'It enables effective stakeholder management'
    },
    {
        questionText: 'Which is an external input to the service value chain?',
        options: [
            'The \'improve\' value chain activity',
            'An overall plan',
            'Customer requirements',
            'Feedback loops'
        ],
        correctAnswer: 'Customer requirements'
    },
    {
        questionText: 'What term is used to describe whether a service will meet availability, capacity and security requirements?',
        options: [
            'Outcomes',
            'Value',
            'Utility',
            'Warranty'
        ],
        correctAnswer: 'Warranty'
    },
    {
        questionText: 'What is the purpose of the \'incident management\' practice?',
        options: [
            'To minimize the negative impact of incidents by restoring normal service operation as quickly as possible',
            'To capture demand for incident resolution and service requests',
            'To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents',
            'To support the agreed service quality by effective handling of all agreed user-initiated service requests'
        ],
        correctAnswer: 'To minimize the negative impact of incidents by restoring normal service operation as quickly as possible'
    },
    {
        questionText: 'What is defined as an unplanned interruption or reduction in the quality of a service?',
        options: [
            'An incident',
            'A problem',
            'A change',
            'An event'
        ],
        correctAnswer: 'An incident'
    },
    {
        questionText: 'Which ITIL practice has the purpose to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels?',
        options: [
            'Supplier management',
            'Change control',
            'Relationship management',
            'Service desk'
        ],
        correctAnswer: 'Relationship management'
    },
    {
        questionText: 'What can help to reduce resistance to a planned improvement when applying the guiding principle \'collaborate and promote visibility\'?',
        options: [
            'Restricting information about the improvement to essential stakeholders only',
            'Increasing collaboration and visibility for the improvement',
            'Involving customers after all planning has been completed',
            'Engaging every stakeholder group in the same way, with the same communication'
        ],
        correctAnswer: 'Increasing collaboration and visibility for the improvement'
    },
    {
        questionText: 'What varies in size and complexity, and uses functions to achieve its objectives?',
        options: [
            'A risk',
            'An organization',
            'A practice',
            'An outcome'
        ],
        correctAnswer: 'An organization'
    },
    {
        questionText: 'Which practice ensures that any addition, modification, or removal of anything that could have an effect on services is assessed and authorized?',
        options: [
            'Deployment management',
            'Release management',
            'Change control',
            'Service configuration management'
        ],
        correctAnswer: 'Change control'
    },
    {
        questionText: 'Which practice has a purpose that includes managing risks to confidentiality, integrity and availability?',
        options: [
            'Information security management',
            'Continual improvement',
            'Monitoring and event management',
            'Service level management'
        ],
        correctAnswer: 'Information security management'
    },
    {
        questionText: 'Which will help solve incidents more quickly?',
        options: [
            'Target resolution times',
            'Escalating all incidents to support teams',
            'Collaboration between teams',
            'Detailed procedural steps for incident investigation'
        ],
        correctAnswer: 'Collaboration between teams'
    },
    {
        questionText: 'Which is an activity of the \'problem management\' practice?',
        options: [
            'Restoration of normal service operation as quickly as possible',
            'Prioritization of problems based on the risk that they pose',
            'Authorization of changes to resolve the cause of problems',
            'Resolution of incidents in a time that meets customer expectations'
        ],
        correctAnswer: 'Prioritization of problems based on the risk that they pose'
    },
    {
        questionText: 'Which practice is MOST likely to benefit from the use of chatbots?',
        options: [
            'Service level management',
            'Change enablement',
            'Continual improvement',
            'Service desk'
        ],
        correctAnswer: 'Service desk'
    },
    {
        questionText: 'Where are the details of the required performance outcomes of a service defined?',
        options: [
            'Service level agreements',
            'Service requests',
            'Service components',
            'Service offerings'
        ],
        correctAnswer: 'Service level agreements'
    },
    {
        questionText: 'Which value chain activity ensures a shared understanding of the current status and required direction for all products and services?',
        options: [
            'Plan',
            'Improve',
            'Design and transition',
            'Deliver and support'
        ],
        correctAnswer: 'Plan'
    },
    {
        questionText: 'Which practice has the purpose of ensuring that the organization\'s suppliers and their performance are managed appropriately to support the provision of seamless, quality products and services?',
        options: [
            'Release management',
            'Supplier management',
            'Service management',
            'Relationship management'
        ],
        correctAnswer: 'Supplier management'
    },
    {
        questionText: 'Which two practices interact the MOST with the service desk practice?',
        options: [
            'Incident management and service request management',
            'Service request management and deployment management',
            'Deployment management and change enablement',
            'Change enablement and incident management'
        ],
        correctAnswer: 'Incident management and service request management'
    },
    {
        questionText: 'Which is an activity of the \'incident management\' practice?',
        options: [
            'Assessing and prioritizing improvement opportunities',
            'Performing service reviews with customers',
            'Providing good-quality updates when expected',
            'Automating service requests to the greatest degree possible'
        ],
        correctAnswer: 'Providing good-quality updates when expected'
    },
    {
        questionText: 'Identify the missing words in the following sentence: A user is [?] that uses services.',
        options: [
            'an organization',
            'a role',
            'a team',
            'a supplier'
        ],
        correctAnswer: 'a role'
    },
    {
        questionText: 'Which is included in the purpose of the \'change enablement\' practice?',
        options: [
            'Make new and changed services available for use',
            'Ensure that risks have been properly assessed',
            'Record and report selected changes of state',
            'Plan and manage the full lifecycle of all IT assets'
        ],
        correctAnswer: 'Ensure that risks have been properly assessed'
    },
    {
        questionText: 'Which activity is part of the \'continual improvement\' practice?',
        options: [
            'Identifying the cause of incidents and recommending related improvements',
            'Authorizing changes to implement improvements',
            'Logging and managing incidents that result in improvement opportunities',
            'Making business cases for improvement action'
        ],
        correctAnswer: 'Making business cases for improvement action'
    },
    {
        questionText: 'In which step of the \'continual improvement model\' is an improvement plan implemented?',
        options: [
            'What is the vision?',
            'How do we get there?',
            'Take action',
            'Did we get there?'
        ],
        correctAnswer: 'Take action'
    },
    {
        questionText: 'Which is the BEST example of a standard change?',
        options: [
            'The review and authorization of a change requested by a customer',
            'The implementation of a critical software patch in response to a vendor security issue',
            'The installation of a software application in response to a service request',
            'The replacement of a component in response to a major incident'
        ],
        correctAnswer: 'The installation of a software application in response to a service request'
    },
    {
        questionText: 'Which statement about the automation of service requests is CORRECT?',
        options: [
            'Service requests that cannot be automated should be handled as incidents',
            'Service requests and their fulfilment should be automated as much as possible',
            'Service requests that cannot be automated should be handled as problems',
            'Service requests and their fulfilment should be carried out by service desk staff without automation'
        ],
        correctAnswer: 'Service requests and their fulfilment should be automated as much as possible'
    },
    {
        questionText: 'Which can act as an operating model for an organization?',
        options: [
            'The four dimensions of service management',
            'The service value chain',
            'The ITIL guiding principles',
            'Continual improvement'
        ],
        correctAnswer: 'The service value chain'
    },
    {
        questionText: 'Which practice recommends the use of event-based surveys to gather feedback from customers?',
        options: [
            'Service level management',
            'Change enablement',
            'Service request management',
            'Problem management'
        ],
        correctAnswer: 'Service level management'
    },
    {
        questionText: 'Which statement about change authorities is CORRECT?',
        options: [
            'Change authorities are only required for authorizing emergency changes',
            'Change authorities are assigned when each change is deployed',
            'Change authorities are only required for authorizing normal changes',
            'Change authorities are assigned for each type of change and change model'
        ],
        correctAnswer: 'Change authorities are assigned for each type of change and change model'
    },
    {
        questionText: 'Which practice improves customer and user satisfaction by reducing the negative impact of service interruptions?',
        options: [
            'Service request management',
            'Service level management',
            'Incident management',
            'Change enablement'
        ],
        correctAnswer: 'Incident management'
    },
    {
        questionText: 'Which will NOT be handled as a service request?',
        options: [
            'The degradation of a service',
            'The replacement of a toner cartridge',
            'The provision of a laptop',
            'A complaint about a support team'
        ],
        correctAnswer: 'The degradation of a service'
    },
    {
        questionText: 'A service offering may include goods, access to resources, and service actions. Which is an example of a service action?',
        options: [
            'A mobile phone enables a user to work remotely',
            'A password allows a user connect to a WiFi network',
            'A license allows a user to install a software product',
            'A service desk agent provides support to a user'
        ],
        correctAnswer: 'A service desk agent provides support to a user'
    },
    {
        questionText: 'Which describes a CORRECT approach to change authorization?',
        options: [
            'Changes included in the change schedule are pre-authorized and do not need additional authorization',
            'Normal changes should be assessed and authorized before they are deployed',
            'Emergency changes should be authorized by as many people as possible to reduce risk',
            'Normal changes are typically implemented as service requests and authorized by the service desk'
        ],
        correctAnswer: 'Normal changes should be assessed and authorized before they are deployed'
    },
    {
        questionText: 'Which statement about a service value stream is CORRECT?',
        options: [
            'It uses prescriptive inputs and outputs',
            'It is a value chain activity',
            'It integrates practices for a specific scenario',
            'It is used to provide governance'
        ],
        correctAnswer: 'It integrates practices for a specific scenario'
    },
    {
        questionText: 'Which statement about outputs is CORRECT?',
        options: [
            'They consist of several outcomes',
            'They capture customer demand for services',
            'They contribute to the achievement of outcomes',
            'They describe how the service performs'
        ],
        correctAnswer: 'They contribute to the achievement of outcomes'
    },
    {
        questionText: 'Which is an example of a business related measurement?',
        options: [
            'The number of passengers checked in',
            'The average time to respond to change requests',
            'The average resolution time for incidents',
            'The number of problems resolved'
        ],
        correctAnswer: 'The number of passengers checked in'
    },
    {
        questionText: 'Which BEST describes the purpose of the \'improve\' value chain activity?',
        options: [
            'To organize a major improvement initiative into several smaller initiatives',
            'To make new and improved services and features available for use',
            'To ensure a shared understanding of the vision and improvement direction for all products and services',
            'To continually improve all products and services across all value chain activities'
        ],
        correctAnswer: 'To continually improve all products and services across all value chain activities'
    },
    {
        questionText: 'Which includes governance, management practices, and continual improvement?',
        options: [
            'The service value system',
            'The \'deliver and support\' value chain activity',
            'The \'focus on value\' guiding principle',
            'The \'value stream and processes\' dimension'
        ],
        correctAnswer: 'The service value system'
    },
    {
        questionText: 'What is the definition of a problem?',
        options: [
            'An unplanned interruption to a service, or reduction in the quality of a service',
            'A cause, or potential cause, of one or more incidents',
            'An incident for which a full resolution is not yet available',
            'Any change of state that has significance for the management of a configuration item (CI)'
        ],
        correctAnswer: 'A cause, or potential cause, of one or more incidents'
    },
    {
        questionText: 'Which practice provides a communications point for users to report operational issues, queries and requests?',
        options: [
            'Incident management',
            'Continual improvement',
            'Service desk',
            'Relationship management'
        ],
        correctAnswer: 'Service desk'
    },

    {
        questionText: 'Which dimension is MOST concerned with skills, competencies, roles and responsibilities?',
        options: [
            'Organizations and people',
            'Information and technology',
            'Partners and suppliers',
            'Value streams and processes'
        ],
        correctAnswer: 'Organizations and people'
    },
    {
        questionText: 'An organization asks a stakeholder to review a planned change. Which guiding principle does this demonstrate?',
        options: [
            'Collaborate and promote visibility',
            'Start where you are',
            'Focus on value',
            'Keep it simple and practical'
        ],
        correctAnswer: 'Collaborate and promote visibility'
    },
    {
        questionText: 'Which practice has a strong influence on the user experience and perception of the service provider?',
        options: [
            'Service desk',
            'Change enablement',
            'Service level management',
            'Supplier management'
        ],
        correctAnswer: 'Service desk'
    },
    {
        questionText: 'Which statement about service requests is CORRECT?',
        options: [
            'Complex service requests should be dealt with as normal changes',
            'Service requests that require simple workflows should be dealt with as incidents',
            'Service requests require workflows that should use manual procedures and avoid automation',
            'Service requests are usually formalized using standard procedures for initiation, approval and fulfillment'
        ],
        correctAnswer: 'Service requests are usually formalized using standard procedures for initiation, approval and fulfillment'
    },
    {
        questionText: 'Which practice is responsible for moving new or changed components to live or other environments?',
        options: [
            'Release management',
            'Deployment management',
            'Change enablement',
            'Supplier management'
        ],
        correctAnswer: 'Deployment management'
    },
    {
        questionText: 'Which dimension focuses on relationships with other organizations that are involved in the design, development, deployment and delivery of services?',
        options: [
            'Organizations and people',
            'Information and technology',
            'Partners and suppliers',
            'Value streams and processes'
        ],
        correctAnswer: 'Partners and suppliers'
    },
    {
        questionText: 'Which of these activities is carried out as part of "problem management"?',
        options: [
            'Creating incident records',
            'Diagnosing and resolving incidents',
            'Escalating incidents to a support team for resolution',
            'Trend analysis of incident records'
        ],
        correctAnswer: 'Trend analysis of incident records'
    },

    {
        questionText: 'What must always be done before an activity is automated?',
        options: [
            'Check that the activity has already been optimized',
            'Check that suitable new technology has been purchased',
            'Ensure that DevOps has been successfully implemented',
            'Ensure the solution removes the need for human intervention'
        ],
        correctAnswer: 'Check that the activity has already been optimized'
    },
    {
        questionText: 'What is a change schedule PRIMARILY used for?',
        options: [
            'To help plan emergency changes',
            'To help authorize standard changes',
            'To help assign a change authority',
            'To help manage normal changes'
        ],
        correctAnswer: 'To help manage normal changes'
    },
    {
        questionText: 'Which role approves the cost of services?',
        options: [
            'User',
            'Change authority',
            'Sponsor',
            'Customer'
        ],
        correctAnswer: 'Sponsor'
    },
    {
        questionText: 'What actions does a service desk take for all issues, queries and requests that are reported to them?',
        options: [
            'Schedule, assess, authorize',
            'Diagnose, investigate, resolve',
            'Initiate, approve, fulfil',
            'Acknowledge, classify, own'
        ],
        correctAnswer: 'Acknowledge, classify, own'
    },
    {
        questionText: 'Which describes the utility of a service?',
        options: [
            'A service that is fit for use',
            'A service that meets its service level targets',
            'A service that increases constraints on the consumer',
            'A service that supports the performance of the consumer'
        ],
        correctAnswer: 'A service that supports the performance of the consumer'
    },
    {
        questionText: 'Which is included in the purpose of the \'service level management\' practice?',
        options: [
            'To maximize the number of successful service and product changes',
            'To ensure accurate information about the configuration of services is available',
            'To set clear business-based targets for service levels',
            'To ensure that suppliers and their performance are managed appropriately'
        ],
        correctAnswer: 'To set clear business-based targets for service levels'
    },
    {
        questionText: 'Which usually requires a team of representatives from many stakeholder groups?',
        options: [
            'Fulfilling a service request',
            'Authorizing an emergency change',
            'Logging a new problem',
            'Investigating a major incident'
        ],
        correctAnswer: 'Investigating a major incident'
    },
    {
        questionText: 'Which value chain activity ensures that service components meet agreed specifications?',
        options: [
            'Plan',
            'Design and transition',
            'Obtain/build',
            'Deliver and support'
        ],
        correctAnswer: 'Obtain/build'
    },
    {
        questionText: 'Which value chain activity ensures that service components meet agreed specifications?',
        options: [
            'Plan',
            'Design and transition',
            'Obtain/build',
            'Deliver and support'
        ],
        correctAnswer: 'Obtain/build'
    },
    {
        questionText: 'Which practice needs people who understand complex systems and have creative and analytical skills?',
        options: [
            'Change enablement',
            'Service level management',
            'Service request management',
            'Problem management'
        ],
        correctAnswer: 'Problem management'
    },
    {
        questionText: 'What is the definition of a known error?',
        options: [
            'An unplanned interruption to a service, or reduction in the quality of a service',
            'A cause, or potential cause, of one or more incidents',
            'A problem that has been analyzed and has not been resolved',
            'Any change of state that has significance for the management of a service or other configuration item (CI)'
        ],
        correctAnswer: 'A problem that has been analyzed and has not been resolved'
    },
    {
        questionText: 'What are typically recognized through notifications created by an IT service, CI or monitoring tool?',
        options: [
            'Incidents',
            'Problems',
            'Events',
            'Requests'
        ],
        correctAnswer: 'Events'
    },
    {
        questionText: 'Which dimension considers data security and privacy?',
        options: [
            'Organizations and people',
            'Information and technology',
            'Partners and suppliers',
            'Value streams and processes'
        ],
        correctAnswer: 'Information and technology'
    },
    {
        questionText: 'Which term relates to service levels aligned with the needs of service consumers?',
        options: [
            'Service management',
            'Warranty',
            'Cost',
            'Utility'
        ],
        correctAnswer: 'Warranty'
    },
    {
        questionText: 'Which directly assists with the diagnosis and resolution of simple incidents?',
        options: [
            'Scripts for collecting user information',
            'Use of shift working patterns',
            'Fulfilment of service requests',
            'Creation of a temporary team'
        ],
        correctAnswer: 'Scripts for collecting user information'
    },
    {
        questionText: 'What are guiding principles?',
        options: [
            'A set of interconnected activities that help an organization deliver a valuable service',
            'A description of one or more services that help address the needs of a target consumer group',
            'A set of specialized organizational capabilities for enabling value for customers',
            'Recommendations that help an organization when adopting a service management approach'
        ],
        correctAnswer: 'Recommendations that help an organization when adopting a service management approach'
    },
    {
        questionText: 'Which approach is CORRECT when applying the guiding principle "keep it simple and practical"?',
        options: [
            'Only add controls and metrics when they are needed',
            'Design controls and metrics first, then remove those not adding value',
            'Design controls and metrics and add them individually until all are implemented',
            'Only add controls and metrics that are required for compliance'
        ],
        correctAnswer: 'Only add controls and metrics when they are needed'
    },
    {
        questionText: 'What is the purpose of the "problem management" practice?',
        options: [
            'To protect the information needed by the organization to conduct its business',
            'To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors',
            'To align the organization\'s practices and services with changing business needs through the ongoing identification and improvement of services',
            'To minimize the negative impact of incidents by restoring normal service operation as quickly as possible'
        ],
        correctAnswer: 'To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors'
    },
    {
        questionText: 'Which practice forms a link between the service provider and the users of services?',
        options: [
            'Change enablement',
            'Service level management',
            'Problem management',
            'Service desk'
        ],
        correctAnswer: 'Service desk'
    },
    {
        questionText: 'Which is a purpose of release management?',
        options: [
            'To protect the organization\'s information',
            'To handle user-initiated service requests',
            'To make new and changed services available for use',
            'To move hardware and software to live environments'
        ],
        correctAnswer: 'To make new and changed services available for use'
    },
    {
        questionText: 'What is recommended by the guiding principle \'progress iteratively with feedback\'?',
        options: [
            'A current state assessment that is carried out at the start of an improvement initiative',
            'The identification of all interested parties at the start of an improvement initiative',
            'An improvement initiative that is broken into a number of manageable sections',
            'An assessment of how all the parts of an organization will affect an improvement initiative'
        ],
        correctAnswer: 'An improvement initiative that is broken into a number of manageable sections'
    },
    {
        questionText: "What is recommended by the guiding principle 'progress iteratively with feedback'?",
        options: [
            "A current state assessment that is carried out at the start of an improvement initiative",
            "The identification of all interested parties at the start of an improvement initiative",
            "An improvement initiative that is broken into a number of manageable sections",
            "An assessment of how all the parts of an organization will affect an improvement initiative"
        ],
        correctAnswer: "An improvement initiative that is broken into a number of manageable sections"
    },
    {
        questionText: "Which statement about the 'change enablement' practice is CORRECT?",
        options: [
            "Service requests are usually normal changes that can be implemented quickly without authorization",
            "Emergency changes are changes that must be fully tested and fully documented prior to implementation",
            "Standard changes are changes that need to be scheduled, assessed and authorized following a standard process",
            "Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
        ],
        correctAnswer: "Emergency changes are changes that must be implemented as soon as possible and therefore authorization is expedited"
    },
    {
        questionText: "Which is a key activity carried out in the 'did we get there?' step of the 'continual improvement' model?",
        options: [
            "Define measurable targets",
            "Perform baseline assessments",
            "Execute improvement actions",
            "Evaluate measurements and metrics"
        ],
        correctAnswer: "Evaluate measurements and metrics"
    },
    {
        questionText: "What can a service remove from the consumer and impose on the consumer?",
        options: [
            "Utility",
            "Asset",
            "Cost",
            "Outcome"
        ],
        correctAnswer: "Cost"
    },
    {
        questionText: "What does 'change enablement' PRIMARILY focus on?",
        options: [
            "Changes to service levels",
            "Changes to products and services",
            "Changes to organizational structure",
            "Changes to skills and competencies"
        ],
        correctAnswer: "Changes to products and services"
    },
    {
        questionText: "Which is handled as a service request?",
        options: [
            "An investigation to identify the cause of an incident",
            "A compliment about an IT support team",
            "The failure of an IT service",
            "An emergency change to implement a security patch"
        ],
        correctAnswer: "A compliment about an IT support team"
    },
    {
        questionText: "Which is a key requirement for a successful service level agreement (SLA)?",
        options: [
            "Using individual metrics that relate to the service catalogue",
            "Using bundled metrics to relate performance to outcomes",
            "Using single-system-based metrics that relate to outputs",
            "Using an agreement between the service provider and service supplier"
        ],
        correctAnswer: "Using bundled metrics to relate performance to outcomes"
    },

    {
        questionText: "Which is considered by the 'partners and suppliers' dimension?",
        options: [
            "Using artificial intelligence",
            "Defining controls and procedures",
            "Using formal roles and responsibilities",
            "Working with an integrator to manage relationships"
        ],
        correctAnswer: "Working with an integrator to manage relationships"
    },
    {
        questionText: "Which practice recommends using tools for collaboration and the automated matching of symptoms?",
        options: [
            "Problem management",
            "Service level management",
            "Incident management",
            "Service request management"
        ],
        correctAnswer: "Incident management"
    },
    {
        questionText: "Which practice would help a user gain access to an application that they need to use?",
        options: [
            "Service configuration management",
            "Change enablement",
            "Service request management",
            "Service level management"
        ],
        correctAnswer: "Service request management"
    },
    {
        questionText: "What is used to link activities within the service value chain?",
        options: [
            "Service level agreements",
            "Inputs, outputs and triggers",
            "Opportunity, demand and value",
            "Service desk"
        ],
        correctAnswer: "Inputs, outputs and triggers"
    },
    {
        questionText: "Which two practices use workarounds?",
        options: [
            "Change enablement and continual improvement",
            "Change enablement and problem management",
            "Problem management and incident management",
            "Incident management and continual improvement"
        ],
        correctAnswer: "Problem management and incident management"
    },
    {
        questionText: "Which is included in the purpose of the 'deliver and support' value chain activity?",
        options: [
            "Meeting stakeholder expectations for time to market",
            "Understanding the organization's service vision",
            "Understanding stakeholder needs",
            "Providing services to agreed specifications"
        ],
        correctAnswer: "Providing services to agreed specifications"
    },
    {
        questionText: "What is an incident?",
        options: [
            "The planned removal of an item that might affect a service",
            "A result enabled by one or more outputs",
            "A possible future event that could cause harm",
            "A service interruption resolved by the use of self-help tools"
        ],
        correctAnswer: "A service interruption resolved by the use of self-help tools"
    },
    {
        questionText: "What is defined as a change of state that has significance for the management of an IT service?",
        options: [
            "Event",
            "Incident",
            "Problem",
            "Known error"
        ],
        correctAnswer: "Event"
    },
    {
        questionText: "Which dimension includes the knowledge needed for the management of services?",
        options: [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        correctAnswer: "Information and technology"
    },
    {
        questionText: "What is the PRIMARY use of a change schedule?",
        options: [
            "To support the 'incident management' practice and improvement planning",
            "To manage emergency changes",
            "To plan changes and help avoid conflicts",
            "To manage standard changes"
        ],
        correctAnswer: "To plan changes and help avoid conflicts"
    },
    {
        questionText: "What is the PRIMARY use of a change schedule?",
        options: [
            "To support the 'incident management' practice and improvement planning",
            "To manage emergency changes",
            "To plan changes and help avoid conflicts",
            "To manage standard changes"
        ],
        correctAnswer: "To plan changes and help avoid conflicts"
    },
    {
        questionText: "Which guiding principle helps to ensure that each improvement effort has more focus and is easier to maintain?",
        options: [
            "Start where you are",
            "Collaborate and promote visibility",
            "Progress iteratively with feedback",
            "Think and work holistically"
        ],
        correctAnswer: "Progress iteratively with feedback"
    },
    {
        questionText: "What is important for a 'continual improvement register' (CIR)?",
        options: [
            "Improvement ideas are documented, assessed and prioritized",
            "Improvement ideas from many sources are kept in a single CIR",
            "Improvement ideas that are not being actioned immediately are removed from the CIR",
            "Improvement ideas are tested, funded and agreed"
        ],
        correctAnswer: "Improvement ideas are documented, assessed and prioritized"
    },
    {
        questionText: "What describes the steps needed to create and deliver a specific service to a consumer?",
        options: [
            "Service management",
            "Practices",
            "A value stream",
            "Service level management"
        ],
        correctAnswer: "A value stream"
    },
    {
        questionText: "Which helps to manage an incident when it is unclear which support team should be working on the incident?",
        options: [
            "Disaster recovery plans",
            "Swarming",
            "Target resolution times",
            "Self-help"
        ],
        correctAnswer: "Swarming"
    },
    {
        questionText: "Which statement about the 'continual improvement' practice is CORRECT?",
        options: [
            "Continual improvement participation should be limited to a small dedicated team",
            "It is the role of senior management to authorize improvement initiatives",
            "Training should be provided to those involved in continual improvement",
            "A single continual improvement register should be maintained by senior management"
        ],
        correctAnswer: "It is the role of senior management to authorize improvement initiatives"
    },
    {
        questionText: "Which does the ITIL service value system discourage?",
        options: [
            "Coordinated authorities and responsibilities",
            "Organizational silos",
            "Interfaces among practices",
            "Organizational agility"
        ],
        correctAnswer: "Organizational silos"
    },
    {
        questionText: "An SLA is a service level agreement. Which describes the 'watermelon SLA' effect?",
        options: [
            "A single SLA defines target service levels for multiple customers, so every customer sees reports about other customers' experiences",
            "The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied",
            "SLA targets change very frequently, so that each report includes new measures and trends cannot be analyzed",
            "Introducing SLAs for a service enables customers to see that the service provider is doing a really good job, so this improves satisfaction"
        ],
        correctAnswer: "The metrics in an SLA are focused on internal measures, so that reports show everything is good, while the customer is not satisfied"
    },
    {
        questionText: "Which practice includes conducting regular reviews to ensure that services are still appropriate and relevant?",
        options: [
            "Service level management",
            "Service desk",
            "Continual improvement",
            "Change enablement"
        ],
        correctAnswer: "Service level management"
    },
    {
        questionText: "What is required by all service desk staff?",
        options: [
            "Excellent technical knowledge",
            "Root cause analysis skills",
            "Demonstration of emotional intelligence",
            "Knowledge of telephony technology"
        ],
        correctAnswer: "Demonstration of emotional intelligence"
    },
    {
        questionText: "Which practice establishes a channel between the service provider and its users?",
        options: [
            "Relationship management",
            "Change enablement",
            "Supplier management",
            "Service desk"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "Which practice includes the use of approaches such as Lean, Agile and DevOps with the aim of facilitating a greater amount of change at a quicker rate?",
        options: [
            "Service desk",
            "Monitoring and event management",
            "Service level management",
            "Continual improvement"
        ],
        correctAnswer: "Continual improvement"
    },
    {
        questionText: "Which practice has a purpose that includes maximizing success by ensuring that risks have been properly assessed?",
        options: [
            "Relationship management",
            "Change enablement",
            "Release management",
            "Monitoring and event management"
        ],
        correctAnswer: "Change enablement"
    },
    {
        questionText: "Which practice provides users with a way to get various requests arranged, explained and coordinated?",
        options: [
            "Service level management",
            "Relationship management",
            "Continual improvement",
            "Service desk"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "Which helps to streamline the fulfilment of service requests?",
        options: [
            "Understanding which service requests can be accomplished with limited approvals",
            "Creating new workflows for every service request",
            "Separating requests relating to service failures from the degradation of services",
            "Eliminating service requests which have complex workflows"
        ],
        correctAnswer: "Understanding which service requests can be accomplished with limited approvals"
    },
    {
        questionText: "Which statement about outcomes is CORRECT?",
        options: [
            "They are deliverables provided to service consumers",
            "They allow service consumers to achieve a desired result",
            "They provide products to service providers based on outputs",
            "They co-create value for service providers by reducing costs and risks"
        ],
        correctAnswer: "They allow service consumers to achieve a desired result"
    },
    {
        questionText: "Which guiding principle says that services and processes should NOT provide a solution for every exception?",
        options: [
            "Keep it simple and practical",
            "Collaborate and promote visibility",
            "Think and work holistically",
            "Optimize and automate"
        ],
        correctAnswer: "Keep it simple and practical"
    },
    {
        questionText: "Identify the missing word in the following sentence. The purpose of the 'supplier management' practice is to ensure that the organization's suppliers and their performances are [?] appropriately to support the seamless provision of quality products and services.",
        options: [
            "measured",
            "rewarded",
            "managed",
            "defined"
        ],
        correctAnswer: "managed"
    },
    {
        questionText: "Identify the missing words in the following sentence. The purpose of the service configuration management practice is to ensure that accurate and reliable information about the [?], and the CIs that support them, is available when and where it is needed.",
        options: [
            "relationships with suppliers",
            "configuration of services",
            "skills of people",
            "authorization of changes"
        ],
        correctAnswer: "configuration of services"
    },
    {
        questionText: "Which practice requires skills and competencies related to business analysis, supplier management and relationship management?",
        options: [
            "Incident management",
            "Monitoring and event management",
            "Service level management",
            "IT asset management"
        ],
        correctAnswer: "Service level management"
    },
    {
        questionText: "When should a workaround be created?",
        options: [
            "As soon as possible, once the incident is logged",
            "After the resolution of a problem",
            "When a problem cannot be resolved quickly",
            "When a potential permanent solution has been identified"
        ],
        correctAnswer: "When a problem cannot be resolved quickly"
    },
    {
        questionText: "What is a configuration item?",
        options: [
            "Any financially valuable component that can contribute to the delivery of an IT product or service",
            "Any change of state that has significance for the management of a service",
            "Any component that needs to be managed in order to deliver an IT service",
            "A problem that has been analyzed but has not been resolved"
        ],
        correctAnswer: "Any component that needs to be managed in order to deliver an IT service"
    },
    {
        questionText: "Identify the missing words in the following sentence. When an organization has decided to improve a service, it should start by considering [?].",
        options: [
            "existing information",
            "new methods",
            "additional measurements",
            "revised processes"
        ],
        correctAnswer: "existing information"
    },
    {
        questionText: "Which dimension of service management considers the workflows and controls needed to deliver services?",
        options: [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        correctAnswer: "Value streams and processes"
    },
    {
        questionText: "Which guiding principle considers how the steps of a process can be performed as efficiently as possible?",
        options: [
            "Focus on value",
            "Start where you are",
            "Think and work holistically",
            "Optimize and automate"
        ],
        correctAnswer: "Optimize and automate"
    },
    {
        questionText: "Which statement about the 'incident management' practice is CORRECT?",
        options: [
            "It identifies the cause of major incidents",
            "It authorizes changes to resolve incidents",
            "It maintains detailed procedures for diagnosing incidents",
            "It resolves the highest impact incidents first"
        ],
        correctAnswer: "It resolves the highest impact incidents first"
    },
    {
        questionText: "How should an organization prioritize incidents?",
        options: [
            "Ask the user for their preferred resolution timeframe",
            "Assess the availability of the appropriate support team",
            "Use an agreed classification which is based on the business impact of the incident",
            "Create an order of incidents based on the dates and times when they were logged"
        ],
        correctAnswer: "Use an agreed classification which is based on the business impact of the incident"
    },
    {
        questionText: "Which is a purpose of the 'relationship management' practice?",
        options: [
            "To systematically observe services and service components",
            "To protect the information needed by the organization to conduct its business",
            "To be the entry point and single point of contact for the service provider with all of its users",
            "To identify, analyze, monitor, and continually improve links with stakeholders"
        ],
        correctAnswer: "To identify, analyze, monitor, and continually improve links with stakeholders"
    },
    {
        questionText: "Which statement about problems is CORRECT?",
        options: [
            "Problems are not related to incidents",
            "Problems must be resolved quickly in order to restore normal business activity",
            "Problem analysis should focus on one of the four dimensions to achieve a fast diagnosis",
            "Problem prioritization involves risk assessment"
        ],
        correctAnswer: "Problem prioritization involves risk assessment"
    },
    {
        questionText: "Which is a risk that might be removed from a service consumer by an IT service?",
        options: [
            "Service provider ceasing to trade",
            "Security breach",
            "Failure of server hardware",
            "Cost of purchasing servers"
        ],
        correctAnswer: "Failure of server hardware"
    },
    {
        questionText: "Which is one of the MAIN concerns of the 'design and transition' value chain activity?",
        options: [
            "Understanding the organization's vision",
            "Understanding stakeholder needs",
            "Meeting stakeholder expectations",
            "Ensuring service components are available"
        ],
        correctAnswer: "Meeting stakeholder expectations"
    },
    {
        questionText: "Which should be handled by 'service request management'?",
        options: [
            "A request to implement a security patch",
            "A request to provide a laptop",
            "A request to resolve an error in a service",
            "A request to change a target in a service level agreement"
        ],
        correctAnswer: "A request to provide a laptop"
    },
    {
        questionText: "What can be described as an operating model for the creation and management of products and services?",
        options: [
            "Governance",
            "Service value chain",
            "Guiding principles",
            "Practices"
        ],
        correctAnswer: "Service value chain"
    },
    {
        questionText: "Which action is performed by a service provider?",
        options: [
            "Requesting required service actions",
            "Authorizing budget for service consumption",
            "Ensuring access to agreed resources",
            "Receiving of the agreed goods"
        ],
        correctAnswer: "Ensuring access to agreed resources"
    },
    {
        questionText: "Which step of the continual improvement model includes baseline assessments?",
        options: [
            "Did we get there?",
            "Where are we now?",
            "What is the vision?",
            "Where do we want to be?"
        ],
        correctAnswer: "Where are we now?"
    },
    {
        questionText: "Which describes a 'change authority'?",
        options: [
            "A model used to determine who will assess a change",
            "A person who approves a change",
            "A tool used to help plan changes",
            "A way to manage the people aspects of change"
        ],
        correctAnswer: "A person who approves a change"
    },
    {
        questionText: "Which is NOT a component of the service value system?",
        options: [
            "The service value chain",
            "Opportunity and demand",
            "Continual improvement",
            "Governance"
        ],
        correctAnswer: "Opportunity and demand"
    },
    {
        questionText: "Which statement about service relationship management is CORRECT?",
        options: [
            "It focuses on the service actions performed by users",
            "It requires the service consumer to create resources for the service provider",
            "It requires co-operation of both the service provider and service consumer",
            "It focuses on the fulfilment of the agreed service actions"
        ],
        correctAnswer: "It requires co-operation of both the service provider and service consumer"
    },
    {
        questionText: "What is the MOST important reason for prioritizing incidents?",
        options: [
            "To ensure that user expectations are realistic",
            "To ensure that incidents with highest impact are resolved first",
            "To help information-sharing and learning",
            "To provide links to related changes and known errors"
        ],
        correctAnswer: "To ensure that incidents with highest impact are resolved first"
    },
    {
        questionText: "Which 'service level management' activity helps staff to deliver a more business-focused service?",
        options: [
            "Creating targets based on the percentage of uptime of a service",
            "Understanding the ongoing requirements of customers",
            "Using complex technical terminology in service level agreements (SLAs)",
            "Measuring low-level operational activities"
        ],
        correctAnswer: "Understanding the ongoing requirements of customers"
    },
    {
        questionText: "Which practice has a purpose that includes the handling of pre-defined, user-initiated demands for service?",
        options: [
            "Service request management",
            "Service configuration management",
            "Deployment management",
            "Change enablement"
        ],
        correctAnswer: "Service request management"
    },
    {
        questionText: "Which guiding principle considers which parts of an existing process should be kept by identifying how they contribute to value creation?",
        options: [
            "Progress iteratively with feedback",
            "Collaborate and promote visibility",
            "Think and work holistically",
            "Keep it simple and practical"
        ],
        correctAnswer: "Keep it simple and practical"
    },
    {
        questionText: "What is the purpose of the 'monitoring and event management' practice?",
        options: [
            "To restore normal service operation as quickly as possible",
            "To manage workarounds and known errors",
            "To capture demand for incident resolution and service requests",
            "To systematically observe services and service components"
        ],
        correctAnswer: "To systematically observe services and service components"
    },
    {
        questionText: "Which statement about outcomes is CORRECT?",
        options: [
            "Outcomes rely on outputs to deliver results for a stakeholder",
            "Outcomes use activities to produce tangible or intangible deliverables",
            "Outcomes give service consumers assurance of products or services",
            "Outcomes help a service consumer to assess the cost of a specific activity"
        ],
        correctAnswer: "Outcomes rely on outputs to deliver results for a stakeholder"
    },
    {
        questionText: "Which skill is required by the 'service level management' practice?",
        options: [
            "Supplier management",
            "Technical expertise",
            "Event monitoring",
            "Problem management"
        ],
        correctAnswer: "Supplier management"
    },
    {
        questionText: "Which statement about the 'continual improvement model' is CORRECT?",
        options: [
            "Organizations should work through the steps of the model in the sequence in which they are presented",
            "The flow of the model helps organizations to link improvements to its goals",
            "The model is applicable to only certain parts of the service value system",
            "Organizations should use an additional model or method to link improvements to customer value"
        ],
        correctAnswer: "The flow of the model helps organizations to link improvements to its goals"
    },
    {
        questionText: "What is the definition of warranty?",
        options: [
            "A means of identifying events that could cause harm or loss",
            "A means of determining whether a service is fit for purpose",
            "A means of identifying a result for a stakeholder",
            "A means of determining whether a service is fit for use"
        ],
        correctAnswer: "A means of determining whether a service is fit for use"
    },
    {
        questionText: "Which practice has a purpose that includes managing risks relating to confidentiality, integrity and availability?",
        options: [
            "Change enablement",
            "Problem management",
            "Information security management",
            "Service configuration management"
        ],
        correctAnswer: "Information security management"
    },
    {
        questionText: "Which statement about value creating activities is CORRECT?",
        options: [
            "Each value stream should be designed with a specific combination of service value chain activities",
            "Service value chain activities have pre-determined dependencies on ITIL practices",
            "A value stream is an operating model for creating value through products and services",
            "Organizations should ensure that each value stream is applicable to many scenarios"
        ],
        correctAnswer: "Each value stream should be designed with a specific combination of service value chain activities"
    },
    {
        questionText: "Which is provided by the 'engage' value chain activity?",
        options: [
            "Ensuring that stakeholder expectations for quality are met",
            "Ensuring that stakeholder needs are understood by the organization",
            "Ensuring that service components are available when needed",
            "Ensuring that services are operated to meet agreed specifications"
        ],
        correctAnswer: "Ensuring that stakeholder needs are understood by the organization"
    },
    {
        questionText: "Which is part of the 'focus on value' guiding principle?",
        options: [
            "Understanding what services help the service consumer",
            "Reducing the number of steps in the customer experience",
            "Assessing services to identify parts that can be reused",
            "Identifying activities that can be achieved in smaller iterations"
        ],
        correctAnswer: "Understanding what services help the service consumer"
    },
    {
        questionText: "Which is part of the definition of a customer?",
        options: [
            "The role that defines the requirements for a service",
            "A means of enabling value co-creation",
            "The role that authorizes budget for service consumption",
            "A set of specialized organizational capabilities for enabling value"
        ],
        correctAnswer: "The role that defines the requirements for a service"
    },
    {
        questionText: "Which guiding principle helps an organization to understand the impact of an altered element on other elements in a system?",
        options: [
            "Focus on value",
            "Start where you are",
            "Think and work holistically",
            "Keep it simple and practical"
        ],
        correctAnswer: "Think and work holistically"
    },
    {
        questionText: "Identify the missing words in the following sentence: The 'incident management' practice should maintain [?] for logging and managing incidents.",
        options: [
            "a dedicated team",
            "a formal process",
            "detailed procedures",
            "a value chain activity"
        ],
        correctAnswer: "a formal process"
    },
    {
        questionText: "What is the purpose of the 'deployment management' practice?",
        options: [
            "To make new and changed services and features available for use",
            "To move new or changed components to live environments",
            "To plan and manage the full lifecycle of all IT assets",
            "To protect the information needed by the organization to conduct its business"
        ],
        correctAnswer: "To move new or changed components to live environments"
    },
    {
        questionText: "Which is an activity of 'problem identification'?",
        options: [
            "Analyzing information from software developers",
            "Establishing problem workarounds",
            "Analyzing the cause of problems",
            "Establishing potential permanent solutions"
        ],
        correctAnswer: "Analyzing the cause of problems"
    },
    {
        questionText: "Which practice uses technologies such as intelligent telephony systems, a knowledge base and monitoring tools?",
        options: [
            "Service configuration management",
            "Service desk",
            "Problem management",
            "Deployment management"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "Which statement about standard changes is CORRECT?",
        options: [
            "A full assessment should be completed each time the change is implemented",
            "The change can be implemented with less testing if necessary",
            "The appropriate change authority should be assigned to each type of change",
            "The change does not require additional authorization"
        ],
        correctAnswer: "The change does not require additional authorization"
    },
    {
        questionText: "Which statement about the 'service request management' practice is CORRECT?",
        options: [
            "Service requests are fulfilled using simple workflows",
            "A new workflow is created for each type of request",
            "Additional approval is sometimes needed for restoration of service",
            "Financial authorization is sometimes required for service requests"
        ],
        correctAnswer: "Financial authorization is sometimes required for service requests"
    },
    {
        questionText: "What is a cause, or potential cause, of one or more incidents?",
        options: [
            "A problem",
            "A configuration item",
            "A workaround",
            "An incident"
        ],
        correctAnswer: "A problem"
    },
    {
        questionText: "Which guiding principle says that it is not usually necessary to build something new?",
        options: [
            "Focus on value",
            "Start where you are",
            "Progress iteratively with feedback",
            "Think and work holistically"
        ],
        correctAnswer: "Start where you are"
    },
    {
        questionText: "Which practice includes management of workarounds and known errors?",
        options: [
            "Monitoring and event management",
            "Service configuration management",
            "Problem management",
            "Incident management"
        ],
        correctAnswer: "Problem management"
    },
    {
        questionText: "Which activity is part of the 'continual improvement' practice?",
        options: [
            "Handling compliments and complaints from users to identify improvements",
            "Improving relationships with and between stakeholders",
            "Prioritizing and creating business cases for improvement initiatives",
            "Identifying the cause of unplanned interruptions to service"
        ],
        correctAnswer: "Prioritizing and creating business cases for improvement initiatives"
    },
    {
        questionText: "Identify the missing word in the following sentence: A service is a means of enabling value co-creation by facilitating [?] that customers want to achieve, without the customer having to manage specific costs and risks.",
        options: [
            "utility",
            "warranty",
            "outcomes",
            "outputs"
        ],
        correctAnswer: "outcomes"
    },
    {
        questionText: "Which is a low risk change that has been pre-approved so that no additional authorization is needed?",
        options: [
            "A standard change",
            "A change model",
            "An emergency change",
            "A normal change"
        ],
        correctAnswer: "A standard change"
    },
    {
        questionText: "Which describes the 'plan' value chain activity?",
        options: [
            "It ensures a shared understanding of the current status and vision for all products and services across the organization",
            "It ensures that services are delivered and supported according to agreed specifications and stakeholders' expectations",
            "It ensures that service components are available when and where they are needed, and meet agreed specifications",
            "It ensures continual improvement of products, services, and practices across all value chain activities"
        ],
        correctAnswer: "It ensures a shared understanding of the current status and vision for all products and services across the organization"
    },
    {
        questionText: "Which phase of problem management includes analyzing incidents to look for patterns and trends?",
        options: [
            "Problem identification",
            "Problem control",
            "Error control",
            "Post-implementation review"
        ],
        correctAnswer: "Problem identification"
    },
    {
        questionText: "Which statement about the 'optimize and automate' guiding principle is CORRECT?",
        options: [
            "Activities should be automated before they are optimized",
            "Automation is best applied to non-standard tasks",
            "Technology eliminates the need for human intervention",
            "Automation frees human resources for more complex activities"
        ],
        correctAnswer: "Automation frees human resources for more complex activities"
    },
    {
        questionText: "What is defined as any financially valuable component that can contribute to the delivery of a service?",
        options: [
            "Configuration item",
            "Product",
            "IT asset",
            "Event"
        ],
        correctAnswer: "IT asset"
    },
    {
        questionText: "Which MOST helps an organization adapt ITIL concepts so that they apply to the organization's specific circumstances?",
        options: [
            "Continual improvement",
            "Service value chain",
            "Practices",
            "Guiding principles"
        ],
        correctAnswer: "Guiding principles"
    },
    {
        questionText: "What is the MAIN benefit of 'problem management'?",
        options: [
            "Restoring normal service as quickly as possible",
            "Reducing the number and impact of incidents",
            "Maximizing the number of successful changes",
            "Managing workarounds and known errors"
        ],
        correctAnswer: "Reducing the number and impact of incidents"
    },
    {
        questionText: "Which guiding principle discourages 'silo activity'?",
        options: [
            "Focus on value",
            "Start where you are",
            "Collaborate and promote visibility",
            "Keep it simple and practical"
        ],
        correctAnswer: "Collaborate and promote visibility"
    },
    {
        questionText: "What is included in the purpose of the 'relationship management' practice?",
        options: [
            "Identifying, analyzing, monitoring, and the continual improvement of relationships with stakeholders",
            "Setting clear business-based targets so that the delivery of a service can be properly assessed",
            "Creating collaborative relationships with key suppliers to uncover and realize new value",
            "Handling all pre-defined, user-initiated service requests in an effective and user-friendly manner"
        ],
        correctAnswer: "Identifying, analyzing, monitoring, and the continual improvement of relationships with stakeholders"
    },
    {
        questionText: "Which practice facilitates operational communication between the service provider organization and users in the service consumer organization?",
        options: [
            "Service level management",
            "Relationship management",
            "Service desk",
            "Monitoring and event management"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "Which dimension considers the application of artificial intelligence to service management?",
        options: [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        correctAnswer: "Information and technology"
    },
    {
        questionText: "Which type of change is MOST LIKELY to be initiated as part of the 'service request management' practice?",
        options: [
            "A normal change",
            "An emergency change",
            "A standard change",
            "A change model"
        ],
        correctAnswer: "A standard change"
    },
    {
        questionText: "Which benefit is MOST aligned with the guiding principle 'progress iteratively with feedback'?",
        options: [
            "Service providers are able to respond more quickly to customer needs",
            "Bottlenecks in the service provider's workflow are identified",
            "The complexities of the service provider's IT systems are identified",
            "The service provider gains a better understanding of the customer experience"
        ],
        correctAnswer: "Service providers are able to respond more quickly to customer needs"
    },
    {
        questionText: "Which costs are included in the value proposition of a service?",
        options: [
            "Additional expense that the service consumer has because they are using the service",
            "Money that the service consumer no longer needs to spend because they are using the service",
            "Tangible or intangible results for the service consumer because they are using the service",
            "The benefits, usefulness, and importance of the service that are perceived by the service consumer"
        ],
        correctAnswer: "Money that the service consumer no longer needs to spend because they are using the service"
    },
    {
        questionText: "Identify the missing word in the following sentence: A [?] is the addition, modification, or removal of anything that could have a direct or indirect effect on services.",
        options: [
            "problem",
            "risk",
            "change",
            "configuration item"
        ],
        correctAnswer: "change"
    },
    {
        questionText: "Which of the four dimensions includes the knowledge bases needed to deliver and manage services?",
        options: [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        correctAnswer: "Information and technology"
    },
    {
        questionText: "Staff in an IT organization are very busy, mostly carrying out tasks that add little or no value to the organization or its customers. Which guiding principle recommends that the unnecessary work should be eliminated?",
        options: [
            "Keep it simple and practical",
            "Think and work holistically",
            "Start where you are",
            "Progress iteratively with feedback"
        ],
        correctAnswer: "Keep it simple and practical"
    },
    {
        questionText: "Which practice has a purpose that includes the management of financially valuable components that can contribute to the delivery of an IT service?",
        options: [
            "Deployment management",
            "Continual improvement",
            "Monitoring and event management",
            "IT asset management"
        ],
        correctAnswer: "IT asset management"
    },
    {
        questionText: "Which practice ensures that service actions, that are a normal part of service delivery, are effectively handled?",
        options: [
            "Incident management",
            "Service level management",
            "Problem management",
            "Service request management"
        ],
        correctAnswer: "Service request management"
    },
    {
        questionText: "A service will be unavailable for the next two hours for unplanned maintenance. Which practice is MOST LIKELY to be involved in managing this?",
        options: [
            "Incident management",
            "Problem management",
            "Change enablement",
            "Service request management"
        ],
        correctAnswer: "Incident management"
    },
    {
        questionText: "Which practice is MOST associated with the use of empathy to understand users?",
        options: [
            "Service desk",
            "Continual improvement",
            "Service level management",
            "Change enablement"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "Identify the missing word in the following sentence: A customer defines the [?] for a service and takes responsibility for the outcomes of service consumption.",
        options: [
            "requirements",
            "resources",
            "suppliers",
            "products"
        ],
        correctAnswer: "requirements"
    },
    {
        questionText: "Which of the following ensures that a service provider and a service consumer continually co-create value?",
        options: [
            "Service consumption",
            "Service offerings",
            "Service level management",
            "Service relationship management"
        ],
        correctAnswer: "Service relationship management"
    },
    {
        questionText: "What type of change is often used for resolving incidents or implementing security patches?",
        options: [
            "Standard change",
            "Normal change",
            "Emergency change",
            "Change model"
        ],
        correctAnswer: "Standard change"
    },
    {
        questionText: "Which phase of problem management includes the regular re-assessment of the effectiveness of workarounds?",
        options: [
            "Problem identification",
            "Problem control",
            "Error control",
            "Problem analysis"
        ],
        correctAnswer: "Error control"
    },
    {
        questionText: "Which service value chain activity deals with the purchase of new products?",
        options: [
            "Engage",
            "Obtain/build",
            "Plan",
            "Improve"
        ],
        correctAnswer: "Obtain/build"
    },
    {
        questionText: "Which is the BEST type of resource for investigating complex incidents?",
        options: [
            "Self-help systems",
            "Knowledgeable support staff",
            "Detailed work instructions",
            "Disaster recovery plans"
        ],
        correctAnswer: "Knowledgeable support staff"
    },
    {
        questionText: "Which dimension of service management includes consideration of the type of relationship required with other organizations involved in the design and delivery of services?",
        options: [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        correctAnswer: "Partners and suppliers"
    },
    {
        questionText: "What is defined as 'the role that uses services'?",
        options: [
            "Service consumer",
            "Customer",
            "User",
            "Sponsor"
        ],
        correctAnswer: "User"
    },
    {
        questionText: "Which is an example of a problem control activity?",
        options: [
            "Reviewing incident records to identify trends",
            "Implementing a technical fix to resolve an issue",
            "Re-assessing a known error to understand the ongoing impact",
            "Documenting the steps in a workaround"
        ],
        correctAnswer: "Re-assessing a known error to understand the ongoing impact"
    },
    {
        questionText: "What should remain constant within an organization, even when the organization's objectives change?",
        options: [
            "Outputs",
            "Guiding principles",
            "Service offerings",
            "Outcomes"
        ],
        correctAnswer: "Guiding principles"
    },
    {
        questionText: "Which is a key element of the 'think and work holistically' guiding principle?",
        options: [
            "Assessing which procedures can be re-used when improving a service",
            "Understanding the methods applicable to complex systems",
            "Eliminating metrics which do not contribute to achieving an objective",
            "Using technology for standard tasks to give people time for complex activities"
        ],
        correctAnswer: "Understanding the methods applicable to complex systems"
    },
    {
        questionText: "Which practice has a purpose that includes managing authentication and non-repudiation?",
        options: [
            "Information security management",
            "Supplier management",
            "Service configuration management",
            "Relationship management"
        ],
        correctAnswer: "Information security management"
    },
    {
        questionText: "Which of the following is the MOST important for effective incident management?",
        options: [
            "Collaboration tools and techniques",
            "Balanced scorecard review",
            "Automated pipelines",
            "A variety of access channels"
        ],
        correctAnswer: "Collaboration tools and techniques"
    },
    {
        questionText: "Which is the MOST important stakeholder group that a service provider needs to collaborate with?",
        options: [
            "Suppliers",
            "Customers",
            "Relationship managers",
            "Developers"
        ],
        correctAnswer: "Customers"
    },
    {
        questionText: "For which purpose would the continual improvement practice use a SWOT analysis?",
        options: [
            "Understanding the current state",
            "Defining the future desired state",
            "Tracking and managing ideas",
            "Ensuring everyone actively participates"
        ],
        correctAnswer: "Understanding the current state"
    },
    {
        questionText: "Which is CORRECT about change authorization?",
        options: [
            "A change authority is assigned each time a standard change is requested",
            "Emergency changes are authorized by the technician making the change",
            "Assignment of the change authority is based on the change type and model",
            "The change authority will ensure changes are authorized after they are deployed"
        ],
        correctAnswer: "Assignment of the change authority is based on the change type and model"
    },
    {
        questionText: "Which practice ensures that a variety of access channels are available for users to report issues?",
        options: [
            "Service desk",
            "Service level management",
            "Incident management",
            "Change enablement"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "The purpose of the problem management practice is to reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and [?].",
        options: [
            "events",
            "changes",
            "IT assets",
            "known errors"
        ],
        correctAnswer: "known errors"
    },
    {
        questionText: "Which is a key requirement for a successful service level agreements (SLAs)?",
        options: [
            "They should be written using language and terms which all parties will understand",
            "They should be based on system-based metrics which are useful to the service provider",
            "They should be carried forward, unchanged, from one year to the next to enable consistent service",
            "They should avoid ambiguous targets such as those relating to user experience"
        ],
        correctAnswer: "They should be written using language and terms which all parties will understand"
    },
    {
        questionText: "Which is an example of a service request?",
        options: [
            "A request for normal operation to be restored",
            "A request to implement a security patch",
            "A request for access to a file",
            "A request to investigate the cause of an incident"
        ],
        correctAnswer: "A request for access to a file"
    },
    {
        questionText: "Which of the four dimensions focuses on managing data in compliance with industry regulations?",
        options: [
            "Partners and suppliers",
            "Organizations and people",
            "Value streams and processes",
            "Information and technology"
        ],
        correctAnswer: "Information and technology"
    },
    {
        questionText: "When using the ITIL continual improvement model, which information should be produced by an organization in order to understand where the organization is now?",
        options: [
            "Business objectives",
            "Improvement plans",
            "Assessment results",
            "KPI reports"
        ],
        correctAnswer: "Assessment results"
    },
    {
        questionText: "Which guiding principle leads to a faster response to customer needs by timeboxing activities and learning from the outputs of previous activities?",
        options: [
            "Focus on value",
            "Progress iteratively with feedback",
            "Collaborate and promote visibility",
            "Optimize and automate"
        ],
        correctAnswer: "Progress iteratively with feedback"
    },
    {
        questionText: "Which practice has a purpose that includes maximizing the number of successful additions, modifications, or removals of anything that could have an effect on a service?",
        options: [
            "Service request management",
            "Incident management",
            "Service desk",
            "Change enablement"
        ],
        correctAnswer: "Change enablement"
    },
    {
        questionText: "In which situation will incident management USUALLY use a separate process?",
        options: [
            "Where no target resolution time exists",
            "For low impact incidents",
            "Where the cause must be diagnosed",
            "For information security incidents"
        ],
        correctAnswer: "For information security incidents"
    },
    {
        questionText: "Which practice minimizes the impact on normal service operation by managing resources in response to unplanned reductions in service quality?",
        options: [
            "Incident management",
            "Change enablement",
            "Service level management",
            "Continual improvement"
        ],
        correctAnswer: "Incident management"
    },
    {
        questionText: "Which practice makes use of methods from Lean, Agile and DevOps?",
        options: [
            "Service desk",
            "Continual improvement",
            "Problem management",
            "Incident management"
        ],
        correctAnswer: "Continual improvement"
    },
    {
        questionText: "Identify the missing word in the following sentence: Sponsor is the role that authorizes budget for service [?].",
        options: [
            "value",
            "consumption",
            "management",
            "provision"
        ],
        correctAnswer: "consumption"
    },
    {
        questionText: "Which statement about service offerings is CORRECT?",
        options: [
            "The same product can be used as a basis for more than one service offering",
            "Service offerings include the transfer of goods from the consumer to the provider",
            "Service offerings describe how providers and consumers cooperate to co-create value",
            "Each service should be described to consumers as a single service offering"
        ],
        correctAnswer: "The same product can be used as a basis for more than one service offering"
    },
    {
        questionText: "Which can a change schedule be used for?",
        options: [
            "Speeding up the planning and authorization of emergency changes",
            "Providing information about deployed changes to help manage incidents and problems",
            "Providing a means of initiating and assessing normal changes",
            "Tracking and managing improvement ideas from identification through to final action"
        ],
        correctAnswer: "Providing information about deployed changes to help manage incidents and problems"
    },
    {
        questionText: "Which is part of the value proposition of a service?",
        options: [
            "Costs removed from the consumer by the service",
            "Costs imposed on the consumer by the service",
            "Outputs of the service received by the consumer",
            "Risks imposed on the consumer by the service"
        ],
        correctAnswer: "Costs removed from the consumer by the service"
    },
    {
        questionText: "Why should a service level manager carry out regular service reviews?",
        options: [
            "To ensure that agreements are written simply and are easy to understand",
            "To collect information about service consumer goals and objectives",
            "To capture information about service issues and performance against agreed goals",
            "To ensure continual improvement of services, so that they meet the evolving needs of service consumers"
        ],
        correctAnswer: "To capture information about service issues and performance against agreed goals"
    },
    {
        questionText: "A flaw in an application could cause a service to fail. IT staff are actively analyzing the application to try and understand what is going on. What is the correct name for this type of flaw?",
        options: [
            "Problem",
            "Incident",
            "Event",
            "Known error"
        ],
        correctAnswer: "Problem"
    },
    {
        questionText: "Which value chain activity ensures that ongoing service activity meets user expectations?",
        options: [
            "Plan",
            "Engage",
            "Obtain/build",
            "Deliver and support"
        ],
        correctAnswer: "Deliver and support"
    },
    {
        questionText: "Which practice's purpose includes creating closer, more collaborative relationships?",
        options: [
            "Supplier management",
            "Information security management",
            "Release management",
            "Service configuration management"
        ],
        correctAnswer: "Supplier management"
    },
    {
        questionText: "Which practice is MOST LIKELY to make use of artificial intelligence, robotic process automation, and chatbots?",
        options: [
            "Service desk",
            "Continual improvement",
            "Problem management",
            "Incident management"
        ],
        correctAnswer: "Service desk"
    },
    {
        questionText: "What is a problem that has been analyzed but has not been resolved?",
        options: [
            "Workaround",
            "Incident",
            "Known error",
            "Risk"
        ],
        correctAnswer: "Known error"
    },
    {
        questionText: "Which is described by the 'organizations and people' dimension of service management?",
        options: [
            "Workflows and controls",
            "Communication and collaboration",
            "Inputs and outputs",
            "Contracts and agreements"
        ],
        correctAnswer: "Communication and collaboration",
    },
    {
        questionText: "Which facilitates outcomes that customers want to achieve?",
        options: [
            "Service",
            "Warranty",
            "Organization",
            "IT asset"
        ],
        correctAnswer: "Service"
    },
    {
        questionText: "Which practice recommends that organizations develop competencies in techniques such as strength, weakness, opportunity, and threat (SWOT) analysis, and balanced scorecards?",
        options: [
            "Incident management",
            "Continual improvement",
            "Service request management",
            "Change enablement"
        ],
        correctAnswer: "Continual improvement"
    },
    {
        questionText: "Which ITIL concept helps an organization to make good decisions?",
        options: [
            "Four dimensions of service management",
            "Guiding principles",
            "Service value chain",
            "Practices"
        ],
        correctAnswer: "Guiding principles"
    },
    {
        questionText: "Which is a recommendation applying the guiding principle 'keep it simple and practical'?",
        options: [
            "Communicate in a way the audience can hear",
            "Sometimes nothing from the current state can be re-used",
            "If a practice is easier to follow it is more likely to be adopted",
            "Fast does not mean incomplete"
        ],
        correctAnswer: "If a practice is easier to follow it is more likely to be adopted"
    },
    {
        questionText: "Which practice has a purpose that includes responding to conditions that could lead to potential faults or incidents?",
        options: [
            "Incident management",
            "Service request management",
            "Monitoring and event management",
            "Change enablement"
        ],
        correctAnswer: "Monitoring and event management"
    },
    {
        questionText: "What role would be MOST suitable for a new graduate with great levels of empathy and understanding of business issues?",
        options: [
            "Service level manager",
            "Service desk agent",
            "Change authority",
            "Problem analyst"
        ],
        correctAnswer: "Service desk agent"
    },
    {
        questionText: "Which is a way of applying the guiding principle 'focus on value'?",
        options: [
            "Understanding how service consumers use services",
            "Comprehending the whole, but doing something",
            "Recognizing the complexity of systems",
            "Doing fewer things, but doing them better"
        ],
        correctAnswer: "Understanding how service consumers use services"
    },
    {
        questionText: "Which of the following is NOT recommended by the guiding principle 'start where you are'?",
        options: [
            "Asking questions that appear to be stupid",
            "Identifying what is available to be leveraged",
            "Building something completely new",
            "Collecting data directly from the source"
        ],
        correctAnswer: "Building something completely new"
    },
    {
        questionText: "Which is a use of a continual improvement register?",
        options: [
            "Planning changes, assisting in communication, avoiding conflicts, and assigning resources",
            "Selecting the right method, model or technique for identifying improvements",
            "Tracking and managing improvement ideas from identification through to final action",
            "Describing the services designed to meet the needs of a consumer group"
        ],
        correctAnswer: "Tracking and managing improvement ideas from identification through to final action"
    },
    {
        questionText: "Which practice uses pre-defined, standardized procedures to enable fulfilment times to be clearly communicated?",
        options: [
            "Incident management",
            "Service level management",
            "Problem management",
            "Service request management"
        ],
        correctAnswer: "Service request management"
    },
    {
        questionText: "How can a service consumer contribute to the reduction of risk?",
        options: [
            "By providing the service in accordance with requirements",
            "By ensuring that the service provider's resources are correctly configured",
            "By fully understanding their own requirements for the service",
            "By managing the detailed level of risk on behalf of the service provider"
        ],
        correctAnswer: "By fully understanding their own requirements for the service"
    },
    {
        questionText: "In which case would a problem be logged as part of the problem identification?",
        options: [
            "When the cause is identified but not resolved",
            "After receiving of error information from a supplier",
            "When a user reports an unplanned service interruption",
            "After a workaround is identified and documented"
        ],
        correctAnswer: "After receiving of error information from a supplier"
    },
    {
        questionText: "In which case would a problem be logged as part of the problem identification?",
        options: [
            "When the cause is identified but not resolved",
            "After receiving of error information from a supplier",
            "When a user reports an unplanned service interruption",
            "After a workaround is identified and documented"
        ],
        correctAnswer: "After receiving of error information from a supplier"
    },
    {
        questionText: "Which practice helps to ensure that the services delivered to customers are aligned with their needs?",
        options: [
            "Service level management",
            "Change enablement",
            "Problem management",
            "Service request management"
        ],
        correctAnswer: "Service request management"
    },
    {
        questionText: "Which service request management decisions require that policies are established?",
        options: [
            "Deciding how degradations of service are resolved",
            "Deciding how to handle service requests where the steps are unknown",
            "Deciding which service requests require approval",
            "Deciding when workarounds should be used"
        ],
        correctAnswer: "Deciding which service requests require approval"
    },
    {
        questionText: "Which dimension of service management considers how activities are coordinated?",
        options: [
            "Organizations and people",
            "Information and technology",
            "Partners and suppliers",
            "Value streams and processes"
        ],
        correctAnswer: "Value streams and processes"
    },
    {
        questionText: "A user contacts the service desk to ask how they can create a report. Which practice is MOST LIKELY to contribute to resolving this issue?",
        options: [
            "Incident management",
            "Service level management",
            "Service request management",
            "Change enablement"
        ],
        correctAnswer: "Service request management"
    },
    {
        questionText: "What is the customer of a service responsible for?",
        options: [
            "Defining the requirements for the service",
            "Provisioning the service",
            "Using the service",
            "Authorizing the budget for the service"
        ],
        correctAnswer: "Defining the requirements for the service"
    },
    {
        questionText: "Which statement about value streams is CORRECT?",
        options: [
            "Each value stream must include all six value chain activities",
            "Each value stream must include suppliers or partners",
            "Each value stream must be designed for a specific scenario",
            "Each value stream must include all 34 ITIL practices"
        ],
        correctAnswer: "Each value stream must be designed for a specific scenario"
    },
    {
        questionText: "Which guiding principle recommends using ideas from ITIL, Lean, DevOps, Kanban, and other sources to help drive improvements?",
        options: [
            "Optimize and automate",
            "Think and work holistically",
            "Start where you are",
            "Focus on value"
        ],
        correctAnswer: "Optimize and automate"
    },
    {
        questionText: "Which is an activity in the 'problem control' phase of problem management?",
        options: [
            "Re-assessing a known error to manage the ongoing impact",
            "Implementing a technical fix to resolve an issue",
            "Documenting the steps in a workaround",
            "Reviewing incident records to identify trends"
        ],
        correctAnswer: "Documenting the steps in a workaround"
    },
    {
        questionText: "When working on an improvement iteration, which concept helps to ensure that the iteration activities remain appropriate in changing circumstances?",
        options: [
            "Minimum viable product",
            "Feedback loop",
            "Analysis paralysis",
            "Direct observation"
        ],
        correctAnswer: "Feedback loop"
    },
    {
        questionText: "What is the definition of 'service management'?",
        options: [
            "A result for a stakeholder enabled by one or more outputs",
            "A formal description of one or more services, designed to address the needs of a target consumer group",
            "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation",
            "A set of specialized organizational capabilities for enabling value for customers in the form of services"
        ],
        correctAnswer: "A set of specialized organizational capabilities for enabling value for customers in the form of services"
    },
    {
        questionText: "Which is a description of service provision?",
        options: [
            "A way to help create value by facilitating outcomes that service consumers need",
            "Activities that an organization performs to deliver services",
            "A formal description of one or more services, designed to address the needs of a service consumer",
            "Cooperation between two organizations to ensure that a service delivers value"
        ],
        correctAnswer: "Activities that an organization performs to deliver services"
    },
    {
        questionText: "Which is an input to the service value system?",
        options: [
            "A need from consumers for new or changed services.",
            "The system of directing and controlling an organization",
            "A model to help meet stakeholders' expectations",
            "Recommendations to help an organization in all aspects of its work"
        ],
        correctAnswer: "A need from consumers for new or changed services."
    },
    {
        questionText: "Which organization delivers outputs or outcomes of a service?",
        options: [
            "A service consumer delivers outcomes of the service",
            "A service consumer delivers outputs of the service",
            "A service provider delivers outcomes of the service",
            "A service provider delivers outputs of the service"
        ],
        correctAnswer: "A service provider delivers outputs of the service"
    },
    {
        questionText: "Which practice requires focus and effort to engage and listen to the requirements, issues, concerns, and daily needs of customers?",
        options: [
            "Service request management",
            "Service desk",
            "Supplier management",
            "Service level management"
        ],
        correctAnswer: "Service level management"
    },

    {
        questionText: "Which practice would be MOST involved in assessing the risk to services when a supplier modifies the contract they offer to the organization?",
        options: [
            "Service request management",
            "Change enablement",
            "Incident management",
            "Service level management"
        ],
        correctAnswer: "Change enablement"
    },

    {
        questionText: "Which BEST describes the focus of the 'think and work holistically' principle?",
        options: [
            "Breaking down large initiatives into smaller pieces of work",
            "Integrating an organization's activities to deliver value",
            "Eliminating unnecessary steps to deliver valuable outcomes",
            "Considering the existing organizational assets before building something new"
        ],
        correctAnswer: "Integrating an organization's activities to deliver value"
    },

    {
        questionText: "Identify the missing word in the following sentence. An organization which is undertaking an improvement initiative should [?] the existing methods and services when building for the future.",
        options: [
            "Discard",
            "Improve",
            "Consider",
            "Re-use"
        ],
        correctAnswer: "Consider"
    },
    {
        questionText: "Identify the missing word in the following sentence. An organization which is undertaking an improvement initiative should [?] the existing methods and services when building for the future.",
        options: [
            "Discard",
            "Improve",
            "Consider",
            "Re-use"
        ],
        correctAnswer: "Improve"
    },
    {
        questionText: "Which step of the 'continual management model' defines measurable targets?",
        options: [
            "Where do we want to be?",
            "What is the vision?",
            "How do we get there?",
            "Where are we now?"
        ],
        correctAnswer: "Where do we want to be?"
    },
    {
        questionText: "Why should a service level agreement include bundles of metrics?",
        options: [
            "To reduce the number of metrics that need to be measured and reported",
            "To help focus on business outcomes, rather than operational results",
            "To ensure that the service levels have been agreed with customers",
            "To ensure that all services are included in the service reports"
        ],
        correctAnswer: "To help focus on business outcomes, rather than operational results"
    },
    {
        questionText: "Which practice balances management of risk with maximizing throughput?",
        options: [
            "Problem management",
            "Incident management",
            "Continual improvement",
            "Change enablement"
        ],
        correctAnswer: "Change enablement"
    },
    {
        questionText: "How does the 'incident management' practice set user expectations?",
        options: [
            "By using collaboration tools to communicate effectively",
            "By agreeing, and communicating target resolution times",
            "By assigning resources to ensure that all incidents are resolved as quickly as possible",
            "By automated matching of incidents to known errors"
        ],
        correctAnswer: "By agreeing, and communicating target resolution times"
    },
    {
        questionText: "What is a user?",
        options: [
            "The role that defines the requirements for a service",
            "The role that directs and controls an organization",
            "The role that uses services",
            "The role that authorizes budget for service consumption"
        ],
        correctAnswer: "The role that uses services"
    },
    {
        questionText: "How do 'continual improvement registers' help to create value?",
        options: [
            "By making improvements visible",
            "By monitoring achievement against service level targets",
            "By assigning change authorities for change requests",
            "By documenting all improvement ideas in a single place"
        ],
        correctAnswer: "By making improvements visible"
    },

    {
        questionText: "Which statement about the inputs and outputs of the value chain activities is CORRECT?",
        options: [
            "Each value chain activity receives inputs and provides outputs",
            "The organization's governance will determine the inputs and outputs of each value chain activity",
            "Some value chain activities only have inputs, whereas others only have outputs",
            "Inputs and outputs are fixed for each value chain activity"
        ],
        correctAnswer: "Each value chain activity receives inputs and provides outputs"
    },
    {
        questionText: "What is the value of a service?",
        options: [
            "A tangible or intangible deliverable of the service",
            "The amount of money that is created or saved for the service consumers by using the service",
            "The benefits, usefulness, or importance of the service, as perceived by the stakeholders",
            "A result for a stakeholder enabled by the outputs of the service"
        ],
        correctAnswer: "The benefits, usefulness, or importance of the service, as perceived by the stakeholders"
    },
    {
        questionText: "Which is the MOST LIKELY way of resolving major incidents?",
        options: [
            "A support team following detailed procedures for investigating the incident",
            "Users establishing a resolution using self-help",
            "A temporary team working together to identify a resolution",
            "The service desk identifying the cause and a resolution"
        ],
        correctAnswer: "A temporary team working together to identify a resolution"
    },
    {
        questionText: "Which is the MOST LIKELY way of resolving major incidents?",
        options: [
            "A support team following detailed procedures for investigating the incident",
            "Users establishing a resolution using self-help",
            "A temporary team working together to identify a resolution",
            "The service desk identifying the cause and a resolution"
        ],
        correctAnswer: "A temporary team working together to identify a resolution"
    },
    {
        questionText: "What is included in the purpose of the 'IT asset management' practice?",
        options: [
            "Supporting decision-making about purchase, re-use, retirement, and disposal of assets",
            "Providing information on how assets are configured and the relationships between them",
            "Making new and changed assets available for use",
            "Moving assets to live or other environments for testing or staging"
        ],
        correctAnswer: "Supporting decision-making about purchase, re-use, retirement, and disposal of assets"
    },
    {
        questionText: "Which component is focused on the activities needed by an organization to help it co-create value?",
        options: [
            "Guiding principles",
            "Service value chain",
            "Continual improvement",
            "Practices"
        ],
        correctAnswer: "Service value chain"
    },

    {
        questionText: "Identify the missing word(s) in the following sentence.\nWhen an organization is assessing its current state, it should use [?] to obtain accurate measurements.",
        options: [
            "Reports",
            "Assumptions",
            "Source data",
            "Risk management techniques"
        ],
        "correctAnswer": "Source data"
    },
    {
        questionText: "How should a process design allow for exceptional situations?",
        options: [
            "Create rules to handle exceptions generally",
            "Remove the option for process exceptions",
            "Create an additional process for each exception",
            "Include all exception steps in the main process"
        ],
        "correctAnswer": "Create rules to handle exceptions generally"
    },
    {
        questionText: "What is the MOST LIKELY reason that incident management would need a temporary team to work together?",
        options: [
            "To escalate an incident to a supplier or partner",
            "So customers and users are provided with timely updates",
            "To resolve a complex or major incident",
            "So users can resolve their own incidents with self-help"
        ],
        "correctAnswer": "To resolve a complex or major incident"
    },

];


