import { Alert, Slide } from '@mui/material';
import { removeNotification } from '@redux/Notification/reducer';
import { selectNotifications } from '@redux/Notification/selectors';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';

function NotificationComponent({ setting, onClose }) {
  const { id, autoHideDuration, level, message } = setting;
  const handleClose = useCallback(() => {
    onClose(setting, id);
  }, [setting, id, onClose]);

  useEffect(() => {
    let timeout = null;
    if (autoHideDuration) {
      timeout = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autoHideDuration, handleClose]);

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Alert sx={{ marginTop: '10px' }} onClose={handleClose} severity={level}>
        {message}
      </Alert>
    </Slide>
  );
}

function Notification() {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);

  const onClose = useCallback(
    (setting, id) => {
      dispatch(removeNotification({ id }));
      if (typeof setting.onClose === 'function') {
        setting.onClose(setting);
      }
    },
    [dispatch],
  );

  return (
    <div className={styles.notification_container}>
      <For of={notifications} each="each">
        <NotificationComponent key={each.id} setting={each} onClose={onClose} />
      </For>
    </div>
  );
}

export default Notification;
