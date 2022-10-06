const Contact = () => {
  return (
    <div className="contactComponent" id="contactsPage">
      <div className="contactTitle">CONTACT</div>

      <div className="email">
        <label htmlFor="email">
          <i class="fa-regular fa-envelope"></i>{" "}
        </label>
        <a href="mail:savaliyanilesh08@gmail.com">savaliyanilesh08@gmail.com</a>
      </div>
      <div className="mobile-no">
        <label htmlFor="mobile-no">
          <i class="fa-sharp fa-solid fa-square-phone"></i>
        </label>
        <a href="tel:+917767019917"> +91 7767019917</a>
      </div>
    </div>
  );
};

export default Contact;
