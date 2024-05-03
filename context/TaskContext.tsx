"use client";

import React, {createContext, useState} from 'react';

type TaskContextType = {
    tasks: string[];
    addTask: (description:string) => void;
    removeTask: (taskIndex:number) => void;
}

export const TaskContext = createContext({} as TaskContextType);

export const TaskContextProvider = ({ children } : {children: React.ReactNode;}) => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (description: string) => {
        setTasks([...tasks, description]);
    };

    const removeTask = (taskIndex:number) => {
        setTasks(tasks.filter((_, index) => taskIndex !== index));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
}