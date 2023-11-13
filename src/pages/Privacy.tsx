import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import privacyImg from "../icons/privacy_policy.svg";
import React from "react";
import { PolicyTermsData } from "../types/PolicyTermsData";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { fetchPrivacy } from "../store/actions/privacyAction";
import Loading from "../components/Loading";

const Privacy: React.FC = () => {
  const dispatch = useAppDispatch();
  const { privacy, loading, error } = useAppSelector((state) => state.privacy);
  useEffect(() => {
    fetchPrivacy()(dispatch);
  }, [dispatch]);
  console.log(privacy);
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {privacy && (
        <>
          <Wrapper>
            <div className="w-full  my-20 flex flex-col lg:flex-row justify-between items-start">
              <div className="w-full lg:w-2/5 pr-4 mb-16">
                <img src={privacyImg} alt="" className="w-full" />
              </div>
              <div className="w-full lg:w-3/5">
                <h2 className="font-main font-medium text-black text-4xl sm:text-5xl">
                  PRIVACY POLICY
                </h2>
                <p className="font-main font-normal text-black  text-lg mb-7 mt-2">
                  Last Modified:
                  <span className="text-yellow">{privacy.updated_at}</span>
                </p>
                <h3 className="font-main font-medium text-black text-center text-2xl sm:text-4xl mb-7">
                  SCOPE OF THIS POLICY
                </h3>
                <p className="font-main font-normal text-black text-sm sm:text-xl mb-5">
                  {privacy.description}
                </p>
                <p className="font-main font-normal text-black text-sm sm:text-xl mb-5">
                  {privacy.description}
                </p>
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Privacy;
