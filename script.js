var quotes = [
  [".رد بالك مالسّكبان.. يحرّش القطوس ويبكي مع الفيران", "'ناس بكري قالو'"],

  [".الحنضلة ما تولي تفاحة والخرشي ما تبان فيه ملاحة", "'ناس بكري قالو'"],
    [".الزمان تعكس الورد تقلع والبصل تغرس", "'ناس بكري قالو'"],
	  ["الجرح يبرى يا صبرة وتغطيه الضميدة وكلمة السوء يا صبرة تمسّي وتصبح جديدة", "'ناس بكري قالو'"]
  ["  دار خًر طُر تدقّ الباب يحلّوك الكل", "'ناس بكري قالو'"],
  ["    فاش تمضغ يا جدّة؟ في علكة عامنوّل", "'ناس بكري قالو'"],
  ["  في الزمان المعكوس، الذنابي تولّي روس، ويسكت المنيار ويتكلّم الخنفوس", "'ناس بكري قالو'"],
  [" لو تلبس من الذهب صريمة ما نراك كان بالعين القديمة", "'ناس بكري قالو'"],
  ["كنت حاسبك حجرة المرجان يصنعو بيك البريام طلعت حجرة الوديان تمشي فوقك البهايم", "'ناس بكري قالو'"],
  ["في الوجه ضحكة و في قفاك كفوف لين تدوخ.. فما إلي يقرض لسانو أما فما إلي يحظر على سيرتو", "'ناس بكري قالو'"],
  ["اللي كرهني و لا نساني *** ما عراني و ما كساني *** بالعكس هناني", "'ناس بكري قالو'"],
  ["مشياتي على رجلي و لا ركوب لفضايح", "'ناس بكري قالو'"],
  ["دير الخير و لوحو في بحر جاري *** الي ضاع عند العبد ما يضيع عند الباري", "'ناس بكري قالو'"],
    ["خير الماكله ما حضر *** و خير اللبسه ما ستر", "'ناس بكري قالو'"],
  ["اللي تربات على يدين الرجال *** ما يغير لا زين و لا مال", "'ناس بكري قالو'"],
  ["الراجل بالهمة *** إما اللحية راها حتى عند العتروس", "'ناس بكري قالو'"],
  ["الرجال محاضر *** مش مناضر", "'ناس بكري قالو'"],
  ["الي ما تعرفش تغسل دوارة وتشعل الكانون بالشرارة ماخذتها في ولد الناس خسارةوالي ما يعرف سليخة و لا ذبيحة ماخذتو في بنت الناس فضيحة", "'ناس بكري قالو'"],
  ["الي ما تعرفش تغسل دوارة وتشعل الكانون بالشرارة ماخذتها في ولد الناس خسارةوالي ما يعرف سليخة و لا ذبيحة ماخذتو في بنت الناس فضيحة", "'ناس بكري قالو'"]


];

var lastNum;
var randomNum;
var thisQuote = ".رد بالك مالسّكبان.. يحرّش القطوس ويبكي مع الفيران";
var thisAuthor = "ناس بكري قالو";

var randomNumberFinder = function() {
  randomNum = Math.floor((Math.random()*quotes.length)+1);
  return randomNum;
};

$(document).ready(function() {
  $("#newQuote").click(function() {
    randomNum = randomNumberFinder();
    if (lastNum !== randomNum) {
      $("#quote").text(quotes[randomNum][0]);
      $("#author").text(quotes[randomNum][1]);
      lastNum = randomNum;
      thisQuote = quotes[lastNum][0];
      thisAuthor = quotes[lastNum][1];
    }
    else {
      if (randomNum < quotes.length-2) {
        $("#quote").text(quotes[randomNum+1][0]);
        $("#author").text(quotes[randomNum+1][1]);
        lastNum = randomNum+1;
        thisQuote = quotes[lastNum][0];
        thisAuthor = quotes[lastNum][1];
      }
      else {
        $("#quote").text(quotes[randomNum-2][0]);
        $("#author").text(quotes[randomNum-2][1]);
        lastNum = randomNum-2;
        thisQuote = quotes[lastNum][0];
        thisAuthor = quotes[lastNum][1];
      }
    }
  });
  $(".btn").hover(function() {
    $(this).toggleClass('buttonhover');
  });
  $("#tweet").click(function() {
    var tweethref = 'https://twitter.com/intent/tweet?text=' + thisQuote + " " + thisAuthor + " (via @codemzy)";
    $('.twitter-share-button').attr('href', tweethref);
  });
});
