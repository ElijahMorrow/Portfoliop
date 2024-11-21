import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: '2023',
        title: 'LMD Staffing Soulutions - ServiceNow Developer',
        duration: 'Present',
        details: `<ul class="list-disc pl-5">
    <li>Automated workflows and business processes using ServiceNow scripting.</li>
    <li>Developed and configured ServiceNow applications, enhancing system security and aligning with federal compliance standards.</li>
    <li>Configured and customized ServiceNow Service Portal using AngularJS, HTML, and CSS, significantly improving user experience and satisfaction.</li>
    <li>Designed and integrated REST/SOAP APIs for seamless data exchange between ServiceNow and third-party platforms, such as PeopleSoft and SharePoint.</li>
    <li>Conducted requirements gathering and analysis sessions with stakeholders, translating complex requirements into effective technical solutions and ensuring alignment with business objectives.</li>
    <li>Conducted regression testing during platform upgrades, ensuring zero defects post-deployment.</li>
    <li>Collaborated cross-functionally to drive continuous improvement initiatives, contributing to a culture of innovation and excellence within the organization.</li>
    <li>Architected and implemented custom ServiceNow solutions for IT Asset Management, Change Management, and Configuration Management (CMDB).</li>
    <li>Managed end-to-end ServiceNow development lifecycle, from requirements analysis to deployment, resulting in projects with zero defects.</li>
</ul>`,
    },
    {
        year: '2021-2023',
        title: 'PAYPAL - ServiceNow Developer',
        duration: '2 Years',
        details: `<ul class="list-disc pl-5">
        <li>Developed advanced reports and dashboards, providing stakeholders with actionable insights and enhancing data-driven decision-making.</li>
        <li>Spearheaded QA and UAT efforts, ensuring smooth transitions to production with minimal downtime.</li>
        <li>Designed and implemented custom integrations and workflows, leveraging REST APIs to synchronize data across multiple business systems.</li>
        <li>Utilized Agile methodologies and Jira for sprint planning, backlog prioritization, and task assignments.</li>
        <li>Engineered complex integrations between ServiceNow and enterprise platforms (SAP, PeopleSoft, SharePoint), reducing data redundancy and enhancing system interoperability.</li>
        <li>Managed and optimized data models, batch jobs, and stored procedures using PL/SQL and NoSQL.</li>
      </ul>`,
    },
    {
        year: '2018-2021',
        title: 'RELATIVITY - ServiceNow Admin/Developer',
        duration: '3 Years',
        details: `  <ul class="list-disc pl-5">
        <li>Provided technical support to users, resolving ServiceNow-related issues promptly and effectively.</li>
        <li>Collaborated with cross-functional teams to identify and implement process improvements within the ServiceNow platform.</li>
        <li>Conducted user training sessions to enhance knowledge and utilization of ServiceNow applications and workflows.</li>
        <li>Maintained accurate records of support requests, solutions provided, and system configurations.</li>
        <li>Proactively identified and resolved system issues through advanced debugging, maintaining high system reliability.</li>
        <li>Developed and customized ServiceNow modules, including Incident, Problem, and Change Management, improving IT service delivery.</li>
      </ul>
            `,
    },

];
const Work = () => {
    return (
        <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-4'  > Work </h1>
            {data.map((item, idx) => (
                <WorkItem key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;