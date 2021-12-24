### Using Game Boy Sound Manipulator
Load the rom into your emulator (I recommend Sameboy but any is fine) or your flashcard. After the start screen you will be greeted by Channel 1 which in GBStudio is Tone in the Play Sound event. You can navigate using left and right which will tell you how each section will shape your sound. Changing parameters will automatically preview your sound but you can also press Start. Select will cycle through the other sound channels. You don’t need to be an expert on this but here is a bit of a guide to get you started

Let’s start with Channel 1.
Navigate over to the very last parameter which will control pitch. If you cycle up and down, you can hear the pitch getting higher and lower. 

Once you’ve got one you like, let’s navigate back a bit and look at Envelope Steps. An envelope is how your sound is actually shaped. Essentially for this, it will be controlling if and how long your sound will fade in or out which is extremely powerful and not something you can do with the stock event.

Press up to cycle through the fades for the end of the sound. 1 gives us a nice quick fade that makes sort of a bounce. As you cycle up, you’ll notice the fade becoming harder to hear. This is because we’re controlling the length of the fade out and our sound is very short, finishing before the fade does.

Let’s give it more sound to work with. Navigate down to Consecutive Flag and turn it to Repeat. This will set our sound to play forever, giving us unlimited material to shape. If we go back to our Envelope Steps and press down to set it back to 000. You can hear we now have a constant tone. Cycle back up and you can now hear more of the fade-outs

But what about fade-ins? Cycle left to Envelope Up/Down and set it to Increase. You might not be able to really hear what’s happening so let’s navigate left one more time to the Initial Volume which does what it says. Cycle down and the fade in should be more apparent.

Alright let’s reset a bit and talk about Sweep. Set your initial volume back to 1111, Envelope back to Increase, and Envelope Steps to 001

Now let’s navigate left to Sweep Shifts. This is the good stuff. If you cycle up and down you won’t really hear anything different. Set it to some other value than what we started with. Lets go all the way left to Sweep Time. Cycle through and now you should be hearing some really cool sounds. If you cycle right to Freq Increase/Decrease you can change if the sound starts pitched  low and finishes high or vice versa, similar to how the envelopes control volume fade. Play around with these three parameters and see what you get.

Move right to get to Waveform Duty. These are like different instruments. There are 4 to choose from. Last if you cycle right once more, you can get to note length. This won’t have much effect for us right now since we have Consecutive Flag set to Repeat which is similar to hitting a note on a keyboard so fast it sounds just like one note.

Finally, if you go right once more you get to Frequency which is simply fine tuning the pitch of the sound like a guitar.

These concepts can be applied to Ch2 and Ch4 so I’ll let you mess around. I am also no expert. Ch 3 is special in that it allows you to create your own instruments. I absolutely do not understand all of it but there are people who do.
