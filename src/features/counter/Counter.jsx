
import styles from './Counter.module.css'
import useCounterHooks from './CounterHooks'
const Counter = () => {
  const { count, handleIncrement, handleDecrement } = useCounterHooks()

  return (
    <div className={styles.row}>
      <button
        type='button'
        className={styles.button}
        aria-label='Decrement value'
        onClick={handleDecrement}
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        type='button'
        className={styles.button}
        aria-label='Increment value'
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}
export default Counter
