import ColorGroup from './components/ColorGroup';
import AddColorForm from './components/AddColorForm';
import { useGlobalContext } from './context/context';

function App() {
  const { colorGroups } = useGlobalContext()


  return (
    <div className="">
      <h1 className='font-bold text-red-500 text-4xl text-center my-10'>Color Generator</h1>
      <div className='flex items-center justify-center'>
        <AddColorForm />
      </div>
      <div className='flex  items-cneter flex-col my-10'>
        {colorGroups.map((group, groupIndex) => (
          
            <ColorGroup
              key={groupIndex}
              group={group}
              groupIndex={groupIndex}
            />
          
        ))}


      </div>

    </div>
  );
}

export default App;
