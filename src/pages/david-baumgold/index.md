---
title: David Baumgold
bio: Full-stack web developer, open source contributor, technical trainer, public speaker, writer, hypnotist. 
date: "2019-01-11"
description: This is a description
pic: ./profile.jpg
twitter: singingwolfboy
---

### Can you please introduce yourself and tell me a bit about your background.

Hi! I’m DB. I’m an American software developer living in Amsterdam and working as a freelancer. I started writing software in college, and quickly fell in love with web development and Python. After I finished college, I spent a few years working as an employee for various tech companies in the Boston area, where I learned a lot about what I liked and didn’t like in the corporate world. I also discovered open source software, and dived in enthusiastically - I’ve always loved making things work better than they did before, and that’s what open source is all about!

After I spoke at PyCon for the first time in 2015, O’Reilly Media asked me if I wanted to write a book for them, and I enthusiastically accepted! I decided to leave my job so I could spend more time writing, and once my former coworkers found out that I had time available, I got a few offers to work as a contractor part-time. I decided to try the freelancer lifestyle, and discovered that I really enjoy having a flexible schedule. Unfortunately, my work on the O’Reilly book stalled out, due to extenuating circumstances; maybe I’ll try again in a few years. However, I continued working as a freelancer, and got a few high-profile clients, including MIT.

In 2017, I decided I wanted to try living outside the United States for a while. The digital nomad lifestyle sounds very appealing, but I knew it wasn’t for me - building a network of friends that I get to see regularly is very important to me. While I wasn’t excited about being an employee again, I figured that working for a foreign company was the best way to get a visa, and I started applying online. I found a company in Amsterdam that was looking for a frontend developer and, while Python is my favorite language, JavaScript is my second-favorite so I decided to apply. They liked me so much that they made me a job offer without ever meeting me in person, and I decided to take it and move to Amsterdam.

Nowadays, I’m working freelance again. The company that hired me was a good fit for a while, but I knew that it wouldn’t be forever. With the help of the developer community I’ve found in Amsterdam (as well as some good lawyers) I established my own company in the Netherlands and that company grants me a visa to live in the Netherlands. It’s a pretty great setup and, while it wasn’t planned, I’m really happy with how things turned out.

### You're best known for your involvement in the Python community. How did you get in to Python? Was it always Python, or do you have a background in other programming languages?

I learned Java in college, and picked up PHP on the side to build websites. Another college friend of mine told me about this language called Python and recommended that I check it out. I started learning the syntax, and the libraries, and quickly realized that this was a much, much, nicer language than Java and PHP were. The more I used Python, the more useful and beautiful it became. I started meeting other Pythonistas and discovered that the community around the language was just as appealing as the language itself.

