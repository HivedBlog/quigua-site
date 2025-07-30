
> quigua-site@0.0.1 dev
> astro dev

02:03:31 [@astrojs/netlify] Enabling sessions with Netlify Blobs
02:03:31 [vite] Environment loaded
02:03:31 [vite] Middleware loaded. Emulating features: blobs, edgeFunctions, environmentVariables, functions, geolocation, headers, images, redirects, static.
02:03:31 [vite] 💭 Linking this project to a Netlify site lets you deploy your site, use any environment variables defined on your team and site and much more. Run [96mnpx netlify init[39m to get started.
02:03:31 [types] Generated 1ms
02:03:31 [content] Syncing content
02:03:31 [content] Synced content

 astro  v5.12.3 ready in 2259 ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose

02:03:31 watching for file changes...
Processed Post Body: HBDStats now has Hive stats!
Since my last [update](https://peakd.com/hive-133987/@dalz/hbdstatscom-update) back in April I have added more elements to the web. Let’s take a look!


Let’s take a look.

 


![01.png](https://files.peakd.com/file/peakd-hive/dalz/23tkjcwb5gpPPGzrTAAMprujbR71EVRCdqpNxDSZ4X8CjsJQzwA3yWCZrRLCE44SsWvBf.png)


https://www.hbdstats.com/


First and foremost, there is now a new tab on the top with the HBD and HIVE options:

 
![Picture1.png](https://files.peakd.com/file/peakd-hive/dalz/23tGTG7T3SbFU3WKphHB6Ui5CN3FyP5pHULD8nHCUKzAj2X8kx4p1LbjSvrGmfMaF3pfq.png)




When you toggle on the HBD tab there are the options:
- Debt
- Savings
- HBD Supply
- DHF Supply
- Cumulative
- Interest

Most of these were there before the update, except for the **interest** chart, that is now new.




![InterestRate.png](https://files.peakd.com/file/peakd-hive/dalz/23swcKD6nVJMaHyw3vi7LnKBw8A1ZVMb9fpXtMRdXxPBMQFhZ5DKqQv2g1xARJLJmuWVE.png)




 


Here we can see the historic move of the interest rate for HBD in savings. We can see that prior to 2021 there was no interest for HBD, then a series of few adjustments on the upside, up to 20% and then a drop to the current 15%.

Having historic HBD interest is a vital parameter that users holding HBD in savings should have in mind, and to note that this parameter is dynamic and has seen changes in the past, based on what then users can bring their conclusions about HBD allocation. 


## Hive Stats


On the totally new addition, the hive tab, currently we have this:
- Hive Supply
- Hive Power
- Active Accounts
- Transactions
</br>


 The **Hive supply** is obviously a key parameter, as for any other blockchain. 

![HIveSupply.png](https://files.peakd.com/file/peakd-hive/dalz/23swbvyyvpefjMEB6MAhbcGjcQoBkYRTokvCQhLBwyCnrKoLoigxucTaXojaWx8P2ovLw.png)





The supply and the inflation rate are something that is closely monitored from the community, as it represents the debasement of the token holders, and when corelated to the staking rewards it gives users, info are they beating inflation with their earnings. On top of this there is info on the current supply data. As for the other chart, users can change the timeframe to 1Y and less. Additionally, as for the other charts, there is a download button for the token supply in CSV form, with daily data back from 2016 that anyone can use in their analysis. 

Going forward I will add another chart with the inflation data represented in % units.

**Next on the list is the Hive Power data:**


 

![HivePower.png](https://files.peakd.com/file/peakd-hive/dalz/23swc1PT6dpsS2yxtCHUJ3KPPfUuRnZPdmmwMQcctwcDyKwjhz1T9EBUX6E3AHiKEGJhS.png)




Another key parameter is how much of the token supply is staked, or in this case powered up. Here we have an overview from the very beginning of the chain back in 2016. The option for choosing a different timeframe is here as well and the download button. 
Another interesting parameter that can be added here is the share of the Hive Powered up, currently at 39%. A historic chart can be a good representation for this as well.

#### Daily Active Accounts
Another key parameter, daily active accounts!
 

![DAUs.png](https://files.peakd.com/file/peakd-hive/dalz/23swcKCogmCAcgey42wnhZCUNQJPXL7V9tqevXd82dGLJzigVhysRjP7X9nhmcXV9ULUu.png)



Here as well we have a historical data going all the way back. Note that the number of active accounts is for all types of operations, and the massive spike back in 2021 is due to the explosion in the activity on Splinterlands. Going forward a breakdown of the active accounts by operation can be included, like account posting, voting, custom_json, transfers, etc. 




#### Number of Transactions per Day
Another key parameter, the activity on the chain, or the number of transactions per day. 
 





![Tx.png](https://files.peakd.com/file/peakd-hive/dalz/23swdzuaftB5zNiDmy2cgKYSuU8xHnEKRnsjoU7DGioRugh6BtHpjfehdZ9amGmz7ZTAt.png)







This chart as for the active accounts includes all types of operations made, the options for adding a further breakdown by type of operations can be implemented here as well. 

### Future Plans
As already pointed out, I do plan to add a few more charts, especially on the Hive side, including the inflation rate, share of Hive powered up, and breakdown of the activity and transactions by type of operation.

On the HBD side, there can be more aditions, like daily paid HBD interest, DHF payouts, top holders etc. 

Another major addition I plan to add is data on the **Splinterlands** tokens, SPS and DEC. I do post now from time to time about the supply and inflation of these tokens, but getting data on the historical supply can be a challenge. There are APIs that Splinterlands provide for the current supply, from where I can make daily snapshots and create a timeseries. 




#### Support the Project
The web has a nice amount of data and charts now, from the early beginning, where there was only one chart. It is a full stack web, with a backend, its own database and APIs. While I do this for personal pleasure, growth and to upscale my skills, any appreciation is more than welcomed. It will for sure boost motivation and speed up the development :). I dont know exactly how many hours I have put in it till now, but it is a lot. For sure I do plan to put all the code on github, and the data is free to be downloaded even now, for every chart. 


I have integrated donation buttons in HBD, for anyone that finds the provided data useful. The transactions lead to keychain link with all the safety measures in place, first choose account, and then confirm the transaction. 

 


![Support.png](https://files.peakd.com/file/peakd-hive/dalz/23swaANVxztCrADgi1Z3jdxR8dSQtJHmJ74sQDy2Kj39qNWgU1KDUfMiYgkqgYqfrX8nv.png)




https://hbdstats.com/


**If you have any additional proposals, feedback and addition you want to see in the web, let me know in the comments!**

All the best
@dalz

02:03:33 [200] /post/dalz/hbdstatscom-update-or-now-with-hive-stats-supply-hp-active-accounts-transactions 641ms
02:03:34 [404] /favicon.svg 3ms
02:03:39 [200] / 2230ms
02:03:40 [200] / 1134ms
Processed Post Body: ![other_narratives_6_12x9_ink_on_paper_w.png](https://files.peakd.com/file/peakd-hive/artgrafiken/23u6QTFAHHN9N6JsvfXsV2rwvbpTPzuT2WVywrVzk1mmrXvbx8tAWixjmqA5FuMEmTECZ.png)

Alastair Crooke : Is the Trump Mystique Broken? 
https://old.bitchute.com/video/pO4IwLYSmrI/

They are trying to distract us from the Epstein files. 
https://old.bitchute.com/video/2K91pYZsLng/

EyesIsWatchin 189 – Epstein ’s List, Syria Destabilized & One Nation Under Blackmail
https://old.bitchute.com/video/pkWtYyqm0gKz/
02:03:43 [200] /post/artgrafiken/nwo-keeping-the-faith 123ms
Processed Post Body: HBDStats now has Hive stats!
Since my last [update](https://peakd.com/hive-133987/@dalz/hbdstatscom-update) back in April I have added more elements to the web. Let’s take a look!


Let’s take a look.

 


![01.png](https://files.peakd.com/file/peakd-hive/dalz/23tkjcwb5gpPPGzrTAAMprujbR71EVRCdqpNxDSZ4X8CjsJQzwA3yWCZrRLCE44SsWvBf.png)


https://www.hbdstats.com/


First and foremost, there is now a new tab on the top with the HBD and HIVE options:

 
![Picture1.png](https://files.peakd.com/file/peakd-hive/dalz/23tGTG7T3SbFU3WKphHB6Ui5CN3FyP5pHULD8nHCUKzAj2X8kx4p1LbjSvrGmfMaF3pfq.png)




When you toggle on the HBD tab there are the options:
- Debt
- Savings
- HBD Supply
- DHF Supply
- Cumulative
- Interest

Most of these were there before the update, except for the **interest** chart, that is now new.




![InterestRate.png](https://files.peakd.com/file/peakd-hive/dalz/23swcKD6nVJMaHyw3vi7LnKBw8A1ZVMb9fpXtMRdXxPBMQFhZ5DKqQv2g1xARJLJmuWVE.png)




 


Here we can see the historic move of the interest rate for HBD in savings. We can see that prior to 2021 there was no interest for HBD, then a series of few adjustments on the upside, up to 20% and then a drop to the current 15%.

Having historic HBD interest is a vital parameter that users holding HBD in savings should have in mind, and to note that this parameter is dynamic and has seen changes in the past, based on what then users can bring their conclusions about HBD allocation. 


## Hive Stats


On the totally new addition, the hive tab, currently we have this:
- Hive Supply
- Hive Power
- Active Accounts
- Transactions
</br>


 The **Hive supply** is obviously a key parameter, as for any other blockchain. 

![HIveSupply.png](https://files.peakd.com/file/peakd-hive/dalz/23swbvyyvpefjMEB6MAhbcGjcQoBkYRTokvCQhLBwyCnrKoLoigxucTaXojaWx8P2ovLw.png)





The supply and the inflation rate are something that is closely monitored from the community, as it represents the debasement of the token holders, and when corelated to the staking rewards it gives users, info are they beating inflation with their earnings. On top of this there is info on the current supply data. As for the other chart, users can change the timeframe to 1Y and less. Additionally, as for the other charts, there is a download button for the token supply in CSV form, with daily data back from 2016 that anyone can use in their analysis. 

Going forward I will add another chart with the inflation data represented in % units.

**Next on the list is the Hive Power data:**


 

![HivePower.png](https://files.peakd.com/file/peakd-hive/dalz/23swc1PT6dpsS2yxtCHUJ3KPPfUuRnZPdmmwMQcctwcDyKwjhz1T9EBUX6E3AHiKEGJhS.png)




Another key parameter is how much of the token supply is staked, or in this case powered up. Here we have an overview from the very beginning of the chain back in 2016. The option for choosing a different timeframe is here as well and the download button. 
Another interesting parameter that can be added here is the share of the Hive Powered up, currently at 39%. A historic chart can be a good representation for this as well.

#### Daily Active Accounts
Another key parameter, daily active accounts!
 

![DAUs.png](https://files.peakd.com/file/peakd-hive/dalz/23swcKCogmCAcgey42wnhZCUNQJPXL7V9tqevXd82dGLJzigVhysRjP7X9nhmcXV9ULUu.png)



Here as well we have a historical data going all the way back. Note that the number of active accounts is for all types of operations, and the massive spike back in 2021 is due to the explosion in the activity on Splinterlands. Going forward a breakdown of the active accounts by operation can be included, like account posting, voting, custom_json, transfers, etc. 




#### Number of Transactions per Day
Another key parameter, the activity on the chain, or the number of transactions per day. 
 





![Tx.png](https://files.peakd.com/file/peakd-hive/dalz/23swdzuaftB5zNiDmy2cgKYSuU8xHnEKRnsjoU7DGioRugh6BtHpjfehdZ9amGmz7ZTAt.png)







This chart as for the active accounts includes all types of operations made, the options for adding a further breakdown by type of operations can be implemented here as well. 

### Future Plans
As already pointed out, I do plan to add a few more charts, especially on the Hive side, including the inflation rate, share of Hive powered up, and breakdown of the activity and transactions by type of operation.

On the HBD side, there can be more aditions, like daily paid HBD interest, DHF payouts, top holders etc. 

Another major addition I plan to add is data on the **Splinterlands** tokens, SPS and DEC. I do post now from time to time about the supply and inflation of these tokens, but getting data on the historical supply can be a challenge. There are APIs that Splinterlands provide for the current supply, from where I can make daily snapshots and create a timeseries. 




#### Support the Project
The web has a nice amount of data and charts now, from the early beginning, where there was only one chart. It is a full stack web, with a backend, its own database and APIs. While I do this for personal pleasure, growth and to upscale my skills, any appreciation is more than welcomed. It will for sure boost motivation and speed up the development :). I dont know exactly how many hours I have put in it till now, but it is a lot. For sure I do plan to put all the code on github, and the data is free to be downloaded even now, for every chart. 


I have integrated donation buttons in HBD, for anyone that finds the provided data useful. The transactions lead to keychain link with all the safety measures in place, first choose account, and then confirm the transaction. 

 


![Support.png](https://files.peakd.com/file/peakd-hive/dalz/23swaANVxztCrADgi1Z3jdxR8dSQtJHmJ74sQDy2Kj39qNWgU1KDUfMiYgkqgYqfrX8nv.png)




https://hbdstats.com/


**If you have any additional proposals, feedback and addition you want to see in the web, let me know in the comments!**

All the best
@dalz

02:03:43 [200] /post/dalz/hbdstatscom-update-or-now-with-hive-stats-supply-hp-active-accounts-transactions 252ms
Processed Post Body: HBDStats now has Hive stats!
Since my last [update](https://peakd.com/hive-133987/@dalz/hbdstatscom-update) back in April I have added more elements to the web. Let’s take a look!


Let’s take a look.

 


![01.png](https://files.peakd.com/file/peakd-hive/dalz/23tkjcwb5gpPPGzrTAAMprujbR71EVRCdqpNxDSZ4X8CjsJQzwA3yWCZrRLCE44SsWvBf.png)


https://www.hbdstats.com/


First and foremost, there is now a new tab on the top with the HBD and HIVE options:

 
![Picture1.png](https://files.peakd.com/file/peakd-hive/dalz/23tGTG7T3SbFU3WKphHB6Ui5CN3FyP5pHULD8nHCUKzAj2X8kx4p1LbjSvrGmfMaF3pfq.png)




When you toggle on the HBD tab there are the options:
- Debt
- Savings
- HBD Supply
- DHF Supply
- Cumulative
- Interest

Most of these were there before the update, except for the **interest** chart, that is now new.




![InterestRate.png](https://files.peakd.com/file/peakd-hive/dalz/23swcKD6nVJMaHyw3vi7LnKBw8A1ZVMb9fpXtMRdXxPBMQFhZ5DKqQv2g1xARJLJmuWVE.png)




 


Here we can see the historic move of the interest rate for HBD in savings. We can see that prior to 2021 there was no interest for HBD, then a series of few adjustments on the upside, up to 20% and then a drop to the current 15%.

Having historic HBD interest is a vital parameter that users holding HBD in savings should have in mind, and to note that this parameter is dynamic and has seen changes in the past, based on what then users can bring their conclusions about HBD allocation. 


## Hive Stats


On the totally new addition, the hive tab, currently we have this:
- Hive Supply
- Hive Power
- Active Accounts
- Transactions
</br>


 The **Hive supply** is obviously a key parameter, as for any other blockchain. 

![HIveSupply.png](https://files.peakd.com/file/peakd-hive/dalz/23swbvyyvpefjMEB6MAhbcGjcQoBkYRTokvCQhLBwyCnrKoLoigxucTaXojaWx8P2ovLw.png)





The supply and the inflation rate are something that is closely monitored from the community, as it represents the debasement of the token holders, and when corelated to the staking rewards it gives users, info are they beating inflation with their earnings. On top of this there is info on the current supply data. As for the other chart, users can change the timeframe to 1Y and less. Additionally, as for the other charts, there is a download button for the token supply in CSV form, with daily data back from 2016 that anyone can use in their analysis. 

Going forward I will add another chart with the inflation data represented in % units.

**Next on the list is the Hive Power data:**


 

![HivePower.png](https://files.peakd.com/file/peakd-hive/dalz/23swc1PT6dpsS2yxtCHUJ3KPPfUuRnZPdmmwMQcctwcDyKwjhz1T9EBUX6E3AHiKEGJhS.png)




Another key parameter is how much of the token supply is staked, or in this case powered up. Here we have an overview from the very beginning of the chain back in 2016. The option for choosing a different timeframe is here as well and the download button. 
Another interesting parameter that can be added here is the share of the Hive Powered up, currently at 39%. A historic chart can be a good representation for this as well.

#### Daily Active Accounts
Another key parameter, daily active accounts!
 

![DAUs.png](https://files.peakd.com/file/peakd-hive/dalz/23swcKCogmCAcgey42wnhZCUNQJPXL7V9tqevXd82dGLJzigVhysRjP7X9nhmcXV9ULUu.png)



Here as well we have a historical data going all the way back. Note that the number of active accounts is for all types of operations, and the massive spike back in 2021 is due to the explosion in the activity on Splinterlands. Going forward a breakdown of the active accounts by operation can be included, like account posting, voting, custom_json, transfers, etc. 




#### Number of Transactions per Day
Another key parameter, the activity on the chain, or the number of transactions per day. 
 





![Tx.png](https://files.peakd.com/file/peakd-hive/dalz/23swdzuaftB5zNiDmy2cgKYSuU8xHnEKRnsjoU7DGioRugh6BtHpjfehdZ9amGmz7ZTAt.png)







This chart as for the active accounts includes all types of operations made, the options for adding a further breakdown by type of operations can be implemented here as well. 

### Future Plans
As already pointed out, I do plan to add a few more charts, especially on the Hive side, including the inflation rate, share of Hive powered up, and breakdown of the activity and transactions by type of operation.

On the HBD side, there can be more aditions, like daily paid HBD interest, DHF payouts, top holders etc. 

Another major addition I plan to add is data on the **Splinterlands** tokens, SPS and DEC. I do post now from time to time about the supply and inflation of these tokens, but getting data on the historical supply can be a challenge. There are APIs that Splinterlands provide for the current supply, from where I can make daily snapshots and create a timeseries. 




#### Support the Project
The web has a nice amount of data and charts now, from the early beginning, where there was only one chart. It is a full stack web, with a backend, its own database and APIs. While I do this for personal pleasure, growth and to upscale my skills, any appreciation is more than welcomed. It will for sure boost motivation and speed up the development :). I dont know exactly how many hours I have put in it till now, but it is a lot. For sure I do plan to put all the code on github, and the data is free to be downloaded even now, for every chart. 


I have integrated donation buttons in HBD, for anyone that finds the provided data useful. The transactions lead to keychain link with all the safety measures in place, first choose account, and then confirm the transaction. 

 


![Support.png](https://files.peakd.com/file/peakd-hive/dalz/23swaANVxztCrADgi1Z3jdxR8dSQtJHmJ74sQDy2Kj39qNWgU1KDUfMiYgkqgYqfrX8nv.png)




https://hbdstats.com/


**If you have any additional proposals, feedback and addition you want to see in the web, let me know in the comments!**

All the best
@dalz

02:03:43 [200] /post/dalz/hbdstatscom-update-or-now-with-hive-stats-supply-hp-active-accounts-transactions 149ms
02:03:48 [200] / 1663ms
02:03:49 [302] /post/testuser/undefined 136ms
02:03:49 [404] /404 3ms
02:03:49 [302] /post/anotheruser/undefined 112ms
02:03:49 [404] /404 1ms
Processed Post Body: I heard the sad news that we've lost one of the biggest characters in the music industry yesterday. 
Ozzy Osbourne and I share(d) birthdays - 3rd December (he had a few birthdays before I started my run).
His music wove around my formative years - especially from my teens. I leaned toward the harder side of music, veering towards the chaos of Heavy Rock, rather than the 'trendy' side. I preferred leather and denim, t-shirts, boots and long hair - I still do, if truth be told. The short back-and-sides style of the 80s didn't appeal to me, and the music wasn't punchy enough.

I remember the album Black Sabbath Greatest Hits for the cover as much as for the music. I looked at that cover time after time. It's so complex and filled with tableaus of such horrifying torture that I couldn't help but be fascinated. Studying the cover whilst listening to the music is one of my enduring memories of music and those times.

Front
![black sabbath greatest hits fried egg 1560.jpg](https://images.hive.blog/DQmPu8pv9EqS2oohxs8N7g7GC78mea85z96pJfxQvUteg8j/black%20sabbath%20greatest%20hits%20fried%20egg%201560.jpg)
*Google search*

Back
![back black sabbath greatest hits fried egg 1561.jpg](https://images.hive.blog/DQmPCopcx9KCVAd6WSks7S7zb5CMLtbw1saq4Rz6iAgt4Vp/back%20black%20sabbath%20greatest%20hits%20fried%20egg%201561.jpg)
*Google search*
   
The album image is by Pieter Bruegel the Elder. Completed in 1562, the images of skeletal figures - human and animal - wreaking chaos and terror upon the living sums up perfectly the artists depictions of his ideas of the inevitability of death.

The album captured my attention as much in the visual as in the audial. If I'm in the mood, I'll listen to nothing but Black Sabbath and Ozzy all day.

I went to see Ozzy just after he'd shaved his trademark long hair. It's only in the last few years that I heard the reason why he shaved his head. He did it because he was suffering burn-out and didn't want to go out on stage. 
I remember he came onto the stage and someone threw a long black wig to him. He caught it and made jokes. Someone else threw a toy bat, but I think he'd learned his lesson and he didn't bite its head off that time.

Every time I've been to see Ozzy, he stood out as a great showman. He knew exactly how to entertain his audience.
At Monsters of Rock in 1996, he supported the headliners KISS and in my opinion, he was the better act. 
I also went to see the Reunion Tour in 1997 - the day after our birthday, for my birthday. Fear Factory supported Sabbath and Ozzy was as much the showman as he ever was!

The last time I went to see Ozzy and Black Sabbath was in 2013 at Sheffield arena. 

I remember hearing him on the radio a few years ago. He phoned a DJ on Radio 1 and was chatting away. The DJ reminded Ozzy that they were Live and he must not use profanity. At the time, Ozzy and his family were all over the television with The Osbournes - the 'fly on the wall' show. Ozzy shared a story about his dogs getting into a cupboard in the kitchen, finding the 'chip fat' (the french fries oil), eating it all and vomiting all over the place. Ozzy was exceptionally well behaved and didn't swear.
The DJ asked what Ozzy was doing for Christmas. 
Ozzy sounded quite laid-back and he said he was chilling in the UK for a few days and then he was flying back to the US in time for Christmas.
The DJ said, "Ozzy, it's Christmas Eve."
"Oh Fuckit!" Ozzy was heard on live radio...

He was one of a kind, a magician in the music industry, performing for millions of fans. His legacy of music will live on.

![81vWpAwEluL._SY466_.jpg](https://images.hive.blog/DQmc8C3vMKD5jSxDEvUXzDvx9k2EAoA8CYLrikCPkAtuA5D/81vWpAwEluL._SY466_.jpg)

[Link](https://www.amazon.com/I-Am-Ozzy-Osbourne/dp/0446569909)

Rest In Peace Ozzy
02:03:49 [200] /post/michelle.gent/ozzy-osbourne-prince-of-darkness-is-gone 144ms
Processed Post Body: I heard the sad news that we've lost one of the biggest characters in the music industry yesterday. 
Ozzy Osbourne and I share(d) birthdays - 3rd December (he had a few birthdays before I started my run).
His music wove around my formative years - especially from my teens. I leaned toward the harder side of music, veering towards the chaos of Heavy Rock, rather than the 'trendy' side. I preferred leather and denim, t-shirts, boots and long hair - I still do, if truth be told. The short back-and-sides style of the 80s didn't appeal to me, and the music wasn't punchy enough.

I remember the album Black Sabbath Greatest Hits for the cover as much as for the music. I looked at that cover time after time. It's so complex and filled with tableaus of such horrifying torture that I couldn't help but be fascinated. Studying the cover whilst listening to the music is one of my enduring memories of music and those times.

Front
![black sabbath greatest hits fried egg 1560.jpg](https://images.hive.blog/DQmPu8pv9EqS2oohxs8N7g7GC78mea85z96pJfxQvUteg8j/black%20sabbath%20greatest%20hits%20fried%20egg%201560.jpg)
*Google search*

Back
![back black sabbath greatest hits fried egg 1561.jpg](https://images.hive.blog/DQmPCopcx9KCVAd6WSks7S7zb5CMLtbw1saq4Rz6iAgt4Vp/back%20black%20sabbath%20greatest%20hits%20fried%20egg%201561.jpg)
*Google search*
   
The album image is by Pieter Bruegel the Elder. Completed in 1562, the images of skeletal figures - human and animal - wreaking chaos and terror upon the living sums up perfectly the artists depictions of his ideas of the inevitability of death.

The album captured my attention as much in the visual as in the audial. If I'm in the mood, I'll listen to nothing but Black Sabbath and Ozzy all day.

I went to see Ozzy just after he'd shaved his trademark long hair. It's only in the last few years that I heard the reason why he shaved his head. He did it because he was suffering burn-out and didn't want to go out on stage. 
I remember he came onto the stage and someone threw a long black wig to him. He caught it and made jokes. Someone else threw a toy bat, but I think he'd learned his lesson and he didn't bite its head off that time.

Every time I've been to see Ozzy, he stood out as a great showman. He knew exactly how to entertain his audience.
At Monsters of Rock in 1996, he supported the headliners KISS and in my opinion, he was the better act. 
I also went to see the Reunion Tour in 1997 - the day after our birthday, for my birthday. Fear Factory supported Sabbath and Ozzy was as much the showman as he ever was!

The last time I went to see Ozzy and Black Sabbath was in 2013 at Sheffield arena. 

I remember hearing him on the radio a few years ago. He phoned a DJ on Radio 1 and was chatting away. The DJ reminded Ozzy that they were Live and he must not use profanity. At the time, Ozzy and his family were all over the television with The Osbournes - the 'fly on the wall' show. Ozzy shared a story about his dogs getting into a cupboard in the kitchen, finding the 'chip fat' (the french fries oil), eating it all and vomiting all over the place. Ozzy was exceptionally well behaved and didn't swear.
The DJ asked what Ozzy was doing for Christmas. 
Ozzy sounded quite laid-back and he said he was chilling in the UK for a few days and then he was flying back to the US in time for Christmas.
The DJ said, "Ozzy, it's Christmas Eve."
"Oh Fuckit!" Ozzy was heard on live radio...

He was one of a kind, a magician in the music industry, performing for millions of fans. His legacy of music will live on.

![81vWpAwEluL._SY466_.jpg](https://images.hive.blog/DQmc8C3vMKD5jSxDEvUXzDvx9k2EAoA8CYLrikCPkAtuA5D/81vWpAwEluL._SY466_.jpg)

[Link](https://www.amazon.com/I-Am-Ozzy-Osbourne/dp/0446569909)

Rest In Peace Ozzy
02:03:50 [200] /post/michelle.gent/ozzy-osbourne-prince-of-darkness-is-gone 149ms
02:03:55 [200] / 1792ms
Processed Post Body: <center>
![MINITHEHIDENCOSTOFFORGIVEN.png](https://files.peakd.com/file/peakd-hive/manclar/23u64kLNkfqJV61qcFXGiSBeKjUWSdcAsoUxSiFGi7o9jRKUjMvxyRDhWEz5koVgJEdjm.png)







<div class="text-justify">

#

<center><img src="https://files.peakd.com/file/peakd-hive/manclar/23tv8niTgDV9Nw5p2hSfnLTmaDqahUiDosHNzKbH4s77bUKPEFiUG1UZtmL4FmapuSSh8.jpg"></center>
<center><sub>*This is a bilingual publication, you can go directly to the SPANISH version by clicking [HERE](#Español")*
</sub><hr>This is my post for #freewriters 2810 prompt "presidential pardon" hosted by @mariannewest </center>
<hr>






Speaking of a presidential pardon makes me imagine, at the very least, an uncomfortable situation. I put myself in the shoes of whoever has to make that decision.

 First of all, whoever is requesting it must have made a very serious mistake for a person to ask for a presidential pardon.  

The crime committed must have been treason against the country, stealing an impressive amount of money, and I also imagine it could involve someone who has likely embezzled large sums.

 Perhaps someone who revealed state secrets—this makes me think of many possibilities, including the fact that this person is an expert liar and probably a spy. 

This individual may have worked for a long time in a consulate or been involved in government affairs, likely in an embassy, and knew many of the secrets discussed in that embassy or consulate.  

From what I understand, based on my limited knowledge of the subject, consulates are responsible for facilitating trade alliances and operations between two countries. 

The country that has a consulate in another nation—for example, Venezuela having a consulate in the United States—employs a consul (in this case, a Venezuelan) who is responsible for establishing trade relations between merchants, entrepreneurs, or industrialists from both countries.  

This is how alliances are formed, and I suppose that the person requesting this presidential pardon likely exploited some of the secrets they knew about these companies. 

I imagine they may have revealed information about secret contracts, undisclosed bids, and deals made to favor certain U.S. businessmen. And, as always, politics gets in the way.  

So, I believe the president and their advisors must carefully study who they grant a presidential pardon to. Obviously, there are many political influences at play here, because these kinds of pardons require the intervention of numerous mediators to make them happen. 

In the case of the United States, I understand that governors can request a presidential pardon for someone.  

The president themselves can also decide to grant a presidential pardon. In Venezuela’s case, I recall this only happening with Hugo Chávez Frías, when former President Rafael Caldera granted him a presidential pardon or clemency for the crimes he committed in attempting to overthrow a government. He was given clemency, a presidential pardon, for that crime.  

Many people comment that it was precisely because of this presidential pardon that the disaster leading to Venezuela’s current crisis unfolded. 

The country is in turmoil because when this figure—and I say "figure" because he is not an important one in a positive sense, but rather an infamous one who led to the country’s destruction—was released from Venezuelan history. 

Had this person not been freed, they would have remained imprisoned or perhaps died in a dungeon, and the country might have taken a different, healthier path than the one we are living through now. 

Presidential pardons are a very delicate matter and must be handled with extreme caution.  

Sadly, political factors always interfere and influence who gets pardoned. I doubt that most of the pardons granted in different countries are legitimate or truly deserved. It is very difficult, really, to prove that someone deserves a presidential pardon.  

The person must have made amends in a very loyal and recognizable way to society for the harm they caused to deserve such a pardon. At least, that is what I think from my corner and my point of view.
  





<center>Translated with [Deepsek AI](https://deepseek.com) 
</p></center>

# <center><div class="phishy">Español<a id="Español"></a></div></center>


Hablar de un indulto presidencial me hace imaginar una situación cuando menos incómoda. Me pongo en los zapatos de quien tiene que tomar esa decisión. 

Primero que nada, quien lo esté solicitando debe haber cometido un error muy grave para que una persona solicite un indulto presidencial.  

El delito que debe haber cometido debe haber sido una traición a la patria, robar una cantidad impresionante de dinero, y también me imagino que se puede definir como alguien que probablemente ha robado mucho dinero. 

Quizás alguien que reveló secretos de estado y esto me hace pensar en muchas posibilidades, incluyendo el hecho de que esta persona es una especialista en mentir y probablemente esta persona es un espía. 

Esta persona ha trabajado por mucho tiempo para un consulado o involucrada en asuntos de gobierno, probablemente en una embajada y conocía muchos de los secretos de quienes hablaban en esa embajada o en ese consulado.  

Según he entendido, dentro del poco conocimiento que tengo del tema, que en los consulados se encargan de llevar a cabo alianzas y operaciones comerciales entre los dos países. 

El país que es el representante, digamos, que tiene el consulado en otro país y el otro consulado, digamos que Venezuela tiene un consulado en Estados Unidos. 

Esta persona, este cónsul de Venezuela, que es venezolano, se encarga de establecer relaciones comerciales entre todos los comerciantes y todos los empresarios o industriales venezolanos y los industriales americanos.  

De esta manera, se crean alianzas y supongo que esta persona que está solicitando este indulto presidencial probablemente usó varios de los secretos que conocía sobre estas empresas. 

Me imagino que pudo haber revelado información sobre contratos secretos, de licitaciones secretas y tratos que se hicieron para favorecer a ciertos empresarios de Estados Unidos. 

Y como siempre, la política está de por medio.  

Así que, creo que el presidente y las personas que lo rodean, que son los que lo hacen, tienen que estudiar muy bien a quién le van a dar este indulto presidencial. 

Obviamente, aquí hay muchas influencias políticas de por medio, porque este tipo de indultos necesitan la intervención de muchas personas que median para que esto se pueda lograr. 

Entre ellos, hablando en el caso de Estados Unidos, entiendo que los gobernadores son los que pueden solicitar que a una persona se le dé un indulto presidencial.  

Y el mismo presidente puede decidir dar un indulto presidencial a esa persona. En el caso de Venezuela, creo que esto ocurrió que recuerdo solo con Hugo Chávez Frías, que el presidente, el expresidente Rafael Caldera, le dio un indulto presidencial o una indulgencia por los delitos que cometió de haber hecho o intentado el derrocamiento de un gobierno. Y se le dio una indulgencia, un indulto presidencial por haber cometido ese delito.  

Y mucha gente comenta y dice que precisamente como consecuencia de este indulto presidencial fue que todo el desastre que llevó a lo que es Venezuela hoy, el país está en crisis precisamente porque cuando este personaje fue liberado de la historia venezolana, y digo personaje porque no es precisamente un personaje importante de buena manera, sino que es un infame que llevó a la destrucción de lo que es el país hoy. 

Si esta persona no hubiese sido liberada, entonces esta persona seguiría atrapada en una mazmorra o probablemente habría muerto, pero en una mazmorra y el país quizás habría tenido otro destino, un destino más sano que el que tiene actualmente, que el que vivimos en estos momentos. Los indultos presidenciales son algo muy delicado y que se debe manejar con mucho cuidado.  

Lamentablemente, el factor político siempre está de por medio e influye en quienes van a ser indultados. Dudo que todos los indultos que se han otorgado en los diferentes países la mayoría sean legítimos o sean meritorios. 

Es muy difícil, realmente, demostrar que alguien merece un indulto presidencial.  

La persona tiene que haber reparado de una manera muy leal y reconocible con la sociedad el daño que ha hecho para poder merecer el indulto. Al menos esto es lo que pienso desde mi rincón y mi punto de vista.



</div>

<center>









Thumbnail of the post edit using [canva.com ](https://www.canva.com/)and maded with [Bing ai](https://sl.bing.net/gEmYP3nXbIy)


![sepmanclarciudad.jpg](https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/manclar/23u5SwkDMqTct4Kgqsv3RVeNxduJ3R3FDChujBLRHKcxWWPmnvnMa18nuuKjHxhFkJSK3.gif)
<sub>This is my black cat "manclar", this hive name account is to honor his dead (it happened years ago).</sub>

![](https://images.hive.blog/0x0/https://cdn.rcimg.net/MicroReylatos/eea03629/39af3c9a0e98248e06b4b9e61ceb136d.png)


The divisor is made by @albiro2050, if you want one made in your style, visit him and he will gladly take care of your commission.
</center>

---



Posted Using [INLEO](https://inleo.io/@manclar/the-hidden-cost-of-forgiving-the-unforgivable-engspa-adj)
02:03:57 [200] /post/manclar/the-hidden-cost-of-forgiving-the-unforgivable-engspa-adj 232ms
Processed Post Body: <center>
![MINITHEHIDENCOSTOFFORGIVEN.png](https://files.peakd.com/file/peakd-hive/manclar/23u64kLNkfqJV61qcFXGiSBeKjUWSdcAsoUxSiFGi7o9jRKUjMvxyRDhWEz5koVgJEdjm.png)







<div class="text-justify">

#

<center><img src="https://files.peakd.com/file/peakd-hive/manclar/23tv8niTgDV9Nw5p2hSfnLTmaDqahUiDosHNzKbH4s77bUKPEFiUG1UZtmL4FmapuSSh8.jpg"></center>
<center><sub>*This is a bilingual publication, you can go directly to the SPANISH version by clicking [HERE](#Español")*
</sub><hr>This is my post for #freewriters 2810 prompt "presidential pardon" hosted by @mariannewest </center>
<hr>






Speaking of a presidential pardon makes me imagine, at the very least, an uncomfortable situation. I put myself in the shoes of whoever has to make that decision.

 First of all, whoever is requesting it must have made a very serious mistake for a person to ask for a presidential pardon.  

The crime committed must have been treason against the country, stealing an impressive amount of money, and I also imagine it could involve someone who has likely embezzled large sums.

 Perhaps someone who revealed state secrets—this makes me think of many possibilities, including the fact that this person is an expert liar and probably a spy. 

This individual may have worked for a long time in a consulate or been involved in government affairs, likely in an embassy, and knew many of the secrets discussed in that embassy or consulate.  

From what I understand, based on my limited knowledge of the subject, consulates are responsible for facilitating trade alliances and operations between two countries. 

The country that has a consulate in another nation—for example, Venezuela having a consulate in the United States—employs a consul (in this case, a Venezuelan) who is responsible for establishing trade relations between merchants, entrepreneurs, or industrialists from both countries.  

This is how alliances are formed, and I suppose that the person requesting this presidential pardon likely exploited some of the secrets they knew about these companies. 

I imagine they may have revealed information about secret contracts, undisclosed bids, and deals made to favor certain U.S. businessmen. And, as always, politics gets in the way.  

So, I believe the president and their advisors must carefully study who they grant a presidential pardon to. Obviously, there are many political influences at play here, because these kinds of pardons require the intervention of numerous mediators to make them happen. 

In the case of the United States, I understand that governors can request a presidential pardon for someone.  

The president themselves can also decide to grant a presidential pardon. In Venezuela’s case, I recall this only happening with Hugo Chávez Frías, when former President Rafael Caldera granted him a presidential pardon or clemency for the crimes he committed in attempting to overthrow a government. He was given clemency, a presidential pardon, for that crime.  

Many people comment that it was precisely because of this presidential pardon that the disaster leading to Venezuela’s current crisis unfolded. 

The country is in turmoil because when this figure—and I say "figure" because he is not an important one in a positive sense, but rather an infamous one who led to the country’s destruction—was released from Venezuelan history. 

Had this person not been freed, they would have remained imprisoned or perhaps died in a dungeon, and the country might have taken a different, healthier path than the one we are living through now. 

Presidential pardons are a very delicate matter and must be handled with extreme caution.  

Sadly, political factors always interfere and influence who gets pardoned. I doubt that most of the pardons granted in different countries are legitimate or truly deserved. It is very difficult, really, to prove that someone deserves a presidential pardon.  

The person must have made amends in a very loyal and recognizable way to society for the harm they caused to deserve such a pardon. At least, that is what I think from my corner and my point of view.
  





<center>Translated with [Deepsek AI](https://deepseek.com) 
</p></center>

# <center><div class="phishy">Español<a id="Español"></a></div></center>


Hablar de un indulto presidencial me hace imaginar una situación cuando menos incómoda. Me pongo en los zapatos de quien tiene que tomar esa decisión. 

Primero que nada, quien lo esté solicitando debe haber cometido un error muy grave para que una persona solicite un indulto presidencial.  

El delito que debe haber cometido debe haber sido una traición a la patria, robar una cantidad impresionante de dinero, y también me imagino que se puede definir como alguien que probablemente ha robado mucho dinero. 

Quizás alguien que reveló secretos de estado y esto me hace pensar en muchas posibilidades, incluyendo el hecho de que esta persona es una especialista en mentir y probablemente esta persona es un espía. 

Esta persona ha trabajado por mucho tiempo para un consulado o involucrada en asuntos de gobierno, probablemente en una embajada y conocía muchos de los secretos de quienes hablaban en esa embajada o en ese consulado.  

Según he entendido, dentro del poco conocimiento que tengo del tema, que en los consulados se encargan de llevar a cabo alianzas y operaciones comerciales entre los dos países. 

El país que es el representante, digamos, que tiene el consulado en otro país y el otro consulado, digamos que Venezuela tiene un consulado en Estados Unidos. 

Esta persona, este cónsul de Venezuela, que es venezolano, se encarga de establecer relaciones comerciales entre todos los comerciantes y todos los empresarios o industriales venezolanos y los industriales americanos.  

De esta manera, se crean alianzas y supongo que esta persona que está solicitando este indulto presidencial probablemente usó varios de los secretos que conocía sobre estas empresas. 

Me imagino que pudo haber revelado información sobre contratos secretos, de licitaciones secretas y tratos que se hicieron para favorecer a ciertos empresarios de Estados Unidos. 

Y como siempre, la política está de por medio.  

Así que, creo que el presidente y las personas que lo rodean, que son los que lo hacen, tienen que estudiar muy bien a quién le van a dar este indulto presidencial. 

Obviamente, aquí hay muchas influencias políticas de por medio, porque este tipo de indultos necesitan la intervención de muchas personas que median para que esto se pueda lograr. 

Entre ellos, hablando en el caso de Estados Unidos, entiendo que los gobernadores son los que pueden solicitar que a una persona se le dé un indulto presidencial.  

Y el mismo presidente puede decidir dar un indulto presidencial a esa persona. En el caso de Venezuela, creo que esto ocurrió que recuerdo solo con Hugo Chávez Frías, que el presidente, el expresidente Rafael Caldera, le dio un indulto presidencial o una indulgencia por los delitos que cometió de haber hecho o intentado el derrocamiento de un gobierno. Y se le dio una indulgencia, un indulto presidencial por haber cometido ese delito.  

Y mucha gente comenta y dice que precisamente como consecuencia de este indulto presidencial fue que todo el desastre que llevó a lo que es Venezuela hoy, el país está en crisis precisamente porque cuando este personaje fue liberado de la historia venezolana, y digo personaje porque no es precisamente un personaje importante de buena manera, sino que es un infame que llevó a la destrucción de lo que es el país hoy. 

Si esta persona no hubiese sido liberada, entonces esta persona seguiría atrapada en una mazmorra o probablemente habría muerto, pero en una mazmorra y el país quizás habría tenido otro destino, un destino más sano que el que tiene actualmente, que el que vivimos en estos momentos. Los indultos presidenciales son algo muy delicado y que se debe manejar con mucho cuidado.  

Lamentablemente, el factor político siempre está de por medio e influye en quienes van a ser indultados. Dudo que todos los indultos que se han otorgado en los diferentes países la mayoría sean legítimos o sean meritorios. 

Es muy difícil, realmente, demostrar que alguien merece un indulto presidencial.  

La persona tiene que haber reparado de una manera muy leal y reconocible con la sociedad el daño que ha hecho para poder merecer el indulto. Al menos esto es lo que pienso desde mi rincón y mi punto de vista.



</div>

<center>









Thumbnail of the post edit using [canva.com ](https://www.canva.com/)and maded with [Bing ai](https://sl.bing.net/gEmYP3nXbIy)


![sepmanclarciudad.jpg](https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/manclar/23u5SwkDMqTct4Kgqsv3RVeNxduJ3R3FDChujBLRHKcxWWPmnvnMa18nuuKjHxhFkJSK3.gif)
<sub>This is my black cat "manclar", this hive name account is to honor his dead (it happened years ago).</sub>

![](https://images.hive.blog/0x0/https://cdn.rcimg.net/MicroReylatos/eea03629/39af3c9a0e98248e06b4b9e61ceb136d.png)


The divisor is made by @albiro2050, if you want one made in your style, visit him and he will gladly take care of your commission.
</center>

---



Posted Using [INLEO](https://inleo.io/@manclar/the-hidden-cost-of-forgiving-the-unforgivable-engspa-adj)
02:03:57 [200] /post/manclar/the-hidden-cost-of-forgiving-the-unforgivable-engspa-adj 134ms
02:04:01 [200] / 2021ms
Processed Post Body: ![other_narratives_6_12x9_ink_on_paper_w.png](https://files.peakd.com/file/peakd-hive/artgrafiken/23u6QTFAHHN9N6JsvfXsV2rwvbpTPzuT2WVywrVzk1mmrXvbx8tAWixjmqA5FuMEmTECZ.png)

Alastair Crooke : Is the Trump Mystique Broken? 
https://old.bitchute.com/video/pO4IwLYSmrI/

They are trying to distract us from the Epstein files. 
https://old.bitchute.com/video/2K91pYZsLng/

EyesIsWatchin 189 – Epstein ’s List, Syria Destabilized & One Nation Under Blackmail
https://old.bitchute.com/video/pkWtYyqm0gKz/
02:04:04 [200] /post/artgrafiken/nwo-keeping-the-faith 124ms
02:04:07 [200] / 2025ms
