import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchDifference } from "../../store/actions/differenceAction";
import { differenceData } from "../../types/DifferenceData";
import Loading from "../../components/loading/Loading";
import "./difference.css";

type DifferenceProps = {
  itemId: number;
  itemParentId: number;
};
const Difference: React.FC<DifferenceProps> = ({ itemId, itemParentId }) => {
  const dispatch = useAppDispatch();
  const { difference, errorDifference, loadingDifference } = useAppSelector(
    (state) => state.difference
  );
  useEffect(() => {
    fetchDifference()(dispatch);
  }, [dispatch]);
  const currentItem: differenceData | undefined = difference?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  console.log(currentItem);
  return (
    <>
      {errorDifference && <p>{errorDifference}</p>}
      {loadingDifference && <Loading />}
      {difference && currentItem && (
        <div className="container">
          <div className="difference">
            <h1 className="difference_title" 
            dangerouslySetInnerHTML={{ __html: currentItem?.title }} ></h1>
            <div className="difference_hero">
              <div className="difference_images">
                <img
                  src={currentItem.image1}
                  alt=""
                  className="w-full aspect-video md:h-full"
                />
                <img
                  src={currentItem.image2}
                  alt=""
                  className="w-full aspect-video md:h-full"
                />
              </div>
              <p dangerouslySetInnerHTML={{ __html: currentItem?.description }}></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Difference;
