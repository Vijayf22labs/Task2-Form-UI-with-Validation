import ContactForm from "../components/ContactForm"
import Newsletter from "../components/NewsLetter"
import OfficeLDetails from "../components/OfficeDetails"


const Contact = () => {
  return (
    <div className="max-w-7xl py-10 md:py-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-y-20 items-start">
       <ContactForm />

        <div className="sm:w-[30%] space-y-16">
            <OfficeLDetails />
            <Newsletter />
        </div>
    </div>
  )
}

export default Contact