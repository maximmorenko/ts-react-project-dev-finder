import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode, // устанавливаем иконку, а текс необязательный, так как его может не быть
  text?: string | null,
  isLink?: boolean,
}

export const InfoItem = ({ icon, isLink, text}: InfoItemProps) => {
  const currentText = text || 'Not Available'; // проверяем есть ли текст если ено то выводим сообщение

  // формируем ссылку
  let currentHref = '';
  // проверяем есть ли ссылка, ести есть то формируем ее
  if (isLink) {
    // Href может прийти без http, поэтому делаем проверку есть ли вначале http, если нет то добавляем его
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
      {/* иконкак как чилдрен */}
      {icon}
      <div>
        {/* если есть ссылка и текст то выводим их, если нет то currentText */}
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {currentText}
          </a>
        ): currentText}
      </div>
    </div>
  );
};
