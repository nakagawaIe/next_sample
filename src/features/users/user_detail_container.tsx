import useSWR from 'swr';
import { TitleComponent } from '@/features/common/components/title_component';
import { fetcher } from '@/utils/api';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IProps {
  id: number;
}

export const UserDetailContainer = (props: IProps) => {
  const { data, error } = useSWR<IUser>(
    `https://jsonplaceholder.typicode.com/users/${props.id}`,
    fetcher,
    { revalidateOnFocus: false },
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <article>
      <TitleComponent title={data.username} />
      <table>
        <tr>
          <th>Name</th>
          <td>{data.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{data.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{data.phone}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>{data.website}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            {data.address.zipcode}
            <br />
            {data.address.city}
            <br />
            {data.address.suite}
          </td>
        </tr>
        <tr>
          <th>Company</th>
          <td>
            {data.company.name}
            <br />
            {data.company.catchPhrase}
            <br />
            {data.company.bs}
          </td>
        </tr>
      </table>
    </article>
  );
};
