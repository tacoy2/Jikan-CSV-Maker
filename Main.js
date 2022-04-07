const { waitForDebugger } = require('inspector')
const Jikan = require('jikan4.js')
const client = new Jikan.Client()
const ObjectsToCsv = require('objects-to-csv')

const results = 6

const myArray = [[
  "Title", 
  " Score", 
  " Members",
  " Favourites",
  " Air Date",
  " Episode Length",
  " Episode Count",
  " Age Rating",
  " Title Length",
  " Year",
  " ID"



]]

async function printAnime (id) {
    const anime = await client.anime.get(id)
    const title = new String(anime ? `${anime.title}` : `N`)

    if (title != 'N'){
      console.log('\"' + title + '\", ' + anime.score + ', ' + anime.members + '\n')

      var date = anime.airInfo.airedFrom.toLocaleDateString('ko-KR')

      epLength = anime.duration / 60000
      // const related = await anime.getRelations()

      const sourced = anime.source

      myArray.push(['\"' + 
      title + "\", " + 
      anime.score, " " + 
      '\"' + sourced 
      // + '\"', " " +
      // anime.source, " " + 
      // anime.members, " " + 
      // anime.favorites, " " + 
      // date, " " + 
      // epLength," " + 
      // anime.episodes, " " + 
      // anime.rating, " " +
      // title.length, " " + 
      // anime.year

  
      ])


    // console.log(related)  

    console.log(anime.genres, anime.source)



  
  }

  for (let i = 1; i < results; i++) {
    printAnime(i)



    if(i == results){
      var csv = "";
    for (let j of myArray) {
      csv += j.join(",") + "\r\n";
    }
      // Write
      const fs = require("fs");
      fs.writeFileSync("demoB.csv", csv);
      console.log("Done!");
    }

      // myArray.push(title)
      // myArray.push(anime.score)
      // myArray.push(anime.members)
      
    }

  }

  