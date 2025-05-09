// stores/useCounterStore.js
import { create } from "zustand";

// 전역 상태 생성
// create(): Zustand에서 전역 상태를 생성하는 함수입니다.
// set(): 상태를 업데이트하는 함수입니다.
// count, increase, decrease: 전역 상태와 상태를 수정하는 함수들을 정의합니다.
const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
