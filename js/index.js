var num = 0;
var tAndF = false;
var remplace_text;
var remplace_title;
function onLoad () {
let note_home = document.getElementById('note_home');
let btn_home = document.getElementById('btn_home');
let note_article = document.getElementById('note_article');
let text_empty = document.getElementById('text_empty');
let text_note = document.querySelectorAll('.text_note');
let new_note = document.getElementById('new_note');
let btn_share = document.querySelectorAll('.btn_share');
let btn_pencil = document.querySelectorAll('.btn_pencil');
let btn_menu = document.querySelectorAll('.btn_menu');
let articles =  document.querySelectorAll('.articles');
let btn_add = document.getElementById('btn_add');
let article_footer = document.querySelectorAll('.note_article_footer');
let btn_trash = document.querySelectorAll('.btn_trash');
let note_textarea = document.getElementById('note_textarea');
let btn_send = document.getElementById('btn_send');

btn_home.addEventListener("click", () => {
  note_home.style.display = 'none';
  note_article.style.display = 'flex';
});

if (num === 0) {
  text_empty.style.display = `block`;
  new_note.style.display = `flex`;
}else {
  text_empty.style.display = `none`;
  new_note.style.display = `none`;
}

btn_menu.forEach(function (i){
  i.addEventListener('click', () => {
    i.style.display = 'none'
    articles.forEach(function (U) {
      U.style.display = 'none'
    })
    i.parentElement.style.display = 'flex'
    i.parentElement.style.height = `350px`;
    i.parentElement.style.flexDirection= `column`;
    i.parentElement.style.justifyContent= `flex-start`;
    i.previousElementSibling.style.display= `flex`
    i.nextElementSibling.style.display = 'flex'
    
  })
})

btn_share.forEach(function (o) {
  o.addEventListener('click', () => {
    articles.forEach(function (u) {
        u.style.display = 'flex'
    })
    btn_menu.forEach(function(m) {
      m.style.display = 'block';
      m.parentElement.style.height = `35px`;
      m.parentElement.style.flexDirection = `row`;
      m.parentElement.style.justifyContent = `space-between`;
      m.previousElementSibling.style.display = `none`
      m.nextElementSibling.style.display = `none`;
    })
    
  })
});

btn_pencil.forEach(function(l) {
  l.addEventListener('click', () => {
    note_article.style.display = `none`;
    note_textarea.style.display = `flex`;
     btn_menu.forEach(function(t) {
      let texto2 = t.previousElementSibling.textContent;
     document.getElementById('textarea').value = texto2;
     tAndF = true;
      remplace_text = t.previousElementSibling;
  });
  text_note.forEach(function(lp) {
    remplace_title = lp.previousElementSibling;
  })
  
});
});

btn_trash.forEach(function(e) {
  e.addEventListener('click', () => {
  let article =   e.parentElement.parentElement;
  e.parentElement.parentElement.parentElement.removeChild(article);
  clickDown();
  onLoad();
      articles.forEach(function (u) {
        u.style.display = 'flex'
    })
  })
});

btn_add.addEventListener('click', () =>{
  note_article.style.display = `none`;
  note_textarea.style.display = `flex`;
  tAndF = false;
});
};
btn_send.addEventListener('click', () => {
  note_textarea.style.display = 'none';
  note_article.style.display = 'flex';
  if (tAndF === false) {
  let article = document.createElement('div');
  article.className = 'articles';
 let parrafo = document.createElement('p');
 parrafo.className = 'text_note';
  let span = document.createElement('span');
  span.className = 'text_title';
  let texto = document.getElementById('textarea').value;
  span.innerText = texto.slice(0, 8);
  article.appendChild(span);
  parrafo.innerText = document.getElementById('textarea').value;
  article.appendChild(parrafo);
  let menu = document.createElement('img');
  menu.setAttribute('src', '.././Assets/bx-menu.svg');
  menu.className = 'btn_menu';
  article.appendChild(menu);
  let articleFooter = document.createElement('div');
  articleFooter.className = 'note_article_footer';
  let share = document.createElement('img');
  share.setAttribute('src', '.././Assets/bxs-share.svg');
  share.className = 'btn_share';
  articleFooter.appendChild(share);
  let pencil = document.createElement('img');
  pencil.setAttribute('src', '.././Assets/bx-pencil.svg');
  pencil.className = 'btn_pencil';
  articleFooter.appendChild(pencil);
  let trash = document.createElement('img');
  trash.setAttribute('src', '.././Assets/bxs-trash.svg');
  trash.className = 'btn_trash';
  articleFooter.appendChild(trash);
  article.appendChild(articleFooter);
  note_article.appendChild(article);
  document.getElementById('textarea').value = '';
  clickUp();
  onLoad();
  }else if (tAndF === true) {
    remplace_text.innerText = document.getElementById('textarea').value;
    remplace_title.innerText = document.getElementById('textarea').value.slice(0, 8);
    document.getElementById('textarea').value = '';
    onLoad();
  }
});



onLoad();

function clickUp () {num += 1;};

function clickDown () {num -= 1;};
