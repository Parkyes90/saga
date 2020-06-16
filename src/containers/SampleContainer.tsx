import React, { useEffect } from 'react';
import Sample from '../components/Sample';
import useSample from '../hooks/useSample';
import useSampleActions from '../hooks/useSampleActions';

const SampleContainer: React.FC = () => {
  const {
    post,
    users,
    loading: { GET_POST, GET_USERS },
  } = useSample();
  const { fetchPost, fetchUsers } = useSampleActions();
  useEffect(() => {
    fetchPost(1);
    fetchUsers();
  }, [fetchPost, fetchUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={GET_POST}
      loadingUsers={GET_USERS}
    />
  );
};

export default React.memo(SampleContainer);
