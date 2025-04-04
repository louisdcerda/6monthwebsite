let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.style.opacity = "0");

  slides[slideIndex].style.opacity = "1"; // show current slide

  slideIndex++; //  move to next
  if (slideIndex >= slides.length) {
    slideIndex = 0; //  loop back to start
  }

  setTimeout(showSlides, 3000); // run again in 3s
}

showSlides();



const books = document.querySelectorAll(".book");
const modal = document.getElementById("bookModal");
let currentPage = 0;

books.forEach((book, i) => {
  book.addEventListener("click", async () => {
    modal.classList.add("active");
    currentPage = 0;
    await showContent(i + 1);  
    showPage(currentPage);     
  });
});


document.getElementById("nextPage").onclick = () => {
  const allPages = document.querySelectorAll("#bookPages .page");
  if (currentPage < allPages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
};

document.getElementById("prevPage").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
};

document.getElementById("closeModal").onclick = () => {
  modal.classList.remove("active");
};

function showPage(index) {
  const allPages = document.querySelectorAll("#bookPages .page");

  if (allPages.length === 0 || !allPages[index]) {
    console.warn("No pages available or index out of range:", index);
    return;
  }

  allPages.forEach((p, i) => {
    p.style.display = i === index ? "block" : "none";
  });

  document.getElementById("prevPage").style.display = index > 0 ? "block" : "none";
  document.getElementById("nextPage").style.display = index < allPages.length - 1 ? "block" : "none";
}


