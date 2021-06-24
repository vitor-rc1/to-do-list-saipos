const Todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN,
  });

  return Todo;
};

module.exports = Todo;