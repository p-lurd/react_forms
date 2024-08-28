
import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [optionPlan, setOptionPlan] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [customizableProfile, setCustomizableProfile] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [onlineService, setOnlineService] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const value = {
    optionPlan,
    setOptionPlan,
    selectedPlan,
    setSelectedPlan,
    customizableProfile,
    setCustomizableProfile,
    largerStorage,
    setLargerStorage,
    onlineService,
    setOnlineService,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};