const month2 = 'Boom, November comes around. We still ft every day. i dont think i tell you this enough, but thank you for staying up and fting me every night till 3 4 am. i really appreciate it saige, i saw the effort you were putting forth in our relationship and i loved it. Eventually i did see you a lot again in November lmfaoo. Those first couple hours touching down in philly were horribleee but lowk rlly funny idk how u didnt laugh. I remember the huge milestones you had this one: the job offer you accepted (wohooo), and you turing 21 (wohoo but not wohoo bc now were old). thank you for letting me part and there for you during these times. i hope and i know as we grow older we will continue celebrating these huge accoplishments in our lives together. it was awesome to have you show me around and do all these workout classes together. You can def say you have seen me at my lowest (doign cardio and body weight workouts). It was so funny seeing how scared you got in orange theory too when they were like you look familiar after going to the 3rd free class. That weekend visting you felt amazing and made me feel like i knew  you better. This month we also came back home. Its always strange seeing you home (not in a bad way) but like in a way that i cant describe. I remember the little goody bag you gave me and the honest talk we had in the car that week. i want you to know i do love you saige and i respect you. i think this was also the first and only time you fell asleep in teh car while i was driving which was lowk imporessive its been the only time. im sad that it flew by but every time im with you flies by which is good and bad yk. thank you for letting me drive you to the airport and dropping you off. ';
const month3 = 'December might be one of my favorite months with you. It was when i realized i really did like you adn maybe u did too. The little time we spent playing house was insane, i still cannot fathom how our time together those like 7 days flew!! Tell me why we spent like the whole time either eating or big time relaxing. From my point of view, it felt like we were old and living our lives yk. I hope that is what our weekends look like when we live in the city. Insane workout class at barrys, fatty ahhh food at all you can eat kbbq (to the point where we both unbutton our pants and look distraught when another plate of food comes out), and go out on a movie date. going all over philly with you was a whole adventure, really the only thing i can remember is how happy you looked. You look amazing when you look truly happy, and i hope i can keep making you smile like that. just remember how diabolical we looked in that one mexican restraunt after we had just come back from happy hour. Also that was the first time we were both 21, we were such babies. I dont think there was ever a point that night where i didnt smile you kept making me laugh. especially as soon as we walked into that one mexican place and they called me luis and you just laughed hahaha. the food i bet was bussin but the whole experience with you made it 100x better. youre my girl and seeing you happy was the best part. the only down side of that is that u agreed w me about the tomato and onion desert and kept feeding me ricotta and cracker (i loved both of those moments). After all that eating we fell asleep and i remember just hinking how right it felt to be with you. i said i love you early but i also felt like i had known you deeply and lowk for a longer time than we had been dating. Oh man and then the week flew by and i was being santa placing gifts, and helping you move out of your philly place. ';
const month4 = 'Oh man this was the month you left. i was so happy for you and i still am. i was excited for you to travel and grow as a person as you met and experience a different way of live in other countries. i rememebr our little walk new years day enjoying the sun and pretending we were like 28 getting coffee and going to the beach. i appreciate the honest and hard talk we had on the pier. one thing i really do love about who you are, is the fact you are straight up and like to have these honest talks. i am trying to learn to be more upfront about my emotions as well. but yeah it was great it see you live your live in Budapest. i still cant believe you did not go to that rave mcdonalds smh! Besides that i loved every day facetiming you and seeing you. i think we both knew it was going to be hard but look at us now we made it lmfaooo.';
const month5 = 'Wohooo one month of long distance was over. This was prob the hardest month tho lowk hahah. Its good to laugh about it now idk if you feel the same but i do appreciate you being honest and making me be honest with you too. I think this was one of the better parts of long distane was we both experienced what we wanted and didnt want if that makes sense. i dont really have much to say besides the fact that i am super jelous about your life changing pastries in Copenhagen. the way you described them was insane and the pics you sent over. you really are mean lmfaoo. I do remember the pengiun prototype you made me too that was honestly insnae how you manage to animate and put it all together, i appreciate that saige. i see the effort you put into gifts you make and they are not like whatever gifts if that makes sense. i can image you feel the same way, it feels good to makes these for you. i keep your prototypes open in my phone whenever i miss you and click thorugh them and honestly they are amazing thank you babe. ';
const month6 = 'This has by far been the best month of being together. you are my best friend saige. i want to talk to you about everything, i want to see you grow as a person, i want to see you succeed, i want all the best for you babe. Our little trip to palermo and rome was amazing!!!! Sharing these moments with you is special. i feel this bond that even though maybe we arent together all the time, i know and i remember the special moments we have had and the bond we have. Thank you for pushing me to be a better person and for being the person you are. I really do admire you and you inspire me. i see the live you want to live and how you keep pushing yourself to live that live even when you dont feel like it. i know you will be a successful and happy person. I know you dont trust a lot of people or like getting close too close, so i really do see the effort you put with even telling me the little things about your day or about your life. thank you for being so open and honest with me. my favorite part of this month has been the challenge we set for ourselves. its great to see you put in the effort to better yourself but also want to have me there with you as we both challenge ourselves to be better. idk if im making sense but it feels good to want me to be by your side, and trust me i do. i want to be here for you saige and i hope you will be here for me too. you can always count on me dont worry, i will always do anything to support you. heres to 6 months and hopefully many more with you saige. each month keeps getting better and i know as times goes on we will continue to grow as a person, have fun and keep eating the best food in each city!';
const month1 = 'Hello saige welcome to the first book. Its supposed to be something a little story time of what our relationship has been like over the past couple months. Sorry if you have heard these stories several times, they are really what i think have made our relationship special and what i think about when i think about us. Dont cringe too hard :o. Its kinda funny too because we just said we would be commited to reading so imagine this is the intro and its all stuff you already know. In Chicago was our first real time of spending time together and i always tell you this but it just felt natural and good to be with you. Maybe i was nervous to hold your hand at first but lets forget abt that lmfaooo. It was an amazing weekend the weather was perfect, the food was delicious, and i really fell for you. You just scared me hella when you said i hate the way i feel, my heart and face dropped. Thank God you said yes to being my gf saigeypoo. One of my favorite parts of the weekend was when we took a walk after Duck Duck Goat along the river front and saw the polish concert. The sun was setting and we were listening to random old men just sing their hearts out, but the best part about the whole thing was being there with you. Cringy af. The whole weekend was insane, i dont think there was ever a moment i was bored or unhappy. I remember we entertained ourselves doing the most random things like making food tik toks in the hotel lobby and playground. I dont know how to capture that weekend in words but it felt good as you would put it hahaha. I think the craziest part was that we saw each other again two weeks later. i just couldnt get enough of you saige oh mannn. Spokane was honestly a fever dream, it felet so strange having you visit but not strange in a bad way. it was good to show you around and show you around and how my friends and food here was. Honestly the best parts were every single time we came back from eating you would be like okay 30 min nap and then passs outttt saigeypoo. The weather sucked but I had a lot of fun. i rememeber waking up one morning at like 5 am for your interview and you rushing to get out of bed to get a hairbrush bc  you needed your camera on. i remeber how happy and how fast lowk we demolished those milk shakes. i wish i rememebered how the rest of our halloween night went but i loved having you by my side, you were my little rat. youre my girl saige :o. i honestly did not know how much of an important role you would play when i first texted you that cringy ahh dm or when we first met up, but i am so glad you are a part of my life. the first month was so worth doing long distance, it didnt even feel like long distance lowk.';


const allMonths = [month1, month2, month3, month4, month5, month6];

async function showContent(index) {
  const content = allMonths[index - 1];
  const bookPagesContainer = document.getElementById("bookPages");

  try {
    const pageSize = 350;
    const pages = [];

    // split string into 
    let start = 0;
    while (start < content.length) {
      let end = Math.min(start + pageSize, content.length);
      if (end < content.length && content[end] !== ' ') {
        while (end > start && content[end] !== ' ') end--;
      }
      pages.push(content.slice(start, end).trim());
      start = end + 1;
    }

    // Clear old pages
    bookPagesContainer.innerHTML = "";

    // Create pages
    pages.forEach((text, i) => {
      const page = document.createElement("div");
      page.className = "page";
      page.id = `page${i + 1}`;
      page.innerText = text;
      page.style.display = "none";
      bookPagesContainer.appendChild(page);
    });

    currentPage = 0;
    showPage(currentPage);

  } catch (error) {
    console.error("Error displaying book content:", error);
  }
}


