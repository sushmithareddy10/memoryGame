document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'burger',
            img: 'images/burger.png',
        },
        {
            name: 'burger',
            img: 'images/burger.png',
        },
        {
            name: 'donut',
            img: 'images/donut.png',
        },
        {
            name: 'donut',
            img: 'images/donut.png',
        },
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'icecream',
            img: 'images/icecream.png',
        },
        {
            name: 'icecream',
            img: 'images/icecream.png', 
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',

        }
    ]
    cardArray.sort(() => 0.5 - Math.random());

     const grid = document.querySelector('.grid');
     const result= document.querySelector('#result');
     var cardsChoosen = [];
     var cardsChoosenId = [];
     var cardsWon = [];

    //create board

    function createBoard(){
        for(let i=0;i<cardArray.length;i++)
        {
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);

        }
    }

    //check for match
    function checkforMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];
        if(cardsChoosen[0] === cardsChoosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTwoId].setAttribute('src','images/white.png');
            cardsWon.push(cardsChoosen);
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            alert('Sorry, try again');
        }
        cardsChoosen = [];
        cardsChoosenId = [];
        result.textContent = cardsWon.length;
        if(cardsWon.length ===  cardArray.length/2){
            result.textContent= 'Congratulations! You found them all!';
        }
    }

    //flip card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name);
        cardsChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChoosen.length === 2){
            setTimeout(checkforMatch, 500);
        }
    }


    createBoard();
})