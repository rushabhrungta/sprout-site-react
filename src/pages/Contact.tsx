import NavBar from "../components/navbar/NavBar"
import AppFooter from "../components/AppFooter"
import CardBasic from "../components/CardBasic"



function Contact() {
    return (
        <>
            <NavBar />
            <div className="max-w-[1440px] mx-auto">
                <CardBasic shadow="null">
                    <div className="flex flex-col lg:flex-row justify-evenly">
                        <CardBasic bgColor="bg-base-200">
                            <div>
                                <div className="prose mb-4">
                                    <h1>Contact Us</h1>
                                    <p>Have questions or need assistance? Fill out the form below, and we'll get back to you shortly. Let's connect and create something amazing together!</p>
                                </div>
                                <form action="https://formbold.com/s/60nJN" method="POST" encType="multipart/form-data">
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">What is your name?</legend>
                                        <input type="text" className="input w-full" placeholder="Type here" name="subject" />
                                        {/* <p className="fieldset-label">Optional</p> */}
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">What is your email?</legend>
                                        <input type="email" className="input w-full" placeholder="Type here" name="email" />
                                        {/* <p className="fieldset-label">Optional</p> */}
                                    </fieldset>

                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">Message</legend>
                                        <textarea className="textarea h-24 w-full" placeholder="message" name="message"></textarea>
                                        {/* <div className="fieldset-label">Optional</div> */}
                                    </fieldset>
                                    <button className="btn btn-primary mt-4" type="submit">submit</button>
                                </form>
                            </div>
                        </CardBasic>

                        <CardBasic shadow="null">
                            <div className="prose grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h4>Address</h4>
                                    <p>B-5, Satellite Bld, Om Nagar, JB Nagar, Andheri East, Mumbai-99</p>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91-9920823516</p>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p> Rushabh@mysprout.cloud</p>
                                </div>
                            </div>
                            <div className="">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.62676761595574!2d72.86544485723894!3d19.106415176582033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ab0ea919ff%3A0x2243aaba259003ba!2sSatellite%20Building!5e0!3m2!1sen!2sin!4v1720697894458!5m2!1sen!2sin"
                                    loading="lazy" className="w-full h-96 rounded-xl shadow-sm"></iframe>
                            </div>
                        </CardBasic>



                    </div>


                </CardBasic>
                <AppFooter />
            </div>
        </>
    )
}

export default Contact;