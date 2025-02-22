import article from '../../data/article.json';
import styles from './BlogCard.module.css';
import formateDateToNow from '../../helpers/formatDate';

const BlogCard = (poster, tag, title, description, name, avatar, postedAt) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          className={styles.cardPoster}
          src={article.poster}
          alt={article.tag}
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>Technology</span>
        <h2 className={styles.cardTitle}>What's new in 2022 Tech</h2>
        <p className={styles.cardText}>{article.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.userBox}>
          <img
            className={styles.avatar}
            src={article.avatar}
            alt={article.name}
          />
          <div>
            <h3 className={styles.userName}>{article.name}</h3>
            <small className={styles.date}>
              {formateDateToNow(article.postedAt)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
