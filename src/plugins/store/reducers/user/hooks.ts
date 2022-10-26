import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@plugins/store';
import { userThunks, userActions, userSelectors } from '@plugins/store';
import { sessionActions, sessionSelectors } from '@plugins/store';

export const userHooks = {
  useVerify: () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userSessionVerifyState = useAppSelector(
      sessionSelectors.selectUserVerifyState,
    );
    const userToken = useAppSelector(userSelectors.userToken);

    useEffect(() => {
      if (!userToken) {
        toast('Protected Route, Please Sign in to Continue');
        navigate('/auth');
      } else {
        if (!userSessionVerifyState) {
          dispatch(userThunks.verifyUser({ token: userToken }))
            .unwrap()
            .then(() => dispatch(sessionActions.setUserVerifyStatus(true)))
            .catch(() => {
              dispatch(sessionActions.setUserVerifyStatus(false));
              dispatch(userActions.signOut());
              toast('User Verification Failed, Relogin to Continue');
              navigate('/auth');
            });
        }
      }
    }, [userToken, userSessionVerifyState, dispatch, navigate]);
  },
};
