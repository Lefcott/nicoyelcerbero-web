import TextInput from "@/components/TextInput";

export default function GuestInfo({ number, onChange, firstName, lastName }) {
  return (
    <div>
      <h2 className="text-2xl">Datos de la persona {number}</h2>
      <div className="m-3 space-x-3">
        <span>Nombre</span>
        <TextInput
          onChange={(e) => onChange("firstName", e.target.value)}
          value={firstName}
        />
      </div>
      <div className="m-3 space-x-3">
        <span>Apellido</span>
        <TextInput
          onChange={(e) => onChange("lastName", e.target.value)}
          value={lastName}
        />
      </div>
    </div>
  );
}
