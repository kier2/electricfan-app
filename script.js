const fanBtn = document.querySelectorAll('.fan-nav-item')

const svgIcon = document.querySelector('#Icons')

const checkActiveClass = () => {
    fanBtn.forEach(btn => {
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
        }
    })
}
fanBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        checkActiveClass()
        if(!btn.classList.contains('active')){
            btn.classList.add('active')
        }

        if(btn.id === 'btn-0'){
            svgIcon.classList.add('force-0')
            svgIcon.classList.remove('force-1')
            svgIcon.classList.remove('force-2')
            svgIcon.classList.remove('force-3')
        }else if(btn.id === 'btn-1'){
            svgIcon.classList.add('force-1')
            svgIcon.classList.remove('force-0')
            svgIcon.classList.remove('force-2')
            svgIcon.classList.remove('force-3')
        }else if(btn.id === 'btn-2'){
            svgIcon.classList.add('force-2')
            svgIcon.classList.remove('force-0')
            svgIcon.classList.remove('force-1')
            svgIcon.classList.remove('force-3')
        }else if(btn.id === 'btn-3'){
            svgIcon.classList.add('force-3')
            svgIcon.classList.remove('force-0')
            svgIcon.classList.remove('force-1')
            svgIcon.classList.remove('force-2')
        }
    })
})

