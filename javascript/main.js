var app = new Vue({
    el: '#app',
    data: {
        projects: {
            honeypot: 
                '<h3 class="popTitle"> HoneyPot </h3>' +
                '<h4 class="popSub" >2 Sided Marketplace Ruby/Rails Assignment </h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/honeyPotM.gif" alt=""> </div>' +
                '<p class="popText">Tasked to design and build a 2 sided marketplace. You can visit the Heroku Hosted version here: <a href="https://honeypot9000.herokuapp.com/">HoneyPot9000</a> or visit the github repo for the app here: <a href="https://github.com/DeezyE/HoneyPot">Github Repo</a>. <strong>Check out the README for a look at my workflow</strong> or read my <a href="https://medium.com/series/rails-assignment-development-diary-8b070bbe7314">Medium Series</a> which I used as my Dev Diary. </p></div> ',
            gobigbanners: 
                '<h3 class="popTitle"> GoBigBanners.com </h3>' +
                '<h4 class="popSub" >UI/UX Design for web app. 2011.</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/gobigbannersL.gif" alt=""> </div>' +
                '<p class="popText">While working as a Graphic Designer (at Megapixel) in the USA, we developed and launched an online banner designer which allowed users to design and purchase a banner using a library of assets, or upload their own design. <br> It was created using now defunct Microsoft Silverlight and was discontinued when Megapixel was sold. <br><br> My job was to create the user interface and supply graphics to the developer. </p></div> ',
            yamaha: 
                '<h3 class="popTitle">Yamaha Motorshow Display</h3>' +
                '<h4 class="popSub" >Designed the entire display with feedback from client</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/yamahaRenderL.jpg" alt=""><img src="images/yamahaRealL.jpg" alt=""> </div>' +
                '<p class="popText">I worked on this project while working at Genesis Productions in Brisbane.<br><br> Yamaha\'s motorcycle division would commission a new trade show display each year. In this case they wanted one that was much bigger than the past and that could be broken down and transported in shipping containers as it traveled across the country. <br> I designed this in 3DS max with feedback from Yamaha during the process. They loved the final result and ended up using it for multiple years. <br> The final build was made almost entirely from aluminium square tube. <br><br> Images show the initial 3D render/concept and then a photograph of the final display at the 2004 trade show in Brisbane. </p></div> ',
            telluride: 
                '<h3 class="popTitle">Telluride Ski Resort Interior</h3>' +
                '<h4 class="popSub" >Refit of the locker room of a ski resort in Telluride, CO</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/tellurideRender1L.jpg" alt=""><img src="images/tellurideRender2L.jpg" alt=""> </div>' +
                '<p class="popText">3D modeled the interior of the room from supplied reference photos and dimensions. Created using 3DS Max, MentalRay & Photoshop to simulate real-world lighting at the location. <br> <br> Communication with client and architect was regular during process.</p></div> ',
            portfolio: 
                '<h3 class="popTitle">Portfolio 1 2018</h3>' +
                '<h4 class="popSub" >Bold, Retro and not very responsive</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/PortfolioV1L.png" alt=""> </div>' +
                '<p class="popText">This was our first assignment of 2018.<br> I was inspired by Cowboy Bebop and chose 4 colors and 4 panels as the main focus of the theme. As it progressed I also brought in some cues from Akira and general Vaporwave Aesthetic colors. <br> The end result was a UX that was cumbersome to navigate and wasn\'t very intuitive. <br> <br> My goal for the current site is to focus on mobile-first design.<br> Visit the original site here: <a href="https://deezye.github.io/folio2018/">Portfolio V1</a></p></div>',
            portfolio2: 
                '<h3 class="popTitle">Portfolio 2</h3>' +
                '<h4 class="popSub" >Mobile-first with Vue / JS functionality</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/PortfolioV2L.jpg" alt=""> </div>' +
                '<p class="popText">I wasn\'t totally happy with how responsive my first site was, I also felt that I had allowed my UI to interfere with my UX and it bugged me. <br><br> This version is much more expandable as I grow in experience and add more items. <br><br> Please take a moment have a look at the development diary of this site <a href="https://github.com/DeezyE/Portfolio2">Portfolio 2 Dev Diary</a></p></div>',
            cycling: 
                '<h3 class="popTitle">Cycling</h3>' +
                '<h4 class="popSub" >I miss my nice bike :(</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/barracudaxfx.png" alt=""> </div>' +
                '<p class="popText">I have always loved riding bikes - and got more into it while living in Colorado. During the summer the mountains there have some fantastic rides available. Not to mention ski-lifts which in summer turn into downhill mountain bike lifts!<br>Riding to work is fun too.<br><br>This was the bike I had in America - A retro DH bike with ridiculously long-travel front shocks (which weren\'t actually very good)</p></div>',
            pingpong: 
                '<h3 class="popTitle">Ping Pong</h3>' +
                '<h4 class="popSub" >Team fun with a funny sounding game</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/pingpongL.png" alt=""> </div>' +
                '<p class="popText">Our whole class has been playing ping pong during breaks and it\'s been a blast. I used to play in high school so it has been great to get back into it.</p></div>',
            culture: 
                '<h3 class="popTitle">Company Culture</h3>' +
                '<h4 class="popSub" >A great team is better than a group of superior individuals</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/leadersEatLastL.png" alt=""> </div>' +
                '<p class="popText">Until a few years ago I wasn\'t even sure what this was called. I experienced the impact of a great company culture (at Megapixel USA) and after that I became passionate about it. I honestly feel that a positive group culture has far greater impact on productivity and innovation than any other factor.<br><br>It\'s not an easy beast to raise, but the results are fantastic. <br><br> I really like Simon Sinek and his thoughts on the topic. <br><br>I am very interested in learning more about this. </p></div>',
            growth: 
                '<h3 class="popTitle">Growth Mindset</h3>' +
                '<h4 class="popSub" >We only learn through times of difficulty</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/growth.png" alt=""> </div>' +
                '<p class="popText">I had a revelation sometime in 2016 and it changed (and is changing) my life. My career change and newfound passion for excellence and learning is the result of this change. This site is not the place to go deep into this paradigm shift, but check out my <a href="https://medium.com/@isaacpowell">Medium page</a> for a few posts that express my heart on this.<br><br>The summary is: I practise growth mindset all day. I sometimes fail, but that is part of the journey. <br><br>The journey is good</p></div>',
            learning: 
                '<h3 class="popTitle">Learning</h3>' +
                '<h4 class="popSub" >Your most unhappy customers are your greatest source of learning ~ Bill Gates</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/learningL.png" alt=""> </div>' +
                '<p class="popText">Much like my interest in a Growth Mindset, I also have a passion for learning. I want to be challenged, discover new things and then be able to pass tha knowledge on to other.<br> I want to make the process of learning new things faster so that I, and others can be more broadly educated over our lives.</p></div>',
            meetups: 
                '<h3 class="popTitle">Meetups / Networking</h3>' +
                '<h4 class="popSub" >Meetups are an undervalued public asset</h4>' +
                '<div class="popContent">' +
                '<div class="popImg"> <img src="images/meetupL.png" alt=""> </div>' +
                '<p class="popText">Along with discovering my joy in developing apps has been the discovery of awesome Meetups all around the city. <br>Tech Newbies, BrisJS, BrisRuby and a few others are the ones that I attend regularly. <br><br> I love meeting new people, hearing their stories and learning about what others do. At our core I think humans want to connect to others and doing so in the setting of a meetup is a great way to get to the heart of others without it being too awkwardrk</p></div>',
        }
    }, 

    methods: {
        popInfo: function (event) {
            let infoPopup = document.getElementById("IpopDiv");
            infoPopup.classList.toggle("show");
            clickedItem = event.currentTarget.id;
            $('#IpopDiv').append(app.projects[clickedItem]);
            // console.log(app.projects[clickedItem]);
            
        },
        popClose: function () {
            $('.popTitle').remove();
            $('.popSub').remove();
            $('.popContent').remove();
            let infoPopup = document.getElementById("IpopDiv");
            infoPopup.classList.toggle("show");
        },
    }
})