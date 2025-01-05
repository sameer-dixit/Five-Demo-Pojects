const quizQuestions = [
  // Operating Systems (OS) Questions
  {
    topic: "Operating Systems",
    question: "What is the main function of an operating system?",
    options: [
      "Managing hardware and software resources",
      "Compiling code into machine language",
      "Connecting to the internet",
      "Providing antivirus protection",
    ],
    answer: "Managing hardware and software resources",
  },
  {
    topic: "Operating Systems",
    question: "Which of the following is a type of operating system?",
    options: [
      "Windows",
      "Python",
      "Oracle",
      "HTML",
    ],
    answer: "Windows",
  },
  {
    topic: "Operating Systems",
    question: "What is a process in an operating system?",
    options: [
      "A program in execution",
      "A software application",
      "A hardware component",
      "A system call",
    ],
    answer: "A program in execution",
  },
  {
    topic: "Operating Systems",
    question: "Which scheduling algorithm is also known as shortest-job-first?",
    options: [
      "Round Robin",
      "First Come First Serve",
      "SJF",
      "Multilevel Queue",
    ],
    answer: "SJF",
  },
  {
    topic: "Operating Systems",
    question: "What does the term 'virtual memory' refer to?",
    options: [
      "A type of ROM",
      "A software program",
      "Memory that appears larger than physical memory",
      "A CPU scheduling technique",
    ],
    answer: "Memory that appears larger than physical memory",
  },

  // Computer Networks (CN) Questions
  {
    topic: "Computer Networks",
    question: "What is the main purpose of the OSI model?",
    options: [
      "To provide a standard framework for network communication",
      "To secure data over the network",
      "To compress network data",
      "To detect network errors",
    ],
    answer: "To provide a standard framework for network communication",
  },
  {
    topic: "Computer Networks",
    question: "Which layer of the OSI model is responsible for routing packets?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Physical Layer",
    ],
    answer: "Network Layer",
  },
  {
    topic: "Computer Networks",
    question: "Which protocol is used to transfer files over the internet?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "POP3",
    ],
    answer: "FTP",
  },
  {
    topic: "Computer Networks",
    question: "What is the full form of IP in networking?",
    options: [
      "Internet Protocol",
      "Interconnection Process",
      "Integrated Protocol",
      "Information Protocol",
    ],
    answer: "Internet Protocol",
  },
  {
    topic: "Computer Networks",
    question: "Which device is used to connect multiple devices on the same network?",
    options: [
      "Router",
      "Switch",
      "Firewall",
      "Access Point",
    ],
    answer: "Switch",
  },

  // More OS and CN Questions
  {
    topic: "Operating Systems",
    question: "Which of these is not a type of operating system?",
    options: [
      "Real-time OS",
      "Batch OS",
      "Distributed OS",
      "Firewall OS",
    ],
    answer: "Firewall OS",
  },
  {
    topic: "Operating Systems",
    question: "What is the purpose of a semaphore in an OS?",
    options: [
      "To synchronize processes",
      "To compile code",
      "To allocate memory",
      "To manage files",
    ],
    answer: "To synchronize processes",
  },
  {
    topic: "Computer Networks",
    question: "Which topology uses a central hub to connect devices?",
    options: [
      "Bus",
      "Star",
      "Ring",
      "Mesh",
    ],
    answer: "Star",
  },
  {
    topic: "Computer Networks",
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Data Network System",
      "Digital Network Service",
      "Device Name Service",
    ],
    answer: "Domain Name System",
  },
  {
    topic: "Computer Networks",
    question: "Which protocol ensures reliable data transmission?",
    options: [
      "TCP",
      "UDP",
      "ICMP",
      "ARP",
    ],
    answer: "TCP",
  },
  {
    topic: "Operating Systems",
    question: "What is the role of a kernel in an operating system?",
    options: [
      "Handles communication between software and hardware",
      "Provides user authentication",
      "Manages the user interface",
      "Generates reports",
    ],
    answer: "Handles communication between software and hardware",
  },
  {
    topic: "Computer Networks",
    question: "What is a MAC address?",
    options: [
      "An IP address",
      "A unique identifier for a device's network interface",
      "A protocol for network communication",
      "A routing table entry",
    ],
    answer: "A unique identifier for a device's network interface",
  },
  {
    topic: "Operating Systems",
    question: "Which of these is an example of a distributed operating system?",
    options: [
      "Windows 10",
      "Unix",
      "Linux",
      "Apache Hadoop",
    ],
    answer: "Apache Hadoop",
  },
  {
    topic: "Computer Networks",
    question: "Which layer in the TCP/IP model is equivalent to the OSI model's Transport Layer?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Link Layer",
    ],
    answer: "Transport Layer",
  },
];


let i=0;
let n=quizQuestions.length;
const topic=document.querySelector('#topic');

const question=document.querySelector('#question');
const options=document.querySelector('#options');
const nextbtn=document.querySelector('#next-btn');

while(i<n){
  if(i==0){
    topic.textContent=quizQuestions[i].topic;
    question.textContent=quizQuestions[i].question;
    for(let j=0;j<quizQuestions[i].options.length;j++){
      const newListItem = document.createElement('li');
      newListItem.textContent =quizQuestions[i].options[j];
      options.appendChild(newListItem);
    }
    const listitems=document.querySelectorAll('#options li');
    listitems.forEach(function(val){
      val.addEventListener("click",function(){
        listitems.forEach(function(item){
          item.classList.remove("selected");
        });
    val.classList.add("selected");
    if(val.classList.contains("selected")){
      nextbtn.disabled=false;

    }
        
      
      })
    });
    

  }else{
    
  }
  i++;
}







// step-1 display question and answer-done
// step-2 on click the next question should come
