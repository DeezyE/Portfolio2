var app = new Vue({
    el: '#app',
    data: {
        projects: {
            honeypot: '<div class="close"><i class="fas fa-times"></i></div>' +
            '<h3 class="popTitle"> HoneyPot </h3>' +
            '<h4 class="popSub" >2 Sided Marketplace Ruby/Rails Assignment </h4>' +
            '<div class="popContent">' +
            '<div class="popImg"> <img src="/images/honeyPotM.gif" alt=""> </div>' +
            '<p class="popText">Tasked to design and build a 2 sided marketplace. You can visit the Heroku Hosted version here: <a href="https://honeypot9000.herokuapp.com/">HoneyPot9000</a> or visit the github repo for the app here: <a href="https://github.com/DeezyE/HoneyPot">Github Repo</a>. <strong>Check out the README for a look at my workflow</strong> or read my <a href="https://medium.com/series/rails-assignment-development-diary-8b070bbe7314">Medium Series</a> which I used as my Dev Diary. </p></div> ',
            gobigbanners: '<div class="close"><i class="fas fa-times"></i></div>' +
            '<h3 class="popTitle"> GoBigBanners.com </h3>' +
            '<h4 class="popSub" >UI/UX Design for web app. 2011.</h4>' +
            '<div class="popContent">' +
            '<div class="popImg"> <img src="/images/gobigbannersL.gif" alt=""> </div>' +
            '<p class="popText">While working as a Graphic Designer (at Megapixel) in the USA, we developed and launched an online banner designer which allowed users to design and purchase a banner using a library of assets, or upload their own design. <br> It was created using now defunct Microsoft Silverlight and was discontinued when Megapixel was sold. <br><br> My job was to create the user interface and supply graphics to the developer. </p></div> ',
            yamaha: '<div class="close"><i class="fas fa-times"></i></div>' +
            '<h3 class="popTitle">Yamaha Motorshow Display</h3>' +
            '<h4 class="popSub" >Designed the entire display with feedback from client</h4>' +
            '<div class="popContent">' +
            '<div class="popImg"> <img src="/images/yamahaRenderL.jpg" alt=""><img src="/images/yamahaRealL.jpg" alt=""> </div>' +
            '<p class="popText">I worked on this project while working at Genesis Productions in Brisbane.<br><br> Yamaha\'s motorcycle division would commission a new trade show display each year. In this case they wanted one that was much bigger than the past and that could be broken down and transported in shipping containers as it traveled across the country. <br> I designed this in 3DS max with feedback from Yamaha during the process. They loved the final result and ended up using it for multiple years. <br> The final build was made almost entirely from aluminium square tube. </p></div> ',
            something: '<h3 class="popTitle"> GoBigBanners.com </h3><p class="popText">While I worked at Megapixel Digital Imaging in the USA I was involved with launching this side venture. Originally it was a web app that allowed the user to design a banner online and order it</p> <img class="popImg" src="https://picsum.photos/200/300" alt="">',
            wiredforwonder: '<h3 class="popTitle"> Wired For Wonder, Commonwealth Bank Event </h3><p class="popText">Head Graphic Designer for a conference on growth mindset</p> <img class="popImg" src="https://picsum.photos/200/300" alt="">',
        }
    },

    methods: {
        popInfo: function (event) {
            let infoPopup = document.getElementById("IpopDiv");
            infoPopup.classList.toggle("show");
            clickedItem = event.currentTarget.id;
            $('#IpopDiv').append(app.projects[clickedItem]);
            console.log(app.projects[clickedItem])
            // console.log(event.currentTarget.id)

        },
        // popHTML: function () {
        //     console.log('popFill')

        // },
        popClose: function () {
            let infoPopup = document.getElementById("IpopDiv");
            infoPopup.classList.toggle("show");
            $('.popDiv').empty();
            // $('.popText').remove();
            // $('.popImg').remove();
        }
    }
})


// function popInfo() {
//   $("popDiv").classList.toggle("show")
//     // var popup = document.getElementsByClassName("popDiv");
//     // popup.classList.toggle("show");
//     console.log('working')
// }