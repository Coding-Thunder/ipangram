import React from "react";
import FormHeader from "../FormHeader/FormHeader";

const ViewForm = ({ state }) => {
  return (
    <div className="h-screen w-full   flex flex-col items-center">
      <FormHeader />
      <div className="w-7/12">
        <p className="  text-center">
          If you have problem with pain/aches, stiffness, weakness of functional
          problems, describe this/these below. (List the symptoms in descending
          order with the most troublemsome first)
        </p>
        <textarea
          type="text"
          value={state.textArea}
          disabled
          className="mt-2 outline-none border rounded p-2  w-full h-20"
        />
        <div className="flex mb-4">
          <p className="mr-12 flex-1">
            Have you been diaganosed with this problem?{" "}
          </p>

          <div class="flex justify-center flex-1">{state.question1}</div>
        </div>
        <div className="flex mb-4">
          <p className="mr-12 flex-1">
            Did the problem start after a physical trauma?
          </p>

          <div class="flex justify-center flex-1">{state.question2}</div>
        </div>
        <div className="flex mb-4">
          <p className="mr-12 flex-1">
            Did the problem start after a mental trauma?
          </p>

          <div class="flex justify-center flex-1">{state.question3}</div>
        </div>

        <div className="flex mb-4 flex-col">
          <p className=" flex-1 mb-2">
            How often do you experience the problem ?
          </p>

          <div class="flex  flex-wrap w-9/12">{state.question4}</div>
        </div>
        <div className="flex mb-4 flex-col">
          <p className=" flex-1 mb-2">When do you exprience the problem ?</p>

          <div className="flex justify-between">
            <div class="flex w-fit flex-col">
              {state.question5Other.length > 0
                ? state.question5Other
                : state.question5}
            </div>
          </div>
        </div>
        <div className="flex mb-4 flex-col">
          <p className=" flex-1 mb-2">
            How intense is the experience of the problem on average on a scale
            0-10 ?
          </p>

          <div class="flex  flex-wrap w-7/12">{state.question6}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewForm;
