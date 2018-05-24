# Portfolio2 _The updated portfolio_ 

## Development diary
### May20 2018
Began brainstorming a few weeks ago, did some new wireframes but class assignement got in the way somewhat.
Yesterday and today I finalized some of the user flow. It was a sticking point for me for some time.
I struggled with resolving my original design of 4 panels [Original portfolio link](https://deezye.github.io/folio2018/)
I knew that the site was created from the design first, and I had wrested the UX into the design rather than starting with UX first - a mistake. So I really wanted to get to the core of what I wanted from a site. 
Here's what I wanted:
- A simple design, one page was my original idea
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


