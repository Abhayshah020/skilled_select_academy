"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useParams } from "next/navigation"

const courseDetails: Record<string, any> = {
  bsb40520: {
    title: "Certificate IV in Leadership and Management",
    code: "BSB40520",
    category: "Leadership & Management",
    image: "/professional-business-leadership-training.jpg",

    qualificationDescription:
      "This qualification reflects the role of individuals working as developing and emerging leaders and managers in a range of enterprise and industry contexts. Learners gain the skills to lead teams, coordinate business operations, and respond to predictable and unpredictable workplace challenges.",

    duration: "12 months",
    studyMode: "Blended (Online + In-person)",
    // units: 12,
    startDate: "Monthly intakes",

    licensing:
      "No licensing, legislative or certification requirements apply to this qualification at the time of publication.",

    entryRequirements: "Nil",

    releaseHistory: [
      {
        release: "Release 4",
        note:
          "First released with BSB Business Services Training Package Version 8.0. Four newly created cyber security units added to Group B electives.",
      },
      {
        release: "Release 3",
        note:
          "First released with Version 7.2. Added BSBWHS432X to elective unit list.",
      },
      {
        release: "Release 2",
        note:
          "First released with Version 7.1. Packaging rule typographical amendment.",
      },
      {
        release: "Release 1",
        note:
          "First released with Version 7.0.",
      },
    ],
    packagingRules: {
      totalUnits: 12,
      coreUnits: 5,
      electiveUnits: 7,
      rules: [
        "At least 4 elective units must be selected from Group A.",
        "Up to 3 elective units may be selected from Groups A or B.",
        "Up to 2 units may be selected from Certificate IV or above qualifications.",
        "Elective units must be relevant to the work environment.",
        "Electives must maintain AQF alignment and vocational integrity."
      ]
    },

    units: {
      core: [
        { code: "BSBLDR411", title: "Demonstrate leadership in the workplace" },
        { code: "BSBLDR413", title: "Lead effective workplace relationships" },
        { code: "BSBOPS402", title: "Coordinate business operational plans" },
        { code: "BSBXCM401", title: "Apply communication strategies in the workplace" },
        { code: "BSBXTW401", title: "Lead and facilitate a team" }
      ],
      electives: {
        groupA: [
          { code: "BSBCMM412", title: "Lead difficult conversations" },
          { code: "BSBCRT411", title: "Apply critical thinking to work practices" },
          { code: "BSBCRT413", title: "Collaborate in creative processes" },
          { code: "BSBFIN401", title: "Report on financial activity" },
          { code: "BSBLDR412", title: "Communicate effectively as a workplace leader" },
          { code: "BSBLDR414", title: "Lead team effectiveness" },
          { code: "BSBLDR521", title: "Lead the development of diverse workforces" },
          { code: "BSBOPS403", title: "Apply business risk management processes" },
          { code: "BSBPEF402", title: "Develop personal work priorities" },
          { code: "BSBSTR401", title: "Promote innovation in team environments" },
          { code: "BSBSTR502", title: "Facilitate continuous improvement" },
          { code: "BSBTWK401", title: "Build and maintain business relationships" },
          { code: "BSBWHS411", title: "Implement and monitor WHS policies" },
          { code: "BSBWHS432X", title: "Contribute to organisational mental health response" },
          { code: "BSBXBD403", title: "Analyse big data" },
          { code: "BSBXBD404", title: "Use big data for operational decision making" }
        ],
        groupB: [
          { code: "BSBCRT412", title: "Articulate, present and debate ideas" },
          { code: "BSBOPS401", title: "Coordinate business resources" },
          { code: "BSBOPS404", title: "Implement customer service strategies" },
          { code: "BSBOPS405", title: "Organise business meetings" },
          { code: "BSBOPS407X", title: "Support organisational response to disruption" },
          { code: "BSBPEF401", title: "Manage personal health and wellbeing" },
          { code: "BSBPEF403", title: "Lead personal development" },
          { code: "BSBPEF502", title: "Develop and use emotional intelligence" },
          { code: "BSBPMG430", title: "Undertake project work" },
          { code: "BSBSUS411", title: "Implement environmentally sustainable work practices" },
          { code: "BSBSUS412", title: "Develop workplace sustainability plans" },
          { code: "BSBWRT411", title: "Write complex documents" },
          { code: "BSBXCS406", title: "Develop cyber security insider threat and risk response plans" },
          { code: "BSBXCS407", title: "Develop cyber hygiene best practice plan" },
          { code: "BSBXCS408", title: "Develop employee cyber security risk profiles" },
          { code: "BSBXCS409", title: "Implement organisational cyber security insider threat prevention strategies" },
          { code: "SIRXCEG004", title: "Create a customer-centric culture" }
        ]
      }
    },

    outcomes: [
      "Team Leader",
      "Supervisor",
      "Operations Coordinator",
      "Office Manager",
      "Emerging Business Manager",
    ],
    modificationHistory: [
      {
        release: "Release 4",
        comments: [
          "This version first released with BSB Business Services Training Package Version 8.0.",
          "Four newly created units for cyber security awareness added to Group B electives:",
          "BSBXCS406 Develop cyber security insider threat and risk response plans",
          "BSBXCS407 Develop cyber hygiene best practice plan",
          "BSBXCS408 Develop employee cyber security risk profiles",
          "BSBXCS409 Plan and implement organisational cyber security insider threat prevention",
        ],
      },
      {
        release: "Release 3",
        comments: [
          "This version first released with BSB Business Services Training Package Version 7.2.",
          "Added BSBWHS432X Contribute to organisational mental health response in the context of disruptive events to the elective unit list.",
        ],
      },
      {
        release: "Release 2",
        comments: [
          "This version first released with BSB Business Services Training Package Version 7.1.",
          "Release created to amend typographical error in packaging rules.",
        ],
      },
      {
        release: "Release 1",
        comments: [
          "This version first released with BSB Business Services Training Package Version 7.0.",
        ],
      },
    ]

  },
  chc33021: {
    code: "CHC33021",
    title: "Certificate III in Individual Support",
    category: "Community Services",
    duration: "12 months",
    studyMode: "Blended (Online + In-person)",
    image: "/community-care-and-support-services.jpg",
    // units: 12,
    startDate: "Monthly intakes",
    modificationHistory: [
      {
        release: "Not Applicable",
        comments: [
          "No modification history is available for this qualification."
        ]
      }
    ],
    outcomes: [
      "Team Leader",
      "Supervisor",
      "Operations Coordinator",
      "Office Manager",
      "Emerging Business Manager",
    ],
    qualificationDescription: [
      "This qualification reflects the role of individuals in the community, home or residential care setting who work under supervision and delegation as a part of a multi-disciplinary team, following an individualised plan to provide person-centred support to people who may require support due to ageing, disability or some other reason.",
      "These individuals take responsibility for their own outputs within the scope of their job role and delegation. Workers have a range of factual, technical and procedural knowledge, as well as some theoretical knowledge of the concepts and practices required to provide person-centred support.",
      "The skills in this qualification must be applied in accordance with Commonwealth and State/Territory legislation, Australian standards and industry codes of practice.",
      "To achieve this qualification, the candidate must have completed at least 120 hours of work as detailed in the Assessment Requirements of the units of competency.",
      "No licensing, legislative, regulatory or certification requirements apply to this qualification at the time of publication."
    ],
    packagingRules: {
      totalUnits: 15,
      coreUnits: 9,
      electiveUnits: 6,
      rules: [
        "At least 3 elective units must be selected from Group A or B.",
        "Remaining elective units may be selected from Groups A, B or C.",
        "Any combination of electives that meets the rules can be selected for the award of the qualification.",
        "All electives must contribute to a valid, industry-supported vocational outcome."
      ],
      specialisations: {
        Ageing: "All Group A electives must be selected.",
        Disability: "All Group B electives must be selected.",
        AgeingandDisability: "All Group A and Group B electives must be selected."
      }
    },
    units: {
      core: [
        { code: "CHCCCS031", title: "Provide individualised support" },
        { code: "CHCCCS038", title: "Facilitate the empowerment of people receiving support" },
        { code: "CHCCCS040", title: "Support independence and wellbeing" },
        { code: "CHCCCS041", title: "Recognise healthy body systems" },
        { code: "CHCCOM005", title: "Communicate and work in health or community services" },
        { code: "CHCDIV001", title: "Work with diverse people" },
        { code: "CHCLEG001", title: "Work legally and ethically" },
        { code: "HLTINF006", title: "Apply basic principles and practices of infection prevention and control" },
        { code: "HLTWHS002", title: "Follow safe work practices for direct client care" }
      ],
      electives: {
        groupA: [
          { code: "CHCAGE011", title: "Provide support to people living with dementia" },
          { code: "CHCAGE013", title: "Work effectively in aged care" },
          { code: "CHCPAL003", title: "Deliver care services using a palliative approach" }
        ],
        groupB: [
          { code: "CHCDIS011", title: "Contribute to ongoing skills development using a strengths-based approach" },
          { code: "CHCDIS012", title: "Support community participation and social inclusion" },
          { code: "CHCDIS020", title: "Work effectively in disability support" }
        ],
        groupC: [
          { code: "CHCAGE007", title: "Recognise and report risk of falls" },
          { code: "CHCAGE012", title: "Provide food services" },
          { code: "CHCAOD001", title: "Work in an alcohol and other drugs context" },
          { code: "CHCCCS001", title: "Address the needs of people with chronic disease" },
          { code: "CHCCCS017", title: "Provide loss and grief support" },
          { code: "CHCCCS033", title: "Identify and report abuse" },
          { code: "CHCCCS034", title: "Facilitate independent travel" },
          { code: "CHCCCS035", title: "Support people with autism spectrum disorder" },
          { code: "CHCCCS036", title: "Support relationships with carer and family" },
          { code: "CHCCCS037", title: "Visit client residence" },
          { code: "CHCCCS042", title: "Prepare meals" },
          { code: "CHCCCS043", title: "Support positive mealtime experiences" },
          { code: "CHCCCS044", title: "Follow established person-centred behaviour supports" },
          { code: "CHCDIS013", title: "Assist with communication using augmentative and alternative communication methods" },
          { code: "CHCDIV002", title: "Promote Aboriginal and/or Torres Strait Islander cultural safety" },
          { code: "CHCGRP001", title: "Support group activities" },
          { code: "CHCMHS001", title: "Work with people with mental health issues" },
          { code: "HLTAID011", title: "Provide First Aid" },
          { code: "HLTHPS006", title: "Assist clients with medication" },
          { code: "HLTOHC007", title: "Recognise and respond to oral health issues" }
        ]
      }
    }
  },
  chc43015: {
    title: "Certificate IV in Ageing Support",
    code: "CHC43015",
    image: "/aged-care-elderly-support-services.jpg",
    category: "Community Services",
    startDate: "Monthly intakes",
    duration: "12 months",
    studyMode: "Blended (Online + In-person)",
    modificationHistory: [
      {
        release: "Release 4",
        comments: [
          "Minor change to update superseded elective units of competency."
        ]
      },
      {
        release: "Release 3",
        comments: [
          "Supersedes and is equivalent to CHC43015 Certificate IV in Ageing Support release 2.",
          "Minor change to update First Aid units of competency."
        ]
      },
      {
        release: "Release 2",
        comments: [
          "This version was released in CHC Community Services Training Package release 3.0.",
          "Units updated.",
          "Equivalent outcome."
        ]
      },
      {
        release: "Release 1",
        comments: [
          "This qualification was first released in CHC Community Services Release 2.0."
        ]
      }
    ],
    qualificationDescription: [
      "This qualification reflects the role of support workers who complete specialised tasks and functions in aged services; either in residential, home or community based environments.",
      "Workers will take responsibility for their own outputs within defined organisation guidelines and maintain quality service delivery through the development, facilitation and review of individualised service planning and delivery.",
      "Workers may be required to demonstrate leadership and have limited responsibility for the organisation and the quantity and quality of outputs of others within limited parameters."
    ],
    licensingInformation: "No licensing, legislative or certification requirements apply to this qualification at the time of publication.",
    entryRequirements: "This qualification has no entry requirements.",
    packagingRules: {
      totalUnits: 18,
      coreUnits: 15,
      electiveUnits: 3,
      rules: [
        "At least 2 elective units must be selected from the electives listed.",
        "Up to 1 elective unit may be selected from the electives listed, any endorsed Training Package or accredited course.",
        "All electives must be relevant to the work outcome.",
        "All electives chosen must contribute to a valid, industry-supported vocational outcome."
      ]
    },
    units: {
      core: [
        { code: "CHCADV001", title: "Facilitate the interests and rights of clients" },
        { code: "CHCAGE001", title: "Facilitate the empowerment of older people" },
        { code: "CHCAGE003", title: "Coordinate services for older people" },
        { code: "CHCAGE004", title: "Implement interventions with older people at risk" },
        { code: "CHCAGE005", title: "Provide support to people living with dementia" },
        { code: "CHCCCS006", title: "Facilitate individual service planning and delivery" },
        { code: "CHCCCS011", title: "Meet personal support needs" },
        { code: "CHCCCS023", title: "Support independence and wellbeing" },
        { code: "CHCCCS025", title: "Support relationships with carers and families" },
        { code: "CHCDIV001", title: "Work with diverse people" },
        { code: "CHCLEG003", title: "Manage legal and ethical compliance" },
        { code: "CHCPAL001", title: "Deliver care services using a palliative approach" },
        { code: "CHCPRP001", title: "Develop and maintain networks and collaborative partnerships" },
        { code: "HLTAAP001", title: "Recognise healthy body systems" },
        { code: "HLTWHS002", title: "Follow safe work practices for direct client care" }
      ],
      electives: {
        groupA: [
          { code: "CHCAGE008", title: "Implement falls prevention strategies" },
          { code: "CHCAGE012", title: "Provide food services" },
          { code: "CHCAOD001", title: "Work in an alcohol and other drugs context" },
          { code: "CHCCCS001", title: "Address the needs of people with chronic disease" },
          { code: "CHCCCS007", title: "Develop and implement service programs" },
          { code: "CHCCCS010", title: "Maintain a high standard of service" },
          { code: "CHCCCS017", title: "Provide loss and grief support" },
          { code: "CHCCCS018", title: "Provide suicide bereavement support" },
          { code: "CHCCCS019", title: "Recognise and respond to crisis situations" },
          { code: "CHCCCS033", title: "Identify and report abuse" },
          { code: "CHCCCS034", title: "Facilitate independent travel" },
          { code: "CHCCCS026", title: "Transport individuals" },
          { code: "CHCCCS038", title: "Facilitate the empowerment of people receiving support" },
          { code: "CHCCOM002", title: "Use communication to build relationships" },
          { code: "CHCDIS014", title: "Develop and use strategies for communication with augmentative and alternative communication systems" },
          { code: "CHCDIS017", title: "Facilitate community participation and social inclusion" },
          { code: "CHCDIS018", title: "Facilitate ongoing skills development using a person-centred approach" },
          { code: "CHCDIS019", title: "Provide person-centred services to people with disability with complex needs" },
          { code: "CHCDIV002", title: "Promote Aboriginal and/or Torres Strait Islander cultural safety" },
          { code: "CHCDIV003", title: "Manage and promote diversity" },
          { code: "CHCEDU002", title: "Plan health promotion and community intervention" },
          { code: "CHCCCS039", title: "Coordinate and monitor home-based support" },
          { code: "CHCINM001", title: "Meet statutory and organisation information requirements" },
          { code: "CHCLLN001", title: "Respond to client language, literacy and numeracy needs" },
          { code: "CHCMGT001", title: "Develop, implement and review quality framework" },
          { code: "CHCMGT002", title: "Manage partnership agreements with services providers" },
          { code: "CHCMGT006", title: "Coordinate client directed services" },
          { code: "CHCMHS001", title: "Work with people with mental health issues" },
          { code: "CHCPAL004", title: "Contribute to planning and implementation of care services using a palliative approach" },
          { code: "CHCPAS003", title: "Plan for the provision of pastoral and spiritual care" },
          { code: "CHCPAS004", title: "Provide pastoral and spiritual care" },
          { code: "CHCSET003", title: "Work with forced migrants" },
          { code: "CHCSOH013", title: "Work with people experiencing or at risk of homelessness" },
          { code: "HLTAAP002", title: "Confirm physical health status" },
          { code: "HLTAHA035", title: "Provide support in dysphagia management" },
          { code: "HLTAHA039", title: "Assist in the development of meals and menus to meet dietary and cultural requirements" },
          { code: "HLTAHA040", title: "Assist with the monitoring and modification of meals and menus according to individualised plans" },
          { code: "HLTAHA042", title: "Assist with screening and management of nutritional risk" },
          { code: "HLTAID011", title: "Provide first aid" },
          { code: "HLTAID014", title: "Provide advanced first aid" },
          { code: "HLTFSE001", title: "Follow basic food safety practices" },
          { code: "HLTHPS006", title: "Assist clients with medication" },
          { code: "HLTHPS007", title: "Administer and monitor medications" },
          { code: "HLTOHC008", title: "Inform and support patients and groups about oral health" },
          { code: "HLTOHC009", title: "Apply and use basic oral health products" },
          { code: "HLTOHC004", title: "Provide or assist with oral hygiene" },
          { code: "HLTOHC010", title: "Use basic oral health screening tools" },
          { code: "HLTOHC011", title: "Apply fluoride varnish" },
          { code: "HLTWHS003", title: "Maintain work health and safety" },
          { code: "HLTWHS004", title: "Manage work health and safety" },
          { code: "BSBFIN501", title: "Manage budgets and financial plans" },
          { code: "BSBOPS301", title: "Maintain business resources" },
          { code: "BSBINS201", title: "Process and maintain workplace information" },
          { code: "BSBLDR413", title: "Lead effective workplace relationships" },
          { code: "BSBLDR411", title: "Demonstrate leadership in the workplace" },
          { code: "BSBSTR402", title: "Implement continuous improvement" },
          { code: "BSBTEC201", title: "Use business software applications" },
          { code: "TAEDEL412", title: "Facilitate workplace-based learning" },
          { code: "TAEDEL414", title: "Mentor in the workplace" }
        ]
      }
    }
  },
  chc43121: {
    title: "Certificate IV in Disability Support",
    code: "CHC43121",
    image: "/disability-support-and-inclusion.jpg",
    category: "Community Services",
    startDate: "Monthly intakes",
    studyMode: "Blended (Online + In-person)",
    duration: "12 months",
    modificationHistory: [
      {
        release: "Not applicable",
        comments: [
          "No modification history is available for this qualification."
        ]
      }
    ],
    qualificationDescription: [
      "This qualification reflects the role of individuals in a range of community settings and peoples’ homes, who provide support in a manner that empowers people with disabilities to achieve greater levels of independence, self-reliance, community participation and wellbeing.",
      "Workers promote a person-centred approach, work according to and may contribute to an individualised plan, and work without direct supervision.",
      "They may be required to supervise and/or coordinate a small team.",
      "The skills in this qualification must be applied in accordance with Commonwealth and State/Territory legislation, Australian standards and industry codes of practice."
    ],
    licensingInformation: "No licensing, legislative, regulatory or certification requirements apply to this qualification at the time of publication.",
    entryRequirements: [
      "Completion of CHC33021 Certificate III in Individual Support (Disability)",
      "OR Completion of CHC33015 Certificate III in Individual Support (Disability)",
      "OR Completion of CHC30408 Certificate III in Disability PLUS the CHCSS00125 Entry to Certificate IV in Disability Support Skill Set"
    ],
    packagingRules: {
      totalUnits: 10,
      coreUnits: 7,
      electiveUnits: 3,
      rules: [
        "At least 2 elective units must be selected from the electives listed.",
        "Up to 1 elective unit may be selected from the electives listed, or any current endorsed Training Package or accredited course.",
        "Units marked with * have one or more prerequisite units.",
        "All electives chosen must contribute to a valid, industry-supported vocational outcome."
      ]
    },
    units: {
      core: [
        { code: "CHCCCS044", title: "Follow established person-centred behaviour supports" },
        { code: "CHCDIS017", title: "Facilitate community participation and social inclusion" },
        { code: "CHCDIS018", title: "Facilitate ongoing skills development using a person-centred approach" },
        { code: "CHCDIS019", title: "Provide person-centred services to people with disability with complex needs" },
        { code: "CHCLEG003", title: "Manage legal and ethical compliance" },
        { code: "CHCMHS001", title: "Work with people with mental health issues" },
        { code: "HLTWHS003", title: "Maintain work health and safety" }
      ],
      electives: {
        groupA: [
          { code: "BSBLDR411", title: "Demonstrate leadership in the workplace" },
          { code: "BSBLDR413", title: "Lead effective workplace relationships" },
          { code: "BSBSTR402", title: "Implement continuous improvement" },
          { code: "CHCADV001", title: "Facilitate the interests and rights of clients" },
          { code: "CHCADV002", title: "Provide advocacy and representation services" },
          { code: "CHCAGE009", title: "Provide services for older people" },
          { code: "CHCAGE011", title: "Provide support to people living with dementia" },
          { code: "CHCAOD001", title: "Work in an alcohol and other drugs context" },
          { code: "CHCCCS001", title: "Address the needs of people with chronic disease" },
          { code: "CHCCCS002", title: "Assist with movement" },
          { code: "CHCCCS004", title: "Assess co-existing needs" },
          { code: "CHCCCS005", title: "Conduct individual assessments" },
          { code: "CHCCCS006", title: "Facilitate individual service planning and delivery" },
          { code: "CHCCCS007", title: "Develop and implement service programs" },
          { code: "CHCCCS008", title: "Develop strategies to address unmet needs" },
          { code: "CHCCCS010", title: "Maintain a high standard of service" },
          { code: "CHCCCS017", title: "Provide loss and grief support" },
          { code: "CHCCCS018", title: "Provide suicide bereavement support" },
          { code: "CHCCCS019", title: "Recognise and respond to crisis situations" },
          { code: "CHCCCS034", title: "Facilitate independent travel" },
          { code: "CHCCCS026", title: "Transport individuals" },
          { code: "CHCCCS033", title: "Identify and report abuse" },
          { code: "CHCCCS035", title: "Support individuals people with autism spectrum disorder" },
          { code: "CHCCCS036", title: "Support relationships with carer and family" },
          { code: "CHCCCS037", title: "Visit client residence" },
          { code: "CHCCCS039", title: "Coordinate and monitor home-based support" },
          { code: "CHCCCS041", title: "Recognise healthy body systems" },
          { code: "CHCCCS042", title: "Prepare meals" },
          { code: "CHCCCS043", title: "Support positive mealtime experiences" },
          { code: "CHCCOM002", title: "Use communication to build relationships" },
          { code: "CHCDIS014", title: "Develop and use strategies for communication with augmentative and alternative communication systems" },
          { code: "CHCDIS015", title: "Develop and provide person-centred service responses" },
          { code: "CHCDIS016", title: "Develop and promote positive person-centred behaviour supports" },
          { code: "CHCDIS020", title: "Work effectively in disability support" },
          { code: "CHCDIS021", title: "Prepare for NDIS support coordination" },
          { code: "CHCDIS022", title: "Coordinate NDIS participant support" },
          { code: "CHCDIS023", title: "Provide specialised support" },
          { code: "CHCDIV002", title: "Promote Aboriginal and/or Torres Strait Islander cultural safety" },
          { code: "CHCDIV003", title: "Manage and promote diversity" },
          { code: "CHCINM001", title: "Meet statutory and organisation information requirements" },
          { code: "CHCMGT001", title: "Develop, implement and review quality framework" },
          { code: "CHCMGT002", title: "Manage partnership agreements with service providers" },
          { code: "CHCMHS007", title: "Work effectively in trauma informed care" },
          { code: "CHCPAL003", title: "Deliver care services using a palliative approach" },
          { code: "CHCPAL004", title: "Contribute to planning and implementation of care services using a palliative approach" },
          { code: "HLTAAP002", title: "Confirm physical health status" },
          { code: "HLTFSE001", title: "Follow basic food safety practices" },
          { code: "HLTHPS006", title: "Assist clients with medication" },
          { code: "HLTOHC007", title: "Recognise and respond to oral health issues" },
          { code: "HLTWHS004", title: "Manage work health and safety" }
        ]
      }
    }
  },
  shb20216: {
    title: "Certificate II in Salon Assistant",
    code: "SHB20216",
    image: "/beauty-salon-assistant-training.jpg",
    category: "Community Services",
    startDate: "Monthly intakes",
    studyMode: "Blended (Online + In-person)",
    duration: "12 months",
    modificationHistory: [
      {
        release: "Not applicable",
        comments: [
          "No modification history is available for this qualification."
        ]
      }
    ],
    qualificationDescription: [
      "This is a preparatory qualification which provides a defined and limited range of basic skills and knowledge used in hairdressing salons by individuals who provide assistance with client services.",
      "These routine and repetitive tasks are completed under direct supervision and with guidance from hairdressers who manage the client service.",
      "The combined skills and knowledge do not provide for a job outcome as a hairdresser and this qualification is intended to prepare individuals for further training."
    ],
    licensingInformation: "No occupational licensing, certification or specific legislative requirements apply to this qualification at the time of publication.",
    entryRequirements: [
      "There are no entry requirements for this qualification."
    ],
    packagingRules: {
      totalUnits: 12,
      coreUnits: 8,
      electiveUnits: 4,
      rules: [
        "8 core units must be completed.",
        "4 elective units must be selected from the elective unit list.",
        "All units must contribute to a valid vocational outcome."
      ]
    },
    units: {
      core: [
        { code: "BSBWHS201", title: "Contribute to health and safety of self and others" },
        { code: "SHBHBAS001", title: "Provide shampoo and basin services" },
        { code: "SHBHDES001", title: "Dry hair to shape" },
        { code: "SHBHIND001", title: "Maintain and organise tools, equipment and work areas" },
        { code: "SHBXCCS001", title: "Conduct salon financial transactions" },
        { code: "SHBXCCS003", title: "Greet and prepare clients for salon services" },
        { code: "SHBXIND001", title: "Comply with organisational requirements within a personal services environment" },
        { code: "SHBXIND002", title: "Communicate as part of a salon team" }
      ],
      electives: {
        groupA: [
          { code: "SHBHBAS002", title: "Provide head, neck and shoulder massages for relaxation" },
          { code: "SHBHCLS001", title: "Apply hair colour products" },
          { code: "SHBHDES002", title: "Braid hair" },
          { code: "SHBHIND002", title: "Research and use hairdressing industry information" },
          { code: "SHBHREF005", title: "Rinse and neutralise chemically restructured hair" },
          { code: "SHBXCCS004", title: "Recommend products and services" },
          { code: "SIRRMER001", title: "Produce visual merchandise displays" },
          { code: "SIRRINV001", title: "Receive and handle retail stock" },
          { code: "SIRXSLS001", title: "Sell to the retail customer" }
        ]
      }
    }
  }
}


