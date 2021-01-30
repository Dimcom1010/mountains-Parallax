
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu, .header__navZ').toggleClass('active');
	})
})

/*начало слайдер*/


$(document).ready(function() {
	$('.myslaider').slick({
		arrows: true,  /* отображение стрелок true вкл , false откл*/
		dots: true, /* точки */
		adaptiveHeight: false, /* адаптивная высота картинок , точки плавно перемещаются вверх вниз, в .slick-track добавить align-item: flex-start*/
		slidesToShow: 2,  /*количество слайдов которые будут отображаться сразу*/
		slidesToScroll: 1, /* количество слайдов пролистывающихя за один клик , уменьшает количество точек*/
		speed: 1000, /* ms время тролистывания слайда  1000 это 1сек*/
		easing: 'ease-in-out', /*тип анимации , по умолчанию linear , */
		infinite: true, /* прокуртка по кругу или нет , для кнопок в крайних положениюх класс .slick-disabled*/
		initialSlide:0, /* номер первоначального слайда*/
		autoplay: false, /* автоматическое прокручивание слайдов*/
		autoplaySpeed: 6000, /*время  автопрокрутки 1000 это 1сек**/
		pauseOnFocus:true, /*пауза при клике на слайдер*/
		pauseOnHover:true, /*пауза при наведении на слайдер*/
		pauseOnDotsHover:true, /*пауза при наведении на точки*/
		draggable: true, /* свайпинг картинок влево вправо мышью на компе*/
		swipe: true, /* свайпинг картинок влево вправо на мобильных экранах*/
		touchThreshold: 15, /* количество частей на которое делиться,  при переходе между частями происходит пролистывание*/
		touchMove:true ,/*вкл .выкл перетягивание картинки при свайпе*/
		waitForAnimate: false, /* дожидает окончания анимации прежде чем даст перелистнуть на следующий кадер*/
		 centerMode: true, /* ставит выбранны кадер на центр экрана  добавляет класс .slick-center*/
		 variableWidth:true, /* выстраивает слайды в ряд по из длинне  нужен при адаптации, при уменьшении обрезает правый бок слайдера*/
		rows:1, /* количестко рядов*/
		slidesPerRow:1, /* количество слайдов вряду*/
		vertical:false , /*вертикальный слайдер*/
		verticalSwiping:false,  /*ввертикальный свайп*/
		asNavFor:'.myslaider1',  /* связка межу слайдерами  */
		/*appendArrows:$('.content'),  /* перемещает стрелки слайдера в любой элемент с классом ('.content')*/
		/*appendDots:$('.content'),*/

/* адаптация */

		responsive:[
			{
				breakpoint:1500,   /* ширина окна при котором мы будем изменять настройки */
				settings:{
					slidesToShow: 1,
					centerMode: true,
				}
			},{
				breakpoint:20,   /* ширина окна при котором мы будем изменять настройки */
				settings:{
					slidesToShow: 1,
				}
			}
		]

	});

})




$(document).ready(function() {
	$('.myslaider1').slick({
		arrows: false,  /* отображение стрелок true вкл , false откл*/
		centerMode: false,
		fade:true,        /* можно только при оддно отображеннос слайде плавная смена картинки при свайпе*/
		asNavFor:'.myslaider',  /* связка межу слайдерами  */
	});

})
/*конец слайдер*/

/*плавное отображение при загрузке начало*/
$(document).ready(function() {

	$('.wrapper').addClass('active');
} ) ;
/*плавное отображение при загрузке конец*/

/* подключение параллакса */
$(document).ready(function() {
	$('.parallax__list>li').addClass('layer');
	$('.parallax__list').parallax();
	$('.wrapper').addClass('active');
} ) ;
