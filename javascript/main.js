var app = new Vue({
            el: '#app',
            data: {
                projects: [{
                        honeypot: '<h3 class="popTitle"> HoneyPot </h3><p class="popText">This was my Ruby/Rails major project. 2 Weeks to design and build a 2 sided marketplace.</p> <img class="popImg" v-bind:src="popUrl" alt="">',
                        gobigbanners: '<h3 class="popTitle"> GoBigBanners.com </h3><p class="popText">While I worked at Megapixel Digital Imaging in the USA I was involved with launching this side venture. Originally it was a web app that allowed the user to design a banner online and order it</p> <img class="popImg" v-bind:src="popUrl" alt="">',
                    }]
                },

                methods: {
                    popInfo: function (event) {
                        let infoPopup = document.getElementById("IpopDiv");
                        infoPopup.classList.toggle("show");
                        console.log(event.currentTarget)
                    },
                    // popHTML: function () {
                    //     console.log('popFill')
                        
                    // },
                    popClose: function () {
                        let infoPopup = document.getElementById("IpopDiv");
                        infoPopup.classList.toggle("show");
                    }
                }
            })


        // function popInfo() {
        //   $("popDiv").classList.toggle("show")
        //     // var popup = document.getElementsByClassName("popDiv");
        //     // popup.classList.toggle("show");
        //     console.log('working')
        // }