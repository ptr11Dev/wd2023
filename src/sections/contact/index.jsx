import { useState } from 'react'
import Button from '../../components/button/button'
import FormInput from '../../components/formInput'
import Heading from '../../components/heading'
import Text from '../../components/text'
import './index.css'

const formPlaceholders = {
  firstName: 'First Name',
  lastName: 'Last Name',
  phone: 'Phone Number',
  service: 'What Service are you interested in?',
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.firstName.trim() === '' || formData.lastName.trim() === '') {
      alert('Not so pretty pop up with validation! ')
      return
    }
    console.log('Form data: ', formData)
  }

  return (
    <div className="contact">
      <div className="contact__content">
        <Heading level={2}>Contact</Heading>
        <Text className="contact__text">
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </Text>
      </div>
      <form onSubmit={handleSubmit} className="contact__form">
        <FormInput
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder={formPlaceholders.firstName}
        />
        <FormInput
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder={formPlaceholders.lastName}
        />
        <FormInput
          style="full"
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder={formPlaceholders.phone}
        />
        <FormInput
          style="full"
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          placeholder={formPlaceholders.service}
        />
        <Button text="submit now" type="submit">
          SUBMIT NOW
        </Button>
      </form>
    </div>
  )
}

export default Contact