Open source helped me learn a lot more advanced Python techniques and, as I became more experienced, I realized that I could write libraries and contribute to open source, as well. My most successful open source project so far is called [Flask-Dance](https://github.com/singingwolfboy/flask-dance), which is a library for doing OAuth with the [Flask](http://flask.pocoo.org/) web framework. I wrote it because I tried several other libraries for OAuth in Flask, and realized that all of them were overcomplicated, so I decided to write something simpler. It’s a small niche, but I’m happy to report that others seem to like my work too, and I know for a fact that my little library is running in production for several different companies.

### When I reached out to you, you mentioned that you don't do much Python anymore and are predominantly doing Javascript now. Can you tell mw a bit more about that and the reason for the change?

When I moved to Amsterdam, I was hired as a senior frontend developer for a company called Impraise, which runs Ruby on Rails for the backend. There was no Python to be found anywhere in the company, so I was writing JavaScript all day, every day. And you know what? JS is a fascinating language, deeply flawed but impressively powerful. It’s growing incredibly quickly and new libraries, frameworks, and best practices are being developed every week - which is both a blessing and a curse.

I admit it - I love JavaScript. I love Python too. However, I’ve been doing Python for so many years that I feel like I’ve already learned most of what I want to know about Python. JavaScript is a whole new world to explore, a world that is evolving and shifting at a frighteningly fast pace. JS is also in higher demand than Python right now, especially for developers who know the React ecosystem. So even though I’m quite happy to wrangle some Python, I’m more focused on JS these days.

### Following on from that, how do Python and Javascript compare? What are you enjoying? What are you hating?

I like to anthropomorphize software. Python is a stately, graceful young woman who probably wears librarian glasses and sips tea. She knows what she wants, and she knows how to get it. Her younger sister Ruby is always “reinventing” herself and pursuing a different romantic partner every couple of months; Python went through that phase, and no longer wants to get all tied up in knots the way Ruby does. Python will occasionally have a wild night, but she generally prefers her evenings to be simple and quiet. Python is a woman who radiates a calm, quiet power, one of those people that you instinctively know that you do not want to cross.

JavaScript is totally different. JavaScript is a lanky teenager who goes out partying every single night. He’s still going through puberty, and some parts of his body are more developed than others. JavaScript is one of those guys who likes to impress people at parties by talking about functional programming and strongly typed systems, and then will accidentally trip over his shoelaces, fall on his face, and blurt out “undefined is not a function”. 

To his credit, it’s easy to see that JavaScript is going to grow into a very handsome man, and everyone wants to get to know him now so that they can say they knew him back when he was going through his experimental phase. JavaScript tries to be friendly as well, and he’s learning how to dance with others without stepping on their toes, but he always thinks that nobody else really understands him. He probably writes moody, goth poetry in secret, and wonders when all the other programming languages are going to finally realize how cool he is and invite him to their parties.

Basically, Python feels much more mature than JS. JS moves faster, which makes it more exciting but also means that you have to rewrite things every six months or so. I like seeing the powerful, dynamic things you can do with modern JS, but I wonder when the language is going to settle down and become more maintainable.

### Given that you have a diverse range of technical skills, if you had to start building a new web application today, what would be in your 'stack' and why? 

[React](https://reactjs.org/) on the frontend, [GraphQL](https://graphql.org/) for the API layer. GraphQL is incredibly powerful, and much more flexible than REST. React is a very good fit for the flexibility and power that GraphQL provides. React Native also means that you can build mobile apps that share code with your website, which is a nice benefit.

For the backend, I’d like to suggest Flask with the [Graphene](https://graphene-python.org/) framework, both written in Python. Unfortunately, the last time I tried Graphene, it didn’t work very well and didn’t support the latest GraphQL specs - it’s built by one person, and he works on it when he has time to do so. The JavaScript implementation of GraphQL is the only one that keeps up with the specs, which means it’s the best practical choice. The Apollo framework is a great choice, for both server and client libraries. There’s also a framework called Vesper built on top of Apollo, that ties all the pieces together very neatly. Unfortunately, it’s not very well known and development seems to have stalled, so I’m not sure if I should recommend it or not.

For the database layer, [PostgreSQL](https://www.postgresql.org/) is unquestionably the best choice. If you want to use Python use [SQLAlchemy](https://www.sqlalchemy.org/) as an ORM, it’s incredible and, I dearly miss it when I work in server-side JS. The best alternative ORM I’ve found in JS is TypeORM, which makes you do most of the work. Alternatively, skip the ORM entirely and use PostGraphile to generate a GraphQL API directly from your database schema.

### 'I enjoy public speaking' - Your own words 😊! Therefore, if you were to recommend one must watch talk, either that you have given yourself or that you have watched, what would that be?

My favorite talk that I’ve given, as well as the most popular one, is called “Advanced Git”, and it’s available on YouTube: 

`youtube:https://www.youtube.com/embed/4EOZvow1mk4`

It’s a great talk for learning how to unlock the power of Git, which is something that every developer needs these days.

My favorite talk that I’ve heard someone else give is definitely “How to Crash an Airplane”, by Nikolas Means, also available on YouTube:
 
`youtube:https://www.youtube.com/embed/099cHWSbAL8`

He’s an incredibly engaging speaker, and despite the name, it’s actually a talk about how to run an effective team for building software.

### Can you tell us about your local development environment, operating system, software and apps?

I use a 2014 Macbook Pro running the latest macOS. I use [Homebrew](https://brew.sh/) to install and manage software on my computer as much as possible, including Homebrew Cask for GUI applications. I use [VS Code](https://code.visualstudio.com/) as my text editor, but I use the stock macOS apps for most other things. A mix of Firefox and Chrome for web browsing & development. I use Firefox as my primary web browser and only pop open Chrome when I need the dev tools for something that Firefox doesn’t provide.

Lots of developers have tricked-out, highly customized development environments. I go the other way. I try to keep things as simple and standard as possible. I’ve considered switching to Linux many times, but I’m fairly invested in the Mac ecosystem and I don’t want to spend time tweaking video drivers and customizing windowing environments. I just want to use my computer to get shit done.

### You're now based in Amsterdam. How is it? How did the relocation come about?

Before I left the US, I had done a fair amount of international travel for a few years, both for work (attending conferences) and for vacation. I often wondered what it would be like to actually live in another country, rather than just visiting. I promised myself I would try it someday.

And then Trump got elected, and “someday” became “as soon as possible”. Pretty simple, really.

### Do you have any hobbies outside the computer?

Absolutely! In no particular order:

* I’m an avid board gamer and I run a recurring [board game night](https://www.meetup.com/Appsterdam/events/cqgqlqyzcbkb/) affiliated with Appsterdam, a social group of software developers in Amsterdam.
* I sing in the Amsterdam Gay Mens Chorus, which is where I met my Dutch boyfriend.
* I really enjoy having long meandering conversations with people, often over a meal.
* I’ve been practicing hypnosis for about 10 years, and I was certified with the National Guild of Hypnotists a few years ago.
* I play video games casually. I’ve spent a lot of time on Hearthstone, RimWorld, and Civilization.
* I like traveling to new places and exploring. I’m equally happy traveling by myself, or with friends.
* I enjoy tabletop roleplaying games, like Dungeons and Dragons. I’ve played a lot of GURPS, and I’m in a Pathfinder game these days.

### If your life was made in to a movie, who would you like to play you?

No idea. I don’t watch many movies, to be honest!

### If you could be a superhero, what super power would you want?

The power to read minds and communicate with anyone, regardless of language. Professor Xavier from the X-Men, basically. Maybe this plays into the hypnosis thing a bit 😊.

### Is there anything else you would like to say? Do you have any recommendations for someone who is learning or considering a career in web development? Where should they start?

I’ve heard many stories of “whizz-kids” who were playing around with computers starting from age 4 and who have been programming all through childhood. I didn’t know I was interested in programming until college, when I took it as an elective class because I was curious. I know many people who started later than that. You don’t have to be a “whizz-kid” to be a competent programmer, you just have to want to learn 😊.

If you’re interested in Python, specifically, I highly recommend the book [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/), by Al Sweigart. It’s a great introduction, and it’s free to read on the web.
