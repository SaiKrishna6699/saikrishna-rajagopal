export const Content = {
    a: {
        title: 'About',
        content: `At the end of 2021, I started my job as a full-time software developer to build full-scale web and mobile
        applications. In the past, I pursued a bachelor's degree in computer science and engineering and have done freelancing
        in front-end, back-end development, testing, and app UI/UX.`
    },
    b: {
        title: 'More About Me',
        content: `Before I got into the software development, I am from a small town name Tirupathi, which is a famous temple town housing Lord Venkateswara swamy and home of Seshachalam forest. Ever since I was a kid, I loved making things
            look nice, like designing and painting. I even thought about being an architect at one point. Then, when I
            was 15, I started learning basic programming and ended up switching to Computer Science.
            <br>
            <br>
            I started off with web development, learning HTML, CSS, and JavaScript to understand how websites work. I
            also did side projects to explore my love for design.
            <br>
            <br>
            Outside of work, I have a small group of friends. I enjoy going on long drives, listening to music, and
            exploring new places. I love both snowy mountains and breezy coastlines, and I find peace in nature.
            <br>
            <br>
            I also have a soft spot for both cats and dogs. Overall, my life revolves around technology, design, and
            enjoying the simple things.`
    }
};

export const experience = [
    {
        title: 'Relanto.ai', role: 'Software Engineer', date: 'Sep 2023 - Present', img: 'assets/img/relanto_inc_logo.jpg', content: `Developed several single-page web applications across different domains, focusing on enhancing user
                          experience, security, and data interaction. For a Human Resource and Payroll Software Solutions
                          organization, integrated Microsoft Multi-Factor Authentication (MFA), optimized API usage, and
                          designed interactive dashboards with graphs and statistics. In another project, created an
                          automation framework tool with a code editor interface, customizable forms, and a highly interactive
                          dashboard. For a web application used by Cisco, implemented complex search interfaces, Kafka
                          consumers, and developed APIs for efficient data transfer and enhanced user engagement. The work
                          consistently emphasizes user-friendly design, security, and performance optimization.`},
    {
        title: 'Mphasis LTD', role: 'Associate Software Engineer', date: 'Jan 2022 - Feb 2023', img: 'assets/img/mphasis_logo.jpg', content: `Collaborated with a diverse team of highly skilled professionals to develop the front-end user interface (UI) and test REST APIs for Gemini, a US brokerage application. Worked closely with the front-end team using the Angular framework to create an intuitive and visually appealing UI. Conducted comprehensive testing of REST APIs to ensure functionality and adherence to requirements. Participated in code reviews and actively contributed to the team's code quality and best practices. Implemented version control using Git and GitHub for efficient collaboration and code management. Enhanced the front-end UI by personalizing the code and ensuring logical and efficient functionality. Contributed to the successful delivery of the application by actively participating in both front-end UI development and API testing.`
    }
]

export const education = [
    {
        title: 'Hindustan Institue of Technology and Sciences', role: 'Computer Science and Engineering', date: 'Aug 2017 - Jul 2021', img: 'assets/img/hindustan_logo.jpg', content: `Secured 8.30 CGPA out of 10`
    },
    {
        title: 'Chaitanya Junior College', role: 'Intermediate (PCM)', date: 'Jun 2015 - Apr 2017', img: 'assets/img/chaitnaya_logo.jpg', content: `Secured 8.73 CGPA out of 10`
    }
]

