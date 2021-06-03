import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Peak.module.css';
import { Peak as PeakType } from '../../models/interfaces';
import React, { useState } from 'react';
import { SubmitButton, Card } from '../common';
import { useForm, SubmitHandler } from 'react-hook-form';
import { completeThePeak } from '../../API/peaks/methods';
import Popup from 'reactjs-popup';
import { TiTick, TiTimes } from 'react-icons/ti';
import Error from '../common/Error';
import useBlur from '../../hooks/useBlur';

export type PeakProps = {
  peak: PeakType;
  redirectTo: string;
  className?: string;
  setShowForm?: () => void;
  peakDetails?: boolean;
};

type FormValues = {
  minutes: number;
  hours: number;
};

const Peak = ({
  peak,
  redirectTo,
  className,
  setShowForm,
  peakDetails = false,
}: PeakProps) => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [completed, setCompleted] = useState<boolean>(peak.completed);
  const { register, errors, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const promise = completeThePeak(
      peak.id,
      parseInt(data.hours.toString()) * 60 + parseInt(data.minutes.toString())
    );

    promise
      .then(() => {
        setCompleted(true);
      })
      .catch(() => {
        setSubmitError('Wystąpił błąd');
      });
  };

  return (
    <div className={cx(styles.card, className)}>
      <Link className={styles.redirectLink} to={redirectTo}>
        <img className={styles.photo} src={peak.photo} alt="mountain" />
      </Link>
      <div className={styles.peakInformation}>
        <div>
          <div className={styles.peakName}>{peak.name}</div>
          <div className={styles.peakHeight}>{peak.height} m n.p.m.</div>
        </div>
      </div>
      <div
        className={cx(
          styles.reachedInfo,
          completed
            ? styles.peakReachedInfo
            : peakDetails && styles.peakNotReachedInfo
        )}
        onClick={completed ? void 0 : setShowForm}
      >
        {completed ? (
          <TiTick className={styles.reachedIcon} />
        ) : (
          <TiTimes className={styles.reachedIcon} />
        )}
        <Popup
          trigger={
            <p className={styles.reachedText}>
              {completed ? 'Reached' : 'Reach'}
            </p>
          }
          modal
          nested
        >
          {(close: () => void, isOpen: boolean) => {
            useBlur(isOpen);
            return (
              <Card.Card className={styles.reachPeakCard}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <label className={styles.label}>
                    {'Wprowadź czas ukończenia'}
                  </label>
                  <div className={styles.timeInputContainer}>
                    <input
                      className={styles.timeInput}
                      type={'number'}
                      name={'hours'}
                      min={'0'}
                      max={'100'}
                      defaultValue={0}
                      ref={register({
                        required: 'Pole wymagane',
                        validate: {
                          nonNegative: (v) => parseInt(v) >= 0,
                        },
                      })}
                    />{' '}
                    :
                    <input
                      className={styles.timeInput}
                      type={'number'}
                      name={'minutes'}
                      min={'0'}
                      max={'59'}
                      defaultValue={0}
                      ref={register({
                        required: 'Pole wymagane',
                        validate: {
                          nonNegative: (v) => parseInt(v) >= 0,
                          lessThanHour: (v) => parseInt(v) < 60,
                        },
                      })}
                    />
                    {errors.hours && errors.hours.message && (
                      <Error text={errors.hours.message} />
                    )}
                    {errors.minutes &&
                      !errors.hours?.message &&
                      errors.minutes.message && (
                        <Error text={errors.minutes.message} />
                      )}
                  </div>
                  <SubmitButton
                    onClick={handleSubmit((data) => {
                      onSubmit(data);
                      close();
                    })}
                    text="Zatwierdź"
                    className={styles.reachPeakButton}
                  />

                  {submitError && <Error text={submitError} />}
                </form>
              </Card.Card>
            );
          }}
        </Popup>
      </div>
    </div>
  );
};

export default Peak;
