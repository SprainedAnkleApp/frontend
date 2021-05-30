import styles from './PeakDescription.module.css';
import React, { useState, useEffect } from 'react';
import { Peak } from '../../models/interfaces';
import { SubmitButton, Card } from '../common';
import { useForm, SubmitHandler } from 'react-hook-form';
import { completeThePeak } from '../../API/peaks/methods';
import PeakStatistics from './PeakStatistics';
import Popup from 'reactjs-popup';
import Error from '../common/Error';

export type PeakDescriptionProps = {
  peak: Peak;
  showForm: boolean;
};
type FormValues = {
  minutes: number;
  hours: number;
};

const PeakDescription = ({ peak }: PeakDescriptionProps) => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, errors, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promise = completeThePeak(peak.id, data.hours * 60 + data.minutes);

    promise.catch(() => {
      setSubmitError('Wystąpił błąd');
    });
  };

  return (
    <div className={styles.peakDescription}>
      <p className={styles.about}>{peak.about}</p>
      <h3 className={styles.descriptionHeader}>Description</h3>
      <p>Wysokość: {peak.height} m n.p.m.</p>
      <p>Województwo: {peak.region}</p>
      <p>Pasmo górskie: {peak.mountainRange}</p>
      <PeakStatistics peakId={peak.id} />
      {true && (
        <div>
          <Popup
            trigger={
              <div className={styles.buttonBox}>
                <SubmitButton
                  text="Zaznacz jako zdobyty"
                  className={styles.reachPeakButton}
                />
              </div>
            }
            modal
            nested
          >
            {(_close: () => void, isOpen: boolean) => {
              useEffect(() => {
                if (!isOpen) return;
                const rootDiv = document.getElementById('root');
                if (!rootDiv) return;
                rootDiv.style.filter = 'blur(2px)';

                return () => {
                  if (!isOpen) return;
                  const rootDiv = document.getElementById('root');
                  if (!rootDiv) return;
                  rootDiv.style.filter = 'none';
                };
              }, [isOpen]);
              return (
                <Card.Card>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <label className={styles.label}>
                      {'Wprowadz czas ukończenia'}
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
                      onClick={handleSubmit(onSubmit)}
                      text="Zatwierdz"
                      className={styles.reachPeakButton}
                    />

                    {submitError && <Error text={submitError} />}
                  </form>
                </Card.Card>
              );
            }}
          </Popup>
        </div>
      )}
    </div>
  );
};

export default PeakDescription;
