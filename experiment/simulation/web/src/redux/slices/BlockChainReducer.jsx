import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCardIndex: [],
  userIntract: false,
  task: 1,
  ifClickLeft: false,
  isVerified: false,
  candidatesList: [
    { id: 1, name: "Amit Trivedi", checks: [true, true, true], verified: true },
    { id: 2, name: "Vikram Patel", checks: [true, true, true], verified: true },
    { id: 3, name: "Geeta Jeeva", checks: [true, true, true], verified: true },
  ],
};

const BlockChainReducer = createSlice({
  name: "BlockChainDetails",
  initialState,
  reducers: {
    updateSelectedCardIndex: (state, action) => {
      state.selectedCardIndex = action.payload;
    },
    updateUserInteract: (state, action) => {
      state.userIntract = action.payload;
    },
    updateTask: (state, action) => {
      state.task = action.payload;
    },
    clearState: (state, action) => {
      state.selectedCardIndex = [];
      state.task = 1;
      state.userIntract = false;
      state.ifClickLeft = false;
    },
    onClickLeft: (state, action) => {
      state.ifClickLeft = action.payload;
    },
    toggleCheck: (state, action) => {
      const candidate = state.candidatesList.find(
        (c) => c.id === action.payload.candidateId
      );

      console.log();

      candidate.checks[action.payload.checkIndex] =
        !candidate.checks[action.payload.checkIndex];
      candidate.verified = candidate.checks.every((check) => check);
    },
  },
});

export const {
  updateSelectedCardIndex,
  updateUserInteract,
  updateTask,
  onClickLeft,
  clearState,
  toggleCheck,
} = BlockChainReducer.actions;

export default BlockChainReducer.reducer;
