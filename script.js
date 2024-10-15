const pictures = [
	"pictures/1.jpg",
	"pictures/2.jpg",
	"pictures/3.png",
	"",
	"pictures/5.jpg",
	"pictures/6.jpg",
	"pictures/7.jpg",
	"pictures/8.jpg",
	"pictures/9.jpg",
	"pictures/10.jpg",
	"pictures/11.jpg",
	"pictures/12.jpg",
	"pictures/13.jpg",
	"pictures/14.jpg",
	"pictures/15.jpg",
	"",
	"pictures/17.jpg",
	""
];
const messages = [
    "Hi Kiddo",
    "Remember today's date?",
    "It's 27th November 😎",
    "\n\n\n\n\n\n\n\n"+"3 years ago, we met exactly on this day!",
    "From sharing sad stories, To making fun memories",
    "We became good friends 🤧",
    "I still remember being scolded by you, for being suicidal 😂",
    "Thanks for coming like spring after a melancholic winter",
    "And sorry for overwhelming you at times with my feelings 😢",
    "Keeping every thing aside, I genuinely enjoy your company",
    "Spending time together with you and Soumojit is always so fun",
    "Whether its a chance encounter or a planned outing",
    "Its always so fun",
    "I know there was a time when you used to share so much",
    "But now you hardly do 😢", 
    "\n\n\n\n\n\n\n\n"+"I do realise my mistakes 🙇🏻‍♂️",
    "Still I hope to keep this friendship firm, for years to come",
    "\n\n\n\n\n\n\n\n"+"So, will you keep increasing this count?"+"\n"+"From 3 to ♾️??",
];

let currentIndex = 0;

function turnPage() {
	const pic = document.getElementById("picture");
    const msg = document.getElementById("message");
    msg.innerText = messages[currentIndex];
    console.log(pictures[currentIndex]);
    pic.src = pictures[currentIndex];
    if (pictures[currentIndex] !== "") {
    	pic.width = 300;
    	pic.height = 400;	
    }
    else {
    	pic.width  = 0;
    	pic.height = 0;
    }
    currentIndex = (currentIndex + 1) % messages.length; // Loop through messages	
}
window.onload = turnPage();
document.getElementById("loadButton").addEventListener("click", turnPage);
