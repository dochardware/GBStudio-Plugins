# Using Game Boy Sound Manipulator
Included with the plugin is a rom for Game Boy Sound Manipulator which will help you in creating your sound effects

<img width="400" alt="Screen Shot 2021-12-24 at 7 36 09 AM" src="https://user-images.githubusercontent.com/1316677/147364523-f754316a-a6f8-4d9d-bb75-415a685582a8.png">
Load the rom into your emulator (I recommend Sameboy but any is fine) or your flashcard. After the start screen you will be greeted by Channel 1 which in GBStudio is Tone in the Play Sound event. You can navigate using left and right which will tell you how each section will shape your sound. Changing parameters will automatically preview your sound but you can also press Start. Select will cycle through the other sound channels. You don’t need to be an expert on this but here is a bit of a guide to get you started.

Let’s start with Channel 1.

<img width="400" alt="Screen Shot 2021-12-24 at 7 46 20 AM" src="https://user-images.githubusercontent.com/1316677/147364546-d6408da7-7905-4eec-b4ed-e5ebd6c5bd74.png">

Navigate over to the very last parameter which will control pitch. If you cycle up and down, you can hear the pitch getting higher and lower. 

Once you’ve got one you like, let’s navigate back a bit and look at Envelope Steps. 

<img width="400" alt="Screen Shot 2021-12-24 at 7 47 24 AM" src="https://user-images.githubusercontent.com/1316677/147364568-2ba2cb29-c7f7-43a7-bb4e-159ec9d31661.png">

An envelope is how your sound is actually shaped. Essentially for this, it will be controlling if and how long your sound will fade in or out which is extremely powerful and not something you can do with the stock event.

Press up to cycle through the fades for the end of the sound. 1 gives us a nice quick fade that makes sort of a bounce. As you cycle up, you’ll notice the fade becoming harder to hear. This is because we’re controlling the length of the fade out and our sound is very short, finishing before the fade does.

Let’s give it more sound to work with. Navigate right to Consecutive Flag and press up or down to turn it to Repeat. 

<img width="400" alt="Screen Shot 2021-12-24 at 7 56 57 AM" src="https://user-images.githubusercontent.com/1316677/147364598-6cebc407-0388-4d90-9095-93e62d63c5bf.png">

This will set our sound to play forever, giving us unlimited material to shape. If we go back to our Envelope Steps and press down to set it back to 000. You can hear we now have a constant tone. Cycle back up and you can now hear more of the fade-outs

<img width="400" alt="Screen Shot 2021-12-24 at 7 58 20 AM" src="https://user-images.githubusercontent.com/1316677/147364655-c2e5a0f6-5671-46a0-83a3-4731862d9b6d.png">

But what about fade-ins? Cycle left to Envelope Up/Down and set it to Increase. 

<img width="400" alt="Screen Shot 2021-12-24 at 10 30 28 AM" src="https://user-images.githubusercontent.com/1316677/147364729-099b8322-715c-4a72-9dfe-766efb988c2a.png">

You might not be able to really hear what’s happening so let’s navigate left one more time to the Initial Volume which does what it says. 

<img width="400" alt="Screen Shot 2021-12-24 at 8 15 21 AM" src="https://user-images.githubusercontent.com/1316677/147364738-cad3b556-56c9-4e4c-a9a3-627e4c9633c9.png">

Cycle down and the fade in should be more apparent.

Alright let’s reset a bit and talk about Sweep. 

<img width="400" alt="Screen Shot 2021-12-24 at 8 17 00 AM" src="https://user-images.githubusercontent.com/1316677/147364755-b4172024-d5a6-4c8c-ade7-54e763d3d922.png">

Set your initial volume back to 1111, Envelope back to Increase, and Envelope Steps to 001. You can match the screenshot above if you want.

Now let’s navigate left to Sweep Shifts. 

<img width="400" alt="Screen Shot 2021-12-24 at 8 37 39 AM" src="https://user-images.githubusercontent.com/1316677/147364788-20e7d81a-a948-40c4-bf5f-2633139d0b54.png">

This is the good stuff. If you cycle up and down you won’t really hear anything different. Set it to some other value than what we started with. Lets go all the way left to Sweep Time. Cycle through and now you should be hearing some really cool sounds. If you cycle right to Freq Increase/Decrease you can change if the sound starts pitched  low and finishes high or vice versa, similar to how the envelopes control volume fade. Play around with these three parameters and see what you get.

