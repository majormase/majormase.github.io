$(()=>{

    $('form').on('submit', (event)=>{

        event.preventDefault();
        const $results = $('#results')
        const userInput = $('input[type="text"]').val();
        $(event.currentTarget).trigger('reset');
        //references the value assigned to the form

        $.ajax({
            url:"https://www.googleapis.com/books/v1/volumes?q=search+terms" + userInput,//link to the server where ill be getting information
        }).then(
            (data)=>{

              $("#title").html(data.items[0].volumeInfo.title);
              $("#author").html(data.items[0].volumeInfo.authors);
              $("#publisher").html(data.items[0].volumeInfo.publisher);
              $("#description").html(data.items[0].volumeInfo.description);
              $("#image").html(data.items[0].volumeInfo.imageLinks.smallThumbnail);
              // for(i = 0; i < data.items[0].volumeInfo.length; i++){
              //
              //   results.innerHTML += "<h3>" + data.items[0].volumeInfo.title + "</h3>"
              // }
              // for(i = 0; i < data.items.length; i++){
              //
              //   results.innerHTML += "<h3>" + data.items[0].volumeInfo.title + "</h3>"
              // }
                console.log(data.items[0].volumeInfo.title);
            },
            (error)=>{
                console.log(error);
            }
            // $results.empty();
        );
    })
    // Grabbing About the Game button
  const $openBtn = $('#openModal');


  const $modal = $('#modal');


  const $closeBtn = $('#close');



  const openModal = () => {
    $modal.css('display', 'block');
  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  $openBtn.on('click', openModal);


  $closeBtn.on('click', closeModal);


})
