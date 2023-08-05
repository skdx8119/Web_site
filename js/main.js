// ヘッダーメニューの開閉機能
$(function(){
  $(".btn-gnavi").on("click", function(){
      var rightVal = 0;
      if($(this).hasClass("open")) {
          rightVal = -300;
          $(this).removeClass("open");
      } else {
          $(this).addClass("open");
      }
      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
  });
});

// スクロール時に特定のエレメント（スキルセクション）が画面内に入るときに、そのエレメントを表示（不透明に）する
window.addEventListener('scroll', function() {
  const skills = document.querySelectorAll('#skills .skills_wrapper li');
  const windowHeight = window.innerHeight;
  
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    const elemTop = rect.top;

    if (elemTop < windowHeight) {
      skill.style.opacity = "1";
      skill.style.transform = "translateX(0)";
    }
  });
});

// ページロード時に特定のエレメント（スキルリスト）を順番に表示（不透明に）する
window.addEventListener('load', () => {
  const listItems = document.querySelectorAll('.skills_wrapper li');

  listItems.forEach((item, index) => {
      setTimeout(() => {
          item.classList.add('active');
      }, (index + 1) * 1500); 
  });
});

// 二つの色間で線形補間する関数
function interpolateColor(color1, color2, factor) {
let result = color1.slice();
for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
}
return result;
}

// RGB配列をCSSのrgb関数の形式に変換する関数
function rgbToCSS(rgbArray) {
return "rgb(" + rgbArray.join(",") + ")";
}

// スクロール位置に基づいて背景色を変化させる
let startBackgroundColor = [164, 215, 247];
let endBackgroundColor = [0, 0, 128];

window.addEventListener("scroll", function() {
  let scroll = window.scrollY;
  let scrollFraction = scroll / document.body.scrollHeight;

  let interpolatedBackgroundColor = interpolateColor(startBackgroundColor, endBackgroundColor, scrollFraction);
  document.body.style.backgroundColor = rgbToCSS(interpolatedBackgroundColor);
});

// スクロール時に特定のエレメント（フェードインセクション）が画面内に入るときに、そのエレメントを表示（不透明に）する
function fadeInOnScroll() {
  let fadeInSection = document.querySelectorAll('.fade-in-section');

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  });

  fadeInSection.forEach(element => {
    observer.observe(element);
  });
}

window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// スクロール位置に基づいてメインエレメントの不透明度を変化させる
window.addEventListener('scroll', function() {
  var mainElement = document.querySelector('main');
  var scrolled = window.scrollY;
  if (scrolled > 100) { 
    mainElement.style.opacity = 1;
  } else {
    mainElement.style.opacity = 0;
  }
});

// ページ内リンクのスムーススクロール
$('a[href^="#"]').on('click',function(){
  var speed = 1000;
  var href = $(this).attr("href");
  if(href === "#"){
      var target = $("html"); //どのブラウザでも最上部へ移動するための記述
  }else{
      var target = $(href);
  }
  var position = target.offset().top;
  $('html,body').animate({
      scrollTop: position
  },speed);
  return false;//<a>要素の本来の機能を打ち消す
})

// スクロール位置に基づいて固定矢印を表示
$(window).scroll(function(){
  $('#website').each(function(){
      const winTop = $(window).scrollTop();
      const winH = window.innerHeight;
      const hideTop = $(this).offset().top;
      
      if( hideTop < winTop + winH ){
          $('#arrow').addClass('show');
      }else{
          $('#arrow').removeClass('show');
      }
  })
})

const scrollBubbleBackground = document.querySelector('#scroll-bubble-background');

// スクロール時に一時的に泡を生成し、スクロール完了後に泡を削除
$('a[href^="#"]').on('click', function() {
  const speed = 1000;
  const href = $(this).attr("href");
  const target = href === "#" ? $("html") : $(href);
  const position = target.offset().top;

  // スクロール時に一時的に泡を生成
  for (let i = 0; i < 100; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("floating-bubble");
    scrollBubbleBackground.appendChild(bubble);

    const size = Math.floor(Math.random() * 100) + 10;
    bubble.style.height = `${size}px`;
    bubble.style.width = `${size}px`;
    bubble.style.bottom = `${Math.random() * 100}%`;
    bubble.style.left = `${Math.random() * 100}%`;

    const riseDuration = Math.random() * 1 + 2;
    bubble.style.animationDuration = `${riseDuration}s`;

    // スクロール完了後に泡を削除
    setTimeout(() => {
      bubble.remove();
    }, riseDuration * 1000);
  }

  // スクロール時に背景色を白に変更
  scrollBubbleBackground.style.backgroundColor = 'rgba(255, 255, 255, 1)';

  // スクロール完了後に背景色を元に戻す
  setTimeout(() => {
    scrollBubbleBackground.style.backgroundColor = 'transparent';
  }, speed);

  $('html,body').animate({
    scrollTop: position
  }, speed);
  
  return false;
});

// 各セクションの泡エフェクトを生成
document.querySelectorAll('.floating-bubble-background').forEach(bubbleBackground => {
  for (let i = 0; i < 50; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("floating-bubble");
    bubbleBackground.appendChild(bubble);

    const size = Math.floor(Math.random() * 100) + 10;
    bubble.style.height = `${size}px`;
    bubble.style.width = `${size}px`;
    bubble.style.bottom = `${Math.random() * 100}%`;
    bubble.style.left = `${Math.random() * 100}%`;

    const riseDuration = Math.random() * 2 + 3;
    bubble.style.animationDuration = `${riseDuration}s`;
  }
});






