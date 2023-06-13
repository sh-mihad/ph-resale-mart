const Faq = () => {
  return (
    <div className="space-y-4 my-14">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
          Frequently Asked Questions
        </h2>
        <hr className="w-full my-8 border-gray-300" />
      </div>

      <details
        className="group border-s-4 border-green-500 bg-gray-100 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden w-10/12 mx-auto"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            How much time do i need to receive a product?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          We distribute our products by a product delivery service. You can
          receive a purchased product within 2-3 days.
        </p>
      </details>
      <details
        className="group border-s-4 border-green-500 bg-gray-100 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden w-10/12 mx-auto"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            Do I need to provide any extra charges to product delivery service
            assistant?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          No. You don't need to provide any extra charges to product delivery
          service assistant.
        </p>
      </details>
      <details
        className="group border-s-4 border-green-500 bg-gray-100 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden w-10/12 mx-auto"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            How can I return a product if a delivered product has been damaged
            or broken?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          You can contact with the particular product seller or you can contact
          with our customer support to return the product.
        </p>
      </details>
    </div>
  );
};

export default Faq;
