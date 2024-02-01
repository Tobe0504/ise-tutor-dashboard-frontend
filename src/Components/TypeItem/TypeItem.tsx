import classes from './TypeItem.module.css'

const TypeItem = () => {
    return (
        <div className={classes.typeItem}>
            <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6668 14.668H10.6668M13.3335 20.0013H10.6668M21.3335 9.33464H10.6668M26.6668 9.06797V22.9346C26.6668 25.1748 26.6668 26.295 26.2309 27.1506C25.8474 27.9032 25.2354 28.5152 24.4828 28.8987C23.6271 29.3346 22.507 29.3346 20.2668 29.3346H11.7335C9.49329 29.3346 8.37318 29.3346 7.51753 28.8987C6.76489 28.5152 6.15296 27.9032 5.76947 27.1506C5.3335 26.295 5.3335 25.1748 5.3335 22.9346V9.06797C5.3335 6.82776 5.3335 5.70765 5.76947 4.85201C6.15296 4.09936 6.76489 3.48744 7.51753 3.10394C8.37318 2.66797 9.49329 2.66797 11.7335 2.66797H20.2668C22.507 2.66797 23.6271 2.66797 24.4828 3.10394C25.2354 3.48744 25.8474 4.09936 26.2309 4.85201C26.6668 5.70765 26.6668 6.82776 26.6668 9.06797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div>
                <p>Customize</p>
                <span>Engage your students with video content to enhance their learning exspanerience</span>
            </div>
        </div>
    )
}

export default TypeItem