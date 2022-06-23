import styles from './Counter.module.css'
import useCounterHooks from './CounterHooks'

const Counter = () => {
  const { count, handleIncrement, handleDecrement } = useCounterHooks()

  return (
    <div className={styles.row}>
      <h1>Counter</h1>
      <button
        type='button'
        className={styles.button}
        aria-label='Decrement value'
        onClick={handleDecrement}
      >
        -
      </button>
      <span className={styles.value} data-testid='count'>{count}</span>
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
