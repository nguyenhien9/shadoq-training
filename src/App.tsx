import Button from "./components/button/Button";

function App() {
  return (
    <div className="mt-5 flex items-center justify-center gap-5 flex-wrap">
      <Button className="bg-sky-400 " size="28">
        Add
      </Button>
      <Button className="bg-red-800" size="64">
        Delete
      </Button>
      <Button className="bg-emerald-400" size="32">
        Update
      </Button>
      <Button className="bg-blue-800" size="17">
        Confirm
      </Button>
      <Button className="bg-green-900" size="12">
        Upload
      </Button>
      <Button className="bg-slate-400" size="19">
        Back
      </Button>
      <Button className="bg-orange-400">Link</Button>
      <Button className="bg-yellow-400">Info</Button>
    </div>
  );
}

export default App;
