import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getPost, getUsers } from '../modules/sample';

type UseSampleActionsType = {
  fetchPost: (id: number) => void;
  fetchUsers: () => void;
};

const useSampleActions = (): UseSampleActionsType => {
  const dispatch = useDispatch();
  const fetchPost = useCallback((postId: number) => dispatch(getPost(postId)), [
    dispatch,
  ]);
  const fetchUsers = useCallback(() => dispatch(getUsers()), [dispatch]);
  return { fetchPost, fetchUsers };
};
export default useSampleActions;
