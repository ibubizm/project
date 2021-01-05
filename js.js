let navBar = document.querySelectorAll('.nav__link')
let model = document.querySelector('.model')
let categories = document.querySelectorAll('[data-filter]')

let closes = document.querySelectorAll('.model__close')

for(let category of categories){
    
    category.onclick = (event)=>{
        event.preventDefault()

        let category_name = category.getAttribute('data-filter')
        let all_items = document.querySelectorAll('[data-cat]')

        for(let item of all_items){
            let cat = item.getAttribute('data-cat')
            if(category_name == 'all'){
                item.classList.remove('hide')
            }
            else{
                if(cat != category_name){
                    item.classList.add('hide')
                }
                else{
                    item.classList.remove('hide')
                }
            }
        }
       
        
    }
}


for (let link of navBar){
	link.addEventListener('click', (event)=>{
        event.preventDefault()
        if(link.hasAttribute('data-scroll')){

            let element = link.getAttribute('data-scroll')
            element = document.querySelector(`#${element}`)
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            nav.style.top = '-310%'
        }

	})
}


const modelCall = document.querySelectorAll('[data-model]')
let close_model = document.querySelectorAll('.model__close')


for(let model of modelCall){
    model.onclick = (event) =>{
        event.preventDefault()

        
        let mo = document.querySelectorAll('.model')
        let modelName = model.getAttribute('data-model')
        let windows = document.querySelector(modelName)
        let body = document.querySelector('body')
        let dialogs = document.querySelectorAll('.model__dialog')

        body.classList.add('no-scroll')
        // windows.style.display = 'block'
        windows.classList.add('model__show')



        for(let closes of close_model){
            closes.onclick = (event)=>{
                event.preventDefault()

                dialogs.forEach(function(element){
                    element.style.transform = 'rotateX(90deg)'
                    setTimeout(function(){
                            body.classList.remove('no-scroll')
                            // windows.style.display = 'none'
                            windows.classList.remove('model__show')
                        }, 200)
                })
            }

        }

        for(let m of mo){
            m.onclick = (event)=>{
                event.preventDefault()
                

                dialogs.forEach(function(element){
                    element.style.transform = 'rotateX(90deg)'
                    setTimeout(function(){
                            body.classList.remove('no-scroll')
                            // windows.style.display = 'none'
                            windows.classList.remove('model__show')
                        }, 200)
                })

                for(let dialog of dialogs){
                    dialog.onclick = (event)=>{
                        event.stopPropagation()
                    }
                }
            }

        }


       

            
        setTimeout(function(){
            dialogs.forEach(function(element){
                element.style.transform = 'rotateX(0)'
            })
        }, 200)

        $('[data-slider="slick"]').slick('setPosition');
    }
}



// sider///////////////////

$('[data-slider="slick"]').slick({
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slideToScroll: 1,
    // adaptiveHeight: true,
    arrows: false,
  });

  $('.slickPrev').on('click', function(event){
    event.preventDefault()

    let currentSlider = $(this).parents('.model').find('[data-slider="slick"]')
    currentSlider.slick('slickPrev')
  })

  $('.slickNext').on('click', function(event){
    event.preventDefault()
    let currentSlider = $(this).parents('.model').find('[data-slider="slick"]')
    currentSlider.slick('slickNext')

  })


//   burger//////////////////////

let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')


burger.addEventListener('click',  function(){
    // event.preventDefault()
    if(!nav.classList.contains('nav--burger')){
        nav.classList.add('nav--burger')
        setTimeout(function(){
            nav.style.top = '100%'
            nav.style.display = 'flex'

        },200)
    }
    else{
        nav.classList.remove('nav--burger')
        nav.style.top = '-310%'
        setTimeout(function(){
            // nav.style.display = 'none'

        },200)
        

    }
})