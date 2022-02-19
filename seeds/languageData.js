const { Language } = require('../models');

const languageData = [
    {
        name: 'JavaScript',
        website: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
        version_number: 'ECMAScript 2021',
        year_created: 1995,
        developed_by: 'Brendan Eich',
        filename_extension: '.js',
        language_type: 'Scripting',
        major_organizations: 'WordPress, Soundcloud, Khan Academy, Linkedin, Groupon, Yahoo',
        licensed_under: 'GPL',
        description: "Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language. Thus, it doesn't need to be compiled. JavaScript renders web pages in an interactive and dynamic fashion. This allowing the pages to react to events, exhibit special effects, accept variable text, validate data, create cookies, detect a user’s browser, etc.",      
    },
    {
        name: 'PHP',
        website: 'https://www.php.net/',
        version_number: '8.1.3',
        year_created: 1995,
        developed_by: 'Rasmus Lerdorf',
        filename_extension: '.php',
        language_type: 'Scripting',
        major_organizations: 'Facebook, Yahoo, CyberCoders, NextGen',
        licensed_under: 'PHP',
        description: "PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML. What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was. You can even configure your web server to process all your HTML files with PHP, and then there's really no way that users can tell what you have up your sleeve.",
    },
    {
        name: 'Node.js',
        website: 'https://nodejs.org/en/',
        version_number: '17.5.0',
        year_created: 2009,
        developed_by: 'Ryan Dahl',
        filename_extension: '',
        language_type: 'Scripting',
        major_organizations: 'LinkedIn, Netflix, Uber, Trello, PayPal, NASA, eBay, Medium, Groupon, Walmart, Mozilla, GoDaddy',
        licensed_under: 'MIT',
        description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.  Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).",
    },
    {
        name: 'React',
        website: 'https://reactjs.org/',
        version_number: '17.0.2',
        year_created: 2013,
        developed_by: 'Jordan Walke',
        filename_extension: '',
        language_type: 'Scripting',
        major_organizations: 'Bloomberg, Facebook, Uber Eats, Airbnb, Discord, Instagram, Skype, Pinterest, Salesforce',
        licensed_under: 'BSD',
        description: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
    },
    {
        name: 'Java',
        website: 'https://www.oracle.com/java/',
        version_number: 'Java SE 17',
        year_created: 1995,
        developed_by: 'James Gosling',
        filename_extension: '.java',
        language_type: 'Programming',
        major_organizations: 'V2COM, Eclipse Information Technologies, eBay, Eurotech',
        licensed_under: 'GPL',
        description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client–server web applications, with a reported 9 million developers.',
    },
    {
        name: 'Ruby',
        website: 'https://www.ruby-lang.org/en/',
        version_number: '3.1.0',
        year_created: 1995,
        developed_by: 'Yukihiro Matsumoto',
        filename_extension: '.rb',
        language_type: 'Programming',
        major_organizations: 'Github, Scribd, Groupon, NASA Langley Research Center, Blue Sequence (part of Toyota Motor Manufacturing), Motorola, Google (SketchUp)',
        licensed_under: 'Ruby, GPL',
        description: 'Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.  Ruby is dynamically typed and uses garbage collection and just-in-time compilation. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, BASIC, and Lisp.',
    },
    {
        name: 'R',
        website: 'https://www.r-project.org/',
        version_number: '4.1.2',
        year_created: '1993',
        developed_by: '	Ross Ihaka and Robert Gentleman',
        filename_extension: '.r',
        language_type: 'Programming',
        major_organizations: 'Facebook, Google, Twitter, City of Chicago, New York Times, Zillow, John Deere, ANZ Bank',
        licensed_under: 'GNU GPL v2',
        description: "R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing. Created by statisticians Ross Ihaka and Robert Gentleman, R is used among data miners and statisticians for data analysis and developing statistical software. Users have created packages to augment the functions of the R language.  According to surveys like Rexer's Annual Data Miner Survey and studies of scholarly literature databases, R is one of the most commonly used programming language used in data mining. As of February 2022, R ranks 13th in the TIOBE index, a measure of programming language popularity.",
    },
    {
        name: 'Perl',
        website: 'https://www.perl.org/',
        version_number: '5.34.0',
        year_created: 1988,
        developed_by: 'Larry Wall',
        filename_extension: '.plx, .pl',
        language_type: 'Programming',
        major_organizations: 'Amazon, Booking.com, MIT, Venmo, SendGrid, Morgan Stanley',
        licensed_under: 'GPL',
        description: "Perl is a highly capable, feature-rich programming language with over 30 years of development. Perl runs on over 100 platforms from portables to mainframes and is suitable for both rapid prototyping and large scale development projects.  'Perl' is a family of languages, 'Raku' (formerly known as 'Perl 6') is part of the family, but it is a separate language which has its own development team. Its existence has no significant impact on the continuing development of 'Perl'.",
    },
    {
        name: 'Python',
        website: 'https://www.python.org/',
        version_number: '3.10.2',
        year_created: 1991,
        developed_by: '	Guido van Rossum',
        filename_extension: '.py, .pyi',
        language_type: 'Programming',
        major_organizations: 'Google, Pinterest, Instagram, YouTube, DropBox, NASA, ESRI',
        licensed_under: 'PSF, GPL',
        description: '',  
    },
    {
        name: 'Apex',
        website: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm',
        version_number: '53.0',
        year_created: 2007,
        developed_by: 'Salesforce',
        filename_extension: '',
        language_type: 'Programming',
        major_organizations: 'Salesforce',
        licensed_under: '',
        description: 'Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Lightning platform server in conjunction with calls to the Lightning Platform​ API. Using syntax that looks like Java and acts like database stored procedures, Apex enables developers to add business logic to most system events, including button clicks, related record updates, and Visualforce pages. Apex code can be initiated by Web service requests and from triggers on objects.',
    },
    {
        name: 'C#',
        website: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        version_number: '10.0',
        year_created: 2000,
        developed_by: 'Anders Hejlsberg',
        filename_extension: '.cs',
        language_type: 'Programming',
        major_organizations: 'Microsoft, Intel, Hewlett Packard',
        licensed_under: 'GPLv2, MIT',
        description: '',
    },
    {
        name: 'C',
        website: 'https://www.iso.org/standard/74528.html',
        version_number: 'C17',
        year_created: 1972,
        developed_by: 'Dennis Ritchie',
        filename_extension: '.c',
        language_type: 'Programming',
        major_organizations: 'Microsoft, Apple, Oracle, Cisco, Raytheon',
        licensed_under: 'GPL',
        description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.',
    },
    {
        name: 'C++',
        website: 'https://isocpp.org/',
        version_number: 'C++20',
        year_created: 1985,
        developed_by: 'Bjarne Stroustrup',
        filename_extension: '.C, .cc, .cpp, .cxx, .c++',
        language_type: 'Programming',
        major_organizations: 'Google, Mozilla, Firefox, Winamp, Adobe Software, Amazon, Lockheed Martin',
        licensed_under: 'GPL',
        description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.',
    },
    {
        name: 'Swift',
        website: 'https://developer.apple.com/swift/',
        version_number: '5.5.2',
        year_created: 2014,
        developed_by: 'Chris Lattner, Doug Gregor, John McCall, Ted Kremenek, Joe Groff, and Apple Inc.',
        filename_extension: '.swift',
        language_type: 'Programming',
        major_organizations: 'Apple, Getty Images, Slack, Dow Jones, Playlist Media',
        licensed_under: 'Apache',
        description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms, it uses the Objective-C runtime library, which allows C, Objective-C, C++ and Swift code to run within one program.",
    }
];

const seedLanguages = () => Language.bulkCreate(languageData);
module.exports = seedLanguages;