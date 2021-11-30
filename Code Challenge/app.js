
let linkButton = document.getElementById('getlink-btn');
let linkDomain = document.querySelectorAll('.domain-btn');
let shortenedLink = '';
let longLink = document.getElementById('longlink').value;
let outPut = document.getElementById('output');
let finalLink = document.createElement('a');


linkButton.addEventListener('click', (e) => {
    e.preventDefault();

    finalLink.innerText = '';
    finalLink.href = '';
    
    finalLink.href = shortenedLink;
    finalLink.innerText = shortenedLink;

    outPut.appendChild(finalLink);


})


let linkOne = document.getElementById('link1');
linkOne.addEventListener('click', (e) => {
    e.preventDefault();

    domain = '';

    linkDomain.forEach((link) => {
        link.style.backgroundColor = '';
        link.style.color = '';
    })

    domain += 'full_short_link';
    console.log(domain);

    document.getElementById('link1').style.backgroundColor = 'rgb(52, 52, 99)';
    document.getElementById('link1').style.color = 'white';

    longLink = document.getElementById('longlink').value;
    $.getJSON(`https://api.shrtco.de/v2/shorten?url=${longLink}/very/long/link.html`, (data) => {
        shortenedLink = data.result.full_short_link;
        console.log(shortenedLink);
    }) 
})

let linkTwo = document.getElementById('link2');
linkTwo.addEventListener('click', (e) => {
    e.preventDefault();

    domain = '';

    linkDomain.forEach((link) => {
        link.style.backgroundColor = '';
        link.style.color = '';
    })

    domain += 'full_short_link2';
    console.log(domain);

    document.getElementById('link2').style.backgroundColor = 'rgb(52, 52, 99)';
    document.getElementById('link2').style.color = 'white';

    longLink = document.getElementById('longlink').value;
    $.getJSON(`https://api.shrtco.de/v2/shorten?url=${longLink}/very/long/link.html`, (data) => {
        shortenedLink = data.result.full_short_link2;
        console.log(shortenedLink);
    }) 
})

let linkThree = document.getElementById('link3');
linkThree.addEventListener('click', (e) => {
    e.preventDefault();

    domain = '';

    linkDomain.forEach((link) => {
        link.style.backgroundColor = '';
        link.style.color = '';
    })

    domain += 'full_short_link3';
    console.log(domain);

    document.getElementById('link3').style.backgroundColor = 'rgb(52, 52, 99)';
    document.getElementById('link3').style.color = 'white';

    longLink = document.getElementById('longlink').value;
    $.getJSON(`https://api.shrtco.de/v2/shorten?url=${longLink}/very/long/link.html`, (data) => {
        shortenedLink = data.result.full_short_link3;
        console.log(shortenedLink);
    }) 
})



