charge onward my wayward son

🦔 Create or Details: encapsulates the needed business logic and validation for creating or viewing/editing an existing discount code. It renders the form passing the initialValues
🌉 Connector: a component solely responsible for data fetching and offering mutations on it. Passing down so-called fetchers and mutators through its FaaC (Function as a Child)
🎹 Form: is a collection of fields and encapsulates the validation. It only receives initialValues and an onSubmit . It invokes onSubmit with what we call a draft
👩‍👦‍👦 Subform: a component grouping a set of related fields. It receives mostly only formik as a prop without abstracting anything additionally (like internal validation or a custom onChange callback)
🗒 Field: a combination of an input and its validation messages. It mostly operates on a single property of the form data (e.g. discount name)
🖋 Input: is either of a number input, string input, checkbox or radio. Often for us also quite “complex” input like a custom built MoneyInput
⚗️ Validations: a small module exporting a validate function. Validation is a form level, not field (or input) level, concern. It will be passed to Formik as a prop.
⚙️ Conversions: a module to cleanly map data into and out of the form so that no field needs to parse or format its data. The module comes with two symmetric functions: responseToFromValues and formValuesToRequest.
