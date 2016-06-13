$(function() {

  function showCats(people) {

    (['Female', 'Male']).forEach(function(gender) {

       _.chain(people)
        .where({ gender: gender })
        .pluck("pets")
        .compact()
        .flatten()
        .where({ type: "Cat" })
        .pluck("name")
        .sort()
        .value()
      .forEach(function(catName) {
        $('.' + gender.toLowerCase() + '-owners')
          .append('<li>' + catName + '</li>')
      })

    })
  }

  $.ajax({
      type: 'GET',
      url: "http://agl-developer-test.azurewebsites.net/people.json",
      dataType: "jsonp"
    })
    .done(showCats)
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
    });

})


