# The Problem to be Solved

I write blog posts which I then read out loud for my podcast. Ulysses tells me how long it will take me to read each post. I want to be able to add the times up for the blog psots I've written to see if my show will be the right length. I don't want it too short, and if I have too much content I want to move it to the next week.

Oddly Excel and other spreadsheets I've tried have not been able to do this. They see time as a time of day, not elapsed time.  It's tedious to do by hand, carrying over additions >60 seconds to the minutes, etc.

There are a few online tools but they're all crapped up with ads, and I wanted a simple interface that would solve this problem.

# Approach

My goal is to have three fields between which you can tab, for hours/minutes/seconds, and then a button to push to add more time entries.  I'm hoping to be able to keep a running total and yet make it obvious that you have to push ADD to show the correct running total.  

Might be nice to have a clear all button, and maybe an option to only show min/sec if that's all you need (saves a tab!)

I will only allow integer values for the fields. You may want decimal seconds but that doesn't solve my problem. You're free to fork the code and accommodate decimals!

I'll be making this mobile first using Bootstrap, so it will be a narrow format for the phone, perhaps with some breathing room for larger devices.

The code will be in HTML, CSS and JavaScript.


