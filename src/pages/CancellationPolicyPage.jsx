import React from 'react';

const CancellationPolicyPage = () => {
  return (
    <div className="mx-auto my-10 max-w-4xl px-4 font-sans text-gray-800">
      <h2 className="mb-6 text-4xl font-semibold text-left">Cancellation & Refund Policy</h2>

      <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
        <p className="mb-6 text-lg text-left">
          At <strong className="font-bold">Scale100Million.com</strong>, we are committed to providing high-quality services to our clients.
          However, we understand that circumstances may arise where you may need to cancel a service
          or request a refund.
        </p>

        <div className="mb-6">
          <h3 className="mb-3 text-2xl font-medium text-left">1. Cancellation Policy</h3>
          <ul className="space-y-3 pl-5 text-base text-left list-disc">
            <li>
              Customers can request cancellation of services by contacting us at{' '}
              <strong className="font-bold">scale100million@gmail.com</strong>.
            </li>
            <li>
              Cancellation requests will be accepted only if the service has not yet been initiated or processed.
            </li>
            <li>
              Once the service has been initiated, worked upon, or delivered, cancellation will not be possible.
            </li>
          </ul>
        </div>

        <div className="mb-6 pt-4">
          <h3 className="mb-3 text-2xl font-medium text-left">2. Refund Policy</h3>
          <ul className="space-y-3 pl-5 text-base text-left list-disc">
            <li>
              If applicable, approved refunds will be processed within{' '}
              <strong className="font-bold">7–10 business days</strong>.
            </li>
            <li>
              No refunds will be provided for services already delivered, consumed, or in progress.
            </li>
            <li>
              <strong className="font-bold">Scale100Million</strong> reserves the right to refuse a refund request if it does not meet the conditions above.
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-2xl font-medium text-left">3. Contact Us</h3>
          <p className="mb-3 text-base text-left">
            If you have any questions about our Cancellation or Refund Policy, please contact us:
          </p>
          <ul className="list-none space-y-2 p-0 text-base text-left">
            <li>
              <strong className="font-bold">Email:</strong> scale100million@gmail.com
            </li>
            <li>
              <strong className="font-bold">Phone:</strong> +91 9325847844
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;