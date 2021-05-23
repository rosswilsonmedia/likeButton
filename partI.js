function countLikes(){
    var likeCount = document.querySelector('p>span').innerHTML;
    likeCount++;
    document.querySelector('p>span').innerHTML=likeCount;
}