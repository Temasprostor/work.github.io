var searchResult =[
  {
    header:{
      title:'Властелин колец: Две крепости',
      url:'page2.html'
    },
    details:{
      poster:'img3.jpg',
      actors:'Элайджа Вуд, Шон Эстин, Орландо Блум, Вигго Мортенсен, Иэн МакКеллен, Доминик Монахэн, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд',
      description: ' Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены доверить свои жизни Голлуму, который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой.'
    },
    footer:{
      country:'США',
      imbd: 8.70,
      year: 2002
    }
  }
];
function createFooter(footer){
  var footer=document.createElement('footer');

  footer.innerHTML = '<footer><p><strong>Год:</strong> <time>'+footer.yer+'</time>,<strong>Оценка<abbr aria-label="Internet Movie Database">IMDb<span aria-hidden="true" class="tooltip">Internet Movie Database</span></abbr>:</strong> '+footer.imdb+' <small>(1 349 172)</small>,<strong>Бюджет:</strong> $94 000 000,<strong>Страна:</strong> США</p></footer>';
  return footer;

}
//// TODO:
function createMovieDescription(details){
details.innerHTML= '<div class = "movie-description"><figure><img src="img1.jpg" /><figcaption>Обложка фильма</figcaption></figure><div><section><h1>Описание</h1><p>Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья.Повелитель сил Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, крепости Последней Надежды.</p></section><section><h1>Актеры</h1><p>Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл</p></section></div></div>'

  return document.createElement('details');
}

function createHeader(header){
  var head = document.createElement('header');
  var h1 = document.createElement('h1');
  var a = document.createElement('a');
  a.setAttribute('href', header.url);
  a.innerHTML  = header.title;

  h1.appendChild(a);
  head.appendChild(h1);

  return head;
}

function createArticle(film){
  var article= document.createElement('article');
  article.appendChild(createHeader(film.header));
  article.appendChild(createMovieDescription(film.details));
  article.appendChild(createFooter(film.footer));

  return article;

}

for(var i=0 ;i < searchResult.length;i++){
  console.log(searchResult[i]);
  main.appendChild(createArticle(searchResult[i]));
}
