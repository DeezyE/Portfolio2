# Portfolio2 _The updated portfolio_ 

## Development diary
### May20 2018
Began brainstorming a few weeks ago, did some new wireframes but class assignement got in the way somewhat.
Yesterday and today I finalized some of the user flow. It was a sticking point for me for some time.
I struggled with resolving my original design of 4 panels [Original portfolio link](https://deezye.github.io/folio2018/)
I knew that the site was created from the design first, and I had wrested the UX into the design rather than starting with UX first - a mistake. So I really wanted to get to the core of what I wanted from a site. 
Here's what I wanted:
- A simple design, a single page portfolio was my initial concept and goal.
- Conveyed my personality strongly. I want the user to know me by browsing the site
- Retro / Vaporwave / Bold colors. I want the site to stand out
- Mobile first. But still look good on desktop

Here's the Flow graph (sort of) mixed with basic wireframe idea for UX. Single page, Mobile-first, responsive. 
![Flow / Wireframe](https://github.com/DeezyE/Portfolio2/blob/master/assets/flowDiagram.png "Flow Diagram")

### May21
Am heading into town earlier than normal in order to snag a quiet spot to work on my portfolio. I sometimes talk too much in class and distract myself and others, so I'm separating myself for the sake of the project. Found a food court that's pretty quiet.
Switched to VS Code from Atom. I had to wait until I got a fast enough machine to handle it. Like it so far, a few things that bug me (like the bulky and intrusive matching bracket highlighting. Yes I know you can turn it off, but it's handy) but I think it's pros will outweigh its cons.
I continued on the basic HTML structure, decided to set out the majority of the page as a series of Unordered Lists within a container. At this stage I plan to make the `<ul>` a flex box and just have a new `<ul>` for each section. This will keep it responsive while grouping the tiles up. The downside is that it will lose some of the pleasing hole-filling nature that I can set.. But without sacrificing usability I don't think I can help it.
Wrote a medium article about my classmate getting a job. I wanted to express something deep about the nature of success and failure. [Read it here](https://medium.com/@isaacpowell/the-success-of-others-should-make-you-anxious-e58592588cec) 

### May22
Not as productive a morning as I'd hoped. I need to keep my headphones in and find my focus zone. Spent most of the time reconnecting some of the parts of the old site that I liked - Font Awesome icons and some CSS. Sorted out some of VS Code's github tools. I like them so far. Anything to make the github UX a smoother one is a win in my book.
Left class early, had to run an errand for my boss (I have a side job) that had to be done before 5pm. Home for dinner then off to work again. The hustle is real.

### May23
Made a nice functional jump between just a boring `<ul>` and items, to the start of a responsive layout. I think this little jump is a nice dopamine hit to remind you that you're progressing. Layout looks a bit dumb with the sections just doing the basic Flex operation. Need to make one of the sections pop over to a 2nd column after a breakpoint is hit.

### May24
Recycled a sprite bottle in the Reverse Vending Machine... Fun stuff, I think it's still in demo mode but I virtually gave 10c to Endeavour Foundation. 
Added the 2-column breakpoint at the same breakpoint that Bootstrap does (I like their breakpoint breakdown). Here's a before/after.

**Before**

![before breakpoint](https://github.com/DeezyE/Portfolio2/blob/master/assets/beforeBreakPoint.png)

**After**

![after breakpoint](https://github.com/DeezyE/Portfolio2/blob/master/assets/afterBreakPoint.png)

Progress is always slower than I'd like. But it's progress so I should be happy.

### May25
**Fluff**
Went into the city earlier than normal since I didn't get much done last night. I've walked past a building that has a nice lobby for months now and thought it would be a good place to sit and work - nice couches and tables. It did puzzle me that I never saw anyone sitting on them but I figured it was because it was morning and everyone has places to go at that time. I decided to try working there this morning and so I went in and ordered a coffee from the cafe and walked over to the couches. Turns out it's some sort of new and stylish Telstra office. There was a long desk opposite the couches with a guy sitting there and massive TELSTRA letters above the couches that I'd never noticed since they're 20ft off the ground. Well good work on the subtlety of your office space telstra - you look like a library. I contemplated sitting there but decided I didn't want a new phone or plan so I went to the old stand-by that has served me well so far. 400 George St. Upstairs. It's heated which is nice this time of year.

**Actual Dev Diary Content**
Oh yeah, dev diary, how about some dev talk?
Spent an hour tweaking the CSS to behave as I wanted and am still not happy with how it's displaying. By 8:15 I realised that I think I actually want a full grid layout rather than grid/flex combo. That's fine I'll swap that out later. Began working on the jquery popups for each `<li>`. Needs to throw up a window that contains info about the item that the user clicks on. 

Using a jQuery CDN, plus some custom JS/Query for the info popups
Basic setup of the popup. Lots of troubleshooting since I'm fairly new to jQuery :)

**Meetup**
Was invited by Scrunch (through Caroline and Nick) to go to their end-of-week recap/beers/cheese-platter thing. We arrived to a rowdy and enthusiastic 15 odd staff who recapped the week thus far. Their enthusiasm, banter and general good vibe impressed upon me the value of a great work culture. I enjoyed listening to their accomplishments and then hanging out afterwards. Great team, I hope they do well! I also need to check out the standing desk setup they have, it's very cool!

### May26
**Fluff**
Did some IRL work today, a couple of hours with my darling wife, gluing roof panels for beehives. She's shown herself to be a damn impressive worker, with an incredible eye for detail and quality. No wonder my boss calls her the Mistress of quality. Happy to see her discover a new area of expertise.

**Dev**
Went to a cafe to work on site some more. Focus today is nailing the popup mechanics. Was having trouble getting the div selected using my external `.js` file. Ended up temporarily dropping the js into the html file until I could get it working. Turned out it was an incorrectly named .css class causing me issues. Good to see it function finally.

Ignore the colors, they're just for getting framework done
![Popup](https://github.com/DeezyE/Portfolio2/blob/master/assets/popUpRunning.png)

Next step is getting Vue or JS to populate the overlay with data dependent on which card is clicked on... Have an idea of hwo to do so. I quite like the syntax and function of Vue. Looking forward to seeing how React deals with the same situation.

Discovered that Vue's `v-on:click` returns the element that was clicked and is accessible through `.currentTarget` which is fantastic! That means I can set up the same on click event on every list item and have logic that populates the `<div>` automatically! Excited....

**Hustle**
3D Modeled a replica of TARS from the movie Interstellar (fantastic movie) but customized it for TANDA. Ran a few test prints on my 3D printer then sent the first of 4 pieces to print. They'll each take 4~ hours to print, so I hope it all works and looks good because I wont have enough time to reprint.

### May27
**Fluff**
Up for a morning walk and brekky down the road. I love this part of the week, gives my wife and I a chance to catch up, chill out and get some excercise.

**Dev**
Finalized the on click logic which works wonderfully! It will be much easier to style these divs since I can apply the styling once and know that the JS will do the rest. Plus it feels good to have automation. Love it.
Continued with incremental CSS changes and implementing colours. Attempting to use colours to theme the sections. Doing so without making the screen to overwhelming and bright is not straightforward... Colored text is a pretty bad choice so I'm avoiding it.

More time spent styling and jumping between babysitting my 3D prints. They've turned out pretty nicely though I've reprinted one section to emphasise the text on it.

Having trouble getting my flex items to behave properly.. I'm sure it's one minor property I've missed but it's frustrating..

### May28
**Dev** 
Went to be early last night and up early and in the city this morning. Didn't get the site done yesterday, I forgot I had my nieces party in the afternoon and then we got lost driving there :/

Left school early to try finish up the grid-layout conversion. Flex just doesn't cut it for columns of items... It's almost as if it weren't designed for such a thing....
Much happier with grid layout, now working on populating the data.

I like how responsive the site is now but man it's boring. Need to bring back some of the interest from the old site.

**Hustle**
Sanded the parts to the 3d printed robot and glued the magnets into it. It functions well and looks pretty good.

### May29
**Dev**
Added content and images to Interests section. Basically just adding content at this point.

And here's the layout with icons in place.
![May29 Layout](https://github.com/DeezyE/Portfolio2/blob/master/assets/may29screen.png)

Getting close for me to be ok with making it publicly visible. There's still some todo's to finalize - but I can do these over time.

I decided to make some of the Skillset icons a little larger to emphasise my interest/skill in a few. Setting the Javascript one as `span 2 / span 2` looked great, but it felt like maybe it was too large in comparison. I decided to double the number of grid lines, then increase the span of each `li` to 2, then set the Javascript one as `span 3 / span 3` to make it just 150% larger rather than 200%. Looks good and it's helped break up the monotony of the grid layout. I went a little further and decreased my Minecraft and Fortnite skills down to `span 1 / span 1` since they're more of a joke skill (especially in Fortnite, I'm a joke) and it helped fill in the little holes leftover. I might use this to add more within the other sections and really give the page some unique flavor. 

I like it! Check it: 
![May29 Layout](https://github.com/DeezyE/Portfolio2/blob/master/assets/may29screen2.png)

**Hustle**
My first internship interview tomorrow! It's with 2ndlease.com.au I believe. Should be interesting. 

Sent out my CV and a cover letter to PCCW global after our mentor - Anna Gerber told us that they were about to close applications for interns and that they have a great culture focus. My kind of jam!

### Todo
- Switch my ugly html chunks in the .js file over to a prettier and more intelligent value-replacement system. 
- Fix navbar
- Style popDiv better
- Fix popDiv placement
- Podcast/Book section?
- Fix aspect ratio of cards OR fix the row fitting thing. (solution might be to further the varied card sizes like I've done with skillset)
