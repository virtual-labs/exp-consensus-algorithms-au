import React from "react";
import {
  updateSelectedCardIndex,
  updateTask,
  updateUserInteract,
} from "../../redux/slices/BlockChainReducer";
import { useDispatch, useSelector } from "react-redux";
import Messages from "../Message";

function Tables({ userName, time, status }) {
  const { userIntract, task, selectedCardIndex } = useSelector(
    (state) => state.BlockChainReducer
  );
  const dispatch = useDispatch();
  const nextIndex =
    selectedCardIndex.length > 0
      ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
      : 0;

  // React.useEffect(() => {
  //   const showGreenLight = setTimeout(() => {
  //     dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
  //     dispatch(updateUserInteract(false));
  //     dispatch(updateTask(4));
  //   }, 2000);

  //   return () => {
  //     clearTimeout(showGreenLight);
  //   };
  // }, []);
  return (<>
  {/* <Messages text={"After you've cast your vote using the secure voting machine, a table will appear on the screen.The purpose of this table is to ensure public verification, similar to the transparency offered by blockchain technology, where all transactions are visible to participants."}/> */}
    <table className="table">
      <thead>
        <tr>
          <th colSpan="3" className="thank-you-note">
            Thank you for voting!
          </th>
        </tr>
        <tr>
          <th scope="col">Voter Name</th>
          <th scope="col">Time of Vote</th>
          <th scope="col">Vote Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userName}</td>
          <td>{time}</td>
          <td>
            {status ? (
              <i className="fa-regular fa-circle-check fa-xl"></i>
            ) : (
              <i className="fa-regular fa-circle-times fa-xl"></i>
            )}
          </td>
        </tr>
      </tbody>
    </table>
    </>
  );
}

export default Tables;