export default function CourseDetailPage() {
  const params = useParams()
  const course = courseDetails[params.id]

  if (!course) {
    return (
      <main className="min-h-screen bg-background pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Course Not Found</h1>
          <p className="text-foreground/70 mb-8">The course you're looking for doesn't exist.</p>
          <Link
            href="/courses"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold"
          >
            Back to Courses
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Course Header */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            priority
            className="object-cover scale-110"
          />
          {/* Dark + Blur Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-md" />
        </div>

        <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-white/70 font-medium mb-8 hover:text-white transition"
            >
              <ArrowLeft size={18} />
              Back to Courses
            </Link>

            {/* Glass Content Card */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-6 sm:px-8 md:px-12 py-10 md:py-14">
              <div className="flex flex-col items-center text-center gap-6">
                {/* Course Code */}
                <span className="inline-flex px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold tracking-wide">
                  {course.code}
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  {course.title}
                </h1>

                {/* qualificationDescription */}
                <p className="text-justify sm:text-lg text-white/80">
                  <span className="text-xl leading-relaxed">
                    {course.qualificationDescription}
                  </span>
                </p>

                {/* Info Grid */}
                <div className="flex flex-row flex-wrap gap-4 items-center justify-center w-full pt-6">
                  {[
                    { label: "Duration", value: course.duration },
                    { label: "Study Mode", value: course.studyMode },
                    // { label: "Units", value: `${course.units} Units` },
                    { label: "Start Date", value: course.startDate },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4"
                    >
                      <p className="text-xs uppercase tracking-wide text-white mb-1">
                        {item.label}
                      </p>
                      <p className="font-semibold text-white text-sm sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units Structure */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Packaging Rules Card */}
          <div className="bg-white rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Packaging Rules
            </h2>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Units", value: course.packagingRules.totalUnits },
                { label: "Core Units", value: course.packagingRules.coreUnits },
                { label: "Elective Units", value: course.packagingRules.electiveUnits },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-muted/30 border border-border p-4"
                >
                  <p className="text-sm text-foreground/60">{item.label}</p>
                  <p className="text-xl font-semibold text-primary">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Rules List */}
            <ul className="space-y-3">
              {course.packagingRules.rules.map((rule: string, i: number) => (
                <li key={i} className="flex gap-3 text-foreground/70">
                  <CheckCircle2 className="text-accent mt-1" size={18} />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialisations (Optional) */}
          {course.packagingRules.specialisations && (
            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                Specialisation Options
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(course.packagingRules.specialisations).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="rounded-xl bg-muted/30 border border-border p-5"
                    >
                      <p className="font-semibold text-primary mb-2">
                        {key.replace(/and/g, " & ")}
                      </p>
                      <p className="text-sm text-foreground/70">{value}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Course Content */}
      {course?.outline?.length > 0 && course?.outcomes?.length > 0 && (<section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* What You'll Learn */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">What You'll Learn</h2>
              <div className="space-y-4">
                {course.outline.map((item: string, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={20} className="text-accent-foreground" />
                    </div>
                    <p className="text-foreground/70 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Career Outcomes</h2>
              <div className="space-y-4">
                {course.outcomes.map((outcome: string, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={20} className="text-primary-foreground" />
                    </div>
                    <p className="text-foreground/70 text-lg">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>)}

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Modification History
            </h2>
            <p className="text-foreground/70 max-w-2xl">
              Track changes and updates made to this qualification across different releases.
            </p>
          </div>

          {/* Table Wrapper */}
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-primary/5 px-6 py-4 text-sm font-semibold text-primary">
              <div className="col-span-3 md:col-span-2">Release</div>
              <div className="col-span-9 md:col-span-10">Comments</div>
            </div>

            {/* Table Rows */}
            {course.modificationHistory.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 px-6 py-6 border-t border-border"
              >
                {/* Release */}
                <div className="col-span-12 md:col-span-2">
                  <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                    {item.release}
                  </span>
                </div>

                {/* Comments */}
                <div className="col-span-12 md:col-span-10 space-y-2 text-foreground/80">
                  {item.comments.map((comment, i) => (
                    <p key={i} className="text-sm md:text-base leading-relaxed">
                      {comment}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Units Structure */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Core Units */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Core Units
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {course.units.core.map((unit, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-white p-5 hover:shadow-md transition"
                >
                  <p className="text-sm font-semibold text-accent">{unit.code}</p>
                  <p className="text-foreground/80">{unit.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Electives */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
              Elective Units
            </h2>

            <div className="flex flex-col gap-12">
              {Object.entries(course.units.electives).map(([group, units]) => (
                <div key={group}>
                  <h3 className="text-xl font-semibold text-accent mb-4 uppercase">
                    {group.replace("group", "Group ")}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 gap-4">
                    {units.map((unit, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-white border border-border p-4"
                      >
                        <p className="text-sm font-semibold text-primary">
                          {unit.code}
                        </p>
                        <p className="text-sm text-foreground/80">
                          {unit.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Enrol?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Start your {course.title.toLowerCase()} today and transform your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center w-full sm:w-auto"
            >
              Get More Information
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center w-full sm:w-auto"
            >
              Explore Other Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
