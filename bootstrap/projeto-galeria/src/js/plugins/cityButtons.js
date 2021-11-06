import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        // const btn = $('<button>')
        //     .addClass(['btn', 'btn-info']).html(city)
        const btn = $('<button class="btn btn-info" botao-active></button>').html(city)
        btn.click(function() {
            filterByCity(city)
            $('button').removeClass('active')
            $(this).addClass('active')
        })
        return btn
    })

    // const btnAll = $('<button>')
    //     .addClass(['btn', 'btn-info', 'active']).html('Todas')
    const btnAll = $('<button class="btn btn-info active" botao-active></button>').html('Todas')
    btnAll.click(function() {
            filterByCity(null)
            $('[botao-active]').removeClass('active')
            $(this).addClass('active')
        })
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})