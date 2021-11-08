import { onLoadHtmlSuccess } from '../core/includes'
import $ from 'jquery'

onLoadHtmlSuccess( function(){
    $('[wm-city]').on("mouseenter",function(){
        const origemAntiga = $(this).attr('src')
        const elemento = $(this)
        $(elemento).attr('src','https://exame.com/wp-content/uploads/2021/03/Google-Finance.jpg')       
        setTimeout(function(){$(elemento).fadeOut(500)},1000)
         

    })
    
})