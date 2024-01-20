import { defineStore } from 'pinia';
import type { MaybeUser } from '@/models';

type AccountState = {
  user: MaybeUser;
};

export const useAccountStore = defineStore('account', {
  state: (): AccountState => ({
    user: undefined,
  }),
  getters: {
    isLoggedIn: (state: AccountState) => !!state.user,
  },
  actions: {
    login() {
      // TODO: set up default user
      this.user = {
        birthday: new Date(),
        createdDate: new Date(),
        email: 'asdf@asdf.com',
        name: 'Chuck Hutchins',
        username: 'chuckchuckchuckchuck',
      };
      console.log('logging in');
    },
    logout() {
      // TODO: wipe out user session
      this.user = undefined;
      console.log('logging out');
    },
  },
});
