const Todo = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    changes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  {
    timestamps: false,
    tableName: 'todos'
  });

  return Todo;
};

module.exports = Todo;