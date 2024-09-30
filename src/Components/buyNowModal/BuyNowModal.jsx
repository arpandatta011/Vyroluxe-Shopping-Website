import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { db } from '../../firebase/FirebaseConfig'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const BuyNowModal = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    mobileNumber: '',
  });

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.address || !formData.pincode || !formData.mobileNumber) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Sending data to Firebase
      await addDoc(collection(db, "orders"), {
        product,
        buyer: formData,
        createdAt: new Date(),
      });

      console.log("Order placed successfully:", formData);
      alert("Order placed successfully!");

      // Close the modal and reset form
      handleOpen();
      setFormData({
        name: '',
        address: '',
        pincode: '',
        mobileNumber: '',
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="mx-auto hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-md"
      >
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className="bg-cyan-400">
        <DialogBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className='px-2 py-2 w-full rounded-md outline-none text-black'
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder='Enter your address'

                className='px-2 py-2 w-full rounded-md outline-none text-black'
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder='Enter your pincode'
                className='px-2 py-2 w-full rounded-md outline-none text-black'
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder='Enter your mobile number'
                className='px-2 py-2 w-full rounded-md outline-none text-black'
              />
            </div>
            <div className="">
              <Button
                type="submit"
              >
                Buy now
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default BuyNowModal;
