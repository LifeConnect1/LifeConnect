import React from 'react'

function Faq() {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
      <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
        {[
          {
            question: "How can I book an appointment with a doctor?",
            answer:
              "You can easily book an appointment by navigating to the 'Doctors' section, searching for your preferred doctor or specialty, and selecting a convenient time slot.",
          },
          {
            question: "Can I follow hospitals and doctors for updates?",
            answer:
              "Yes! LifeConnect allows you to follow your favorite doctors and hospitals to receive updates on health tips, new treatments, and announcements.",
          },
          {
            question: "Is my personal information secure on LifeConnect?",
            answer:
              "Absolutely. We prioritize your privacy and use advanced encryption to ensure your data is safe and secure.",
          },
          {
            question: "Can I cancel or reschedule an appointment?",
            answer:
              "Yes, you can cancel or reschedule an appointment directly from your profile under the 'My Appointments' section.",
          },
          {
            question: "How do I contact customer support for help?",
            answer:
              "You can reach out to us through the 'Contact Us' section for any assistance. Our support team is here to help 24/7.",
          },
          {
            question: "What makes LifeConnect different from other healthcare platforms?",
            answer:
              "LifeConnect focuses on creating a personalized healthcare experience by integrating features like patient-doctor connections, regular updates, and secure health management tools.",
          },
          {
            question: "Can hospitals register on LifeConnect?",
            answer:
              "Yes, hospitals can register through our dedicated 'Hospital Portal' to manage patient interactions and share updates effectively.",
          },
        ].map((faq, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Faq