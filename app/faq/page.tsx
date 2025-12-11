export default function FAQ() {
    const faqs = [
        {
            question: "What are the check-in and check-out times?",
            answer: "Check-in is from 2:00 PM onwards, and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability."
        },
        {
            question: "Is breakfast included in the room rate?",
            answer: "Yes, a complimentary continental breakfast is included with all room bookings."
        },
        {
            question: "Do you offer airport shuttle services?",
            answer: "Yes, we can arrange airport transfers for an additional fee. Please contact us at least 24 hours in advance."
        },
        {
            question: "Is there parking available?",
            answer: "Yes, we offer free private parking for all our guests."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Cancellations made 48 hours prior to arrival are free of charge. Late cancellations or no-shows will be charged for the first night."
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h1>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
