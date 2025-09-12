import { useState } from "react";

export const Form = () => {

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    code: "",
    comments: false,
    candidates: false,
    offers: false,
    notification: "",
  });
  // console.log(formData);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Details of the form are:");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}
    className="shadow-lg rounded-md py-6 w-3/5 px-8 text-base">

      <label htmlFor="fName" 
      className="text-sm font-medium"
      >First Name</label>

      <br />

      <input
        type="text"
        name="fName"
        id="fName"
        onChange={handleChange}
        placeholder="First Name"
        value={formData.fName}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
      

      <label htmlFor="lName"
      className="text-sm font-medium"
      >Last Name</label>

      <br />

      <input
        type="text"
        name="lName"
        id="lName"
        onChange={handleChange}
        placeholder="Last Name"
        value={formData.lName}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
     
      <label htmlFor="email"
      className="text-sm font-medium"
      >Email</label>

      <br />

      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        placeholder="john@gmail.com"
        value={formData.email}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
      
      <label htmlFor="country"
      className="text-sm font-medium"
      >Country</label>

      <br />

      <select
        name="country"
        id="country"
        onChange={handleChange}
        value={formData.country}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      >
        <option value="U.S">U.S</option>
        <option value="India">India</option>
        <option value="Dubai">Dubai</option>
        <option value="Canada">Canada</option>
        <option value="Singapore">Singapore</option>
      </select>

      <br />
      
      <label htmlFor="address"
      className="text-sm font-medium"
      >Street Address</label>

      <br />

      <input
        type="text"
        name="address"
        id="address"
        onChange={handleChange}
        placeholder="1234 Main St"
        value={formData.address}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
      
      <label htmlFor="city"
      className="text-sm font-medium"
      >City</label>

      <br />

      <input
        type="text"
        name="city"
        id="city"
        onChange={handleChange}
        placeholder="Pune"
        value={formData.city}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
      
      <label htmlFor="state"
      className="text-sm font-medium"
      >State/ Provience</label>

      <br />

      <input
        type="text"
        name="state"
        id="state"
        onChange={handleChange}
        placeholder="West Bengal"
        value={formData.state}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
      
      <label htmlFor="code"
      className="text-sm font-medium"
      >Zip/ Postal Code</label>

      <br />

      <input
        type="number"
        name="code"
        id="code"
        onChange={handleChange}
        placeholder="713301"
        value={formData.code}
        className="w-full border rounded-sm py-1 px-2 mt-0.5 border-gray-400 mb-1"
      />

      <br />
      
      <fieldset className="mb-4">
        <legend className="text-sm font-medium mb-2">By Email</legend>

        <div className="flex items-baseline gap-2">
          <input
          type="checkbox"
          name="comments"
          id="comments"
          checked={formData.comments}
          onChange={handleChange}
          className=""
          />

          <div>
            <label htmlFor="comments"
            className="text-sm font-medium"
            >Comments</label>
            <p className="text-sm text-gray-600 tracking-wide">Get notified when someone comments on the post.</p>
          </div>
        </div>

        
        <div className="flex items-baseline gap-2">
          <input
          type="checkbox"
          name="candidates"
          id="candidates"
          checked={formData.candidates}
          onChange={handleChange}
          />

          <div>
            <label htmlFor="candidates"
            className="text-sm font-medium"
            >Candidates</label>
            <p className="text-sm text-gray-600 tracking-wide">Get notified when a candidate applies for a job.</p>
          </div>
        </div>

        <div className="flex items-baseline gap-2">
           <input
          type="checkbox"
          name="offers"
          id="offers"
          checked={formData.offers}
          onChange={handleChange}
          />

          <div>
            <label htmlFor="offers"
            className="text-sm font-medium"
            >Offers</label>
            <p className="text-sm text-gray-600 tracking-wide">Get notified when a candidate accepts or rejects an offer.</p>
          </div></div>        
       
      </fieldset>

      <fieldset className="mb-2">
        <legend className="text-sm font-medium">Push Notifications</legend>
        <p className="text-sm text-gray-600 tracking-wide mb-2">These are delivered via SMS to your mobile phone.</p>

        <div className="flex items-center gap-2">
          <input
          type="radio"
          name="notification"
          id="everything"
          checked={formData.notification === "everything"}
          onChange={handleChange}
          value="everything"
        />

        <label htmlFor="everything"
        className="text-sm font-medium"
        >Everything</label>
        </div>
        
        <div className="flex items-baseline gap-2">
          <input
          type="radio"
          name="notification"
          id="sameAsEmail"
          checked={formData.notification === "sameAsEmail"}
          onChange={handleChange}
          value="sameAsEmail"
        />

        <label htmlFor="sameAsEmail"
        className="text-sm font-medium"
        >Same as email</label>
        </div>

        <div className="flex items-baseline gap-2">  
        <input
          type="radio"
          name="notification"
          id="NoEssentials"
          checked={formData.notification === "NoEssentials"}
          onChange={handleChange}
          value="NoEssentials"
        />

        <label htmlFor="NoEssentials"
        className="text-sm font-medium"
        >No push notifications</label>
        </div>
      </fieldset>
     
      <button className="bg-blue-500 py-2 px-4 mt-2 text-white shadow-md hover:scale-95 transition cursor-pointer rounded-sm">Submit</button>
    </form>
  );
};
