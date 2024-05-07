export const detailsContainer = {
    hidden: { opacity: 0, x: 20 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            // staggerChildren: 0.2
            delay: 1,
            duration: .8
        }
    }
}

export const ImgContainer = {
    hidden: { opacity: 0, x: -20 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            // staggerChildren: 0.2
            duration: .8
        }
    }
}

export const NavContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}
export const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
}
