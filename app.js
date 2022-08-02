const ul = document.getElementById("data");
const list = document.createDocumentFragment();
const api =
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

fetch(api)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let blog = data;

        blog.map((blogPost) => {
            let li = document.createElement("li");
            let card = document.createElement("div");
            let h5 = document.createElement("h5");
            let hr = document.createElement("hr");
            let picture = document.createElement("img");
            let div = document.createElement("div");
            let title = document.createElement("a");
            let authorDate = document.createElement("p");
            let hr2 = document.createElement("hr");
            let p = document.createElement("p");

           // let myDate = new Date(blogPost.date);
           // let output =
            //    myDate.getDate() +
             //   " " +
            //    myDate.toLocaleString() +
            //    " " +
              //  myDate.getFullYear();

            let myDate = new Date(blogPost.date);
            let output =
                myDate.getDate() +
                " " +
                myDate.toLocaleString() +
                " " +
                myDate.getFullYear();

            li.className = "p-card col-small-1 col-medium-2 col-3";
            card.className = "p-card__content";
            hr.className = "p-separator u-no-margin--top firstHr";
            picture.className = "p-card__image";
            title.className = "p-card__content";
            hr2.className = "p-separator u-no-margin";

            h5.innerHTML =
                `${blogPost._embedded["wp:term"][0][0].name}`.toUpperCase();
            title.innerHTML = `${blogPost.title.rendered}`;
            title.href = `${blogPost.link}`;
            authorDate.innerHTML = `<i>By <a href=${blogPost._embedded.author[0].link}>${blogPost._embedded.author[0].name}</a> on ${output}</i>`;
            picture.src = `${blogPost.featured_media}`;
            p.innerHTML = "Article";

            li.appendChild(card);
            card.appendChild(h5);
            card.appendChild(hr);
            card.appendChild(picture);
            card.appendChild(div);
            div.appendChild(title);
            div.appendChild(authorDate);
            card.appendChild(hr2);
            card.appendChild(p);
            list.appendChild(li);
        });
    })
    .then(() => {
        ul.appendChild(list);
    })
    .catch(function (error) {
        console.log(error);
    });
