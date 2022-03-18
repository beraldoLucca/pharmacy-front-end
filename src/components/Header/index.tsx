import styles from './styles.module.scss';

export function Header() {
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