Move right to get to Waveform Duty. 

<img width="400" alt="Screen Shot 2021-12-24 at 10 33 51 AM" src="https://user-images.githubusercontent.com/1316677/147364854-1a65fcca-6ad8-4a73-a0c1-0d6d81b69e07.png">

These are like different instruments. There are 4 to choose from. Last if you cycle right once more, you can get to note length. This won’t have much effect for us right now since we have Consecutive Flag set to Repeat which is similar to hitting a note on a keyboard so fast it sounds just like one note.

Finally, if you go right once more you get to Frequency which is simply fine tuning the pitch of the sound like a guitar.

<img width="400" alt="Screen Shot 2021-12-24 at 8 45 29 AM" src="https://user-images.githubusercontent.com/1316677/147364904-f6c658ca-f353-4b64-8df8-94590767711f.png">

These concepts can be applied to Ch2 and Ch4 so I’ll let you mess around. I am also no expert. 

Ch 3 is special in that it allows you to create your own instruments. 

<img width="400" alt="Screen Shot 2021-12-24 at 8 50 36 AM" src="https://user-images.githubusercontent.com/1316677/147364889-1d699a1f-a394-4671-b2f5-45ded829aa9e.png">

<img width="400" alt="Screen Shot 2021-12-24 at 10 51 13 AM" src="https://user-images.githubusercontent.com/1316677/147365651-879dc052-566f-467c-8438-aebb93d43a38.png">

I absolutely do not understand all of it but there are [people who do](https://www.youtube.com/watch?v=1aSAqWgtrD0). You're essentially using the values on the right to manipulate the waveform on the left to make shapes. You can probably look up some shapes for various sounds.


## Getting this all into GBStudio
So that's pretty much the tool. 

Once you're done, look up at the top and write these values down cause you're probably gonna want to save them somewhere for later.
</br><img width="400" alt="Screen Shot 2021-12-24 at 8 57 04 AM" src="https://user-images.githubusercontent.com/1316677/147365670-6b1d1e2c-813a-4a6a-9c73-7c38f17238c4.png">

You will then need to put these into the plugin formatted like below. Be sure to rename the event so you know what sound it is. For more info on the plugin, [check out the guide](https://github.com/dochardware/GBStudio-Plugins/blob/b4075f9c44679a859642d97446dc9b5e60e45c47/Maximum%20SFX%20Guide.md)</br>

<img width="263" alt="Screen Shot 2021-12-24 at 10 59 02 AM" src="https://user-images.githubusercontent.com/1316677/147365890-b048a799-6fe3-47da-9d7b-2dbd9dc48562.png">


## Bonus Test Sounds
Here are some sounds i've found to be pretty good

```
menu select/projectile/item
Ch1 - 0x16, 0x4A, 0xB7, 0xFE, 0x85
Ch1 - 0x74, 0x20, 0xE9, 0x3F, 0x86
Ch1 -  0x75, 0x80, 0x77, 0xF2, 0x86
Ch1 -  0x54, 0x80, 0x77, 0xF7, 0x85
Ch1 -  0x34, 0xBE, 0x77, 0xF7, 0x85

Jump sounds/bounce
CH1 - 0x17, 0x8A, 0xB7, 0xFE, 0x85
Ch1 - 0x17, 0xBF, 0xB1, 0x35, 0x85
CH2 - 0x9F, 0xC1, 0x4E, 0x84, 0x00
Ch1 - 0x75, 0x80, 0x77, 0xF2, 0x83
Ch1 - 0x34, 0xBE, 0x77, 0xF7, 0x80

Weapons
[shotgun] ch 4 - 0x00, 0xF3, 0x90, 0x80, 0x00 
[pistol] ch 4 - 0x00, 0xF2, 0x80, 0x80, 0x00 
[pistol] ch 4 - 0x00, 0xD1, 0x30, 0x80, 0x00  
[bomb] ch 4 - 0x20, 0xF4, 0x56, 0x80, 0x00  /*duration set to max*/
[automatic] ch4 - 0x01, 0xC0, 0x00, 0xC0, 0x00```


