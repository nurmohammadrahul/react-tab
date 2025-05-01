import Tab from "./components/Tab";


function App() {

  const tabs = [
    {
      label: "Overview",
      content: {
        title: "Welcome to the Overview",
        description: "The Overview tab gives you a comprehensive introduction to the platform, its core philosophy, and what you can expect as a user. Whether you're a first-time visitor or a returning user, this section helps you understand the value proposition and how everything ties together. We cover the fundamental purpose of the platform, provide a quick summary of the most important features, and offer suggestions on how to get started. Our aim is to equip you with enough context to navigate the rest of the sections confidently. From high-level benefits to usability tips, the Overview serves as your launchpad. You'll also find links to tutorials, demos, and a tour of the interface to make onboarding easier. The goal here is not just to inform, but to provide orientation and encourage discovery. If you’re unsure where to start or want a bird’s-eye view of what this product can do, this is the place. Whether you’re interested in product performance, user experience, or development goals, the Overview provides a clear, detailed explanation designed to streamline your experience and maximize your understanding from the very beginning."
      }
    },
    {
      label: "Features",
      content: {
        title: "Core Features",
        description: "This section dives deep into the core features that set our platform apart. We take pride in offering a rich set of tools that are both powerful and intuitive. Here, you'll learn about each feature in detail—what it does, how it benefits you, and real-world use cases. From collaboration tools to automation workflows, analytics dashboards to integration options, this section ensures you're equipped to make the most out of the platform. Each feature is explained with examples and suggestions to improve your productivity and streamline your daily tasks. We also include screenshots, video demos, and links to advanced documentation for users who want to explore further. Whether you're an individual user or part of a larger team, you'll find something useful in this section. We also highlight any unique functionalities that differentiate us from the competition. By the end of this section, you should have a clear understanding of what’s available, how to use it effectively, and how each feature contributes to your goals. Explore this tab to unlock the full potential of what the platform has to offer and stay ahead with the latest improvements and innovations."
      }
    },
    {
      label: "Pricing",
      content: {
        title: "Plans and Pricing",
        description: "Choosing the right plan is a crucial decision, and this section provides all the information you need to make an informed choice. Our pricing structure is designed to be flexible, transparent, and accessible to users of all types—whether you're an individual, a startup, or an enterprise. We break down each plan with detailed explanations of what's included, from storage limits and support options to advanced features and custom integrations. You'll also find comparisons between plans, so you can easily identify which one best fits your needs and budget. In addition, we explain our billing process, refund policy, and offer tips on how to maximize value based on your usage. If you're unsure which plan is right for you, we've included use-case scenarios and customer testimonials to help guide your decision. Special discounts, trials, and promotional offers may also be listed here. We aim to make pricing as straightforward as possible, eliminating hidden fees and ensuring clarity. Whether you're just starting out or scaling up, this tab helps you invest wisely in a plan that grows with you. Take a closer look to find the perfect fit for your goals."
      }
    },
    {
      label: "FAQ",
      content: {
        title: "Frequently Asked Questions",
        description: "In this section, we address the most common questions users have when interacting with our platform. Whether you're curious about account setup, feature usage, troubleshooting, or policies, the FAQ provides concise and helpful answers. We’ve grouped questions by category—technical, billing, account management, and more—so you can quickly find what you’re looking for. Each answer is crafted to offer clarity and guidance, helping you resolve concerns without needing to contact support. We also link to relevant help articles, video tutorials, and community threads for deeper exploration. If you're experiencing issues or are just looking for clarity on how something works, start here. This section is regularly updated based on user feedback and support trends, ensuring you always have access to the most relevant and accurate information. Our goal is to empower users to solve their own problems quickly and confidently. Additionally, you'll find tips for getting the most out of your experience, and links to submit a question if it's not already listed. The FAQ is a valuable resource for both beginners and experienced users, streamlining the learning process and reducing friction at every stage of the journey."
      }
    },
    {
      label: "Contact",
      content: {
        title: "Get in Touch",
        description: "Have a question, need support, or want to share feedback? The Contact section is your direct line to our team. We value communication and strive to be as responsive and helpful as possible. Whether you prefer email, chat, or a contact form, we offer multiple ways to connect. Here, you'll find our support hours, estimated response times, and contact details for various departments—technical support, billing, sales, and general inquiries. You can also use this space to schedule a demo, request a callback, or inquire about partnership opportunities. For faster resolution, we recommend including specific details in your message, such as your account ID or a description of the issue. Our friendly team is trained to handle a wide range of questions with professionalism and care. We also welcome feedback on how we can improve our service or the platform itself. Every message is reviewed, and we aim to provide timely, actionable responses. Whether you're a new user or a longtime customer, we’re here to help. Don’t hesitate to reach out—we’re committed to building strong, supportive relationships with our users through open and efficient communication."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">React Tab</h2>
      <Tab tabs={tabs}></Tab>
    </div>
  )
}

export default App
