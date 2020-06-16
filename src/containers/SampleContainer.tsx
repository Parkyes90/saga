import React, { useEffect } from 'react';
import Sample from '../components/Sample';
import useSample from '../hooks/useSample';
import useSampleActions from '../hooks/useSampleActions';
import useLoading from '../hooks/useLoading';
import { SAMPLE } from '../modules/sample';

const SampleContainer: React.FC = () => {
  const { post, users } = useSample();
  const loading = useLoading();
  const { fetchPost, fetchUsers } = useSampleActions();
  useEffect(() => {
    fetchPost(1);
    fetchUsers();
  }, [fetchPost, fetchUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loading[SAMPLE.GET_POST]}
      loadingUsers={loading[SAMPLE.GET_USERS]}
    />
  );
};

export default React.memo(SampleContainer);
