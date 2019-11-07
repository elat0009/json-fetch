

  let url = "https://picsum.photos/v2/list?limit=6";
  fetch(url)
  .then(response =>{
    console.log(response);
    return response.json();
  })
  .then (limit =>{
    limit.forEach(limit =>{
      let img = document.createElement("img");
      img.setAttribute("alt", limit.author)
      let dwnurl = limit.download_url;
      let dwnurl1 = dwnurl.replace(limit.width, "400");
      let dwnurl2 = dwnurl1.replace(limit.height, "300");
      img.setAttribute("src", dwnurl2);
      document.getElementById('output').appendChild(img);

    })
  })
  .catch(()=>{});



























 