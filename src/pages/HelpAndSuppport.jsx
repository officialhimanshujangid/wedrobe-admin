import { useState } from "react";
import { Button, Input } from "rizzui";
import { faqs } from "../constants/helpAndSupport";

function HelpAndSuppport() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [helpfulState, setHelpfulState] = useState(
      Array(10).fill({ response: null, feedback: "" })
    );



    const toggleFAQ = index => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const handleYesClick = index => {
      const newHelpfulState = [...helpfulState];
      newHelpfulState[index] = { ...newHelpfulState[index], response: "yes" };
      setHelpfulState(newHelpfulState);
    };

    const handleNoClick = index => {
      const newHelpfulState = [...helpfulState];
      newHelpfulState[index] = { ...newHelpfulState[index], response: "no" };
      setHelpfulState(newHelpfulState);
    };

    const handleFeedbackChange = (e, index) => {
      const newHelpfulState = [...helpfulState];
      newHelpfulState[index] = { ...newHelpfulState[index], feedback: e.target.value };
      setHelpfulState(newHelpfulState);
    };

    const handleFeedbackSubmit = index => {
      const newHelpfulState = [...helpfulState];
      newHelpfulState[index] = { ...newHelpfulState[index], response: "feedback_submitted" };
      setHelpfulState(newHelpfulState);
    };

    return (
      <div className="container mx-auto px-4 py-10">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Help and Support</h1>
          <p className="text-md text-gray-600 mt-2">
            Your questions answered, every step of the way.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <button
                  className="flex justify-between w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <span className="text-gray-600">{activeIndex === index ? '-' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <> 
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                    <div className="mt-4">
                      <p>Was this helpful?</p>
                      {helpfulState[index]?.response === null ? (
                        <>
                          <Button onClick={() => handleYesClick(index)} className="mr-2">Yes</Button>
                          <Button onClick={() => handleNoClick(index)}>No</Button>
                        </>
                      ) : helpfulState[index].response === "yes" ? (
                        <p className="text-green-600 mt-2">Thank you for your feedback!</p>
                      ) : helpfulState[index].response === "no" ? (
                        <>
                          <Input 
                            className="mt-2" 
                            placeholder="Please provide your feedback"
                            value={helpfulState[index].feedback}
                            onChange={(e) => handleFeedbackChange(e, index)}
                          />
                          <Button className="mt-2" onClick={() => handleFeedbackSubmit(index)}>Submit</Button>
                        </>
                      ) : (
                        <p className="text-green-600 mt-2">Thank you for your feedback!</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Need Further Assistance?</h2>
          <p className="text-gray-700 mb-4">
            If your question wasn’t answered here, please don’t hesitate to reach out. Our team is here to assist you.
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:support@wedrobe.com" className="text-blue-600 hover:underline">support@wedrobe.com</a>
          </p>
          <p className="text-gray-600">
            Phone: <a href="tel:+123456789" className="text-blue-600 hover:underline">+1 (234) 567-89</a>
          </p>
        </section>
      </div>
    );
};

export default HelpAndSuppport;
