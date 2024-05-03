'use client';

import AddTask from "./AddTask";
import React, {useContext} from 'react';
import { TaskContext } from "@/context/TaskContext";

const ListTask = ({}) => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8 sm:mb-14">
            <h2 className="text-2xl font-semibold">
                My Tasks
            </h2>
            {tasks}
        </div>
    );
};

export default ListTask;