export const skills = [
    { title: 'Angular', exp: '1.8 Years', per: '95%', iconPath: 'assets/skills/angular.svg' },
    { title: 'HTML', exp: '2.0 Years', per: '100%', iconPath: 'assets/skills/html.svg' },
    { title: 'CSS', exp: '2.0 Years', per: '98%', iconPath: 'assets/skills/css3.svg' },
    { title: 'Bootstrap', exp: '1.6 Years', per: '95%', iconPath: 'assets/skills/bootstrap.svg' },
    { title: 'SASS/SCSS', exp: '1.3 Years', per: '94%', iconPath: 'assets/skills/scss.svg' },
    { title: 'React', exp: '1.7 Years', per: '80%', iconPath: 'assets/skills/react.svg' },
    { title: 'React Native', exp: '1.5 Years', per: '55%', iconPath: 'assets/skills/reactnative.svg' },
    { title: 'Java', exp: '2.2 Years', per: '90%', iconPath: 'assets/skills/java.svg' },
    { title: 'JavaScript', exp: '2.0 Years', per: '99%', iconPath: 'assets/skills/javascript.svg' },
    { title: 'TypeScript', exp: '1.8 Years', per: '95%', iconPath: 'assets/skills/typescript.svg' },
    // { title: 'Python', exp: '1.5 Years', per: '91%' },

    { title: 'MySQL', exp: '1.7 Years', per: '94%', iconPath: 'assets/skills/mysql.svg' },
    { title: 'MongoDB', exp: '1.4 Years', per: '90%', iconPath: 'assets/skills/mongodb.svg' },
    // { title: 'Firebase', exp: '1.2 Years', per: '89%' },



    { title: 'Spring Boot', exp: '1.6 Years', per: '92%', iconPath: 'assets/skills/springboot.svg' },
    { title: 'Spring Data', exp: '1.4 Years', per: '90%', iconPath: 'assets/skills/springSecurity.svg' },
    // { title: 'Spring Security', exp: '1.3 Years', per: '91%' },
    { title: 'Microservices', exp: '1.2 Years', per: '89%', iconPath: 'assets/skills/microservices.svg' },

    { title: 'JUnit', exp: '1.7 Years', per: '94%', iconPath: 'assets/skills/javaUnit.svg' },
    { title: 'Apache Kafka', exp: '1.3 Years', per: '90%', iconPath: 'assets/skills/kafka.svg' },

    { title: 'Git', exp: '2.0 Years', per: '95%', iconPath: 'assets/skills/git.svg' },
    { title: 'Bitbucket', exp: '1.5 Years', per: '95%', iconPath: 'assets/skills/github.svg' },
    // { title: 'JIRA', exp: '1.6 Years', per: '93%' },
    // { title: 'Q-Test', exp: '1.2 Years', per: '88%' }
];

export const projects = [
    { title: 'Trinethra Test Portal', time: 'Sep 2023 - Oct 2023', desc: `An Angular-based web app hosted on Firebase for seamless test creation, management, and participation. It offers a user-friendly interface, real-time synchronization, and secure authentication for efficient online testing.`, stack: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Firebase', 'NoSQL', 'Node Js'], img: 'assets/img/test-portal.png' },
    { title: 'Weather App', time: 'Jul 2023 - Aug 2023', desc: `An Angular-based application hosted on Firebase, providing accurate weather updates for cities, states, provinces, and countries. It integrates with a weather API for real-time data and forecasts.`, stack: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Firebase', 'NoSQL', 'Scss', 'Weather Api', 'RxJs'], img: 'assets/img/weather app.png' },
    { title: 'Currency Convertor', time: 'Mar 2023 - Apr 2023', desc: `A real-time application built with Angular and hosted on Firebase, offering instant currency conversion based on live exchange rates for accurate financial tracking and currency exchange.`, stack: ['Angular', 'HTML', 'TypeScript', 'Reactive Forms', 'Firebase', 'RxJs'], img: 'assets/img/currency-converter.png' },
    { title: 'Airbus, Bus Booking System', time: 'Nov 2022 - Jan 2024', desc: `A real-time bus booking application utilizing Angular for the frontend, Spring Boot and microservices for the backend, MySQL for database management, and deployed using Jenkins and Netlify. It features seamless integration and up-to-date booking capabilities.`, stack: ['Angular', 'Spring Boot', 'Micro Services', 'MySql', 'Jenkins', 'TypeScript', 'Netify'], img: 'assets/img/airbus.png' }
]

export const pics = [
    { type: 'image', url: 'assets/img1/1.jpeg', orientation: 'square' },
    { type: 'image', url: 'assets/img1/2.jpeg', orientation: 'square' },
    { type: 'image', url: 'assets/img1/3.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/4.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/6.jpeg', orientation: 'landscape' },
    { type: 'video', url: 'assets/img1/5.mp4', orientation: 'landscape' },
    { type: 'video', url: 'assets/img1/7.mp4', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/8.jpg', orientation: 'square' },
    { type: 'image', url: 'assets/img1/10.jpg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/11.jpg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/12.jpg', orientation: 'square' },
    { type: 'image', url: 'assets/img1/13.jpeg', orientation: 'portrait' },
    { type: 'image', url: 'assets/img1/14.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/15.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/16.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/17.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/18.jpeg', orientation: 'landscape' },
    { type: 'image', url: 'assets/img1/19.jpeg', orientation: 'landscape' },
]
