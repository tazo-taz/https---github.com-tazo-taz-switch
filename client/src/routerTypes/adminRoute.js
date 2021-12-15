import MyRoute from '../defaultComponents/MyRoute';

export default function AdminRoute({ ...props }) {
  return <MyRoute isModerator {...props} />;
}
