//var formattedName = HTMLheaderName.replace(
//	"%data%", "Julie Pepper");

//var role = "Content and Web Developer";
//var formattedRole = HTMLheaderRole.replace(
	//"%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
		"name"      : "Julie Pepper",
		"role"      : "Content and Web Developer",
		"contacts"  : {
				"mobile"     : "415-250-7597",
				"email"      : "julpepper@comcast.net",
				"github"     : "https://github.com/juliepepper",
				"twitter"    : "@julielimpep",
				"location"   : "San Francisco"
		},
    "welcomeMessage" : "I'd love to help you tell your story",
		"skills" : [
			"storytelling", "editorial", "content development", "front-end"
  	],
		"bioPic" : "images/retDGR_1818_2.jpg",

		"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name),
	    formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role),
		formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
		formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github),
		formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
		formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location),
		formattedContacts = formattedmobile + formattedemail + formattedgithub + formattedtwitter + formattedlocation,
		formattedSkills ="",
		formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
		formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

		$("#header").prepend(formattedName + formattedheaderRole);
        $("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
		$("#header").append(formattedbioPic + formattedwelcomeMsg);
		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (var i=0;i<bio.skills.length;i++) {
				formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
			}

			$("#skills").append(formattedSkills);

		}

	   }
	};

bio.display();


var work = {
   "jobs"  : [
     {
     "employer"    : "Murphy, McKay & Associates",
     "title"       : "Systems Assurance Advisor",
     "dates"       : "January 2014-February 2015",
		 "location"    : "3468 Mt. Diablo Blvd. Lafayette, CA 94549",
		 "description" : "IT Solutions Sales Suppprt",
		 "url"		   : "http://www.murphymckay.com/blog/entry/ransomware-adware-scareware-and-it-s-not-even-halloween-yet.html"
	 },
     {
     "employer"    : "Tikkun",
     "title"       : "Communications Office Manager",
     "dates"       : "August 2012-December 2013",
		 "location"    : "2342 Shattuck Avenue, Berkeley CA",
     	 "description" : "Editorial, proofing, copyediting, content editing, office management",
     	 "url"		   : "http://www.tikkun.org/tikkundaily/2013/11/14/is-it-true-revealing-the-truth-in-fiction/"
     },
     {
      "employer"   : "San Francisco State University",
      "title"      : "Lecturer",
      "dates"      : "September 2009-May 2011",
          "location"    : "1600 Holloway Avenue, San Francisco, CA 94132",
          "description" : "I taught a hybrid class of human communication and public speaking as well as a gender and performance class",
          "url"			: "http://communicationstudies.sfsu.edu/graduate-courses"
     }
   ],
   "display": function() {
   	 for (var i =0; i< work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

	 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title),
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location),
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description),
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        formattedEmployerTitle = formattedEmployerTitle.replace("#", work.jobs[i].url);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}

   }
};

work.display();

var projects = {
	  "projects"      : [
		  {
		  "title"   : "P1PortfolioPage",
		  "dates"   : "November 23",
		  "description"   : "A responsive portfolio page with images utilizing a bootstrap framework",
		  "images"   : "images/ward-in-hospital-in-Arles.jpg",
		  "url"			: "http://www.amazon.com/gp/product/1481939467?keywords=Last%20Call%20by%20Julie%20Pepper&qid=1450758399&ref_=sr_1_1&sr=8-1"
		  },
		  {
		  "title"   : "Last Call",
		  "dates"      : "July 2013",
		  "description"   : "A novel about a bartender drowning in the gritty life of a bar while her best friend is diagnosed with a possibly fatal illness",
		  "images"      : "images/last-call-book cover.jpeg",
		  "url"			: "http://www.amazon.com/gp/product/1481939467?keywords=Last%20Call%20by%20Julie%20Pepper&qid=1450758399&ref_=sr_1_1&sr=8-1"
		  },
		  {
		  "title"   : "Yellow Jackets Feasting",
		  "dates"      : "March 2015",
		  "description"   : "These yellow jackets illustrate both the satiating, sweetness of nourishment and the sometimes painful sting that occurs when we can't fully protect our children. Each of these is reflected in my short story, Yellow Jackets.",
		  "images"      : "images/yellowjackets.jpeg",
		  "url"			: "http://www.amazon.com/gp/product/1481939467?keywords=Last%20Call%20by%20Julie%20Pepper&qid=1450758399&ref_=sr_1_1&sr=8-1"
	  	 }
	  ],
	  "display": function(){
	  	for (var i =0; i< projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);


        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title),
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates),
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description),
        formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        //formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);
        formattedTitle = formattedTitle.replace("#", projects.projects[i].url);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedImage);
		$(".project-entry:last").append(formattedDescription);
	}

	  }
  };

projects.display();

var education = {

	"schools": [
	{
        "name": "San Francisco State University",
        "degree": "MA",
        "location": "San Francisco, CA",
        "major": ["Communication Studies"]
	},
	{
	    "name": "Decker Communications",
	    "degree": "Excellence in Leadership",
	    "location": "San Francisco, CA",
	    "major": ["Corporate Performance Coaching"]
	},
	{
		"name": "Adelphi University",
		"degree": "BFA",
		"location": "Garden City, New York",
		"major": "Theater"
	}

  ],
	"onlineCourses": [
   {
   	  "title": "Front Web Developer",
   	  "school": "Udacity",
   	  "dates": 2016,
   	  "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }
 ],

    "display": function () {
      for (var i = 0; i < education.schools.length; i++) {
         $("#education").append(HTMLschoolStart);

         $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
         $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
         $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
         $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
      }

      if (education.onlineCourses.length > 0) {
         $("#education").append(HTMLonlineClasses);
         for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
         }
      }
   }
};


education.display();

function inName(name) {
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+
		name[0].slice[1].toLowerCase();
	var intName = (name[0] +" "+ name[1]);

	return intName;
}





 $("#mapDiv").append(googleMap);








