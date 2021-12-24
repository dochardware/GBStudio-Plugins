###Maximum SFX Guide

##What does it do?
The stock Play Sound event is pretty bare bones. To get any decent sound requires you to stack several of them, adding a bit of lag for each one placed. Even then, you don’t get contol over volume, envelope, or any tools that help shape your sound. This plugin allows you to use hex values which give TONS more flexibility and makes it easier to get accurate or more interesting sound.

##How do i get the right hex value?
Included is Game Boy Sound Manipulator (Version 1.01) which will let you play around with shaping sound and give you the appropriate hex value. The best part is you can load the rom onto your gameboy and hear machine accurate sound before coding unlike making music.

##Installing the plugin
Installing is as simple as creating a plugins folder in the root of your project file folder if you don’t already have one (not NOT NOT the assets folder) and placing the unzipped folder inside. In GBStudio when you add an event, it will be filed under MAX. Thats it. 

##Using the plugin
After you have the sound you want made using Game Boy Sound Manipulator, you can select the appropriate channel, and put the five values you were given in the Hex field. Each value must be preceded by 0x. Channels 2 and 4 .only give four values so add 0x00 as the final value to get them to play. Duration tells the gameboy how many frames to allow the sound to play. If your sound seems clipped when you run the game, extend this time but be aware that the gameboy will reserve this time to play the sound and will not trigger it again until after that time has passed. So while the sound may have audibly stopped, the timer will still be ticking so to speak.

Also, all sounds share the same channels on gameboy, therefore if you have music, if a sound plays using Channel 1 for instance, any instrument in your music playing on Channel 1, will drop out. This is normal behavior for the system.