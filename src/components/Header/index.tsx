import { SignInButton } from '../SignInButton'
import styles from './styles.module.sass'

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ignews logo" />
                <nav>
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}