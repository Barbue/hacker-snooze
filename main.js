



let body = document.querySelector('body');
let parent = document.createElement('div');
parent.className = 'parent';
let ol = document.createElement('ol');
parent.appendChild(ol)
let child = document.createElement('div');
child.className = 'child';
parent.appendChild(child);
body.appendChild(parent);


 





let hackerNewsAPIrequest = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    let data = await response.json();

    console.log(data)
    

    for(let i = 0; i < 100;i++){
        console.log(data[i])

        fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`).then(function(response){
            return response.json()
        })
       .then(function(data){
    
        console.log(data);
        let li = document.createElement('li');
        ol.appendChild(li);
        let linkAnchor = document.createElement('a');
        linkAnchor.href = data.url;
        linkAnchor.innerText = data.title;
        linkAnchor.setAttribute('target','_blank');
        li.appendChild(linkAnchor);
        li.append(` Score: ${data.score} | Comments: ${data.descendants} | By: ${data.by} `);


        
     
      

        
       


        
        
        
        
       


        
        
        

     




        


      
        


})

}



        

        
    

    
}
hackerNewsAPIrequest();






// At this point, you should have a place in your code where you have an array of
// story IDs. Now, what we need to do is loop through that array of IDs, and for each
// ID, make an API request to fetch the details of that story. 

// For now, just `console.log` the details of each story upon retrieving them.

// To get the details of a story from its ID, you'll need to make another API request
// to the endpoint that you found that gives you a story's details from its ID.

// Your code may look something like this

// fetch( ... )
//     .then((response) => response.json())
//     .then((storyIds) => {

//         // TODO:
//         // * For each ID...
//         //   * Make an API request to get the story's details

//     });




// fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty').then(function(response){
//     return response.json();
// })
// .then(function(data){

//     console.log(data)

// })