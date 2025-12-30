import { useRef, useState } from 'react';

import Button from './Button.tsx';
import Form, {type FormHandle } from './Form.tsx';
import Input from './Input.tsx';
import { useTimerContext } from './store/useTimerContext.tsx';

export default function AddTimer() {
    const form = useRef<FormHandle>(null);
    const {addTimer}=useTimerContext();
    const[task,setTask]=useState("");
    const [duration, setDuration] = useState('');
    const isDisabled = task.trim() === '' || duration.trim() === '';

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimer({
        name:extractedData.name,
        duration:+extractedData.duration
    });
    console.log(extractedData);
    form.current?.clear();
    setTask('');
    setDuration('');
  }

  return (
    <Form  ref={form} onSave={handleSaveTimer} id="add-timer">
        <div style={{marginTop:"5rem"}}>

      <Input value={task} onChange={(e)=>setTask(e.target.value)} type="text" label="Task" id="name" />
      <Input value={duration} onChange={(e)=>setDuration(e.target.value)} type="number" label="Duration" id="duration" />
        </div>
      <p>
        <Button style={{cursor:isDisabled ? "not-allowed" : "pointer"}} disabled={isDisabled}>Add Timer</Button>
      </p>
    </Form>
  );
}