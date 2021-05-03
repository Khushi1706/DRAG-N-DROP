
import React from 'react';
import './App.css';
import DndUsingPlugin from './containers/dnd/DndUsingPlugin';
import DndWithoutPlugin from './containers/core/DndWithoutPlugin';
import { useState } from 'react';
import Header from './components/header/Header';

function App() {

  const [data, setData] = useState(initialData);
  const [selection, setSelection] = useState("core");

  return (
    <div>
      <Header selection={selection} setSelection={setSelection} />
      {
        selection === "core" && <DndWithoutPlugin data={data} setData={setData}/>
      }
      {
        selection === "plugin" && <DndUsingPlugin data={data} setData={setData}/>
      }
    </div>
  );
}

export default App;


const initialData = {
  resources : [
    {
      id : "1",
      title : "task-1",
      desc : "Get work done",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    },
    {
      id : "2",
      title : "task-2",
      desc : "Get some other work done too",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    }
  ],
  todo : [
    {
      id : "3",
      title : "task-3",
      desc : "ajdakda",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    },
    {
      id : "4",
      title : "task-4",
      desc : "ajdakda",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    }
  ],
  doing : [
    {
      id : "5",
      title : "task-5",
      desc : "ajdakda",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    },
    {
      id : "6",
      title : "task-6",
      desc : "ajdakda",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    }
  ],
  done : [
    {
      id : "7",
      title : "task-7",
      desc : "ajdakda",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    },
    {
      id : "8",
      title : "task-8",
      desc : "ajdakda",
      owner: "John Doe",
      owner_pic: "https://via.placeholder.com/48"
    }
  ]
}