import React from 'react'
import { Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import "./styles.css"

const Task = (props) => {
  const { tarea, actualizarTarea } = props;
  const {name, description, _id, isDone} = tarea;
  return (
    <Card 
    title={name} 
    style={{
        width: 300,
      }}
      >
        <p>
          {_id}{description}
        </p>
        {/* styles inline */}
        {isDone ? 
          ( <CheckOutlined style={{color: "#0f0", fontSize: "24px"}} onClick={() => actualizarTarea(_id) }/> ) 
          :(<CloseOutlined className='close' onClick={() => actualizarTarea(_id)} />) 
        }
        
        
      </Card>
  );
}

export default Task;