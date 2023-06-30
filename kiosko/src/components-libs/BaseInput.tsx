type BaseInput = {
  value: string | number;
  name: string;
  label: string;
  onChange(): void;
};

const BaseInput = ({ label, value, name, onChange }: BaseInput) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder="email"
        name={name}
        value={value}
        onChange={onChange}
        className="input input-bordered"
      />
    </div>
  );
};

export default BaseInput;
