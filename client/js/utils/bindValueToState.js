function createHandler(component, key) {
  return event => {
    const field = event.target;
    const value = (field.type === 'checkbox') ? field.checked : field.value;

    component.setState({
      ...component.state,
      [key]: value,
    });
  };
}

export default function bindValueToState(component, key) {
  const cache = component.__boundChangeHandlers || (component.__boundChangeHandlers = {});
  return cache[key] || (cache[key] = createHandler(component, key));
}
