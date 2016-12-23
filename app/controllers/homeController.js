﻿var homeController = manish.controller("homeController", function ($scope, $http, $window, $location, $rootScope, $interpolate) {
    $scope.Username = 'manishjanky';
    $scope.user = {
        name: "Manish Kumar",
        designation: 'Front End Developer',
        aboutMe: "I'm a UI Designer/Front End Developer. A Microsoft Certified Specialist in Programming in HTML5 with JavaScript and CSS3. I enjoy taking complex problems and turn them in elegant User Experience design.",
        contactDetails:{
            contactNumber: '+91-8899503807',
            alternateNumber: '+91-7906537527',
            email: 'manishjanky@gmail.com',
            alertnateEmail: '',
            address: {
                street: 'Phase-2, Saraswati Vihar',
                society: 'Rohta Road',
                city: 'Meerut',
                pin: '250002',
                state:'UP'
            },
            
        },
        education: [{
            qualification: 'B.Tech',
            stream: 'Computer Science',
            marks: 70.04,
            passingYear:2014,
            institute: 'UPTU Lucknow'
        },
        {
            qualification: 'Intermediate',
            stream: '',
            passingYear: 2009,
            marks: 80,
            institute: 'Army School Meerut Cantt'
        },
        {
            qualification: 'High School',
            stream: '',
            passingYear: 2007,
            marks: 83.40,
            institute: 'Army School Mamun Cantt'
        }],
        summary: ['Microsoft Certified Professional and Microsoft Certified Specialist (Programming in HTML5 with JavaScript & CSS3).','2.5 years of extensive hands-on experience in web development.', 'Experienced team player with excellent communication, interpersonal skills, and ability to work independently.',
            'Leading a team of 4 members for last 1.5 years.',
        ],
        experience: [
            {
                name: 'Quality Dashboard',
                description: 'This is a web based system for monitoring the quality of various layers of an application.It provides all the information required by the quality team in a single nutshell. This reduced the extensive mail chains for getting the complete information. Was also awarded as the best POC in AutoThon (A Infosys wide event).',
                startDate: 'Nov 2014',
                endDate: 'Sep 2015',
                designation: "System Engineer",
                organization: 'Infosys',
            },
            {
                name: 'StoneSoup',
                description: 'This is a web based application that allows users to add, edit and publish engineering data. It provides Customizable Configurations to different groups. Allows saving custom configuration locally/on the server. Data generated from Stone Soup helps in design validations and automate repetitive design engineering activities.',
                startDate: 'Oct 2015',
                endDate: '',
                organization: 'Infosys',
                current: true,
            }],
        skills: [
            {
                skill: 'JavaScript',
                rating:9
            },
            {
                skill: 'AngularJS',
                rating: 7.5
            },
            {
                skill: 'HTML5',
                rating: 9
            },
            {
                skill: 'CSS',
                rating: 7
            },
            
            {
                skill: 'ASP.NET',
                rating: 6.5
            },
            {
                skill: 'MSSQL',
                rating: 7.5
            },
            {
                skill: 'jQuery',
                rating: 7
            }
        ],
        interests: [
            'Reading','Movies','Travelling'
        ],
        certifications:[{
            provider:"Microfost",
            title:"Microfost Certified Specialist",
            name:"70-480 Programming in HTML5 with JavaScript and CSS3",
        },
        {
            provider:"Microfost",
            name:"70-461 Querying Microsoft SQL Server 2012/2014",
        }]
        
    }
    
});