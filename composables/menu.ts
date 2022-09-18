import gsap from 'gsap'

export const useMenu = () => {
  const isOpenMenu = useState<boolean>('menu', () => false)

  const openMenu = () => {
    window.ss && (window.ss.isFixed = true)
    document.body.classList.add('nav-open')

    const menuBg = document.querySelector('.menu__bg')
    const menuItems = document.querySelectorAll('.menu__li')

    const tl = gsap.timeline()

    tl.to(menuBg, { duration: 1, y: '0%', ease: 'power2.out', overflow: 5 }, 0)
    tl.to(
      menuItems,
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        stagger: 0.1,
        overflow: 5,
      },
      0.5
    )

    isOpenMenu.value = true
  }

  const closeMenu = () => {
    window.ss && (window.ss.isFixed = false)
    document.body.classList.remove('nav-open')

    const menuBg = document.querySelector('.menu__bg')
    const menuItems = document.querySelectorAll('.menu__li')

    const tl = gsap.timeline()

    tl.to(
      menuItems,
      { duration: 0.5, y: 40, opacity: 0, ease: 'power2.out', overflow: 5 },
      0
    )
    tl.to(
      menuBg,
      { duration: 1, y: '100%', ease: 'power2.out', overflow: 5 },
      0.2
    )

    isOpenMenu.value = false
  }

  const toggleMenu = () => {
    isOpenMenu.value === true ? closeMenu() : openMenu()
  }

  return {
    isOpenMenu,
    openMenu,
    closeMenu,
    toggleMenu,
  }
}
