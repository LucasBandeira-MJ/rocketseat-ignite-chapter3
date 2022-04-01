import styles from './styles.module.sass'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export const SignInButton = () => {
    const isUserLoggedIn = true

    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color='#04d361' />
            Lucas Bandeira
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGithub color='#eba417' />
            Sign in with Github
        </button>
    )
}