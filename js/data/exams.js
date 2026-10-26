/* Practice exams, one per unit, with the same structure and difficulty as the real exam
   (INGLES III SEM.II/2026 — Ingeniería de Sistemas UMSS, 13/08/2026):
     Part 1  Matching (1-10)            match.a[i].k = letter of the right definition in match.b
     Part 2  Word box (11-20)           fill[box].items[i].k = letter in fill[box].box
     Part 3  Multiple choice (21-40)    mc[i].k = index (0-3) of the right option
     Part 4  Reading comprehension      reading.tf[i].k = true/false (41-45)
                                        reading.gaps[i].k = letter in reading.words (46-55)
   real: number of the question in the real exam (the item was on that exam). */
window.QUIZ_EXAMS = {
  u1: {
    match: {
      a: [
        { t: "Software", k: "B" },
        { t: "Engineering", k: "E" },
        { t: "Software engineering", k: "J" },
        { t: "SDLC", k: "D" },
        { t: "Debugging", k: "A" },
        { t: "Stakeholder", k: "F" },
        { t: "Maintenance", k: "G" },
        { t: "Scalability", k: "C" },
        { t: "Requirements analysis", k: "H" },
        { t: "Deployment", k: "I" }
      ],
      b: {
        A: "The process of finding and fixing errors in code",
        B: "A collection of codes, documents, and triggers that does a specific job",
        C: "The ability of software to keep working well when it grows or is moved to a bigger setting",
        D: "Every phase of a software project, from planning the budget to retirement",
        E: "The development of products using best practices, principles, and methods",
        F: "A person, such as a client or a project manager, who has an interest in the software product",
        G: "Fixing bugs, updating software, and making sure it keeps working over time",
        H: "The stage where the needs of the users are defined at the start of a project",
        I: "Putting the finished software into operation for its users",
        J: "The branch of computer science that deals with the design, development, testing, and maintenance of software"
      }
    },
    fill: [
      {
        box: { A: "Transitional", B: "Operational", C: "Maintenance", D: "Software engineers", E: "Trustworthy" },
        items: [
          { q: "_____ software engineering includes all decisions about how the software will perform within a computer system, its budget, and its risks.", k: "B" },
          { q: "_____ software engineering deals with the adaptability and scalability of software when it is moved outside its initial setting.", k: "A" },
          { q: "Software engineering _____ improves and debugs current software to account for environmental changes and new technologies.", k: "C" },
          { q: "_____ apply engineering principles and knowledge of programming languages to build software solutions for end users.", k: "D" },
          { q: "One current challenge in software engineering is the need to develop _____ software.", k: "E" }
        ]
      },
      {
        box: { A: "large projects", B: "low-quality", C: "Collaboration", D: "computer graphics", E: "testing" },
        items: [
          { q: "Software engineering is mainly used for _____ based on software systems rather than single programs or applications.", k: "A" },
          { q: "Software engineering was introduced to address the issues of _____ software projects.", k: "B" },
          { q: "_____ with clients and project managers takes place from the outset of the project through completion.", k: "C" },
          { q: "Software engineering is tightly connected with other areas of computer science, such as artificial intelligence and _____.", k: "D" },
          { q: "Software engineers design ways of _____ new code to ensure quality and performance control.", k: "E" }
        ]
      }
    ],
    mc: [
      { q: "Software engineering was introduced primarily to address:", o: ["The need for faster computers", "Issues of low-quality software projects exceeding timelines and budgets", "The creation of video games", "Hardware manufacturing problems"], k: 1, real: 21 },
      { q: "Which of the following is NOT a type of software engineering mentioned in the text?", o: ["Operational software engineering", "Transitional software engineering", "Creative software engineering", "Software engineering maintenance"], k: 2, real: 22 },
      { q: "According to the text, software engineering has two parts. They are:", o: ["hardware and software", "coding and testing", "software and engineering", "design and budget"], k: 2 },
      { q: "Software is defined as:", o: ["a physical part of the computer", "a group of engineers working on a project", "a set of cables and devices", "a collection of codes, documents, and triggers that does a specific job"], k: 3 },
      { q: "The main goal of software engineering is to develop software applications improving:", o: ["quality, budget, and time efficiency", "the speed of the hardware", "the number of users", "the size of the code"], k: 0 },
      { q: "Software engineering is a systematic and disciplined approach that aims to create software that is:", o: ["cheap but unreliable", "fast but difficult to maintain", "high-quality, reliable, and maintainable", "only useful for small programs"], k: 2 },
      { q: "Which of these is NOT a common responsibility of a software engineer according to the text?", o: ["Designing and developing software systems and apps", "Manufacturing computer hardware", "Collaborating with other engineers and stakeholders", "Maintaining software systems applications"], k: 1 },
      { q: "Why do software engineers need to continuously check on the health of systems and apps?", o: ["Because of the dynamic nature of evolving technology", "Because clients do not pay on time", "Because computers are always broken", "Because the law requires daily reports"], k: 0 },
      { q: "Collaboration in a software project takes place:", o: ["only at the end of the project", "only when there are errors", "from the outset (when requirements are defined) through completion", "only during testing"], k: 2 },
      { q: "Software engineering is also connected with areas OUTSIDE the traditional computer domain, such as:", o: ["cognitive sciences and visual arts", "database management systems", "parallel processing", "computer graphics"], k: 0 },
      { q: "Which of the following is a current challenge in software engineering?", o: ["The lack of programming languages", "Dealing with the increased complexity of software required in new applications", "The disappearance of computers", "Too few users of software"], k: 1 },
      { q: "According to the text, increased market demands require:", o: ["slower development", "more paper documentation", "fewer software engineers", "a quick turnaround from concept to deployment and operation"], k: 3 },
      { q: "Software engineering encompasses every phase of the:", o: ["SDLC (software development lifecycle)", "hardware manufacturing process", "marketing plan", "user manual"], k: 0 },
      { q: "Operational software engineering may include anything related to:", o: ["the color of the computer", "the software budget, the way teams and users interact with it, and potential risks", "building new processors", "writing user stories for novels"], k: 1 },
      { q: "Transitional software engineering is related to:", o: ["fixing computer hardware", "the price of software licenses", "designing company logos", "the software's adaptability and scalability when it is moved outside its initial setting"], k: 3 },
      { q: "Software engineering maintenance entails:", o: ["enhancing and debugging current software", "deleting old software", "selling software to new clients", "planning the office budget"], k: 0 },
      { q: "According to the text, problems arise in software projects when the software:", o: ["is finished early", "is tested too much", "exceeds timelines and budgets and has reduced levels of quality", "has many users"], k: 2 },
      { q: "According to the reading \"Software Engineering Basics\", which kind of software may NOT need software engineering?", o: ["Banking systems", "Simplistic games or programs used by consumers", "Hospital systems", "Company databases with high-risk information"], k: 1 },
      { q: "Software engineering functions at all parts of the software development lifecycle, including:", o: ["analysis, design, development, testing, integration, implementation, maintenance, and retirement", "only coding", "only testing", "only design"], k: 0 },
      { q: "According to the text, if software does not work properly, it can result in:", o: ["faster computers", "a better user experience", "lower costs", "loss of money, loss of reputation, and even loss of life"], k: 3 }
    ],
    reading: {
      title: "WHEN SOFTWARE FAILS",
      text: [
        "Software is everywhere: in our phones, banks, hospitals, cars, and airplanes. When it works, nobody notices it; when it fails, the consequences can be serious. That is why software engineering treats quality as a priority from the first day of a project, not as something that is added at the end.",
        "History offers famous examples. In 1996, the European rocket Ariane 5 exploded about 40 seconds after its launch because of a software error: the program tried to store a number that was too big for the space reserved for it. In 1999, NASA lost the Mars Climate Orbiter because one team used imperial units while another team used metric units. In both cases the hardware was excellent; the problem was in the software and in the communication between teams.",
        "These failures show why requirements analysis, testing, and collaboration are central to the profession. Engineers define the requirements, review the designs, and use version control systems so that several programmers can work on the same code without overwriting each other's changes. Many modern teams use agile methods: they deliver software in short cycles called iterations or sprints, and they receive feedback from users frequently.",
        "Testing happens at different levels. Unit testing checks small pieces of code; integration testing checks that different modules work together; and acceptance testing confirms that the product meets the client's needs. Finding a bug early is much cheaper than fixing it after the software has been deployed.",
        "Finally, the work does not end at deployment. Maintenance — fixing bugs, updating the software, and adapting it to new environments — often represents the largest part of the total cost of a system during its life. A well-documented, modular design makes this maintenance easier and safer."
      ],
      tf: [
        { s: "The Ariane 5 rocket failed because of a problem in its engines.", k: false },
        { s: "The Mars Climate Orbiter was lost because two teams used different units of measurement.", k: true },
        { s: "In agile methods, software is delivered in short cycles called sprints or iterations.", k: true },
        { s: "Unit testing checks that the whole system meets the client's needs.", k: false },
        { s: "According to the text, fixing a bug after deployment is cheaper than finding it early.", k: false }
      ],
      words: { a: "deployed", b: "iterations", c: "Version control", d: "requirements", e: "Unit testing", f: "Acceptance", g: "modular", h: "feedback", i: "Integration", j: "failure" },
      gaps: [
        { q: "Engineers first define the _____ of the users before designing the software.", k: "d" },
        { q: "_____ systems let several programmers work on the same code without overwriting each other's changes.", k: "c" },
        { q: "Agile teams deliver software in short cycles called sprints or _____.", k: "b" },
        { q: "Agile teams receive _____ from users frequently.", k: "h" },
        { q: "_____ checks small pieces of code.", k: "e" },
        { q: "_____ testing checks that different modules work together.", k: "i" },
        { q: "_____ testing confirms that the product meets the client's needs.", k: "f" },
        { q: "Fixing a bug is more expensive after the software has been _____.", k: "a" },
        { q: "A well-documented, _____ design makes maintenance easier and safer.", k: "g" },
        { q: "A software _____ in a rocket or in a hospital system can have serious consequences.", k: "j" }
      ]
    }
  },

  u2: {
    match: {
      a: [
        { t: "High-level language", k: "E" },
        { t: "Compiler", k: "B", real: 2 },
        { t: "Low-level language", k: "C" },
        { t: "Code", k: "I" },
        { t: "Script", k: "G" },
        { t: "ASCII", k: "D" },
        { t: "HTML", k: "H" },
        { t: "Syntax", k: "F" },
        { t: "Application", k: "A" },
        { t: "Markup Language", k: "J", real: 10 }
      ],
      b: {
        A: "A program which makes the computer a useful tool",
        B: "A program that translates high-level language into machine code",
        C: "A language very close to machine language that provides little abstraction",
        D: "A standard that assigns numbers to letters, numbers, and other characters",
        E: "A language that is easy for humans to read and must be compiled into machine language",
        F: "The special set of rules used to organize the instructions of a programming language",
        G: "A series of steps written for a computer to follow line by line, from top to bottom",
        H: "A language first developed by Tim Berners-Lee in 1990 to create web pages",
        I: "The set of instructions written in a particular programming language",
        J: "A language that uses tags to format and link text files"
      }
    },
    fill: [
      {
        box: { A: "Java", B: "JavaScript", C: "C#", D: "Go", E: "C++" },
        items: [
          { q: "_____ is owned by Oracle and is used in more than 3 billion devices.", k: "A" },
          { q: "_____ is a scripting language used to add animated graphics, clickable buttons, and mouseover effects to web pages.", k: "B" },
          { q: "_____ is the enhanced version of C and is used to create video games, graphics software, and web browsers.", k: "E" },
          { q: "_____ started as Microsoft's language for its .NET framework.", k: "C" },
          { q: "_____ uses lightweight Goroutines to make concurrent programming simple.", k: "D" }
        ]
      },
      {
        box: { A: "developers", B: "SQL", C: "Python", D: "PHP", E: "Assembly" },
        items: [
          { q: "Most _____ use PHP scripting language to add functions that HTML can't handle, or to interact with MySQL.", k: "A", real: 18 },
          { q: "_____ is commonly used in scientific computing, data mining, and machine learning.", k: "C", real: 19 },
          { q: "_____ is a widely-used, open-source, server-side language for web development.", k: "D" },
          { q: "_____ lets programmers query, manipulate, and analyze data stored in a relational database.", k: "B" },
          { q: "_____ language contains a list of basic instructions and is much harder to read than a high-level language.", k: "E" }
        ]
      }
    ],
    mc: [
      { q: "A programming language that is closer to machine language and provides little abstraction is called:", o: ["High-level language", "Markup language", "Low-level language", "Natural language"], k: 2, real: 23 },
      { q: "Which programming language is described as the \"king of programming languages\" and is used by approximately 80% of developers?", o: ["Java", "C++", "Python", "JavaScript"], k: 2, real: 24 },
      { q: "The main difference between a compiler and an interpreter is:", o: ["Compilers are faster than interpreters", "Compilers convert the entire program at once, while interpreters translate line by line", "Interpreters are used only for web development", "Compilers are written in low-level languages"], k: 1, real: 25 },
      { q: "HTML is an example of:", o: ["A programming language", "A markup language", "A low-level language", "A machine language"], k: 1, real: 33 },
      { q: "Which programming language is particularly useful for data science and statistical computing?", o: ["C++", "Python", "SQL", "JavaScript"], k: 2, real: 39 },
      { q: "A programming language is:", o: ["a language used to talk with other people", "a computer language used to develop software programs, scripts, or other instructions for computers to execute", "a type of computer hardware", "a web browser"], k: 1 },
      { q: "High-level languages are:", o: ["more human-readable and easier to program, but less efficient", "closer to the hardware and harder to program", "only used for robots", "the same as machine code"], k: 0 },
      { q: "Programs written in low-level languages:", o: ["are always slow", "do not need any knowledge of machine language", "are easy for beginners", "can run very fast and use very little memory"], k: 3 },
      { q: "Which feature means \"the ability to define and use complicated structures or operations while ignoring certain low-level details\"?", o: ["Simplicity", "Locality", "Abstraction", "Compactness"], k: 2 },
      { q: "Which feature makes it possible to express operations concisely, without writing too many details?", o: ["Compactness", "Naturalness", "Efficiency", "Structuring"], k: 0 },
      { q: "Which of the following is a DISADVANTAGE of Python according to the text?", o: ["Easy to read and learn", "Slow execution speed", "Large community", "Portable"], k: 1 },
      { q: "Which of these companies is mentioned as using JavaScript?", o: ["Netflix", "Intel", "Spotify", "PayPal"], k: 3 },
      { q: "Why is Java popular among enterprise-sized companies?", o: ["Its applications are stable, efficient, and scalable", "It is only used for games", "It cannot run on mobile devices", "It is owned by Microsoft"], k: 0 },
      { q: "C++ combines low and high-level language characteristics, which makes it excellent for:", o: ["writing HTML pages", "data entry", "system programming", "word processing"], k: 2 },
      { q: "C# is easier to learn than its predecessors, C and C++, because:", o: ["it has no syntax", "it has a simple syntax and a well-defined class hierarchy", "it only works on Linux", "it has no classes"], k: 1 },
      { q: "PHP is described in the text as:", o: ["a client-side language for games", "a low-level language", "a markup language", "a widely-used, open-source, server-side language for web development"], k: 3 },
      { q: "Go (Golang) was created for developing:", o: ["APIs, GUI-based desktop applications, and web applications", "only mobile games", "only hardware drivers", "spreadsheets"], k: 0 },
      { q: "According to Stack Overflow's statistics, SQL is:", o: ["the most-used language", "the second most-used language", "the third most-used language", "a language nobody uses"], k: 2 },
      { q: "Which of the following is NOT one of the main features of programming languages in the text?", o: ["Simplicity", "Naturalness", "Popularity", "Locality"], k: 2 },
      { q: "Python lets users use different programming paradigms, such as:", o: ["only machine code", "object-oriented, imperative, procedural, and functional", "only markup tags", "only assembly instructions"], k: 1 }
    ],
    reading: {
      title: "FROM PUNCHED CARDS TO PYTHON",
      text: [
        "The first electronic computers of the 1940s were programmed directly in machine code: long sequences of 0s and 1s that the processor understands. Writing programs this way was slow and error-prone, and a program written for one machine could not run on a different one.",
        "In the 1950s, assembly languages replaced the binary numbers with short words, called mnemonics, such as ADD or MOV. It was an improvement, but programmers still needed to know the hardware in detail. The big change came with high-level languages. Grace Hopper, an American computer scientist and naval officer, developed one of the first compilers in 1952; she believed that programs should be written in words closer to English. In 1957, a team at IBM led by John Backus released FORTRAN for scientific calculations, and in 1959 COBOL appeared for business applications.",
        "In the early 1970s, Dennis Ritchie created the C language at Bell Labs. C was powerful and portable, and it was used to rewrite the UNIX operating system. Later, Bjarne Stroustrup extended C with objects and classes, and created C++.",
        "The 1990s brought many of the languages that dominate the internet today. Guido van Rossum released Python in 1991 with the goal of making code easy to read. In 1995, Sun Microsystems presented Java with the promise \"write once, run anywhere\": Java programs run on a virtual machine, so the same code works on different devices. That same year, Brendan Eich created JavaScript in about ten days to make web pages interactive.",
        "Today, programmers choose a language depending on the task, because there is no \"best\" language for everything. However, every language, from assembly to Python, has the same objective: to translate human ideas into instructions that a machine can execute."
      ],
      tf: [
        { s: "The first computers were programmed with machine code made of 0s and 1s.", k: true },
        { s: "Assembly languages use short words called mnemonics instead of binary numbers.", k: true },
        { s: "FORTRAN was designed mainly for business applications.", k: false },
        { s: "C++ was created by Dennis Ritchie at Bell Labs.", k: false },
        { s: "According to the text, there is one best language for every task.", k: false }
      ],
      words: { a: "portable", b: "compilers", c: "mnemonics", d: "virtual machine", e: "interactive", f: "error-prone", g: "hardware", h: "readable", i: "scientific", j: "classes" },
      gaps: [
        { q: "Writing programs directly in machine code was slow and _____.", k: "f" },
        { q: "With assembly language, programmers still needed to know the _____ in detail.", k: "g" },
        { q: "ADD and MOV are examples of _____.", k: "c" },
        { q: "Grace Hopper developed one of the first _____ in 1952.", k: "b" },
        { q: "FORTRAN was released for _____ calculations.", k: "i" },
        { q: "C was powerful and _____, and it was used to rewrite UNIX.", k: "a" },
        { q: "Bjarne Stroustrup extended C with objects and _____.", k: "j" },
        { q: "Guido van Rossum wanted Python code to be easy to read, that is, _____.", k: "h" },
        { q: "Java programs run on a _____, so the same code works on different devices.", k: "d" },
        { q: "JavaScript was created to make web pages _____.", k: "e" }
      ]
    }
  },

  u4: {
    match: {
      a: [
        { t: "Robotics", k: "G" },
        { t: "Actuator", k: "A", real: 3 },
        { t: "Sensor", k: "C", real: 4 },
        { t: "End effector", k: "D" },
        { t: "Cobot", k: "F" },
        { t: "Cyborg", k: "B" },
        { t: "Android", k: "H" },
        { t: "Joint", k: "J" },
        { t: "Simulator", k: "E" },
        { t: "Accelerometer", k: "I" }
      ],
      b: {
        A: "A device that converts energy into motion in robots",
        B: "A being that has both biological and artificial parts",
        C: "A device that measures quantities like distance or speed",
        D: "A device at the end of a robotic arm designed to interact with the environment",
        E: "A software application that creates a virtual world in which robots can be tested",
        F: "A robot that works side by side with human workers",
        G: "The science of designing, building, and applying robots",
        H: "A humanoid robot designed to resemble an adult human male",
        I: "A device for measuring acceleration or force",
        J: "The location where two or more parts of a robotic arm make contact"
      }
    },
    fill: [
      {
        box: { A: "humanoid", B: "AMRs", C: "AGVs", D: "articulated", E: "Kinematics" },
        items: [
          { q: "_____ use sophisticated sensors, artificial intelligence, and machine learning for tasks such as delivering items, rescue missions, and space exploration.", k: "B" },
          { q: "_____ navigate mapped routes using wires on a floor, radio waves, cameras, magnets, or lasers.", k: "C" },
          { q: "An _____ robot has rotary joints and often resembles a human arm.", k: "D" },
          { q: "A _____ robot resembles a generic human body form and mimics human motions and interactions.", k: "A" },
          { q: "_____ involves studying the mapping of coordinates in motion.", k: "E" }
        ]
      },
      {
        box: { A: "Robotic", B: "Vision Sensors", C: "Gripper", D: "Legged Locomotion", E: "Controller" },
        items: [
          { q: "_____ requires more number of motors to accomplish a movement. It is suited for rough as well as smooth terrain where irregular or too smooth surface makes it.", k: "D", real: 16 },
          { q: "Robot _____ are what allow a robot to gather information about its environment.", k: "B", real: 17 },
          { q: "The objective of the _____ field is to create intelligent machines that can assist humans in a variety of ways.", k: "A", real: 15 },
          { q: "A _____ usually has two fingers and grasps objects of different shape, mass, and material.", k: "C" },
          { q: "The _____ is the main device that processes information and carries out instructions in a robot.", k: "E" }
        ]
      }
    ],
    mc: [
      { q: "Which of the following is a characteristic of Robotic Process Automation (RPA)?", o: ["It requires physical robots", "It is scriptless and code-free automation", "It can replicate human cognitive functions", "It possesses logical thinking skills"], k: 1, real: 30, note: "This topic is not in the Unit 4 text." },
      { q: "The term \"robot\" comes from the Czech word meaning:", o: ["Machine", "Worker", "Slavery or forced labor", "Helper"], k: 2, real: 31, note: "This topic is not in the Unit 4 text (\"robota\" = forced labor)." },
      { q: "Which of the following is NOT a component of robots according to the text?", o: ["Sensors", "Actuators", "Control Systems", "Internet Connection"], k: 3, real: 32 },
      { q: "Robotics is the engineering and operation of machines that can:", o: ["only be controlled by humans", "autonomously or semi-autonomously perform physical tasks on behalf of a human", "think exactly like people", "only work in factories"], k: 1 },
      { q: "Typically, robots perform tasks that are:", o: ["creative and artistic", "always entertaining", "impossible to program", "highly repetitive or too dangerous for a human"], k: 3 },
      { q: "The primary difference between a robot and a machine is that robots:", o: ["possess the autonomy and sensory feedback to sense, compute, and act independently", "are always bigger", "are cheaper", "do not need energy"], k: 0 },
      { q: "In the text, sensors are compared to:", o: ["the muscles of a robot", "the brain of a robot", "the eyes and ears of a robot", "the skeleton of a robot"], k: 2 },
      { q: "In the text, actuators are compared to:", o: ["the muscles of a robot", "the eyes of a robot", "the brain of a robot", "the heart of a robot"], k: 0 },
      { q: "Where is the data from the sensors processed and where are decisions made?", o: ["In the actuators", "In the Central Processing Unit (CPU)", "In the gripper", "In the joints"], k: 1 },
      { q: "Which of these are examples of actuators?", o: ["Cameras and ultrasonic sensors", "Touch sensors", "Electric motors, hydraulic systems, and pneumatic actuators", "Hard drives"], k: 2 },
      { q: "Cobots are different from other robots because:", o: ["their function is not intended to do work in place of human employees", "they only work in space", "they are always humanoid", "they never use sensors"], k: 0 },
      { q: "Automated Guided Vehicles (AGVs) are commonly used for:", o: ["space exploration", "transporting heavy materials in factories and warehouses", "surgery", "cooking"], k: 1 },
      { q: "Robotics engineering is a multidisciplinary field including:", o: ["law and economics", "only computer science", "art and music", "electrical, mechanical, and computer engineering"], k: 3 },
      { q: "According to the text \"The Convergence of Autonomy and Systems Architecture\", in a Cyber-Physical System (CPS):", o: ["computers and physical processes never interact", "computational elements collaborate to monitor and control physical processes", "robots work without software", "only humans control the machines"], k: 1 },
      { q: "\"Graceful degradation\" means that if one component fails, the system:", o: ["collapses entirely", "deletes all its data", "continues to operate at a reduced capacity", "restarts and works faster"], k: 2 },
      { q: "Which technological achievement has helped robotics advance, according to the text?", o: ["The rise of big data", "The use of typewriters", "The decline of sensors", "Paper documentation"], k: 0 },
      { q: "The goal of robotics is to design intelligent machines that:", o: ["replace all human workers", "only entertain people", "are as expensive as possible", "help and assist humans in their day-to-day lives and keep everyone safe"], k: 3 },
      { q: "A robotics engineer selects and integrates components such as:", o: ["chairs and desks", "only paint and plastic", "sensors, actuators, motors, and controllers", "printers and paper"], k: 2 },
      { q: "Unlike traditional software engineering, robotic systems operate in:", o: ["controlled, predictable environments only", "unstructured, dynamic environments", "environments without humans", "virtual worlds only"], k: 1 },
      { q: "As the Internet of Things (IoT) matures, robots will increasingly:", o: ["function as part of a larger network of smart devices", "work completely isolated", "stop using sensors", "be designed only for one specific task"], k: 0 }
    ],
    reading: {
      title: "ROBOTS THAT EXPLORE: THE MARS ROVERS",
      text: [
        "Robots are often used where it is too dangerous, too far, or too expensive to send people. The best example is the planet Mars. Since 1997, NASA has sent several wheeled robots, called rovers, to explore its surface: Sojourner in 1997, Spirit and Opportunity in 2004, Curiosity in 2012, and Perseverance in 2021.",
        "A rover is a complete robotic system. Its cameras and other sensors collect information about rocks, soil, and weather; its computer processes the data; and its actuators — the electric motors in the wheels, in the robotic arm, and in the instruments — make it move and work. At the end of the arm, tools such as drills act as end effectors to collect samples.",
        "Controlling a rover is not like driving a car with a remote control. A radio signal needs several minutes to travel between Earth and Mars, so engineers cannot react in real time. For this reason, modern rovers are partly autonomous: they use their cameras to build a map of the terrain, detect obstacles, and choose a safe path by themselves. Engineers on Earth usually send a list of commands once a day, and the rover executes them.",
        "Before any command is sent, it is tested on Earth with simulators and with test rovers in a \"Mars yard\" that copies the Martian terrain. Mistakes are very expensive: if a rover gets stuck in the sand, nobody can go and help it. In fact, Spirit became trapped in soft soil in 2009 and was never able to move again.",
        "In 2021, Perseverance carried a small helicopter called Ingenuity, which became the first aircraft to make a powered, controlled flight on another planet. Missions like these show how sensors, actuators, control systems, and autonomy work together, and they help engineers design better robots for use on Earth."
      ],
      tf: [
        { s: "Sojourner, the first rover mentioned in the text, arrived on Mars in 1997.", k: true },
        { s: "Engineers can drive the Mars rovers in real time, like a car with a remote control.", k: false },
        { s: "Modern rovers use their cameras to detect obstacles and choose a safe path by themselves.", k: true },
        { s: "Commands for the rover are sent without being tested first.", k: false },
        { s: "Ingenuity was the first aircraft to make a powered, controlled flight on another planet.", k: true }
      ],
      words: { a: "rovers", b: "autonomous", c: "actuators", d: "end effectors", e: "simulators", f: "stuck", g: "obstacles", h: "dangerous", i: "sensors", j: "real time" },
      gaps: [
        { q: "Robots are used where it is too _____, too far, or too expensive to send people.", k: "h" },
        { q: "NASA has sent wheeled robots called _____ to explore Mars.", k: "a" },
        { q: "Cameras and other _____ collect information about rocks, soil, and weather.", k: "i" },
        { q: "The electric motors in the wheels and in the arm are the rover's _____.", k: "c" },
        { q: "Drills at the end of the arm act as _____ to collect samples.", k: "d" },
        { q: "Because of the signal delay, engineers cannot react in _____.", k: "j" },
        { q: "Modern rovers are partly _____: they can choose a safe path by themselves.", k: "b" },
        { q: "The rover uses its cameras to detect _____ on the terrain.", k: "g" },
        { q: "Commands are tested on Earth with _____ and test rovers.", k: "e" },
        { q: "If a rover gets _____ in the sand, nobody can go and help it.", k: "f" }
      ]
    }
  }
};
