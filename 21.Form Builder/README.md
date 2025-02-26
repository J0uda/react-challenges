# Form Builder

## Instruction

In this challenge we're going to get meta and build a form builder. It looks complex, but with the JSX already in place, your primary job is to manage the formFields array. The user will need to be able to add items to it, update items in it, and remove items from it.

All of the functions with their parameters are in place, you'll just need to examine the JSX and update each accordingly.

## Tasks

1. Allow users to add a form field
2. Allow users to delete form fields
3. Allow users to update form field values
4. Allow users to submit the dynamic form with the new values

# Solution

Since we need to persist our **formFields** array across different renders of **FormBuilder**, we'll update it to be a piece of React state using useState.

```javascript
const [formFields, setFormFields] = useState([]);
```

Since formFields is an array, when we update it, we want to make sure we're passing it an array with the new value, after we've spread all the existing values into it.

```javascript
const handleAddFormField = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const newField = {
    id: new Date().getTime(),
    type: formData.get('type'),
    label: formData.get('label'),
    placeholder: formData.get('placeholder'),
    required: formData.get('required'),
    value: '',
  };

  setFormFields([...formFields, newField]);
  e.target.reset();
};
```

Also be sure to call preventDefault on the event object as well as reset on the form element.

To delete on element form an array, we can use javascript's filter method.

we'll filter out the element with the id that matches the arguments that's passed to handleDeleteFormField.

```javascript
const handleDeleteFormField = (id) => {
  const updatedFormFields = formFields.filter((field) => field.id !== id);
  setFormFields(updatedFormFields);
};
```

To update an element, use Javascript's map method to create a new array, updating the specific element where appropriate.

Mapping over our **formFields**, whenever the **id** matches the first argument passed to handleUpdateFormField, we'll update that value by spreading the existing fields into a new object, and then spreading the updateField object into it as well, creating the new object with the updated values.

```javascript
const handleUpdateFormField = (id, updatedField) => {
  const updatedFormFields = formFields.map((field) =>
    field.id === id ? { ...field, ...updatedField } : field
  );
  setFormFields(updatedFormFields);
};
```
