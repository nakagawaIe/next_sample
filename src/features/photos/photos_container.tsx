import { motion } from 'framer-motion';
import useSWR from 'swr';
import { TitleComponent } from '../common/components/title_component';
import styles from './photos_container.module.scss';
import { fetcher } from '@/utils/api';

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
}

export const PhotoContainer = () => {
  const { data, error } = useSWR<IPhoto[]>('https://jsonplaceholder.typicode.com/photos', fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <motion.div initial={{ y: '10%' }} animate={{ y: '0' }} exit={{ opacity: 0 }}>
      <TitleComponent title='Photos' />
      <div className={styles.photos}>
        {data.slice(0, 18).map(d => (
          <div className={styles.item} key={d.id}>
            <img src={d.thumbnailUrl} alt={d.title} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
