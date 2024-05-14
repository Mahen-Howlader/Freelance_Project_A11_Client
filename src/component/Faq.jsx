function Faq() {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-10 text-center  sm:text-4xl xl:text-5xl ">
        FAQ
      </h1>
      <div className="space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          What are the key components of a digital marketing strategy?
          </div>
          <div className="collapse-content">
            <p>The key components of a digital marketing strategy include search engine optimization (SEO), content marketing, social media marketing, email marketing, and paid advertising.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          What is digital marketing?
          </div>
          <div className="collapse-content">
            <p>Answer: Digital marketing encompasses all marketing efforts that use electronic devices or the internet to promote products or services.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          How can I improve my website's search engine ranking?
          </div>
          <div className="collapse-content">
            <p>Answer: Improving your website's search engine ranking involves optimizing your website's content, meta tags, and structure for relevant keywords, obtaining high-quality backlinks, and ensuring your website is mobile-friendly and loads quickly.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          What programming languages are essential for web development?
          </div>
          <div className="collapse-content">
            <p>Answer: Essential programming languages for web development include HTML, CSS, and JavaScript. Additionally, knowledge of frameworks like React, Angular, or Vue.js can be beneficial.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          How do I create an effective online course?
          </div>
          <div className="collapse-content">
            <p>Answer: To create an effective online course, start by defining clear learning objectives, organizing content logically, using engaging multimedia elements, incorporating interactive activities and assessments, and providing opportunities for learner feedback and interaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
