import clone from 'clone';
import { ReplicantBrowser } from 'nodecg/types/browser';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { Timer, RunDataActiveRun } from '../../../../nodecg-speedcontrol/types';

Vue.use(Vuex);

// Replicants and their types
const reps: {
  timer: ReplicantBrowser<any>;
  runDataActiveRun: ReplicantBrowser<any>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  timer: nodecg.Replicant('timer', 'nodecg-speedcontrol'),
  runDataActiveRun: nodecg.Replicant('runDataActiveRun', 'nodecg-speedcontrol'),
};

// Types for mutations below
export type ExampleMutation = (arg: any) => void;

interface StoreTypes {
  timer: Timer;
  runDataActiveRun: RunDataActiveRun;
}

const store = new Vuex.Store<StoreTypes>({
  mutations: {
    setState(state, { name, val }): void {
      Vue.set(state, name, val);
    },
  },
});

Object.keys(reps).forEach((key) => {
  reps[key].on('change', (val) => {
    store.commit('setState', { name: key, val: clone(val) });
  });
});

export default async function (): Promise<Store<StoreTypes>> {
  return NodeCG.waitForReplicants(
    ...Object.keys(reps).map((key) => reps[key]),
  ).then(() => store);
}
