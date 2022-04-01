import styles from './styles.module.sass'

interface SubscribeButtonProps {
    priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe Now
        </button>
    )
}