//W tym przypadku dostajemy false. Wygladaja tak samo, ale odnosza sie do innej "pamieci" w PC
let nums = [ 1, 2, 3 ];
let nums2 = [ 1, 2, 3 ];
console.log(nums === nums2);
console.log(nums == nums2);
//Ale to daje 3, bo mamy odniesienie do NUMS
let nums3 = nums;

//Dla przykladu
const user = {
    username: 'Patryk',
    email: 'email@gmail.com',
    notifications: ['asd']
}
//Czyli jesli dlugosc notifications NIE bedzie miala dlugosci (0 to nie dlugosc) to dostajemy 'no new notifs'
//IF THERE IS NO LENGTH
if(!user.notifications.length){
    console.log("No new notifications")}
else{
    console.log("You got new msg")
};
