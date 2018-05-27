var app = new Vue({
            el: '#app',
            data: {
                projects: {
                        honeypot: '<h3 class="popTitle"> HoneyPot </h3><p class="popText">This was my Ruby/Rails major project. 2 Weeks to design and build a 2 sided marketplace.</p> <img class="popImg" v-bind:src="popUrl" alt="">',
                        gobigbanners: '<h3 class="popTitle"> GoBigBanners.com </h3><p class="popText">While I worked at Megapixel Digital Imaging in the USA I was involved with launching this side venture. Originally it was a web app that allowed the user to design a banner online and order it</p> <img class="popImg" src="https://picsum.photos/200/300" alt="">',
                        yamaha: '<h3 class="popTitle"> Yamaha Motorshow Display </h3><p class="popText">Working with a production company called Genesis Productions in Brisbane I was tasked to design a new display for Yamaha\'s trade shows that they attended. It was a mutli-month long project involving regular client feedback, 3D modeling, and a 3m long scale model. Yamaha loved it.</p> <img class="popImg" src="https://picsum.photos/200/300" alt="">', 
                        gobigbanners: '<h3 class="popTitle"> GoBigBanners.com </h3><p class="popText">While I worked at Megapixel Digital Imaging in the USA I was involved with launching this side venture. Originally it was a web app that allowed the user to design a banner online and order it</p> <img class="popImg" src="https://picsum.photos/200/300" alt="">',
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
                        $('.popTitle').remove();
                        $('.popText').remove();
                        $('.popImg').remove();
                    }
                }
            })


        // function popInfo() {
        //   $("popDiv").classList.toggle("show")
        //     // var popup = document.getElementsByClassName("popDiv");
        //     // popup.classList.toggle("show");
        //     console.log('working')
        // }