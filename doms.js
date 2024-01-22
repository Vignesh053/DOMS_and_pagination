
    
    
    let allUsers = [];


    // function to fetch the data and add the json as array to allUsers
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
      .then(Response => Response.json())
      .then(data => {
        allUsers = data;
        displayPage();
    }).catch(error => console.error('Error:', error));



    //variable to keep track of current page and data per page to show
    let currentpage = 1;
    const dataPerPage = 8;



    //pagination logic showing 8 data cards per page
    function displayPage () {
        let startIndex = (currentpage -1)* dataPerPage;
        let endIndex = startIndex + dataPerPage;
        let usersToShow = allUsers.slice(startIndex, endIndex);

        displayCard(usersToShow);
        activeButton();
    }






    //function to update cards containing data from json
    function displayCard(users){
        
       const container = document.getElementById("cardContainer");
        container.innerHTML = "";

        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<h2>${user.id}</h2><h3>${user.name}</h3><p><span class="emailContainer"><img id="image" src="email.svg">${user.email}</span></p>`;

            container.appendChild(card);
        });
    }




    //highlight background on current page number
    function activeButton(){
        document.querySelectorAll("button").forEach(button => {
            button.classList.remove("active");
        });
        document.getElementById(`page-${currentpage}`).classList.add("active");
    }







    //button functions

    document.getElementById("previous").addEventListener("click",() => {
        if(currentpage > 1){
            currentpage--;
            displayPage();
        }
    });

    document.getElementById("next").addEventListener("click", () => {
        if(currentpage < 13){
            currentpage ++;
            displayPage();
        }
    });


    document.getElementById("page-1").addEventListener("click", () => {
        
            currentpage = 1;
            displayPage();
        
    })

    document.getElementById("page-2").addEventListener("click", () => {
        
        currentpage = 2;
        displayPage();
    
    } )

    document.getElementById("page-3").addEventListener("click", () => {
        
        currentpage = 3;
        displayPage();
    
    })

    document.getElementById("page-4").addEventListener("click", () => {
        
        currentpage = 4;
        displayPage();
    
    })

    document.getElementById("page-5").addEventListener("click", () => {
        
        currentpage = 5;
        displayPage();
    
    })

    document.getElementById("page-6").addEventListener("click", () => {
        
        currentpage = 6;
        displayPage();
    
    })

    document.getElementById("page-7").addEventListener("click", () => {
        
        currentpage = 7;
        displayPage();
    
    })

    document.getElementById("page-8").addEventListener("click", () => {
        
        currentpage = 8;
        displayPage();
    
    })

    document.getElementById("page-9").addEventListener("click", () => {
        
        currentpage = 9;
        displayPage();
    
    })

    document.getElementById("page-10").addEventListener("click", () => {
        
        currentpage = 10;
        displayPage();
    
    })

    document.getElementById("page-11").addEventListener("click", () => {
        
        currentpage = 11;
        displayPage();
    
    })

    document.getElementById("page-12").addEventListener("click", () => {
        
        currentpage = 12;
        displayPage();
    
    })

    document.getElementById("page-13").addEventListener("click", () => {
        
        currentpage = 13;
        displayPage();
    
    })

