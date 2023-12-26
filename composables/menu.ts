import gsap from 'gsap'

export const useMenu = () => {
  const isOpenMenu = useState<boolean>('menu', () => false)
  const headerColor = useState<'white' | 'dark'>('headerColor', () => 'dark')

  const openMenu = () => {
    window.ss && (window.ss.isFixed = true)
    document.body.classList.add('nav-open')

    const menuBg = document.querySelector('.menu__bg')
    const menuItems = document.querySelectorAll('.menu__li')
    const menuContent = document.querySelector('.menu__content')

    const tl = gsap.timeline()

    tl.to(
      menuBg,
      { duration: 1, y: '0%', ease: 'power2.out', overwrite: true },
      0
    )
    tl.to(
      menuItems,
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        stagger: 0.1,
        overwrite: true,
      },
      0.5
    )
    tl.to(
      menuContent,
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        overwrite: true,
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
    const menuContent = document.querySelector('.menu__content')

    const tl = gsap.timeline()

    tl.to(
      menuBg,
      { duration: 1, y: '100%', ease: 'power2.out', overwrite: true },
      0.2
    )
    tl.to(
      menuItems,
      { duration: 0.5, y: 40, opacity: 0, ease: 'power2.out', overwrite: true },
      0
    )
    tl.to(
      menuContent,
      { duration: 0.5, y: 40, opacity: 0, ease: 'power2.out', overwrite: true },
      0
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
    headerColor,
  }
}
