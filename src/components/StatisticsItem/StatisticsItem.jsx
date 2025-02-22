import style from './StatisticsItem.module.css';

function StatisticsItem({ statItem: { total, title }, icon: Icon }) {
  return (
    <>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
}

export default StatisticsItem;
