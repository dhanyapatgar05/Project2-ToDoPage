import React from "react";
import TodoPage from "./ToDoPage";

export default {
  title: "Components/TodoPage",
  Component: TodoPage,
};

const Template = (args) => <TodoPage {...args} />;

export const Default = Template.bind({});