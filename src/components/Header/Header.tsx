import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <p>
                <strong>
                    Farmácia de alto custo
                </strong>
            </p>
        </header>
    );
}