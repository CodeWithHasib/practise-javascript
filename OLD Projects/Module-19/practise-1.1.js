/* প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 

১) রাত ৮ টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ 5 বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো।  */

// আবার একই জিনিস while লুপ চালিয়ে দেখানো। 

function myHasib(ayya){
    let i = ayya.length;
    while (i > 0) {
        const element = ayya[i]
        console.log(i ,element);
        i--
    }
}

var myArray = ['রাত ৮ টা বাজে মডিউল আনলক করো ', 'ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো', 'ভিডিও দেখতে দেখতে নোটস নাও ', ' মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো' , 'কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো ']
myHasib(myArray)