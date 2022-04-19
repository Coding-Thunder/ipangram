import React, { useState } from "react";
import { connect } from "react-redux";
import { toogleModal } from "../../redux/product/products.action";
import FormHeader from "../FormHeader/FormHeader";
import ViewForm from "../ViewForm/ViewForm";

const DescriptionForm = ({ open, toogle }) => {
  const [state, setState] = useState({
    textArea: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question5Other: "",
    question6: "",
    scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    clickedOnPlus: false,
  });
  return (
    <div>
      {open ? (
        <div className="h-screen w-full   flex flex-col items-center">
          <FormHeader />
          <div className="w-7/12">
            <p className="  text-center">
              If you have problem with pain/aches, stiffness, weakness of
              functional problems, describe this/these below. (List the symptoms
              in descending order with the most troublemsome first)
            </p>
            <textarea
              type="text"
              value={state.textArea}
              onChange={(e) =>
                setState({
                  ...state,
                  textArea: e.target.value,
                })
              }
              className="mt-2 outline-none border rounded p-2  w-full h-20"
            />
            <div className="flex mb-4">
              <p className="mr-12 flex-1">
                Have you been diaganosed with this problem?{" "}
              </p>

              <div class="flex justify-center flex-1">
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Not relevant"
                    checked={state.question1 === "Not relevant"}
                    onChange={(e) =>
                      setState({ ...state, question1: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Not relevant
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Yes"
                    checked={state.question1 === "Yes"}
                    onChange={(e) =>
                      setState({ ...state, question1: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                    type="radio"
                    value="No"
                    checked={state.question1 === "No"}
                    onChange={(e) =>
                      setState({ ...state, question1: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              <p className="mr-12 flex-1">
                Did the problem start after a physical trauma?
              </p>

              <div class="flex justify-center flex-1">
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Not relevant"
                    checked={state.question2 === "Not relevant"}
                    onChange={(e) =>
                      setState({ ...state, question2: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Not relevant
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Yes"
                    checked={state.question2 === "Yes"}
                    onChange={(e) =>
                      setState({ ...state, question2: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                    type="radio"
                    value="No"
                    checked={state.question2 === "No"}
                    onChange={(e) =>
                      setState({ ...state, question2: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              <p className="mr-12 flex-1">
                Did the problem start after a mental trauma?
              </p>

              <div class="flex justify-center flex-1">
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Not relevant"
                    checked={state.question3 === "Not relevant"}
                    onChange={(e) =>
                      setState({ ...state, question3: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Not relevant
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Yes"
                    checked={state.question3 === "Yes"}
                    onChange={(e) =>
                      setState({ ...state, question3: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                    type="radio"
                    value="No"
                    checked={state.question3 === "No"}
                    onChange={(e) =>
                      setState({ ...state, question3: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="flex mb-4 flex-col">
              <p className=" flex-1 mb-2">
                How often do you experience the problem ?
              </p>

              <div class="flex  flex-wrap w-9/12">
                <div class="form-check flex form-check-inline   mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Not relevant"
                    checked={state.question4 === "Not relevant"}
                    onChange={(e) =>
                      setState({ ...state, question4: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Not relevant
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    value="Daily"
                    checked={state.question4 === "Daily"}
                    onChange={(e) =>
                      setState({ ...state, question4: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Daily
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                    type="radio"
                    value="Sevrel times/week"
                    checked={state.question4 === "Sevrel times/week"}
                    onChange={(e) =>
                      setState({ ...state, question4: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    Sevrel times/week
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                    type="radio"
                    value="A few times/month"
                    checked={state.question4 === "A few times/month"}
                    onChange={(e) =>
                      setState({ ...state, question4: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    A few times/month
                  </label>
                </div>
                <div class="form-check form-check-inline  mr-5">
                  <input
                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                    type="radio"
                    value="A few times/year"
                    checked={state.question4 === "A few times/year"}
                    onChange={(e) =>
                      setState({ ...state, question4: e.target.value })
                    }
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    A few times/year
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mb-4 flex-col">
              <p className=" flex-1 mb-2">
                When do you exprience the problem ?
              </p>

              <div className="flex justify-between">
                <div class="flex w-fit flex-col">
                  <div class="form-check flex form-check-inline   mr-5">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      value="Not relevant"
                      checked={state.question5 === "Not relevant"}
                      onChange={(e) =>
                        setState({ ...state, question5: e.target.value })
                      }
                    />
                    <label class="form-check-label inline-block text-gray-800">
                      Not relevant
                    </label>
                  </div>
                  <div class="form-check form-check-inline  mr-5">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      value="When lying down"
                      checked={state.question5 === "When lying down"}
                      onChange={(e) =>
                        setState({ ...state, question5: e.target.value })
                      }
                    />
                    <label class="form-check-label inline-block text-gray-800">
                      When lying down
                    </label>
                  </div>
                  <div class="form-check form-check-inline  mr-5">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                      type="radio"
                      value="When sitting"
                      checked={state.question5 === "When sitting"}
                      onChange={(e) =>
                        setState({ ...state, question5: e.target.value })
                      }
                    />
                    <label class="form-check-label inline-block text-gray-800">
                      When sitting
                    </label>
                  </div>
                  <div class="form-check form-check-inline  mr-5">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                      type="radio"
                      value="Under Standing"
                      checked={state.question5 === "Under Standing"}
                      onChange={(e) =>
                        setState({ ...state, question5: e.target.value })
                      }
                    />
                    <label class="form-check-label inline-block text-gray-800">
                      Under Standing
                    </label>
                  </div>
                  <div class="form-check form-check-inline  mr-5">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
                      type="radio"
                      value="In walking"
                      checked={state.question5 === "In walking"}
                      onChange={(e) =>
                        setState({
                          ...state,
                          question5: e.target.value,
                          question5Other: "",
                        })
                      }
                    />
                    <label class="form-check-label inline-block text-gray-800">
                      In walking
                    </label>
                  </div>
                </div>
                <textarea
                  type="text"
                  value={state.question5Other}
                  onChange={(e) =>
                    setState({
                      ...state,
                      question5: "",
                      question5Other: e.target.value,
                    })
                  }
                  placeholder="Other? for example in rotations, side bends, wing stairs, when working with arms above the head"
                  className="mt-2 outline-none border rounded p-2  w-8/12 h-20"
                />
              </div>
            </div>
            <div className="flex mb-4 flex-col">
              <p className=" flex-1 mb-2">
                How intense is the experience of the problem on average on a
                scale 0-10 ?
              </p>

              <div class="flex  flex-wrap w-7/12">
                {state.scale.map((data) => (
                  <div class="form-check flex form-check-inline   mr-5">
                    <input
                      class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      checked={state.question6 === data}
                      onChange={(e) => setState({ ...state, question6: data })}
                    />
                    <label class="form-check-label inline-block text-gray-800">
                      {data}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ViewForm state={state} />
      )}
      {state.clickedOnPlus && (
        <p className="text-center text-2xl text-red-600">
          this represents multiple problems
        </p>
      )}
      <div className="flex justify-evenly items-center">
        <button
          onClick={() =>
            setState({ ...state, clickedOnPlus: !state.clickedOnPlus })
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
      <div className="flex justify-evenly items-center">
        <button
          onClick={toogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={toogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  open: state.product.modal,
});

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionForm);
