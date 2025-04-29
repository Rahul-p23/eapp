import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setPaymentStatus(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 10.0, 
          currency: "USD",
          description: "Course Payment",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPaymentStatus("success");
        alert("Payment successful! Transaction ID: " + data.id);
      } else {
        setPaymentStatus("failure");
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      setPaymentStatus("error");
      alert("An error occurred during the payment process.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00", 
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        },
        onError: (err) => {
          console.error("PayPal Checkout Error:", err);
          alert("An error occurred during the transaction.");
        },
      }).render("#paypal-button-container");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-md w-full rounded-lg shadow-xl p-8"
      >

        <div className="flex justify-center mb-6">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal Logo"
            className="h-12"
          />
        </div>


        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Pay with PayPal</h2>
          <p className="text-gray-600 mt-2">Secure payment processing</p>
        </div>


        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Amount</span>
            <span className="font-bold text-lg text-gray-800">$10.00</span>
          </div>
          <div className="text-xs text-gray-400 text-right">Including all taxes</div>
        </div>


        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Select Payment Method</p>
          <div className="flex space-x-4">
            <button
              onClick={handlePayment}
              disabled={loading}
              className={`w-1/2 p-3 ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-md text-center transition duration-300`}
            >
              {loading ? "Processing..." : "PayPal Balance"}
            </button>
            <button className="w-1/2 p-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300">
              Credit/Debit Card
            </button>
          </div>
        </div>


        <div id="paypal-button-container" className="mb-4"></div>


        <p className="text-xs text-center text-gray-400">
          You will be redirected to PayPal to complete your payment securely.
        </p>


        {paymentStatus && (
          <div
            className={`mt-4 text-center font-bold ${
              paymentStatus === "success"
                ? "text-green-500"
                : paymentStatus === "failure"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            {paymentStatus === "success" && "Payment Successful!"}
            {paymentStatus === "failure" && "Payment Failed!"}
            {paymentStatus === "error" && "An Error Occurred!"}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Payment;
